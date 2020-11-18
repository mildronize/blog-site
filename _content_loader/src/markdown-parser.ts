import YAML from 'yaml'
import FirebaseStorageReplacer from './replacer/firebase-storage-replacer';

export type EntryType = {
    content: string;
    frontmatter?: any;
    slug?: string;
}

class MarkdownParser {

    private bucketFiles: string[] = [];

    constructor(private storageBucket: string) {}

    public exec({
        content = '',
        frontmatter
    }: EntryType): string {
    
        let frontmatterYaml = '';
        if (frontmatter)
            frontmatterYaml = YAML.stringify(frontmatter);
    
        return `---\n${frontmatterYaml}---\n${this.imagesParser(content)}`;
    }

    public imagesParser(content: string){

        const imageUrlRegex = /!\[([^\]]*)\]\((.*?)\s*\)/;
        const replacer = new FirebaseStorageReplacer(this.storageBucket);
    
        let currentIndex = 0;
        let processingContent = content;
        let output = "";
    
        while (true) {
            const result = imageUrlRegex.exec(processingContent);
            if (!result) break;
            const matchedSize = result[0].length;
            currentIndex = result.index;
    
            // Replace the match
    
            const match = processingContent.replace(imageUrlRegex, (substring: any, ...args: any[]) =>
                replacer.exec(substring, args[0], args[1])
            );
    
            // Shift to next match 
            currentIndex += matchedSize;
            processingContent = processingContent.substring(currentIndex);
            output += match.substring(0, currentIndex + replacer.getOffsetLength());
        }
        output += processingContent;


        // collect firebase file link

        for (let bucketFile of replacer.getBucketFiles()) {
            this.bucketFiles.push(bucketFile);
        }
        // this.bucketFiles = this.bucketFiles.concat(replacer.getBucketFiles().values);
        // console.log(this.bucketFiles);

        return output;
    }
    
    public getBucketFiles(){
        return this.bucketFiles;
    }

}

export default MarkdownParser;