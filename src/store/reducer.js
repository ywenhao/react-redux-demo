import * as types from './actionTypes'

const initailState = {
  inputValue: '',
  list: [
    '早上4点起床，锻炼身体',
    '中午下班游泳一小时',
  ],
}

export default (state = initailState, action) => {
  switch (action.type) {
    case types.CHANGE_INPUT_VALUE:
      return {...state, inputValue: action.inputValue}
    case types.ADD_ITEM:
      return {...state, inputValue: '', list: [state.inputValue, ...state.list]}
    case types.DELETE_ITEM:
      const list = [...state.list]
        list.splice(action.index, 1)
      return {...state, list}
    case types.GET_LIST:
      return {...state, list: action.data.list}
    default:
      return state
  }
}
