import React from 'react';

function SearchBox(props){
    return (
       <div className="col cols-sm-4">
           <input
             className="form-control"
             value={props.value}
             onChange={ (event) => props.setSearchValue(event.target.value)}
             placeholder="Type to search..."
           />
       </div>
    );
}

export default SearchBox;