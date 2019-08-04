import { serverUrl } from '../../config.js';

const JWTFetch = (routePath, postData, JWTtoken) => {
    return fetch(serverUrl + routePath, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JWTtoken 
        },
        method: 'POST',
        body: JSON.stringify(postData)
    }).then(resp => resp.json());
};

export default JWTFetch;