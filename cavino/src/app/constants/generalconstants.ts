class ApplicationDetails {
    private name: string;
    public onlineUrl: string;
    public offlineUrl: string;
    public loginRoute: string;
    public registerRoute: string;
    public bottlesRoute: string;
    public bottleRoute: string;
    public newBottleRoute: string;
}

export class ApplicationModel {

    // @ts-ignore
    public static readonly   DefaultApplicationDetails: ApplicationDetails = {

        name: 'Cavino',
        onlineUrl: 'https://esgi-cavino-api.herokuapp.com/api',
        offlineUrl: 'http://localhost:8100',
        loginRoute: '/signin',
        registerRoute: '/signup',
        bottlesRoute: '/bottle',
        bottleRoute: '/bottle',
        newBottleRoute: '/bottle'
    };
}
