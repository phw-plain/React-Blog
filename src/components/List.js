import React from 'react';
import { Link } from 'react-router-dom';

const List = () => {

    return(
        <div>
            <Link to={`/list/${1}`}>
                <h1>List</h1>
            </Link>
        </div>
    )

}

export default List;