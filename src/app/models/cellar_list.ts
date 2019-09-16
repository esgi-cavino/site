import {Cellar} from './cellar';

export class CellarList {
    private cellarList: Array<Cellar>;

    getOneCellar(id: number) {
        return this.cellarList[id];
    }

    getCellarList(): Array<Cellar> {
        return this.cellarList;
    }

    setCellarList(value: Array<Cellar>) {
        this.cellarList = value;
    }
}
