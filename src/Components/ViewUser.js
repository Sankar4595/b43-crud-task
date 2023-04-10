import React from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseDefault from "../core/Base";
import { AppState } from "../AppContext/AppProvoider";

export function ViewUser(){
    const {user} = AppState();
    
    const history = useHistory();
    const {id} = useParams();
    const person = user[id]
    return(
        <BaseDefault
            title={"View user"}
            styles={"title"}
        >
            <div className="user-content">
                <div className="card">
                    <h5>{person.name}</h5>
                    <p>Email : {person.email}</p>
                    <p>Batch : {person.batch}</p>
                    <p>Experience : {person.experience}</p>
                    <div className="btn-list">
                    <button onClick={()=>history.push("/")}>Back</button>
                    </div>
                </div>
            </div>
        </BaseDefault>

    )
}