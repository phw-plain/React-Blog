import React, { useState } from 'react';
import "./InputComment.css";
import Comments from "./comments.json";

const InputComment2 = () => {

    const [username, setUsername] = useState("");
    const [input, setInput] = useState("");
    const [comments, setComments] = useState(Comments);

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
            console.log(input + " " + username);
            const newComments = [...comments]

            // console.log(comments)
            const Data = {
                id: 1,
                content: input,
                name: username,
                like: 0
            }
            newComments.push(Data);
            setComments(newComments)

            console.log(newComments)
            console.log(comments)
        }
        setInput("");
        setUsername("");
    }


    return (
        <div class='Input_Container'>
            <input class='Input_name' type="text" name='name' placeholder='김하나' onChange={onChangeName}></input><br />
            <input class='Input_content' type="text" name='content' placeholder='내용을 입력하세요' onChange={onChangeBody}></input><br />
            <button class='Input_subBtn' type='submit' onClick={addComment}>작성</button>
            <hr></hr>

        </div>
    )


}

export default InputComment2;