import {map} from "lodash";

export function rebaseMatrixCellsArray(arr) {
    let newArray = [];

    map(arr, (item, x)=>{
        map(item, (value, y) => {
            let newValue = concatCellCoords(x,y);

            newArray.push(newValue)
        });
    });

    return newArray;
}

export function concatCellCoords(x, y) {
    return `${x}:${y}`;
}

export function parseCellCoords(coords){
    return coords.split(':')
}

export function createCordsObjFromString(stringId) {
    let [x,y] = parseCellCoords(stringId);

    return {
        id: stringId,
        coords: {x, y}
    }
}

export function createCordsObjFromCoords(x, y) {
    let id = concatCellCoords(x,y);

    return {
        id,
        coords: {x, y}
    }
}

export function isEqualCellCoords(a, b){
    return a.x == b.x && a.y == b.y
}