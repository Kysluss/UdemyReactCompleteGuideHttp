import axios from 'axios';

//If you have multiple URLs for your application, you can create separate instances of axios
// To do this, simply call axios.create
// It essentially creates a copy of axios or a new instance of axios
// You can create as many of these as you need
// The argument is an object of configuration elements
// This instance will inherit any global configuration changes we made in index.js
// It will merge the supplied configuration with the global configuration
// Instances do not inherit interceptors
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;