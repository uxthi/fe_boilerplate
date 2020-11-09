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
      // This will render the following component in case the app crashes
      return <Background history={this.props.history} />
    }

    return this.props.children
  }
}

export default ErrorBoundary
