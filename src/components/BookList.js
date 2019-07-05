import React from 'react';
import BookItem from './BookItem'

function BookList(props) {
    var books = props.books;
    var list = (<tr></tr>);
    var filter = props.filter.toLowerCase();
    if (books.length > 0) {
        if (filter !== "") {
            books = books.filter(function(x) {
                return x.title.toLowerCase().includes(filter) || x.author.toLowerCase().includes(filter);
            });
        }
        list = books.map((book) => 
            <BookItem key={book.title}
                    setActive={props.setActive}
                    activeID={props.activeID}
                    deleteBook={props.deleteBook}
                    signedIn={props.signedIn}
                    book={book}></BookItem>
        );
    }
    return (
    <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">Title / Author</th>
            </tr>
        </thead>
        <tbody>
            { list }
        </tbody>
    </table>
    );
}

export default BookList;
