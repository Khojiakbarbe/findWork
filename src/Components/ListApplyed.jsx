import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { changeModeContext } from "./DataProvider/DataContext";


export default function ListApplyed() {

    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9000/applys')
            .then(res => {
                setList(res.data)
            })
            .catch(err => console.warn(err))
    }, [])



    const [mode, setMode] = useContext(changeModeContext)

    if (mode) {
        document.body.style.backgroundColor = "#F2F2F2"
    } else {
        document.body.style.backgroundColor = "#121721"
    }

    return (
        <div className="container mt-5">
            <div className="row">
                {list.map(post => {
                    return (
                        <div key={post.id} className="myCols col-md-4 mb-2" >
                            <div className=" p-5" style={mode ? { backgroundColor: 'white' } : { backgroundColor: '#19202D', color: 'white' }}>
                                <p style={{ color: 'gray' }}>Contract :  {post.contract}</p>
                                <h3><strong>{post.position}</strong></h3>
                                <h3 style={{ color: 'gray' }}>{post.company}</h3>
                                <h3 style={{ color: 'blue' }}><strong>Name : {post.name}</strong></h3>
                                <h3 style={{ color: 'blue' }}><strong>Last name : {post.LastName}</strong></h3>
                                <h3 style={{ color: 'blue' }}><strong>English Level : {post.engLevel}</strong></h3>
                                <h3 style={{ color: 'blue' }}><strong>Experinace : {post.experiance}</strong></h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}