import * as types from './actionTypes'
import Axios from 'axios'
import Api from '../config/api'

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

export const getTodoList = () => {
  return dispatch => {
    Axios(Api.listData).then(res => dispatch(getListAction(res.data)))
  }
}
