import Loader from './loader';

enum API {
    key1 = 'd39e56b9c2924cd496786f455b88d20d',
    key2 = 'ee01d84620ee46d6bcef349eb7ace97a',
}

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: API.key1,
        });
    }
}

export default AppLoader;
