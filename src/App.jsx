import './App.css'
import BookList from './samples/core/BookList'
import ConditionalBookList from './samples/core/ConditionalBookList'
import FilteredBookList from './samples/core/FilteredBookList'
import UseStateSample from './samples/core/UseStateSample'

import CompCom from './samples/component_communication/CompCom';
import SharedCounter from './samples/component_communication/SharedCounter'
import ControlledForm from './samples/component_communication/ControlledForm'
import ItemAvailabilityChecker from './samples/apps/item_availability_checker/ItemAvailabilityChecker'

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
      <hr />
      <hr />
      <CompCom></CompCom>
      <hr />
      <SharedCounter></SharedCounter>
      <hr />
      <ControlledForm></ControlledForm>
      <hr />
      <ItemAvailabilityChecker></ItemAvailabilityChecker>
    </div>
  )
}

export default App
