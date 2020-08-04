import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const fetch = async (text) => {
    console.log("fetch text ", text);
    return await axios.get(`https://www.breakingbadapi.com/api/characters?name=${text}`)
        .then((response) => {
            const data = response.data[0]
            console.log("the objsaga ", data)
            return data;
        })
        .catch(e => console.log("error", e))
};

// saga
function* fetchData(action) {
    console.log("objSaga ", action.text);
    const text = action.text
    try {
        const selected = yield call(fetch, text);
        yield put({ type: "SET_BREAKING_BAD_SUCCESS", selected: selected })
        console.log("selected action payload ", selected)
    } catch (e) {
        yield put({ type: "SET_BREAKING_BAD_FAIL", message: e.message })
    }
}

export default function* mySaga() {
    yield takeLatest("SET_BREAKING_BAD_REQUEST", fetchData);
}

