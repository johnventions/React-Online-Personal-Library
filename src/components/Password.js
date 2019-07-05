import React from 'react';

const Password = ({submit}) => {
    // Input tracker
    let input;
  
    return (
      <div className='row'>
          <div className="col-8 col-md-4">
          <label>Password</label>
            <input type="password" ref={node => {
            input = node;
            }} />
          </div>
          <div className="col-4 col-md-4">
            <button className="mt-4"
            onClick={() => {
                submit(input.value);
                }}>
            Sign In
            </button>
          </div>
      </div>
    );
  };

  export default Password;