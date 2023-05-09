import { useContext, useState } from "react"
import { changeModeContext } from "./DataProvider/DataContext"

export default function Navbar() {

    const [mode, setMode] = useContext(changeModeContext)



    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid myNavbar">
                <div className="row">
                    <div className="col">
                        <h3>devjobs</h3>
                    </div>
                    <div className="col">
                        <div className="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}