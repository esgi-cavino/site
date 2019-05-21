const is_localhost = window.location.hostname == 'localhost';
const is_production = false;

// Urls API
const api_url = "";
const url_local = '/api';
const url_test = 'http://localhost:8080/api';
const url_dev = is_localhost ? url_local : url_test;
const url_prod = is_localhost ? url_local : 'https://esgi-cavino-api.herokuapp.com/api';

export const MyConfig = {
    app_id: 'b457q7za', // générer au hasard les amis ;-)
    production: !is_localhost && is_production,
    api_url: is_production ? url_prod : url_dev,
    api_url_signin: api_url + '/signin',
    api_url_signup: api_url + '/signup',
    db_name:'nom_de_ma_base_de_donnees'
};
