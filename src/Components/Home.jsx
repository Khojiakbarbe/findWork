import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [sliceCount, setSliceCount] = useState(6)

    useEffect(() => {
        axios.get('http://localhost:9000/work')
            .then(res => {
                setData(res.data.slice(0, sliceCount))
                // console.log(res.data.);
            })
            .catch(err => console.log(err))
    }, [])

    function loadMore() {
        setSliceCount(sliceCount + 6)
        axios.get('http://localhost:9000/work')
            .then(res => {
                setData(res.data.slice(0, sliceCount))
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                {data.map(post => {
                    return (
                        <div key={post.id} className="col-md-4 mb-2" onClick={() => navigate(`/${post.id}`)}>
                            <div className="card p-5" style={{height:'300px'}}>
                                <p style={{ color: 'gray' }}>{post.postedAt}. {post.contract}</p>
                                <h3><strong>{post.position}</strong></h3>
                                <p style={{ color: 'gray' }}>{post.company}</p>
                                <p style={{ color: 'blue' }}><strong>{post.location}</strong></p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div style={{textAlign:'center'}}>
            <button className="btn btn-primary mt-5" onClick={() => loadMore()}>Load More</button>
            </div>
        </div>
    )
}