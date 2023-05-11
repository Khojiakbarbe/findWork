import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { changeModeContext } from "./DataProvider/DataContext";


export default function Apply() {

    const navigate = useNavigate();

    const { state } = useLocation();
    const company = state.company;
    const contract = state.contract;
    const position = state.position;


    // Change Mode
    const [mode, setMode] = useContext(changeModeContext)

    if (mode) {
        document.body.style.backgroundColor = "#F2F2F2"
    } else {
        document.body.style.backgroundColor = "#121721"
    }


    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [engLevel, setEngLevel] = useState('')
    const [experiance, setExperiance] = useState('')


    function apply() {
        if (name && lastName && engLevel && experiance) {
            axios.post('http://localhost:9000/applys', {
                'company': company,
                'contract': contract,
                'position': position,
                'name': name,
                "lastName": lastName,
                'engLevel': engLevel,
                'experiance': experiance
            })
                .then(res => {
                    console.log(res.data);
                    alert(`You successfuly Applyed to Position ${position}`)
                    navigate('/')
                })
                .catch(err => console.warn(err))
        }else{
            alert('Please complete all requests')
        }
    }

    return (
        <div className="container pt-5">
            <div className="text-center" style={mode ? { color: 'black' } : { color: 'white' }}>
                <h5><strong> You are Applying to : </strong></h5>
                <h3><strong>Company : {company}</strong></h3>
                <h3><strong>Contract : {contract}</strong></h3>
                <h3><strong>Position : {position}</strong></h3>
            </div>
            <div className="row" style={mode ? { color: 'black' } : { color: 'white' }}>
                <div className="col-md-6 mt-3 mb-3">
                    <p>Your Name</p>
                    <input type="text" className="form-control" placeholder="Your name please.." value={name} onChange={e => setName(e.target.value)} style={mode ? { backgroundColor: 'white' } : { backgroundColor: '#19202D', color: 'white' }} />
                </div>
                <div className="col-md-6 mt-3 mb-3">
                    <p>Your Last Name</p>
                    <input type="text" className="form-control" placeholder="Your last name please.." value={lastName} onChange={e => setLastName(e.target.value)} style={mode ? { backgroundColor: 'white' } : { backgroundColor: '#19202D', color: 'white' }} />
                </div>
                <div className="col-md-6 mt-3 mb-3">
                    <p>Your English Level</p>
                    <select className="w-100 form-control" onChange={(e) => setEngLevel(e.target.value)} style={mode ? { backgroundColor: 'white' } : { backgroundColor: '#19202D', color: 'white' }}>
                        <option value="c2">C2 - Proficiency</option>
                        <option value="c1">C1 - Advanced</option>
                        <option value="b2">B2 - Upper-Intermediate</option>
                        <option value="b1">B1 - Intermediate</option>
                        <option value="a2">A2 - Pre-Intermediate</option>
                        <option value="a1">A1 - Beginner</option>
                    </select>
                </div>
                <div className="col-md-6 mt-3 mb-3">
                    <p>Your Experiance</p>
                    <select className="w-100 form-control" onChange={e => setExperiance(e.target.value)} style={mode ? { backgroundColor: 'white' } : { backgroundColor: '#19202D', color: 'white' }}>
                        <option value="0-1">0-1 year</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-6">3-6 years</option>
                        <option value="6+">6+ years</option>
                    </select>
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-primary" onClick={() => apply()}>Apply</button>
            </div>
        </div>
    )
}