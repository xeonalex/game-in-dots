import {axiosApi} from './index';

export function fetchGameSettingsQuery() {
    return axiosApi({
        method: 'GET',
        url: `/game-settings`,
    })
}

export function sendWinnerInfoQuery(data) {
    return axiosApi({
        method: 'POST',
        url: `/winners`,
        data: data
    })
}
