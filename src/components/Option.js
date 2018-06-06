import React from "react"

const Option = (props) => (
    <div className="option">
        <p className="option__text">
            {props.count}. {props.option}
        </p>
        <button
            className="button button--link"
            onClick={(e) => {
                props.deleteSingleOption(props.option)
            }}
        >X</button>
    </div>
);

export default Option;