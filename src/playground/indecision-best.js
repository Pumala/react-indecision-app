class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRandomOption = this.handleRandomOption.bind(this);
        this.handleRemoveOptions = this.handleRemoveOptions.bind(this);
        this.propsHandleAddOption = this.propsHandleAddOption.bind(this);
        this.deleteSingleOption = this.deleteSingleOption.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }))
                console.log("fetching data");
            }
        
        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
            console.log("saving data");
        }
    }
    componentWillUnmount() {
        console.log("Component will unmount");
    }
    handleRandomOption() {
        console.log("handling random Option..........");
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        console.log("random option::", this.state.options[randomNum]);
    }
    handleRemoveOptions() {
        console.log("handling removal of all options");
    }
    propsHandleAddOption(option) {
        if (!option) {
            console.log("nothing!!");
        }
        this.setState((preVal) => ( {options : preVal.options.concat(option)} ))
    }
    deleteSingleOption(deletedOption) {
        
        this.setState((preVal) => ({ 
            options: 
                preVal.options.filter((option) => 
                    option !== deletedOption
                ) 
        } ))
        
    }
    render() {
        const theTitle = "I am a Title";

        return (
            <div>
                <Header 
                    title={theTitle}
                />
                <Action 
                    handleRandomOption={this.handleRandomOption}
                />
                <Options 
                    options={this.state.options}
                    handleRemoveOptions={this.handleRemoveOptions}
                    deleteSingleOption={this.deleteSingleOption}
                />
                <AddOption 
                    propsHandleAddOption={this.propsHandleAddOption}
                />
            </div>
        )
    }
}

// IndecisionApp.defaultProps = {
//     options: ["hike", "breathe"]
// };

const Header = (props) => {
    // console.log("header props:: ", props);
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    subtitle : "subtitle......"
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handleRandomOption}>
                Choose random Option
            </button>
        </div>
    )
}

const Options = (props) => {
    // console.log("Mama Options props:: ", props);
    return (
        <div>
            <button onClick={props.handleRemoveOptions}>
                Remove All Options
            </button>
            { 
                props.options.map((theOption, index ) => {
                    return <Option key={index} option={theOption} deleteSingleOption={props.deleteSingleOption}/>
                })
            }
        </div>
    )
}

const Option = (props) => {
    // console.log("Baby Option => ", props);
    return (
        <div>
            {props.option}
            <button 
                onClick={(e) => {
                    props.deleteSingleOption(props.option)
                }}
            >X</button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: "Undefined"
        }
    }
    handleAddOption(event) {
        console.log("event => ", event);
        event.preventDefault();
        event.persist();

        const option = event.target.elements.option.value.trim();
        const error = this.props.propsHandleAddOption(option);

        event.target.elements.option.value = "";
    }
    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("box"));