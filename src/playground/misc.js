class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.removeOptions = this.removeOptions.bind(this);
        this.generateRandomOption = this.generateRandomOption.bind(this);
        this.state = {
            title: "So Many Decisions...",
            subtitle: "Choose wisely",
            options: []
        }
    }
    addOption(event) {
        event.preventDefault();
        event.persist();

        const option = event.target[0].value;

        this.setState((preVal) => {
            preVal.options.push(option);
            return {
                options: preVal.options
            }
        })
        event.target[0].value = "";
    }
    removeOptions() {
        this.setState((preVal) => {
            return {
                options: []
            }
        })
    }
    generateRandomOption() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        console.log("Random Choice: ", this.state.options[randomNum]);
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h2>{this.state.subtitle}</h2>
                <p>Options Amount: {this.state.options.length}</p>
                <button disabled={this.state.options.length < 1} onClick={this.generateRandomOption}>Generate random Choice</button>
                <button disabled={this.state.options.length < 1} onClick={this.removeOptions}>Remove all options</button>   
                {this.state.options.length > 0 && <ol>
                    {this.state.options.map((option, id) => {
                        return <li key={id}>{option}</li>
                    })}
                </ol>}
                <form onSubmit={this.addOption}>
                    <br/>
                    <input type="text" />
                    <button>Add Option</button>
                </form>          
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById("box"));