import React, {useState} from "react";
import { Button } from 'react-bootstrap';
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

    const submit = () => {
        if(title.length === 0)
            alert("제목이 없습니다.");
        else if(content.length === 0)
            alert("내용이 없습니다");
        else
        {
            const newData = {
                id: data.length+1,
                title: title,
                body: content,
            }
            data.push(newData)
            alert('작성 완료!')

            // 화면 초기화
            setTitle('')
            setContent('')
            document.body.querySelector('#title_txt').value = ''
            document.body.querySelector('#content_txt').value = ''
        }
    }

    return (
        <div className = 'Write'>
            <div>
                <input onChange={handleTitle} type='text' id = 'title_txt' name='title' placeholder='제목'/>
            </div>

            <div>
                <textarea onChange={handleContent} id='content_txt' name='contents' placeholder='내용을 입력하세요.'></textarea>
            </div>

            <Button className="submit" onClick={submit}>
                작성하기
            </Button>
        </div>
    );

}

export default Write;