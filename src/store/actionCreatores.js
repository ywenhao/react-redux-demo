import * as types from './actionTypes'

export const changeInputValue = e => {
  return {
    type: types.CHANGE_INPUT_VALUE,
    inputValue: e.target.value,
  }
}

export const addItem = () => {
  return {
    type: types.ADD_ITEM,
  }
}

export const deleteItem = (index) => {
  return {
    type: types.DELETE_ITEM,
    index,
  }
}
