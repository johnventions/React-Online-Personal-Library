import React from 'react';

function BookItem(props) {
  var book = props.book;
  const deleteButton = (props.activeID === book._id && props.signedIn) ? 
                          (<button className="btn-delete ml-2" 
                              onClick={() => {
                                props.deleteBook(props.book._id);
                              }}>
                              DELETE
                          </button>) : "";
  return (
    <tr onClick={
      (e) => {
        if (e.target && e.target.type === "submit") {
          return;
        }
        if (props.activeID === book._id) {
          props.setActive(-1);
        } else {
          props.setActive(book._id);
        }
      }
    }>
        <td>
          <strong>{ book.title }</strong> by { book.author } {deleteButton}
          </td>
    </tr>
  );
}

export default BookItem;
