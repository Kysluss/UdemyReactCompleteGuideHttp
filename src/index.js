import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// You can set a base URL globally for your application
// This will allow your other components to not have to worry about the path to the web service
// Instead you can just access things through /ResourceName without the whole URL
//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// You can also set authorization tokens and other common headers
// These are global headers for all requests
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

// You can set request type specific headers
// application/json is the default, but this is here just to show this
axios.defaults.headers.post['Content-Type'] = 'application/json';

// You can register an interceptor for requests
// The first argument is a function that can modify the request configuration
// The second argument is a function for errors when setting up the request
// For example, if no internet connectivity
axios.interceptors.request.use(request => {
    console.log('axios');
    console.log(request);

    // If you do not return a request object, you will actually block the request
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// Same thing is true for response objects
axios.interceptors.response.use(response => {
    console.log(response);
    // Edit response
    return response
}, error => {
    console.log(error);
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
