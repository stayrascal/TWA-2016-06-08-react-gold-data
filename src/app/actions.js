export const CHANGE_STATUS = 'CHANGE_STATUS';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export function changeStatus(status) {
    return {type: CHANGE_STATUS, status}
}

export function addItem(itemType) {
    return {type: ADD_ITEM, itemType}
}

export function removeItem(index) {
    return {type: REMOVE_ITEM, index}
}

export function updateItem(index, value) {
    return {type: UPDATE_ITEM, index, value}
}