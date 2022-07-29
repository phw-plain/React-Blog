import React, { useEffect, useState } from 'react';
const CommentsView = (props) => {
    const [comment, setComment] = useState(props.Comments);

    const countLikt = (idx) => {
        if(document.body.querySelector(`#like${idx}`).classList[1] !== 'on'){
            const newComment = [...comment];
            newComment.map((item, index) =>  {
                if(item.id === Number(props.id) && idx === index) {
                    newComment[index].like++;
                    setComment(newComment)
                    document.body.querySelector(`#like${idx}`).classList.add('on')
                }
            })
        } else {
            const newComment = [...comment];
            newComment.map((item, index) =>  {
                if(item.id === Number(props.id) && idx === index) {
                    newComment[index].like--;
                    setComment(newComment)
                    document.body.querySelector(`#like${idx}`).classList.remove('on')
                }
            })
        }
    }

    useEffect(() => {
        console.log('값 변경 됨!!')
        setComment(props.Comments)
    }, [props.Comments]);


    console.log(comment)

    return(
        <div id="commentsview">
            {
                comment.map((item, idx) => 
                    (item.id === Number(props.id)) ? 
                        <div className='comment' key={idx}>
                            <div className='inline'>
                                <div>😀</div>
                                <div className='comment-name'>{item.name}</div>
                            </div>
                            <div className='flex-between'>
                                <div>{item.body}</div>
                                <button id={`like${idx}`} className='likebtn' onClick={ () => countLikt(idx) }>❤ {item.like}</button>
                            </div>
                        </div> 
                         : null
                )
            }
        </div>
    )
}



export default CommentsView;