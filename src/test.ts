class Hex {
    num: number;
    resource: string;

    constructor(num: number, resource: string) {
        this.num = num
        this.resource = resource
    }

    // TODO: Add if it is first or second occurence of the number?
}

const hex = new Hex(5, "Ore")
console.log(hex)