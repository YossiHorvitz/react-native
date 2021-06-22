this project [rn-starter] refer to this course in [Udemy](https://www.udemy.com/course/the-complete-react-native-and-redux-course/)

# React Native

React native it's a way to write cross platform applications on javascript.

## react component file

1. Import libraries we need to create a component.
2. Create a component - a function that return some `JSX`.
3. Create a stylesheet to style our component.
4. Export the component, so we can use it elsewhere in our project.

## `React` library:

it is all about how different components work together.

## `react-native` library:

knows how to take some information from those components,
and use it to actually show some content on the mobile device.

## `JSX`

is 'special' syntax that look like HTML,
it passes into React-Native metro bundler.
that bundler using tool call [Babel](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=DwFQpgHgLgBAzlAngGzAXgN4ZgMwPYB2UAygJYBeYAXDAMwAMMAvkwHwASYyyeMUviPAFcYpHDEEieeANakCAcxgBDWFAAWpOMAD04aKyA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.14.6) to turn that `JSX` to some plain javascript code.

### Props:

'system to pass data from a parent to a child.'

Most components can be customized when they are created, with different parameters.
These created parameters are called `props`, short for properties
Props are arguments passed into React components.
Props are also how you pass data from one component to another, as parameters.

examples:

```
<Text style={styles.container}>Press me!</Text>
...
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
};
```

#### Destructuring Props

What is destructuring?
Destructuring was introduced in ES6. It’s a JavaScript feature that allows us to extract multiple pieces of data from an array or object and assign them to their own variables.
Imagine you have a person object with the following properties:

```
const person = {
  firstName: "Yossi",
  lastName: "Horvitz",
  country: "Israel"
}
```

#### Before ES6, you had to access each property individually:

```
console.log(person.firstName) // Yossi
console.log(person.lastName) // Horvitz
console.log(person.country) // Israel
```

Destructuring lets us streamline this code:

```
const { firstName, lastName, country } = person;
```

### State:

'system to track a piece of data that will change over time.
if that data changes, our app will 'rerender'.'

useState is what we refer to as a hook.
a hook is a function that adds some new functionality to a function component.

example:

```
const [name, setName] = useState("");
```

every time we call setName function React is going to automatically rerun this entire function component.

##### Note:

A state variable can be passed to a child components.
at that point, the state variable is now being used as props.

## Reducer

(function that manages changes to an object)

Reducer is a function that get called with 2 objects.
Argument #1 - object that has all of our state in it.
Argument #2 - object that describes the update we want to make.

we never change Argument #1 directly,
we must always return a value to be used as Argument #1.

### useEffect:

useState => run the arrow function **every time** the component is rendered.
useEffect => run the arrow function **only** when the components is **first** rendered
**and** when the **_value_ changes**. for example:
`useEffect(() => {}, [value])`
