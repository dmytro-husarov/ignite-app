export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
  },
}
export const fadeIn2 = {
  hidden: {
    display: 'none',
  },
  show: {
    display: 'block',
    transition: {
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
  },
}
export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
}