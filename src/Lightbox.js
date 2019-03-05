import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import noScroll from 'no-scroll'
import Markup from './Markup'

class Lightbox extends Component {
  state = {
    showPortal: !!this.props.open,
    index: 0
  }

  componentDidMount() {
    if (this.props.open) {
      this.open()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.open && nextProps.open) {
      this.open()
    }
    if (this.props.open && !nextProps.open) {
      this.close()
    }
  }

  componentWillUnmount() {
    if (this.props.open) {
      this.close()
    }
  }

  toggleOpen = () => {
    const { showPortal } = this.state
    const { open, close } = this
    if (showPortal) {
      close()
    } else {
      open()
    }
  }

  open = () => {
    this.setState({
      showPortal: true
    })
    this.listen()
  }

  close = () => {
    this.setState({
      showPortal: false
    })
    this.unlisten()
  }

  listen = () => {
    document.addEventListener('keydown', this.handleKeydown)
    document
      .querySelector('*')
      .addEventListener('mousemove', this.handleMousemove)
    noScroll.on()
  }

  unlisten = () => {
    document.removeEventListener('keydown', this.handleKeydown)
    document
      .querySelector('*')
      .removeEventListener('mousemove', this.handleMousemove)
    noScroll.off()
  }

  handleKeydown = e => {
    const LEFT = 37
    const RIGHT = 39
    const ESC = 27
    const { keyCode } = e

    if (keyCode === LEFT && this.props.keyboardNavigation) {
      this.previous()
    } else if (keyCode === RIGHT && this.props.keyboardNavigation) {
      this.next()
    } else if (keyCode === ESC && this.props.closeOnEsc) {
      this.close()
    }
  }

  previous = () => {
    if (this.state.index !== 0) {
      this.setState({ index: this.state.index - 1 })
    }
  }

  next = () => {
    if (this.props.src[this.state.index + 1]) {
      this.setState({ index: this.state.index + 1 })
    }
  }

  render () {
    const markupProps = {
      ...this.state,
      toggleOpen: this.toggleOpen,
      next: this.next,
      previous: this.previous,
      src: this.props.src
    }

    const childProps = {
      ...this.state,
      toggleOpen: this.toggleOpen
    }

    const { children } = this.props

    return (
      <Fragment>
        <Markup {...markupProps} />
        {children(childProps)}
      </Fragment>
    )
  }

  static propTypes = {
    open: PropTypes.bool,
    src: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        thumb: PropTypes.string
      })
    ).isRequired,
    closeOnEsc: PropTypes.bool,
    keyboardNavigation: PropTypes.bool,
    children: PropTypes.func.isRequired
  }

  static defaultProps = {
    closeOnEsc: true,
    keyboardNavigation: true
  }
}

export default Lightbox
