import {combineReducers} from 'redux';
import {CHANGE_STATUS, ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM} from './actions';

function status(state = 'edit', action) {
    switch (action.type) {
        case CHANGE_STATUS:
            return action.status;
        default:
            return state
    }
}

function items(state = [], action) {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                {
                    type: action.itemType,
                    value: '',
                    index: new Date().getTime()
                }
            ];
        case REMOVE_ITEM:
            return state.filter(item => item.index !== action.index);
        case UPDATE_ITEM:
            let item = state.filter(item => item.index === action.index)[0];
            item.value = action.value;
            return state;
        default:
            return state;
    }
}

const reducer = combineReducers({status, items});
export  default reducer;