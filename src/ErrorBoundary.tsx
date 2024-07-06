import { Heading, Img } from '@chakra-ui/react';
import React, { Component, ErrorInfo } from 'react';
import error from '../public/error.png'

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <Img src={error} />
          <Heading size={'md'} color={'red'}>Oh snap! there was a bug on this page. Contact software admin</Heading>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;