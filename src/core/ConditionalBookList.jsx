import { bookList } from "../fixtures/book_list";

function Book({ title, isAvailable }) {

    // Using `if` statement
    // if (isAvailable) {
    //     return <li>{title} ✅</li>
    // }
    // return <li>{title} ❌</li>

    // Using `&&`
    // 
    // return <li>{title} {!isAvailable && "❌"} </li>

    // Using trinary
    return <li>{title} {isAvailable ? "✅" : "❌"} </li>
}

export default function ConditionalBookList() {
    return (
        <div>
            <h1>Conditional Rendering</h1>
            <ul>
                {bookList.map(book => <Book title={book.title} isAvailable={book.available} key={book.title}></Book>)}
            </ul>
        </div>
    );
}