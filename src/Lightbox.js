import React, { Component } from 'react'
import PropTypes from 'prop-types'
import noScroll from 'no-scroll'
import LightboxMarkup from './LightboxMarkup'

const keycodes = {
  esc: 27,
  left: 37,
  right: 39
}

class Lightbox extends Component {
  state = {
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    mouseIdle: false,
    showPortal: this.props.open
  }

  componentDidMount() {
    if (this.props.open) {
      this.handleOpen()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.open && nextProps.open) {
      this.handleOpen()
      this.setState({ showPortal: true })
    }
    if (this.props.open && !nextProps.open) {
      this.handleClose()
    }
  }

  componentWillUnmount() {
    if (this.props.open) {
      this.handleClose()
    }
  }

  handleOpen = () => {
    document.addEventListener('keydown', this.handleKeydown)
    window.addEventListener('resize', this.handleWindowResize)
    document
      .querySelector('*')
      .addEventListener('mousemove', this.handleMousemove)
    noScroll.on()
  }

  handleClose = () => {
    document.removeEventListener('keydown', this.handleKeydown)
    window.removeEventListener('resize', this.handleWindowResize)
    document
      .querySelector('*')
      .removeEventListener('mousemove', this.handleMousemove)
    noScroll.off()
  }

  handleWindowResize = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  handleKeydown = e => {
    if (e.keyCode === keycodes.left && this.props.keyboardNavigation) {
      this.handleClickPrev()
    } else if (e.keyCode === keycodes.right && this.props.keyboardNavigation) {
      this.handleClickNext()
    } else if (e.keyCode === keycodes.esc && this.props.closeOnEsc) {
      this.handleClose()
      this.props.onClose()
    }
  }

  handleMousemove = () => {
    // Hide the actions buttons when move do not move for x seconds
    clearTimeout(this.timeoutMouseIdle)
    if (this.state.mouseIdle === true) {
      this.setState({ mouseIdle: false })
    }
    this.timeoutMouseIdle = setTimeout(() => {
      this.setState({ mouseIdle: true })
    }, this.props.mouseIdleTimeout)
  }

  handleClickPrev = () => {
    if (this.props.srcIndex !== 0) {
      this.props.onClickPrev()
    }
  }

  handleClickNext = () => {
    if (this.props.src[this.props.srcIndex + 1]) {
      this.props.onClickNext()
    }
  }

  handleClickCloseArrow = () => {
    this.props.onClose()
  }

  handleExited = () => {
    this.setState({ showPortal: false })
  }

  render () {
    const passedProps = {
      ...this.state,
      transitionDuration: this.props.transitionDuration,
      transitionStyles: this.props.transitionStyles
    }

    return (
      <LightboxMarkup {...passedProps} />
    )
  }

  static propTypes = {
    // Control if Lightbox is open or not
    open: PropTypes.bool.isRequired,
    // An array of image urls
    src: PropTypes.arrayOf(
      PropTypes.string
    ).isRequired,
    // Index of source to display
    srcIndex: PropTypes.number.isRequired,
    // Is closable when user press esc key
    closeOnEsc: PropTypes.bool,
    // Enable left and right arrow navigation
    keyboardNavigation: PropTypes.bool,
    // The duration of the transition, in milliseconds see [react-transition-group docs](https://reactcommunity.org/react-transition-group/#Transition-prop-timeout)
    transitionDuration: PropTypes.number,
    // eslint-disable-next-line
    // The animation object see [react-transition-group docs](https://reactcommunity.org/react-transition-group/#Transition)
    transitionStyles: PropTypes.object,
    // Timeout before hidding the actions buttons when mouse do not move (milliseconds)
    mouseIdleTimeout: PropTypes.number,
    // Function called when the previous image is requested
    onClickPrev: PropTypes.func.isRequired,
    // Function called when the next image is requested
    onClickNext: PropTypes.func.isRequired,
    // Function called when GooglePhoto is requested to be closed
    onClose: PropTypes.func.isRequired
  }

  static defaultProps = {
    closeOnEsc: true,
    keyboardNavigation: true,
    mouseIdleTimeout: 5000,
    transitionDuration: 200,
    transitionStyles: {
      default: {
        transition: `opacity 200ms ease-in-out`,
        opacity: 0
      },
      entering: { opacity: 0 },
      entered: { opacity: 1 },
      exiting: { opacity: 0 }
    }
  }
}

export default Lightbox
