import {axiosApi} from './index';

export function fetchGameSettingsQuery() {
    return axiosApi({
        method: 'GET',
        url: `/game-settings`,
    })
}

export function sendWinnerInfoQuery() {
    return axiosApi({
        method: 'GET',
        url: `/game-settings`,
    })
}
