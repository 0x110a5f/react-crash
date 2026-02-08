import { bookList } from "../fixtures/book_list";



function BookList() {
    return (
        <section>
            <h1>Rendering List from Array</h1>
            <ul>
                {bookList.map(book => <li key={book.title}>{book.title}</li>)}
            </ul>
        </section>
    );
}

export default BookList