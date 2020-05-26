import * as types from './actionTypes'

export const changeInputValueAction = e => {
  return {
    type: types.CHANGE_INPUT_VALUE,
    inputValue: e.target.value,
  }
}

export const addItemAction = () => {
  return {
    type: types.ADD_ITEM,
  }
}

export const deleteItemAction = index => {
  return {
    type: types.DELETE_ITEM,
    index,
  }
}

export const getListAction = data => {
  return {
    type: types.GET_LIST,
    ...data
  }
}