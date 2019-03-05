import { Component } from 'react'
import PropTypes from 'prop-types'
import { srcArray } from '../../sharedPropTypes'

class ImageLazyLoader extends Component {
  state = {
    nextImages: []
  }

  getNextImg = () => {
    const { src, index } = this.props
    const potentialNext = index + 1
    const realNext = potentialNext <= src.length - 1
      ? potentialNext
      : 0
    return src[realNext]
  }

  getPrevImg = () => {
    const { index } = this.state
    const { src } = this.props
    const potentialPrev = index - 1
    const realPrev = potentialPrev >= 0
      ? potentialPrev
      : src.length - 1
    return src[realPrev]
  }

  preloadImages = () => {
    const { getNextImg, getPrevImg } = this
    const images = [
      getNextImg(),
      getPrevImg()
    ]

    this.setState({
      nextImages: images
    })
  }

  componentDidMount() {
    this.preloadImages()
  }

  componentDidUpdate(prevProps) {
    const prevIndex = prevProps.index
    const { index } = this.props
    if (prevIndex !== index) {
      this.preloadImages()
    }
  }

  render () {
    const { children, src, index } = this.props
    const passedProps = {
      ...this.state,
      currentImage: src[index]
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
