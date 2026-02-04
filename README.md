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
