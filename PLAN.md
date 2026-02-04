## Day 1 – Core

### Learn
- JSX
- Function components
- useState
- Events
- Conditional rendering
- Lists

### Learning Application
- Create a sample application that can do the following:
    - Render a list of items.
    - Add or Remove item(s) from the list.
    - Filter items of the list.
    - Create reusable components.

### Understand Concepts
- One-way data flow
- Props are read-only

---
## Day 2 – Component Communication

### Learn
- Props
- Lifting state up
- Controlled inputs

### Learning Application
- Create a sample app that can do the following:
    - Supports shared state.
    - Components that can emit events.

---
## Day 3 – Routing (Critical)

### Install:
```zsh
$ npm i react-router-dom
```

### Learn
- BrowserRouter
- Routes / Route
- useParams
- useNavigate
- _Bonus: Protected routes (simple boolean auth)_

### Learning Application
- Create a sample application that uses navigation.

---
## Day 4 – Data Fetching

### Learn
- useEffect
- Fetch API
- Loading & error states

### Learning Application
- Create a sample application that can:
    - Fetch data from a public api
    - Display a dedicated page for a specific piece of data.

---
## Day 5 – Forms & Validation

### Learn
- Controlled inputs
- onSubmit
- Basic validation
- _Optional: React Hook Form_
```zsh
$ npm i react-hook-form
```

### Learning Application
- Create a sample application that can validate user inputs.

---
## Day 6 – State Management (Light)
- For this part, use `Zustand` for simplicity of handling app wide state.
```zsh
npm i zustand
```

### Learn
- useContext

### Learning Application
- Create a sample application that can support an app wide state that are sharable across multiple components and pages.

---
## Day 7 – Real App Assembly

### Build the following
- This will cover most of what was learned so far:
    - Auth (fake is fine)
    - Dashboard
    - CRUD page
    - Routing
    - API integration
    - Loading + error handling

### Directory Structure

```
src/
  pages/
  components/
  hooks/
  services/
  store/
```

### Mental Rules (Important)
- State lives high, UI stays dumb
- Keep components small
- Don’t fetch inside render
- Don’t over-optimize

---
## What's Next?
- Create another plan on learning the following:
    - React Query
    - Performance (memo, useCallback)
    - Suspense
    - Testing
    - Redux