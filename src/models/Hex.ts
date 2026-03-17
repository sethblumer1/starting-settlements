import { Resource } from "../types/Resource";

// to get access to colors for tiles for :root styling (index.css)
const rootStyles = getComputedStyle(document.documentElement);

export class Hex {
    num: number;
    resource: Resource;
    color: String;

    constructor(num: number, resource: Resource) {
        this.num = num
        this.resource = resource
        this.color = rootStyles.getPropertyValue(`--color-${resource}`)
    }
}