export class Country {
    private _name: string;
    private _id: number;
    createdAt: Date;
    updatedAt: Date;


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}
