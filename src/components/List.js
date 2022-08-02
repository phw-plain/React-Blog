import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./List.css";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        }
    }
    render() {
        const content = this.state.data.map((list) => (
            <tr><td>{list.id}</td><td><Link className="black" to ={"/list/"+list.id}>{list.title}</Link></td></tr>
        ))
        const styles={
            width :"80%",
            margin : "3%"
        }
        return (
            <div>
                <div class="table-responsive">
                    <center>
                        <table class="table" style={styles} >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {content}
                        </tbody>
                    </table>
                    </center>
                </div>
                
            </div>
        )
    }

}


export default List;