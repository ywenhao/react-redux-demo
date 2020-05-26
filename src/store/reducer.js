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
    case types.change_input_value:
      return {...state, inputValue: action.inputValue}
    case types.add_item:
      return {...state, inputValue: '', list: [state.inputValue, ...state.list]}
    case types.delete_item:
      const list = [...state.list]
        list.splice(action.index, 1)
      return {...state, list}
    default:
      return state
  }
}
