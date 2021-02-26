import axios from "axios"
import { gameDetailsURL, gameScreenshotURL } from "../../api"
import { GET_DETAIL, LOADING_DETAIL } from "../types/types"

export const loadDetail = id => async dispatch => {
  dispatch({ type: LOADING_DETAIL})
  const detailData = await axios.get(gameDetailsURL(id))
  const screenshotData = await axios.get(gameScreenshotURL(id))
  dispatch({
    type: GET_DETAIL,
    payload: {
      game: detailData.data,
      screen: screenshotData.data,
    },
  })
}