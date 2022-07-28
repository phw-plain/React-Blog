import React from 'react';
import { useParams } from 'react-router-dom';
import dummy from "../data/data.json";
import './ListDetail.css';

const ListDetail = () => {
    const { id } = useParams();
    const post = dummy.filter(item => {
        return item.id == id;
    })
    return(
        <div className='post-container'>
            <h1 className='title'>{post[0].title}</h1>
            <p className='body'>{post[0].body}</p>
        </div>
    );

}

export default ListDetail;