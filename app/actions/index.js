export const DATA_AVAILABLE = 'DATA_AVAILABLE';

import Discography from '../discography.json';
import Artists from '../artists.json';

export function getDiscography(){
    return (dispatch) => {
        setTimeout(() => {
            var mockData = Discography;
            dispatch({type: DATA_AVAILABLE, data: mockData});
        }, 1500);
    }
}

export function getArtists(){
    return (dispatch) => {
        setTimeout(() => {
            var mockData = Artists;
            dispatch({type: DATA_AVAILABLE, data: mockData});
        }, 1500);
    }
}