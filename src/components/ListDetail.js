import React from 'react';
import { useParams } from 'react-router-dom';

import CommentsView from './CommentsView'

const ListDetail = () => {
    const { id } = useParams();

    return(
        <div>
                <h1>ListDetail {id}</h1>
            <CommentsView id={id} />
        </div>
    )

}

export default ListDetail;