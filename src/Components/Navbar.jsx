import { useContext } from "react"
import { changeModeContext } from "./DataProvider/DataContext"
import { BsFillSunFill } from 'react-icons/bs'
import { TbMoonFilled } from 'react-icons/tb'


export default function Navbar() {

    const [mode, setMode] = useContext(changeModeContext)

    return (
        <div className="container-fluid myNavbar">
            <div className="row">
                <div className="col">
                    <h3>devjobs</h3>
                </div>
                <div className="col text-end">
                    <span style={{ color: 'white', fontSize: '20px' }}><BsFillSunFill /></span>
                    <div className="form-switch" style={{ display: 'inline-block'}}>
                        <input className="form-check-input" style={{cursor:'pointer'}} onClick={() => setMode(!mode)} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                    </div>
                    <span style={{ color: 'white', marginLeft: '1%', fontSize: '20px' }}><TbMoonFilled /></span>
                </div>
            </div>
        </div>
    )
}