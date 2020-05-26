import { takeEvery, put } from "redux-saga/effects";
import { GET_MY_LIST } from "./actionTypes";
import { getListAction } from './actionCreators'
import Axios from 'axios'
import Api from '../config/api'

function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
  const res = yield Axios(Api.listData)
  yield put(getListAction(res.data))
}

export default mySaga
