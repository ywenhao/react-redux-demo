import React from 'react'
import Axios from 'axios'
import Api from '../config/api'
import store from '../store'
import { changeInputValueAction, addItemAction, deleteItemAction, getListAction } from '../store/actionCreatores'

import TodoListUI from './TodoListUI'

const TodoList = () => {
  const [state, setState] = React.useState(store.getState())
  const changeInputValue = (e) => {
    store.dispatch(changeInputValueAction(e))
  }
  const clickBtn = () => {
    state.inputValue && store.dispatch(addItemAction())
  }
  const deleteItem = (index) => {
    store.dispatch(deleteItemAction(index))
  }
  const storeChange = () => {
    setState(store.getState())
  }
  store.subscribe(storeChange)

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(Api.listData)
      store.dispatch(getListAction(result.data))
    }
    fetchData()
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
