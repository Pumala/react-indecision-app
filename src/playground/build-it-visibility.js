const appRoot = document.getElementById("box");

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    toggleVisibility() {
        this.setState((preVal) => {
            return {
                visibility: !preVal.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h2>Now you see me.. now you don't!</h2>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility ? "Hide" : "Show"}
                </button>
                {this.state.visibility && <p>I am here!</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>, appRoot);