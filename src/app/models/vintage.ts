export class Vintage {
    private _year: string;
    private _id: number;
    createdAt: Date;
    updatedAt: Date;


    get year(): string {
        return this._year;
    }

    set year(value: string) {
        this._year = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}
