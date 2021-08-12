import React, { Component } from 'react'
import Background from './background'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    const { history, children } = this.props

    if (hasError) {
      return <Background history={history} />
    }

    return children
  }
}

export default ErrorBoundary
