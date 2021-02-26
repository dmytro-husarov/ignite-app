import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { motion } from "framer-motion"
import { smallImage } from "../util"
import { loadDetail } from "../store/actions/detailAction"
import { popup } from "../animations/animations"


const Game = ({id, name, released, image}) => {
  const dispatch = useDispatch()

  const loadDetailHandler = () => {
    const paddingValue = window.innerWidth - document.body.offsetWidth
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = `${paddingValue}px`
    dispatch(loadDetail(id))
  }

  return (
    <GameStAn
      initial="hidden"
      animate="show"
      exit="exit"
      variants={popup}
      layoutId={`container-${id}`}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title-${id}`}>
          {name}
        </motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image-${id}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </GameStAn>
  )
}

const GameStAn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 30vh;
  border-radius: 0.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    max-height: max(15rem, 30vh);
    object-fit: cover;
    aspect-ratio: 4/3;
  }
`

export default Game
