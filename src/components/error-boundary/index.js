import React, { Component } from 'react'
import { Background } from './background'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <Background history={this.props.history} />
    }

    return this.props.children
  }
}

export default ErrorBoundary
