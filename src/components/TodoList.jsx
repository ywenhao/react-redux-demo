import React from 'react'
import store from '../store'
import { changeInputValue, addItem, deleteItem } from '../store/actionCreatores'

import { makeStyles } from '@material-ui/core/styles'
import { Input, Button, Grid, List, ListItem, ListItemText, IconButton } from '@material-ui/core'
import { DeleteForeverOutlined } from '@material-ui/icons'

const useStyles = makeStyles(them => ({
  todolist: {
    textAlign: 'center',
    '& > *': {
      margin: them.spacing(1),
    }
  },
}))

const TodoList = () => {
  const classes = useStyles()
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
    <div className={classes.todolist} >
      <Grid container spacing={3} >
        <Grid item xs={12} >
          <Input
            placeholder='写点什么吧'
            value={state.inputValue}
            onChange={changeInputValueHandler}
            onKeyDown={e => e.keyCode === 13 && clickBtn()}
          />
          <Button color='primary' variant='contained' onClick={clickBtn}>增加</Button>
        </Grid>
        <Grid item xs={2} >
          <List >
            {state.list.map((v, i) => (
              <ListItem key={i}>
                <ListItemText>{v}</ListItemText>
                <IconButton color='secondary' aria-label='delete this item' onClick={() => deleteItemHandler(i)}>
                  <DeleteForeverOutlined />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  )
}

export default TodoList
