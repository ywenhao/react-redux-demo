import React from 'react'
import store from '../store'
import { changeInputValue, addItem, deleteItem } from '../store/actionCreatores'

import TodoListUI from './TodoListUI'

const TodoList = () => {
  const [state, setState] = React.useState(store.getState())
  const changeInputValueHandler = (e) => {
    store.dispatch(changeInputValue(e))
  }
  const clickBtn = () => {
    state.inputValue && store.dispatch(addItem())
  }
  const deleteItemHandler = (index) => {
    store.dispatch(deleteItem(index))
  }
  const storeChange = () => {
    setState(store.getState())
  }
  store.subscribe(storeChange)

  return (
    <TodoListUI
      inputValue={state.inputValue}
      list={state.list}
      clickBtn={clickBtn}
      deleteItemHandler={deleteItemHandler}
      changeInputValueHandler={changeInputValueHandler}
    />
  )
}

export default TodoList
