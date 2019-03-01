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
      this.handleOpen()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.open && nextProps.open) {
      this.handleOpen()
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

  toggleOpen = () => {
    this.setState({
      showPortal: !this.state.showPortal
    })
  }

  open = () => {
    this.setState({
      showPortal: true
    })
  }

  close = () => {
    this.setState({
      showPortal: true
    })
  }

  handleOpen = () => {
    document.addEventListener('keydown', this.handleKeydown)
    document
      .querySelector('*')
      .addEventListener('mousemove', this.handleMousemove)
    noScroll.on()
    this.open()
  }

  handleClose = () => {
    document.removeEventListener('keydown', this.handleKeydown)
    document
      .querySelector('*')
      .removeEventListener('mousemove', this.handleMousemove)
    noScroll.off()
    this.close()
  }

  handleKeydown = e => {
    if (e.keyCode === keycodes.left && this.props.keyboardNavigation) {
      this.handleClickPrev()
    } else if (e.keyCode === keycodes.right && this.props.keyboardNavigation) {
      this.handleClickNext()
    } else if (e.keyCode === keycodes.esc && this.props.closeOnEsc) {
      this.handleClose()
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
    this.handleClose()
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
