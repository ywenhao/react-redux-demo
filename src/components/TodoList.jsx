import React from 'react'
import { connect } from "react-redux";
import { changeInputValueAction, addItemAction, deleteItemAction, getMyListAction } from '../store/actionCreators'

import TodoListUI from './TodoListUI'

const TodoList = ({ dispatch, inputValue, list }) => {
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

const stateMapToProps = state => ({
  inputValue: state.inputValue,
  list: state.list
})

export default connect(stateMapToProps)(TodoList)
