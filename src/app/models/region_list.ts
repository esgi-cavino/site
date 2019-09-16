import {Region} from './region';

export class RegionList {
    region_list: Array<Region>;

    getOneRegion(id: number) {
        return this.region_list[id];
    }
}
