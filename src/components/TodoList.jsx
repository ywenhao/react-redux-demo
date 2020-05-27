import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { changeInputValueAction, addItemAction, deleteItemAction, getMyListAction } from '../store/actionCreators'

import TodoListUI from './TodoListUI'

const TodoList = () => {
  const {inputValue, list} = useSelector(state => state)
  const dispatch = useDispatch()
  const changeInputValue = (e) => {
    dispatch(changeInputValueAction(e))
  }
  const clickBtn = () => {
    inputValue && dispatch(addItemAction())
  }

  const deleteItem = (index) => {
    dispatch(deleteItemAction(index))
  }

  React.useEffect(() => {
    dispatch(getMyListAction())
  }, [dispatch])

  return (
    <TodoListUI
      inputValue={inputValue}
      list={list}
      clickBtn={clickBtn}
      deleteItem={deleteItem}
      changeInputValue={changeInputValue}
    />
  )
}

// const stateMapToProps = state => ({
//   inputValue: state.inputValue,
//   list: state.list
// })

export default TodoList
