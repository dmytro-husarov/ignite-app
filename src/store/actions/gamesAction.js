import axios from "axios"
import { newGamesURL, popularGamesURL, searchGameURL, upcomingGamesURL } from "../../api"
import { CLEAR_SEARCHED, FETCH_GAMES, FETCH_SEARCHED } from "../types/types"

export const loadGames = () => async dispatch => {
  const popularData = await axios.get(popularGamesURL())
  const newGamesData = await axios.get(newGamesURL())
  const upcomingData = await axios.get(upcomingGamesURL())
  dispatch({
    type: FETCH_GAMES,
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingData.data.results,
    },
  })
}
export const searchGame = game_name => async dispatch => {
  const searchedGamesData = await axios.get(searchGameURL(game_name))
  dispatch({
    type: FETCH_SEARCHED,
    payload: {
      searched: searchedGamesData.data.results,
    },
  })
}
export const clearSearched = () => {
  return {
    type: CLEAR_SEARCHED
  }
}
