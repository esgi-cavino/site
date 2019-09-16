class ApplicationDetails {
    public name: string;
    public onlineUrl: string;
    public offlineUrl: string;

    public loginRoute: string;
    public registerRoute: string;
    public getAllUsersRoute: string;
    public createUserRouteRoute: string;
    public getAllUsersSellersRoute: string;
    public getAllUsersAdminsRoute: string;
    public getOneUserRoute: string;
    public updateOneUserRoute: string;
    public deleteOneUserRoute: string;
    public getAllCellarsOfOneUserRoute: string;
    public getAllFafouriteRegionsOfOneUserRoute: string;
    public deleteOneUserfouriteRegionsRoute: string;
    public getAllFafouriteWinesOfOneUserRoute: string;
    public deleteOneUserfouritewineRoute: string;
    public editUserRoute: string;

    public getAllCellarsRoute: string;
    public createOneCellarRoute: string;
    public getOneCellarRoute: string;
    public updateOneCellarRoute: string;
    public deleteOneCellarRoute: string;

    public getAllBottlesRoute: string;
    public createOneBottleRoute: string;
    public getOneBottleRoute: string;
    public updateOneBottleRoute: string;
    public deleteOneBottleRoute: string;

    public regionsRoute: string;
    public countryRoute: string;
    public domainRoute: string;
    public vintageRoute: string;
    public wineTypeRoute: string;
}

export class ApplicationModel {

    // @ts-ignore
    public static readonly   DefaultApplicationDetails: ApplicationDetails = {

        name: 'Cavino',
        onlineUrl: 'https://esgi-cavino-api.herokuapp.com/api',
        offlineUrl: 'http://localhost:8100',
        // user routes
        loginRoute: '/signin',
        registerRoute: '/signup',
        getAllUsersRoute: '/user',
        createUserRouteRoute: '/user',
        getAllUsersSellersRoute: '/sellers',
        getAllUsersAdminsRoute: '/admins',
        getOneUserRoute: '/user/',
        updateOneUserRoute: '/user/',
        deleteOneUserRoute: '/user/',
        getAllCellarsOfOneUserRoute: '/user/cellars/',
        getAllFafouriteRegionsOfOneUserRoute: '/user/favouriteRegions/',
        deleteOneUserfouriteRegionsRoute: '/user/favouriteRegion/',
        getAllFafouriteWinesOfOneUserRoute: '/user/favouriteRegions/',
        deleteOneUserfouritewineRoute: '/user/favouriteRegion/',
        editUserRoute: '/user/',
        // cellars routes
        getAllCellarsRoute: '/cellar',
        createOneCellarRoute: '/cellar',
        getOneCellarRoute: '/cellar/',
        updateOneCellarRoute: '/cellar/',
        deleteOneCellarRoute: '/cellar/',
        // bottles routes
        getAllBottlesRoute: '/bottle',
        createOneBottleRoute: '/bottle',
        getOneBottleRoute: '/bottle/',
        updateOneBottleRoute: '/bottle/',
        deleteOneBottleRoute: '/bottle/',
        // General routes
        regionsRoute: '/region',
        countryRoute: '/country',
        domainRoute: '/domain',
        vintageRoute: '/vintage',
        wineTypeRoute: '/WineType',
    };
}
