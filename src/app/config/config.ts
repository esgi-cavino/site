const isLocalhost = window.location.hostname === 'localhost';
const isProduction = false;

// Urls API
const apiUrl = '';
const urlLocal = '/api';
const urlTest = 'http://localhost:8080/api';
const urlDev = isLocalhost ? urlLocal : urlTest;
const urlProd = isLocalhost ? urlLocal : 'https://esgi-cavino-api.herokuapp.com/api';

export const MyConfig = {
    app_id: 'b457q7za', // générer au hasard les amis ;-)
    production: !isLocalhost && isProduction,
    api_url: isProduction ? urlProd : urlDev,
    api_url_signin: apiUrl + '/signin',
    api_url_signup: apiUrl + '/signup',
    db_name: 'nom_de_ma_base_de_donnees'
};
