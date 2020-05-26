import React from 'react'
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

const TodoListUI = props => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.todolist} >
      <Grid container spacing={3} >
        <Grid item xs={12} >
          <Input
            placeholder='写点什么吧'
            value={props.inputValue}
            onChange={props.changeInputValueHandler}
            onKeyDown={e => e.keyCode === 13 && props.clickBtn()}
          />
          <Button color='primary' variant='contained' onClick={props.clickBtn}>增加</Button>
        </Grid>
        <Grid item xs={2} >
          <List >
            {props.list.map((v, i) => (
              <ListItem key={i}>
                <ListItemText>{v}</ListItemText>
                <IconButton color='secondary' aria-label='delete this item' onClick={() => props.deleteItemHandler(i)}>
                  <DeleteForeverOutlined />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
    </div>
  )
}

export default TodoListUI;
