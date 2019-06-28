class IPlayer {
    private name: string;
    public onlineUrl: string;
    public offlineUrl: string;
    public loginRoute: string;
    public registerRoute: string;
}

export class ApplicationModel {

    // @ts-ignore
    public static readonly   DefaultApplicationDetails: IPlayer = {

        name: 'Cavino',
        onlineUrl: 'https://esgi-cavino-api.herokuapp.com/api',
        offlineUrl: 'http://localhost:8100',
        loginRoute: '/signin',
        registerRoute: '/register'

    };
}
