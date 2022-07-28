import React, { useState } from 'react';

import comments from '../data/comments.json'

const CommentsView = (props) => {
    const [comment, setComment] = useState(comments);

    return(
        <div id="commentsview">
            {
                comment.filter(item => item.id === Number(props.id)).map((item, idx) => 
                    <div className='comment' key={idx}>
                        <div className='inline'>
                            <div>😀</div>
                            <div className='comment-name'>{item.name}</div>
                        </div>
                        <div className='left'>
                            {item.body}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CommentsView;