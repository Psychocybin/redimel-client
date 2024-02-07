import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        }
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error) {
        console.log(error);
    }

    render() {
        return this.state.error
            ? <h1>Something is broken!</h1>
            : this.props.children;
    }
}