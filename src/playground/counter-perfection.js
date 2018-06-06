class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        const json = localStorage.getItem("count");
        const count = JSON.parse(json);

        if (count) {
            this.setState(() => ({ count }));
        }
    }
    componentDidUpdate(preProps, prevState) {
        if (preProps.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem("count", json);
        }
    }
    componentWillUnmount() {

    }
    handleAddOne() {
        this.setState((prevState) => {

            return {
                count: prevState.count += 1
            }
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -= 1
            }
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

const app = document.getElementById("box");

ReactDOM.render(<Counter/>, app);