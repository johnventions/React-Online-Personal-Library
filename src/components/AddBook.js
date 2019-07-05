import React from 'react';

const AddBook = ({addBook}) => {
    // Input tracker
    let inputTitle;
    let inputAuthor;
  
    return (
      <div className='row'>
          <div className="col-12 col-md-4">
          <label>Title</label>
            <input ref={node => {
            inputTitle = node;
            }} />
          </div>
          <div className="col-12 col-md-4">
          <label>Author</label>
        <input ref={node => {
          inputAuthor = node;
        }} />
          </div>
          <div className="col-12 col-md-4">
            <button className="mt-md-4"
            onClick={() => {
                addBook(inputTitle.value, inputAuthor.value);
                inputTitle.value = '';
                inputAuthor.value = '';
                }}>
            + Add
            </button>
          </div>
      </div>
    );
  };

  export default AddBook;