const add = (a, b) => x + b;

const x = 5;
const y = 6;

console.log("Adding: " + x + " + " + y + " = " + add(x, y));

const user = {
    name: "Sweeney",
    cities: ["Boston", "Los Angeles", "Atlanta"],
    colors: ["pink", "red", "blue"],
    printColors() {
        return this.colors.map((color, idx) => {
            return "Voted #" + idx + color;
        })
    },
    printCitiesLived() {
        this.cities.forEach((city) => {
            console.log(this.name + " lived in " + city + ".");
        })
    }
};

user.printCitiesLived();
console.log(user.printColors());

const multiplier = {
    numbers: [4, 2, 8, 4, 3],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((num) => {
            return num * this.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());