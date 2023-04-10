/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useHistory } from "react-router-dom";
import BaseDefault from "../core/Base";
import { AppState } from "../AppContext/AppProvoider";

export default function UserContent(){
    const {user, setUser} = AppState();
    
    const history = useHistory();
    const delete_User = async (per) =>{
        try {
            const response = await fetch(`https://6410036b864814e5b644b6f5.mockapi.io/users/${per}`,{
            method : "DELETE"
            });
            const data = await response.json();
            const alt_list = user.filter((item,index)=>item.id!==per);
            setUser(alt_list)
            if(!data){
                console.log("cound't delete");
            }    
        } catch (error) {
            console.log(error);
        }
        
        }

    return(
        <BaseDefault
            title="UserContent"
            styles="title"
        >
            <div className="card-box">
                {
                user&& (
                user?.map((data,idx)=>(
                    <div key={idx} className="card">
                        <h5>{data.name}</h5>
                        <p>Email : {data.email}</p>
                        <p>Batch : {data.batch}</p>
                        <p>Experience : {data.experience}</p>
                        <div className="btn-list">
                        <button onClick={()=>history.push(`/user/${idx}`)}>View</button>
                        <button onClick={()=>delete_User(data.id)}>Delete</button>
                        <button onClick={()=>history.push(`/edit/${data.id}`)}>Edit</button>
                        </div>
                    </div>
                )))}
            </div>
        </BaseDefault>

    )
}