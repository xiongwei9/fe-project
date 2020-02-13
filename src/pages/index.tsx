import * as React from "react";
import * as ReactDOM from "react-dom";

console.log('hello ts');


interface Animal {
    name: string;
    age: number;
}

const ani: Animal = {
    name: 'dog',
    age: 1,
};
console.log(ani);

class Dog implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const dog = new Dog('puppy', 1);

console.log(dog);

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;

console.log(myIdentity);

let func = (a: number, b: number): number => {
    return a + b;
}

console.log(func(1, 2));

const $app = document.createElement('div');
$app.setAttribute('id', 'app');
document.body.appendChild($app);

const App = () => (
    <div>hello</div>
);

ReactDOM.render(
    <App />,
    $app
);
