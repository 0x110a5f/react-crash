## Day 1 – Core

### Learn
- JSX
- Function components
- useState
- Events
- Conditional rendering
- Lists

### Learning Application
- Counter
- Todo list (add / remove)
- Conditional UI (loading, empty)

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
- Parent manages state
- Child emits events via callbacks

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
- create pages for the following:
    - /login
    - /dashboard (includes of items)
    - /items/:id

---
## Day 4 – Data Fetching

### Learn
- useEffect
- Fetch API
- Loading & error states

### Learning Application
- Fetch list from public API
- Detail page via route param

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
- Login form
- Create/Edit form

---
## Day 6 – State Management (Light)
- For this part, use `Zustand` for simplicity of handling app wide state.
```zsh
npm i zustand
```

### Learn
- useContext

### Learning Application
- Global auth state
- User profile

---
## Day 7 – Real App Assembly

### Build the following
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