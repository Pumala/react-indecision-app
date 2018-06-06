const appRoot1 = document.getElementById("box");

const app = {
    title: "Indecision App",
    bio: "What are you waiting for?",
    options: []
}

const onFormSubmit = (event) => {
    event.preventDefault();
    event.persist();
    const option = event.target.elements[0].value;

    if (option) {
        app.options.push(option);
        console.log("Adding Option: ", event);

        event.target.elements[0].value = "";
        renderOptionsApp();
    }

};

const removeAllOptions = () => {
    app.options = [];
    renderOptionsApp();
}

const chooseRandomOption = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);

    const option = app.options[randomNum];
    console.log("Random Option Chosen: ", option);
};

const renderOptionsApp = () => {
    const template1 = (
        <div>
            <h1>{app.title}</h1>
            <h3>{app.bio}</h3>
            <p>Options Amount: {app.options.length}</p>
            <button disabled={app.options.length == 0} onClick={chooseRandomOption}>What should I do?</button>
            <button onClick={removeAllOptions}>Remove All Options</button>
            <ol>
                {
                    app.options.map((option, index) => {
                        return <li key={index}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
               <input type="text" name="option"/>
               <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template1, appRoot1);
}

renderOptionsApp();