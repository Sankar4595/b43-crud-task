/* eslint-disable no-unused-vars */
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import BaseDefault from "../core/Base";
import { AppState } from "../AppContext/AppProvoider";
import { useHistory } from "react-router-dom";

export default function Add_User(){
    const {user, setUser} = AppState();
    const history = useHistory();
    
    const [name,setName] = useState("");
    const [id,setId] = useState("");
    const [batch,setBatch] = useState("");
    const [experience,setExperience] = useState("");
    const [email,setEmail] = useState("");

    const addNewUser = async (e)=>{
        const newUser = {
            id,
            name,
            email,
            experience,
            batch,
        }
        e.preventDefault();
        try {
            const response = await fetch('https://6410036b864814e5b644b6f5.mockapi.io/users',{
                method : "POST",
                body : JSON.stringify(newUser),
                headers : {
                    "Content-Type" : "application/json",
                }
            });
            const data = await response.json();
            setUser([...user,data]);
            history.push("/")
        } catch (error) {
            console.log(error);
        }
        
    }
    return(
        <BaseDefault>
            <form className="user-details">
                <TextField onChange={(event)=>setId(event.target.value)} value={id} className="user-txt" type="text" variant="outlined" label="ID"/>
                <TextField onChange={(event)=>setName(event.target.value)} value={name} className="user-txt" type="text" variant="outlined" label="Name"/>
                <TextField onChange={(event)=>setEmail(event.target.value)} value={email} className="user-txt" type="email" variant="outlined" label="Email ID"/>
                <TextField onChange={(event)=>setBatch(event.target.value)} value={batch} className="user-txt" type="text" variant="outlined" label="Batch"/>
                <TextField onChange={(event)=>setExperience(event.target.value)} value={experience} className="user-txt" type="text" variant="outlined" label="Experience"/>
                <Button onClick={addNewUser} variant="primary">Add User</Button>
            </form>
        </BaseDefault>
    )
}