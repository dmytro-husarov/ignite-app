import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import GameDetail from "../components/GameDetail"
import Game from "../components/Game"
import { loadGames } from "../store/actions/gamesAction"
import { fadeIn } from "../animations/animations"


const Home = () => {
  const {popular, newGames, upcoming, searched} = useSelector(state => state.games)
  const dispatch = useDispatch()
  const location = useLocation()
  const [,, pathId] = location.pathname.split('/')

  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])

  return (
    <GameListStAn
      initial="hidden"
      animate="show"
      exit="exit"
      variants={fadeIn}
    >
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId}/>}
        </AnimatePresence>
        {searched.length ? (
          <>
            <h2>Searched Games</h2>
            <GamesStAn>
              {searched.map(game => (
                <Game
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  released={game.released}
                  image={game.background_image}
                />
              ))}        
            </GamesStAn>
          </>
        ) : ''}
        <h2>Upcoming Games</h2>
        <GamesStAn>
          {upcoming.map(game => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          ))}        
        </GamesStAn>
        <h2>Popular Games</h2>
        <GamesStAn>
          {popular.map(game => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          ))}        
        </GamesStAn>
        <h2>New Games</h2>
        <GamesStAn>
          {newGames.map(game => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          ))}        
        </GamesStAn>
      </AnimateSharedLayout>
    </GameListStAn>
  )
}

const GameListStAn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    padding: 1rem 0;
  }
`
const GamesStAn = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20ch, 1fr));
  grid-gap: 1.5rem;
  max-width: 100vw;
  width: 80ch;
  margin-bottom: 2rem;
  padding: 0 2rem;
`

export default Home
