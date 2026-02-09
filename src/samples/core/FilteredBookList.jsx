import { bookList } from "../../fixtures/book_list";


function FilteredBookList() {
    return (
        <div>
            <h1>Filtering List</h1>
            <ul>
                {bookList
                    .filter(book => book.available)
                    .map(book => <li key={book.title}>{book.title}</li>)}
            </ul>
        </div>
    );
}

export default FilteredBookList