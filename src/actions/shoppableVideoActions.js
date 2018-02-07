import axios from "axios";
import {
    loadShoppableVideosSuccess,
    loadShoppableVideosFail
} from './actionTypes';

export function loadShoppableVideos() {
  return dispatch => {

    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
    })
    .then(response => {
        response
            .json()
            .then(responseData => {
                dispatch(loadShoppableVideosSuccess(responseData))
            })
    })
    .catch(err => {
        dispatch(loadShoppableVideosFail(err));
        throw err;
    });
  };
}
