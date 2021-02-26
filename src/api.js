const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1
  if (month < 10) {
    return `0${month}`
  } else {
    return month
  }
}
const getCurrentDay = () => {
  const day = new Date().getDate()
  if (day < 10) {
    return `0${day}`
  } else {
    return day
  }
}
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYearDate = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYearDate = `${currentYear + 1}-${currentMonth}-${currentDay}`

const base_url = 'https://api.rawg.io/api/'
const popular_games = `games?dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=9`
const new_games = `games?dates=${lastYearDate},${currentDate}&ordering=-released&page_size=9`
const upcoming_games = `games?dates=${currentDate},${nextYearDate}&ordering=-added&page_size=9`

export const popularGamesURL = () => `${base_url}${popular_games}`
export const newGamesURL = () => `${base_url}${new_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const gameDetailsURL = game_id => `${base_url}games/${game_id}`
export const gameScreenshotURL = game_id => `${base_url}games/${game_id}/screenshots`
export const searchGameURL = game_name => `${base_url}games?search=${game_name}&page_size=9`