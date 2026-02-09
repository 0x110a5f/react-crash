# React Crash Learning

## Core
- Must learn.

### JSX
- An extension that allows HTML-like markup to be written in JavaScript.

```jsx
function SampleListItem() {
    return (
        <div class="sample-list-item">
            List item.
        </div>
    )
}

export default function SampleDiv() {
    /* Should always return a single root element */
    return (
        /* can be  */
        <> 
            <SampleListItem />
            <SampleListItem />
            <SampleListItem />
        </>
    )
}
```

#### Rules

- Should always return a single root element.
    - If you want to return a set of multiple components/elements, those should be wrapped in a single parent element.
    - You can use an empty tag or **Fragment** (`<>` and `</>`) instead of a `div` for wrapping children elements. 

- All tags must be closed.
    - Self-closing such as `<img />`.
    - Closing tag such as `<li> ... </li>`.

- camelCasing
    - HTML and SVG attributrs must be written in camelCase. example as follows:
        - `className` instead of `class`.
    - List of DOM components props, click [here](https://react.dev/reference/react-dom/components/common).
    - HTML/SVG to JSX converer, click [here](https://transform.tools/html-to-jsx).

### Function Components

- Components are defined by creating a function that returns it.
- Function name should always start with a capital letter.
- Without the parenthesis, any code after the `return` will be ignored.
```jsx
function Sample() {
    return (
        <div> This is a div. </div>
    )
}
```

#### Exporting Components

- The `export default` prefix lets you create a component from a separated file and import it to another file(s).
```jsx
export default function Sample() {
    return (
        <div> This is a div. </div>
    )
}
```

#### Using components

- You can declare a child component on the top level inside the same file as the parent component.
    - See [SampleList.jsx](src/core/SampleList.jsx) for example.

- You can also import a child component from another file.
    - See [Parent.jsx](src/core/Parent.jsx) and [Child.jsx](src/core/Child.jsx) for example.

- Do not nest the definition of components
```jsx
/* WRONG WAY */
export default function Parent() {
    function Child() {

    }
}

/* RIGHT WAY */
export default function Parent() { ... }

function Child() {...}
```

### State (`UseState`) with event handlers.

- Adding state to a component.
- `useState` returns exactly two values:
    - The current state.
    - A invokable (`set` function) to update the state's value.
- See [StateSample.jsx](src/core/UseStateSample.jsx) for example.

---
## Rendering List
- see [BookList.jsx](src/core/BookList.jsx) for example.

### Keys

- `key` is not necessary of the list was truely hard-coded.
- When creating a list from mapped array, `key` attribute with a unique value is necessary, Why?
    - Uniquely identifies each item in a list
    - Lets React know which items changed, moved, were added, or removed
    - Prevents unnecessary re-renders and bugs

### From Array
- List can be rendered by mapping an array of items using `.map()`.
- `.map()` is a JavaScript method usable not only in React.

### Filtering Array
- List can be filtered by using `.filter()`.
- `.filter()` is a JavaScript method usable not only in React.

## Conditional Rendering
- see [ConditionalBookList.jsx](src/core/ConditionalBookList.jsx) for example.
- Components can return elements conditionally by using `if`, `&&` and trinary `? :`.
- `&&` is used if no element must be returned if the given condition is falsy. 
    - Example: condition && "Hello".
    - If the `condition` is true, it will return "Hello", otherwise, it will return null.

---
## Component communication

### Props
- Ways to define components with props.
```jsx
// It can be simply defined as an object.
// members can be accessed via dot notation.
function ComponentA(props) {
    const name = props.name;
}

// Or by explicitly naming props members
function ComponentB({ name, age }) {
    // ...
}
```
- Ways to pass props to a component.
```jsx
function ComponentC() {
    const user = {
        name: "Some user",
        age: 25,
    };


    return (
        <>
            {/* Pass all data by `...` (spread) operator */}
            <ComponentA {...user}>
            {/* Pass all by asigning thru property name */}
            <ComponentA name={user.name} age={user.age}>
        <>
    )
}
```

## Lifting state up
- There are times that a state is shared by multiple components, instead of having those component manage their own state, the state is passed down from the parent.

- see [SharedCounter.jsx](src/samples/component_communication/SharedCounter.jsx) form example.

## Controlled Inputs
- Form elements like `inputs`, `textarea`, etc, uses state handled by the DOM marking them as uncontrolled elements/components. When React states are used with these elements, it is then considered as controlled elements/components.

- see [ControlledForm.jsx](src/samples/component_communication/ControlledForm.jsx)