import { useRef } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import playstation from '../img/playstation.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
import steam from '../img/steam.svg'
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'
import { smallImage } from "../util"
import { fadeIn } from "../animations/animations"


const GameDetail = ({pathId}) => {
  const {screen, game, isLoading} = useSelector(state => state.detail)
  const history = useHistory()
  const elementRef = useRef(null)

  const getPlatform = platform => {
    switch(platform) {
      case 'PlayStation': return playstation
      case 'Xbox': return xbox
      case 'PC': return steam
      case 'iOS': return apple
      case 'Nintendo': return nintendo
      default: return gamepad
    }
  }
  const getStarsElem = () => {
    const rating = Math.floor(game.rating)
    const stars = [...Array(5)].map((_val, idx) => {
      if (idx + 1 <= rating) {
        return <img key={idx} src={starFull} alt="star"/>
      }
      return <img key={idx} src={starEmpty} alt="star"/>
    })
    return stars
  }

  const exitDetailHandler = event => {
    const element = event.target
    if (elementRef.current === element) {
      setTimeout(() => {
      document.body.style.paddingRight = "0"
      document.body.style.overflow = "auto"
      }, 500)
      history.push("/")
    }
  }

  return (
    <>
      {!isLoading && (
        <CardShadowStAn
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0 }}
        >
          <DetailContainerSt
            ref={elementRef}
            onClick={exitDetailHandler}          
          >
            <DetailStAn layoutId={`container-${pathId}`}>
              <StatsStAn>
                <div className="rating">
                  <motion.h3 layoutId={`title-${pathId}`}>
                    {game.name}
                  </motion.h3>
                  <motion.div
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={fadeIn}
                  >
                    <p>Rating: {game.rating}</p>
                    {getStarsElem()}
                  </motion.div>
                </div>
                <motion.div
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  variants={fadeIn}
                >
                  <h3>Platforms</h3>
                  <PlatformsStAn>
                    {game.parent_platforms.map(data => (
                      <img
                        key={data.platform.name}
                        src={getPlatform(data.platform.name)}
                        alt={data.platform.name}
                      />
                    ))}
                  </PlatformsStAn>
                </motion.div>
              </StatsStAn>
              <MediaStAn>
                <motion.img
                  layoutId={`image-${pathId}`}
                  src={smallImage(game.background_image, 1280)}
                  alt={game.background_image}
                />
              </MediaStAn>
              <DescriptionStAn
                initial="hidden"
                animate="show"
                exit="exit"
                variants={fadeIn}
              >
                <p>{game.description_raw}</p>
              </DescriptionStAn>
              <motion.div
                className="gallery"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={fadeIn}
              >
                {screen.results.map(src => (
                  <img
                    key={src.id}
                    src={smallImage(src.image, 1280)}
                    alt={src.image}
                  />
                ))}
              </motion.div>
            </DetailStAn>
          </DetailContainerSt>
        </CardShadowStAn>
      )}
    </>
  )
}

const CardShadowStAn = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.7);
  overflow-y: scroll;
  will-change: opacity;
  &::-webkit-scrollbar {
    width: 0;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: #4c4c4c;
  }
  @media screen  {
    @media (min-width: 1280px) {
      &::-webkit-scrollbar {
        width: 0.4rem;
      }
    }
  }
`
const DetailContainerSt = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`
const DetailStAn = styled(motion.div)`
  width: 90%;
  max-width: 900px;
  padding: 1rem 1rem;
  border-radius: 1rem;
  background: white;
  color: black;
  img {
    width: 100%;
  }
  @media screen  {
    @media (min-width: 1400px) {
      max-width: 1280px;
    }
  }
`
const StatsStAn = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  .rating {
    margin-right: 2rem;
  }
  img {
    display: inline-block;
    width: 2rem;
    height: 2rem;
  }
`
const PlatformsStAn = styled(motion.div)`
  img {
    margin-left: 0.3rem;
  }
`
const MediaStAn = styled(motion.div)`
  margin-top: 1rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 4/3;
  }
`
const DescriptionStAn = styled(motion.div)`
  margin: 1rem 0;
`

export default GameDetail
