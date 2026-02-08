import './App.css'
import BookList from './core/BookList'
import ConditionalBookList from './core/ConditionalBookList'
import FilteredBookList from './core/FilteredBookList'
import UseStateSample from './core/UseStateSample'

function App() {
  return (
    <div>
      <UseStateSample />
      <hr />
      <BookList />
      <hr />
      <FilteredBookList />
      <hr />
      <ConditionalBookList />
    </div>
  )
}

export default App
