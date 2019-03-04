import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import noScroll from 'no-scroll'
import Markup from './Markup'

const keycodes = {
  esc: 27,
  left: 37,
  right: 39
}

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
    if (e.keyCode === keycodes.left && this.props.keyboardNavigation) {
      this.handleClickPrev()
    } else if (e.keyCode === keycodes.right && this.props.keyboardNavigation) {
      this.handleClickNext()
    } else if (e.keyCode === keycodes.esc && this.props.closeOnEsc) {
      this.close()
    }
  }

  handleClickPrev = () => {
    if (this.state.index !== 0) {
      this.setState({ index: this.state.index - 1 })
    }
  }

  handleClickNext = () => {
    if (this.props.src[this.state.index + 1]) {
      this.setState({ index: this.state.index + 1 })
    }
  }

  handleClickCloseArrow = () => {
    this.close()
  }

  handleExited = () => {
    this.setState({ showPortal: false })
  }

  render () {
    const markupProps = {
      ...this.state,
      toggleOpen: this.toggleOpen,
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
      PropTypes.string
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
