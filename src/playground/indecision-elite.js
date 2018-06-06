class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.state = {
            options: props.options
        }
    }
    handleDeleteOption(option) {
        console.log("handling delete option....", option);
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        console.log("Random Option: ", this.state.options[randomNum]);
    }
    handleAddOption(option) {
        if (!option) {
            return "Enter valid value to add option.";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists.";
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }))
    }
    render() {
        const subtitle = "Choose wisely.";

        return (
            <div>
                <Header 
                    subtitle={subtitle} 
                />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick} 
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption} 
                />
                <AddOption 
                    handleAddOption={this.handleAddOption} 
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: ["ponk"]
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: "Temp Header"
};

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button disabled={!props.options.length > 0} onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option, index) => (
                    <Option 
                        key={index} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }    
        </div>
    )
}

 const Option = (props) => {
     return (
         <div>
            {props.optionText}
            <button onClick={props.handleDeleteOption}>X</button>    
        </div>
     )
 }

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        e.persist();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState((preVal) => {
            return {
                error: error
            }
        });

        this.setState(() => {
            return { error: error }
        })

        e.target.elements.option.value = "";
    }
    render() {
        return (
            <div>
                { this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("box"));