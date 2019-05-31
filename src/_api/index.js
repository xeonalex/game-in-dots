import axios from 'axios'

const defaultHeaders = {'Content-Type': 'application/json;charset=UTF-8'};
const config = {
    apiDomain: 'https://starnavi-frontend-test-task.herokuapp.com',
};

export const axiosApi = axios.create({baseURL: config.apiDomain, headers: defaultHeaders});
