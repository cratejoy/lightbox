import { Component } from 'react'
import PropTypes from 'prop-types'
import { srcArray } from '../../sharedPropTypes'

class ImageLazyLoader extends Component {
  state = {
    images: []
  }

  getNextImg = () => {
    const { src, index } = this.props
    const potentialNext = index + 1
    const realNext = potentialNext <= src.length - 1
      ? potentialNext
      : 0
    const nextImg = src[realNext]
    nextImg.currentImage = false
    return nextImg
  }

  getPrevImg = () => {
    const { src, index } = this.props
    const potentialPrev = index - 1
    const realPrev = potentialPrev >= 0
      ? potentialPrev
      : src.length - 1
    const prevImg = src[realPrev]
    prevImg.currentImage = false
    return prevImg
  }

  getCurrentImage = () => {
    const { src, index } = this.props
    const currentImage = src[index]
    currentImage.currentImage = true
    return currentImage
  }

  fetchImages = () => {
    const {
      getNextImg,
      getPrevImg,
      getCurrentImage
    } = this

    const images = [
      getPrevImg(),
      getCurrentImage(),
      getNextImg()
    ]

    this.setState({ images })
  }

  componentDidMount() {
    this.fetchImages()
  }

  componentDidUpdate(prevProps) {
    const prevIndex = prevProps.index
    const { index } = this.props
    if (prevIndex !== index) {
      this.fetchImages()
    }
  }

  render () {
    const { children, src, index } = this.props
    const { images } = this.state
    return images.length
      ? children({ images, currentImage: null })
      : children({ images, currentImage: src[index] })
  }

  static propTypes = {
    src: srcArray,
    index: PropTypes.number.isRequired,
    children: PropTypes.func.isRequired
  }
}

export default ImageLazyLoader
