/* global fetch */
/* global window */
import axios from 'axios';
import camelize from 'camelize';

export const callApi = (method, url, options) =>
    axios({
        method: method,
        url: url,
        data: options,
    }).then(response => {
        return camelize(response)
    }).catch(error => {
        return camelize(error)
    })