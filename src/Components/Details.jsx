import { useEffect, useState,useContext } from "react";
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { changeModeContext } from "./DataProvider/DataContext";


export default function Details() {

    const { id } = useParams();
    const[mode , setMode] = useContext(changeModeContext)

    const [detail, setDetail] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9000/work/' + id)
            .then(res => {
                setDetail(res.data)
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <div data-aos="zoom-in">
            <div className="container mt-5 mb-5 p-5 " style={mode ? {backgroundColor:'white'} : {backgroundColor:'#19202D', color:'white'}}>
                <p style={{ color: 'gray' }}>{detail.postedAt}. {detail.contract}</p>
                <h1><strong>{detail.position}</strong></h1>
                <p style={{ color: 'blue' }}><strong>{detail.location}</strong></p>

                <p className="mt-5 mb-5">
                    {detail.description}
                </p>

                <h3>Requirements</h3>
                <p>{detail.requirements && detail.requirements.content}</p>
                <ul>
                    {detail.requirements &&  detail.requirements.items.map((post, ind) => {
                        return (
                            <li key={ind}>{post.item}</li>
                        )
                    })}
                </ul>

                <h3 className="mt-5 mb-3">What you will do</h3>
                <p>{detail.role && detail.role.content}</p>
                <ul>
                    {detail.requirements &&  detail.role.items.map((post, ind) => {
                        return (
                            <li key={ind}>{post.item}</li>
                        )
                    })}
                </ul>
            </div>


            <div className="footer " style={mode ? {backgroundColor:'white'}: {backgroundColor:'#19202D', color:'white'}}>
                <div className="row text-center" style={{ width: '85%', margin: '0 auto' }}>
                    <div className="col-md-6">
                        <h3>{detail.position}</h3>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}