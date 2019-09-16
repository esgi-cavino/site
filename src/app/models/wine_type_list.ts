import {WineType} from './wine_type';

export class WineTypeList {
    wine_type_list: Array<WineType>;

    getOneOneType(id: number) {
        return this.wine_type_list[id];
    }
}
