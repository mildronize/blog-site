import Replacer from './replacer';

const FIREBASE_PLACEHOLDER = 'firebase://';

class FirebaseStorageReplacer extends Replacer {

    private bucketFiles: Set<string> = new Set();

    constructor(private storageBucket: string) { super() }

    stringify() {

        const imageAlt = this.groups[0];
        let url = this.groups[1];
        if (url.startsWith(FIREBASE_PLACEHOLDER)) {
            const urls = url.split(FIREBASE_PLACEHOLDER);
            const actualUrl = urls[1];
            this.bucketFiles.add(actualUrl); // collection the link

            url = `https://storage.googleapis.com/${this.storageBucket}/${actualUrl}`;
        }
        return `![${imageAlt}](${url})`;
    }

    public getBucketFiles(){
        return this.bucketFiles;
    }
}

export default FirebaseStorageReplacer;