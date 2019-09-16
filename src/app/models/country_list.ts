import {Country} from './country';

export class CountryList {
    country_list: Array<Country>;

    getOneCountry(id: number) {
        return this.country_list[id];
    }
}
