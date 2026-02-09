import './App.css'
import BookList from './lessons/core/BookList'
import ConditionalBookList from './lessons/core/ConditionalBookList'
import FilteredBookList from './lessons/core/FilteredBookList'
import UseStateSample from './lessons/core/UseStateSample'

import CompCom from './lessons/component_communication/CompCom';
import SharedCounter from './lessons/component_communication/SharedCounter'
import ControlledForm from './lessons/component_communication/ControlledForm'
import ItemAvailabilityChecker from './samples/item_availability_checker/ItemAvailabilityChecker'

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
