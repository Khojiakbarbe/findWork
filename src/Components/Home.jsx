import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

import { changeModeContext } from "./DataProvider/DataContext";
import { AiOutlineSearch } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'


export default function Home() {

    const navigate = useNavigate();

    const [mode, setMode] = useContext(changeModeContext)

    if (mode) {
        document.body.style.backgroundColor = "#F2F2F2"
    } else {
        document.body.style.backgroundColor = "#121721"
    }



    const [forFilter, setForFilter] = useState([])
    const [data, setData] = useState([]);
    const [sliceCount, setSliceCount] = useState(6)


    useEffect(() => {
        axios.get('http://localhost:9000/work')
            .then(res => {
                setForFilter(res.data)
                setData(res.data.slice(0, sliceCount))
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


    const [filterName, setFilterName] = useState('')
    const [filterLocation, setFilterLocation] = useState('')
    const [fullTime, setFullTime] = useState('')

    const filtered = []



    const locations = [];
    for (let i = 0; i < forFilter.length; i++) {
        if (!locations.includes(forFilter[i].location)) {
            locations.push(forFilter[i].location)
            i++;
        }
    }



    function search() {
    }
    if (filterName.length && filterLocation.length > 0) {
        filtered.length = 0
        const filter = data.filter(filter => filter.company.toLowerCase().includes(filterName.toLowerCase()) && filter.location.toLowerCase().includes(filterLocation.toLowerCase()) && filter.contract.toLowerCase() == fullTime.toLowerCase())
        filtered.push(filter)
    } else {
        filtered.push(data)
    }


    return (
        <div style={{ marginTop: '20%' }} className="container mt-5 mb-5">

            <div className="filter row  " style={mode ? { backgroundColor: 'white' } : { backgroundColor: '#19202D', color: 'white' }}>
                <div className="col">
                    <AiOutlineSearch />
                    <input type="dorm-control" style={mode ? { color: 'black' } : { color: 'white' }} onChange={(e) => setFilterName(e.target.value)} placeholder="Filter by title, companies, expertise…" />
                </div>
                <div className="col">
                    <MdLocationOn />
                    <select onChange={(e) => setFilterLocation(e.target.value)}>
                        <option value="">Filter by location</option>
                        {
                            locations.map((post, ind) => {
                                return (
                                    <option key={ind} value={post}>{post}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="col">
                    <input type="checkbox" onClick={() => { fullTime == '' ? setFullTime("Full Time") : setFullTime('') }} id="fullTime" />
                    <label htmlFor="fullTime">Full Time Only</label>
                    <button className="btn btn-primary" onClick={() => search()}>Search</button>
                </div>
            </div>

            {
                filtered.length > 0 ?
                    <>
                        <div className="row">
                            {
                                filtered[0].map(post => {
                                    return (
                                        <div key={post.id} className="col-md-4 mb-2" onClick={() => navigate(`/${post.id}`)}>
                                            <div className="card p-5" style={mode ? { backgroundColor: 'white' } : { backgroundColor: '#19202D', color: 'white' }}>
                                                <p style={{ color: 'gray' }}>{post.postedAt}. {post.contract}</p>
                                                <h3><strong>{post.position}</strong></h3>
                                                <p style={{ color: 'gray' }}>{post.company}</p>
                                                <p style={{ color: 'blue' }}><strong>{post.location}</strong></p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                    :
                    <div className="container mt-5">Not found</div>
            }
            <div style={{ textAlign: 'center' }}>
                <button className="btn btn-primary mt-5" onClick={() => loadMore()}>Load More</button>
            </div>
        </div>
    )
}