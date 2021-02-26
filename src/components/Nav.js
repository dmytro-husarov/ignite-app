import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaSearch } from 'react-icons/fa'
import logo from '../img/logo.svg'
import { clearSearched, searchGame } from '../store/actions/gamesAction'
import { fadeIn } from '../animations/animations'

const Nav = () => {
  const [inputText, setInputText] = useState('')
  const dispatch = useDispatch()

  const inputHandler = event => {
    setInputText(event.target.value)
  }
  const submitSearchHandler = event => {
    event.preventDefault()
    dispatch(searchGame(inputText))
    setInputText('')
  }
  const clearSearchedHandler = () => {
    dispatch(clearSearched())
  }  

  return (
    <NavStAn
      initial="hidden"
      animate="show"
      exit="exit"
      variants={fadeIn}
    >
      <LogoStAn onClick={clearSearchedHandler}>
        <img src={logo} alt="logo"/>
        <h1>Ignite</h1>
      </LogoStAn>
      <form className="search">
        <input
          type="text"
          value={inputText}
          onChange={inputHandler}
        />
        <button type="submit" onClick={submitSearchHandler}>
          <FaSearch />
        </button>
      </form>
    </NavStAn>
  )
}

const NavStAn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  .search {
    display: flex;
    align-items: center;
  }
  input {
    flex: 1;
    padding: 0.2rem 0.6rem;
    border: none;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    outline: none;
    font-size: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem 0.5rem;
    border: none;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    outline: none;
    background: #ff7676;
    font-size: 1.2rem;
    color: white;
    cursor: pointer;
  }
`
const LogoStAn = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 0.2rem;
  margin-bottom: 0.2rem;
  cursor: pointer;
  img {
    width: 1.7rem;
    height: 1.7rem;
  }
  h1 {
    font-size: 1.7rem;
  }
`

export default Nav
