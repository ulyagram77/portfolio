import { Component } from 'react';

import { ErrorMessage } from '.';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    state = {
        error: false,
    };

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({ error: true });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />;
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
