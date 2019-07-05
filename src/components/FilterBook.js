import React from 'react';

const FilterBook = ({filterAction}) => {
    let input;
  
    return (
      <div className='row'>
          <div className="col-12 col-md-8">
          <label>Filter</label>
            <input ref={node => {
            input = node;
            }} onKeyUp={() => {
                filterAction(input.value);
                }}/>
          </div>
      </div>
    );
  };

  export default FilterBook;