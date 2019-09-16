import {BottleInCellar} from './bottle_in_cellar';

export class Cellar {
    private id: string;
    private _name: string;
    private userUUID: string;
    private _width: string;
    private _height: string;
    private createdAt: string;
    private updatedAt: string;
    private _bottleInCellarList: Array<BottleInCellar>;

    get bottleInCellarList(): Array<BottleInCellar> {
        return this._bottleInCellarList;
    }

    set bottleInCellarList(value: Array<BottleInCellar>) {
        this._bottleInCellarList = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get width(): string {
        return this._width;
    }

    set width(value: string) {
        this._width = value;
    }

    get height(): string {
        return this._height;
    }

    set height(value: string) {
        this._height = value;
    }
}
