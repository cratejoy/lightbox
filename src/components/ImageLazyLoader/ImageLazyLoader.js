import { Component } from 'react'
import PropTypes from 'prop-types'

class ImageLazyLoader extends Component {
  state = {
    currentImg: this.props.src[this.props.index],
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
    const { children } = this.props
    const passedProps = {
      ...this.state
    }
    return children(passedProps)
  }

  static propTypes = {
    src: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        thumb: PropTypes.string
      })
    ).isRequired,
    index: PropTypes.number.isRequired,
    children: PropTypes.func.isRequired
  }
}

export default ImageLazyLoader
