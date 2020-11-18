import FirebaseStorageReplacer from './replacer/firebase-storage-replacer';

const imageParser = (content: string, storageBucket:string) => {

    const imageUrlRegex = /!\[([^\]]*)\]\((.*?)\s*\)/;
    // let content = '[[something] wefwef![desc](value) wefw![desc2](value2)e f';

    let currentIndex = 0;
    let processingContent = content;
    let output = "";

    while (true) {
        const result = imageUrlRegex.exec(processingContent);
        if (!result) break;
        const matchedSize = result[0].length;
        currentIndex = result.index;

        // Replace the match
        const replacer = new FirebaseStorageReplacer(storageBucket);

        const match = processingContent.replace(imageUrlRegex, (substring: any, ...args: any[]) =>
            replacer.exec(substring, args[0], args[1])
        );

        // Shift to next match 
        currentIndex += matchedSize;
        processingContent = processingContent.substring(currentIndex);
        output += match.substring(0, currentIndex + replacer.getOffsetLength());
        // console.log(`match :_${match}`);
        // console.log(`output:_${output}`);
        // console.log(`processingContent:_${processingContent}`)
        // console.log(currentIndex, contentLength);
    }
    output += processingContent;
    // console.log(`content: ${content}`);
    // console.log(`output : ${output}`);

    return output;
}

export default imageParser;

const output = imageParser('[[something] wefwef![desc](value) wefw![desc2](firebase://value2)e f', 'storageBucket');
console.log(output);