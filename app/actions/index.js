export const DATA_AVAILABLE = 'DATA_AVAILABLE';

import Data from '../instructions.json';

export function getData(){
    return (dispatch) => {
        setTimeout(() => {
            var mockData = Data;
            dispatch({type: DATA_AVAILABLE, data: mockData});
        }, 1500);
    }
}