const appRoot = document.getElementById("box");

let showDetails = true;

const toggleVisibility = () => {
    showDetails = showDetails ? false : true;

    renderVisibilityToggleApp();
}
const renderVisibilityToggleApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{showDetails ? "Show Details" : "Hide Details"}</button>
            {!showDetails && <p>I am random Text!</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderVisibilityToggleApp();