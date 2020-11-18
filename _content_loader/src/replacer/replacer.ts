abstract class Replacer {

    protected original: string = '';
    protected groups: string[] = [];

    abstract stringify(): string;

    getOffsetLength() {
        return this.stringify().length - this.original.length;
    }

    exec(match: any, ...groups: string[]) {
        this.groups = groups;
        this.original = match;
        return this.stringify();
    }
}

export default Replacer;