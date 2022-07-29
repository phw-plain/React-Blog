import React, {useState} from "react";
import "./Write.css";
import data from "../data/data.json";

const Write = (props) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const sublit = () => {
        if(title.length === 0)
            alert("제목이 없습니다.");
        else if(content.length === 0)
            alert("내용이 없습니다");
        else
        {
            console.log(data);
            const newData = {
                id: data.length+1,
                title: title,
                body: content,
            }
            data.push(newData)
            console.log(data);
            
        }
    }

    return (
        <div class Name = 'Write'>
            <div>
                <input onChange={handleTitle} type='text' id = 'title_txt' name='title' placeholder='제목'/>
            </div>

            <div>
                <textarea onChange={handleContent} id='content_txt' name='contents' placeholder='내용을 입력하세요.'></textarea>
            </div>

            <button onClick={sublit}>
                작성하기
            </button>
        </div>
    );

}

export default Write;