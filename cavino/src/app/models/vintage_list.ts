import { Vintage } from "./vintage";

export class VintageList {
    vintage_list: Array<Vintage>;

    getOneVintage(id: number) {
        return this.vintage_list[id];
    }
}
