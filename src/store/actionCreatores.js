import * as types from './actionTypes'

export const changeInputValue = e => {
  return {
    type: types.change_input_value,
    inputValue: e.target.value,
  }
}

export const addItem = () => {
  return {
    type: types.add_item,
  }
}

export const deleteItem = (index) => {
  return {
    type: types.delete_item,
    index,
  }
}
