import React from 'react';
import { useParams } from 'react-router-dom';
import dummy from "../data/data.json";

const ListDetail = () => {
    const { id } = useParams();
    const post = dummy.filter(item => {
        return item.id == id;
    })
    return(
        <div>
            <h1>{post[0].title}</h1>
            <p>{post[0].body}</p>
        </div>
    );

}

export default ListDetail;