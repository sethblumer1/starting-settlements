import { Resource } from "../types/Resource";

export class Hex {
    num: number;
    resource: Resource;

    constructor(num: number, resource: Resource) {
        this.num = num
        this.resource = resource
    }
}