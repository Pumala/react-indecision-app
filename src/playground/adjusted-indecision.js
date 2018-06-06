const Header = (props) => {
    
        return (
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        )
    }
    
    Header.defaultProps = {
        title: "Hmmmm..."
    }
    
    const Action = (props) => {
        return (
            <button disabled={!props.hasOptions} onClick={props.removeOptions}>Remove all options</button>
        )
    }
    
    const Random = (props) => {
        return (
            <button disabled={!props.hasOptions} onClick={props.generateRandomOption}>Generate random Choice</button>
        )
    }
    
    const List = (props) => {
    
        return (
            <div>
                {props.hasOptionsS && <ol>
                    {props.options.map((option, id) => {
                        return <li key={id}>{option}</li>
                    })}
                </ol>}
            </div>
        )
    }
    
    const AddOption = (props) => {
        return (
            <div>
                <form onSubmit={props.addOption}>
                    <br />
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
    
    class IndecisionApp extends React.Component {
        constructor(props) {
            super(props);
            this.addOption = this.addOption.bind(this);
            this.removeOptions = this.removeOptions.bind(this);
            this.generateRandomOption = this.generateRandomOption.bind(this);
            this.state = {
                options: props.options
            }
        }
        addOption(event) {
            event.preventDefault();
            event.persist();
    
            const option = event.target[0].value.trim();
    
            if (option == "") {
                return;
            } else {
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
            //const title = "So Many Decisions...";
            const subtitle = "Choose wisely.";
            let hasOptionsS = this.state.options.length > 0;
    
            return (
                <div>
                    <Header subtitle={subtitle} />
                    <p>Options Amount: {this.state.options.length}</p>
                    <Random hasOptions={hasOptionsS} generateRandomOption={this.generateRandomOption} />
                    <Action hasOptions={hasOptionsS} removeOptions={this.removeOptions} />
                    <List hasOptionsS={hasOptionsS} options={this.state.options} />
                    <AddOption addOption={this.addOption} />
                </div>
            )
        }
    }
    
    IndecisionApp.defaultProps = {
        options: []
    }
    
    ReactDOM.render(<IndecisionApp />, document.getElementById("box"));