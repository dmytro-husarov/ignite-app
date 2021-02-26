import no_image from './img/no_image.png'

export const smallImage = (imagePath, size) => {
  if (imagePath) {
    const image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
        "/media/screenshots/",
        `/media/resize/${size}/-/screenshots/`
      )
      : imagePath.replace(
        "/media/games/",
        `/media/resize/${size}/-/games/`
      )
    return image
  }
  return no_image
}
