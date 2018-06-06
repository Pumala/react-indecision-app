// JSX - JavaScript XML

var user = {
    title: "Bio",
    name: "", 
    age: 19, 
    eyeColor: "",
    location: ""
}

function getEyeColor(color) {
    if (color) {
        return color;
    } else {
        return "Unknown";
    }
};

function getLocation(location) {
    if (location) {
        return <li>Location: {location}</li>;
    }
}

var template = (
    <div>
        <h1>{user.title}</h1>
        <li>Name: {user.name ? user.name : "Anonymous"}</li>
        { (user.age && user.age >= 18) && <li>Age: {user.age} </li>}
        <li>Eye Color: {getEyeColor(user.eyeColor)}</li>
        {getLocation(user.location)}     
    </div>
);

var appRoot = document.getElementById("box");

ReactDOM.render(template, box);

var templateOne = (
    <div>
        <p>So many decisions to make...</p>
        <ol>
            <li>Numero uno</li>
            <li>Numero dos</li>
        </ol>
    </div>
);

var appRoot1 = document.getElementById("box2");

ReactDOM.render(templateOne, appRoot1);

var app = {
    title: "Hmmmm...", 
    subtitle: "subb",
    bio: "bio goes here",
    // options: []
    options: ["apple", "banana"]
};



var templateTwo = (
    <div>
        <h1>Title: {app.title}</h1>
        {app.subtitle && <p>Subtitle: {app.subtitle}</p>}
        {app.subtitle && <p>Bio: {app.bio}</p>}

        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ol>
            <li></li>
            <li></li>
        </ol>
    </div>
);
var appRoot2 = document.getElementById("box1");

ReactDOM.render(templateTwo, appRoot2);