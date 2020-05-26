import React from 'react'
import store from '../store'
import { changeInputValueAction, addItemAction, deleteItemAction, getTodoList } from '../store/actionCreators'

import TodoListUI from './TodoListUI'

const TodoList = () => {
  const [state, setState] = React.useState(store.getState())

  const storeChange = () => {
    setState(store.getState())
  }

  store.subscribe(storeChange)

  const changeInputValue = (e) => {
    store.dispatch(changeInputValueAction(e))
  }

  const clickBtn = () => {
    state.inputValue && store.dispatch(addItemAction())
  }

  const deleteItem = (index) => {
    store.dispatch(deleteItemAction(index))
  }

  React.useEffect(() => {
    store.dispatch(getTodoList())
  }, [])

  return (
    <TodoListUI
      inputValue={state.inputValue}
      list={state.list}
      clickBtn={clickBtn}
      deleteItem={deleteItem}
      changeInputValue={changeInputValue}
    />
  )
}

export default TodoList
