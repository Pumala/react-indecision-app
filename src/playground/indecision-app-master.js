class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
                <button disabled={!this.props.hasOptions} onClick={this.props.removeOptions}>Remove all options</button>
        )
    }
}

class Random extends React.Component {
    render() {
        return (
                <button disabled={!this.props.hasOptions} onClick={this.props.generateRandomOption}>Generate random Choice</button>
        )
    }
}

class List extends React.Component {
    render() {
        return (
            <div>
                {this.props.hasOptionsS && <ol>
                    {this.props.options.map((option, id) => {
                        return <li key={id}>{option}</li>
                    })}
                </ol>}
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.addOption}>
                    <br/>
                    <input type="text" />
                    <button>Add Option</button>
                </form>  
            </div>
        )
    }
}

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.removeOptions = this.removeOptions.bind(this);
        this.generateRandomOption = this.generateRandomOption.bind(this);
        this.state = {
            options: []
        }
    }
    addOption(event) {
        event.preventDefault();
        event.persist();

        const option = event.target[0].value;

        if (option == "") {
            return;
        }        else {
            this.setState((preVal) => {
                preVal.options.push(option);
                return {
                    options: preVal.options
                }
            })
            event.target[0].value = "";
        }
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
        const title = "So Many Decisions...";
        const subtitle = "Choose wisely.";   
        let hasOptionsS = this.state.options.length > 0;

        return (
            <div>
                <Header title={title} subtitle={subtitle}></Header>
                <p>Options Amount: {this.state.options.length}</p>
                <Random hasOptions={hasOptionsS} generateRandomOption={this.generateRandomOption}></Random>
                <Action hasOptions={hasOptionsS} removeOptions={this.removeOptions}></Action>
                <List hasOptionsS={hasOptionsS} options={this.state.options}></List>
                <AddOption addOption={this.addOption}></AddOption>        
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById("box"));