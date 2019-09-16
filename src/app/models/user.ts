export class User {
    // tslint:disable-next-line:variable-name
    private uuid: string;
    public firstName: string;
    public lastName: string;
    private email: string;
    private age: number;
    private adress: string;
    private isSeller: boolean;
    private isAdmin: boolean;
    private createdAt: string;
    private updatedAt: string;

    public setUser(data) {
        this.uuid = data.uuid;
        this.firstName = data.firstname;
        this.lastName = data.lastname;
        this.email = data.email;
    }
}
