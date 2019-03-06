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
    return nextImg
  }

  getPrevImg = () => {
    const { src, index } = this.props
    const potentialPrev = index - 1
    const realPrev = potentialPrev >= 0
      ? potentialPrev
      : src.length - 1
    const prevImg = src[realPrev]
    return prevImg
  }

  fetchImages = () => {
    const {
      getNextImg,
      getPrevImg
    } = this

    const images = [
      getPrevImg(),
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
    const passedProps = {
      images, currentImage: src[index]
    }
    return children(passedProps)
  }

  static propTypes = {
    src: srcArray,
    index: PropTypes.number.isRequired,
    children: PropTypes.func.isRequired
  }
}

export default ImageLazyLoader
