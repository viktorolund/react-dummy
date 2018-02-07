export const LOAD_SHOPPABLE_VIDEOS = 'LOAD_SHOPPABLE_VIDEOS';
export const LOAD_SHOPPABLE_VIDEOS_SUCCESS = 'LOAD_SHOPPABLE_VIDEOS_SUCCESS';
export const LOAD_SHOPPABLE_VIDEOS_FAIL = 'LOAD_SHOPPABLE_VIDEOS_FAIL';

export function loadShoppableVideosSuccess(shoppablevideos) {
    console.log('response', shoppablevideos)
    return {
      type: LOAD_SHOPPABLE_VIDEOS_SUCCESS,
      shoppablevideos
    };
  }
  
export function loadShoppableVideosFail(shoppablevideosError) {
    return {
        type: LOAD_SHOPPABLE_VIDEOS_FAIL,
        shoppablevideosError
    };
}
