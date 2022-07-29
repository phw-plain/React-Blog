import React, { useState } from 'react';
import "./InputComment.css";

import CommentsView from './CommentsView'

const InputComment = (props) => {
    const [username, setUsername] = useState("");
    const [input, setInput] = useState("");

    const onChangeBody = (e) => {
        setInput(e.target.value);
    }
    const onChangeName = (e) => {
        setUsername(e.target.value);
    }

    const addComment = () => {
        if (username.length === 0) {
            alert("내용이 없습니다.");
        }
        else if (input.length === 0) {
            alert("내용이 없습니다.");
        }
        else {
            const Data = {
                id: Number(props.id),
                name: username,
                content: input,
                like: 0
            }
            props.Comments.push(Data)

            // clear
            document.body.querySelector('.Input_name').value = ''
            document.body.querySelector('.Input_content').value = ''
            setInput("");
            setUsername("");
        }
    }

    return (
        <div>
            <div className='Input_Container'>
                <input className='Input_name' type="text" name='name' placeholder='이름' onChange={onChangeName}/><br />
                <input className='Input_content' type="text" name='content' placeholder='내용을 입력하세요' onChange={onChangeBody}/><br />
                <button className='Input_subBtn' type='submit' onClick={addComment}>작성</button>
                <hr/>
            </div>
            <CommentsView id={props.id} Comments={props.Comments} />
        </div>
    )

}

export default InputComment;