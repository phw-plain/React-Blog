import React from 'react';
import { useParams } from 'react-router-dom';

const ListDetail = () => {
    const { id } = useParams();

    return(
        <div>
                <h1>ListDetail {id}</h1>
        </div>
    )

}

export default ListDetail;