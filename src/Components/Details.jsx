import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from 'react-router-dom'



export default function Details() {

    const { id } = useParams();

    const [detail, setDetail] = useState([])
    useEffect(() => {
        axios.get('http://localhost:9000/work/' + id)
            .then(res => {
                setDetail(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className="container">
            <p style={{ color: 'gray' }}>{detail.postedAt}. {detail.contract}</p>
            <h1><strong>{detail.position}</strong></h1>
            <p style={{ color: 'blue' }}><strong>{detail.location}</strong></p>

            <p className="mt-5">
                {detail.description}
            </p>

        </div>
    )
}