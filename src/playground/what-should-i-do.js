class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision App!!";
        const subtitle = "What are you waiting for???";
        const options = ["Thing 1", "Thing 2", "Thing 4"];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options}/>
                <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h4>{this.props.subtitle}</h4>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert("HandlePick!");
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert("Handle Remove All...");
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                {
                    this.props.options.map((option, id) => 
                        <Option key={id} optionText={option} />
                    )
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>Option: {this.props.optionText}</p>
            </div>
        );
    }
}

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handlerAddOption = this.handlerAddOption.bind(this);
    }
    handlerAddOption(event) {
        event.preventDefault();
        event.persist();
        const option = event.target[0].value.trim();

        if (option) {
            alert("new option!!");
            this.props.options.push(option);
        } 
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handlerAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const box = document.getElementById("box");

ReactDOM.render(<IndecisionApp />, box);