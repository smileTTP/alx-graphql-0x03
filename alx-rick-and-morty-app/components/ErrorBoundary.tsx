import React, { ReactNode } from "react";
import * as Sentry from '@sentry/react';

interface State {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    children: ReactNode;
}


class ErrorBoundary extends React.Component<ErrorBoundaryProps , State> {
    constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Manually map the componentStack from errorInfo
        // The errorInfo object itself is not compatible with Sentry's 'extra'
        // so we extract the 'componentStack' string into a new object.
        Sentry.captureException(error, {
            extra: {
                // We use a custom key to store the React component stack
                componentStack: errorInfo.componentStack,
            },
        });
    }

    render() {
    if (this.state.hasError) {
        return (
        <div>
            <h2>Oops, there is an error!</h2>
            <button onClick={() => this.setState({ hasError: false })}>
            Try again?
            </button>
        </div>
        );
    }

    return this.props.children;
    }
}

export default ErrorBoundary;