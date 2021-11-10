import { compose, pipe } from 'lodash/fp';


const input = '   JavaScript   ';

const trim = (str) => str.trim();
const wrapIndiv = (str) => `<div>${str}</div>`;
const warp = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

//functional programming style
const result = wrapIndiv(toLowerCase(trim(input)));

//using Lodash
//compose

const transform = compose(wrapIndiv, toLowerCase, trim);
transform(input);

//pipe
const useingpipe = pipe(trim, toLowerCase, wrapIndiv);
useingpipe(input);

//pipe with 2 parameter
const trans = pipe(trim, toLowerCase, warp('div'));
console.log(trans(input));


//Object Updating
//in redux data should be immuitiblity
const person = {
    name: 'Runner',
    address: {
        city: 'Yangon',
        country: 'Myanmar'
    }
};

const update1 = Object.assign({}, person, { name: 'Jhon', age: 30 }) //1 arg create object | 2 arg name of copy object | 3 arg adding new properties or overwirte properties
//or
//for doing this addres will change by itself 
//or not if change in copy addrss original will also change
const update2 = {
    ...person,
    address: {
        ...person.address,
        city: 'New York'
    },
    name: 'Bob', age: 20
};

console.log(person)
console.log(update1, update2)



//array
const number = [1, 2, 3]

//adding item in specific index
const index = number.indexOf(3);
const added = [
    ...number.slice(0, index),
    4,
    ...number.slice(index)
]

//Removing
const removed = number.filter(n => n !== 2);

//updating
const updated = number.map(n => n === 2 ? 20 : n);
