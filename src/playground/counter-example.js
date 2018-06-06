let count = 0;
const appRoot1 = document.getElementById("box");

const addOne = () => {
    count += 1;
    console.log("Adding one to count: " + count);
    renderCounterApp();
}

const reset = () => {
    count = 0;
    console.log("reseting count: ", count);
    renderCounterApp();
};

const minusOne = () => {
    count -= 1;
    console.log("minus 1 from count: ", count);
    renderCounterApp();
};

const renderCounterApp = () => {
    const template1 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    
    
    ReactDOM.render(template1, appRoot1);
}

renderCounterApp();