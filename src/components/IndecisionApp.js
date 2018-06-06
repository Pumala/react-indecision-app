import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];

        this.setState(() => ({
            selectedOption: option
        }));
    };
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }
    handleRemoveOptions = () => {
        // console.log("handling removal of all options");
        this.setState({
            options: []
        })
    };
    propsHandleAddOption = (option) => {
        if (!option) {
            return "Enter valid value to add item.";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists.";
        } 
        
        this.setState((preVal) => ({ 
            options: preVal.options.concat(option) 
        }))
    };
    deleteSingleOption = (deletedOption) => {

        this.setState((preVal) => ({
            options:
                preVal.options.filter((option) =>
                    option !== deletedOption
                )
        }))

    };
    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }))
            }

        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
            // console.log("saving data");
        }
    }
    componentWillUnmount() {
        // console.log("Component will unmount");
    }
    render() {
        const theTitle = "Thinking aloud...";

        return (
            <div>
                <Header
                    title={theTitle}
                />
                <div className="container">
                    <Action
                        handlePick={this.handlePick}
                        hasOptions={this.state.options.length > 0}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleRemoveOptions={this.handleRemoveOptions}
                            deleteSingleOption={this.deleteSingleOption}
                        />
                        <AddOption
                            propsHandleAddOption={this.propsHandleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    closeModal={this.handleClearSelectedOption}
                />
            </div>
        )
    }
};