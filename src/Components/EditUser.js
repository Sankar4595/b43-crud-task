import React, { useEffect, useState } from 'react';
import BaseDefault from '../core/Base';
import { TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { AppState } from '../AppContext/AppProvoider';

const EditUser = () => {
    const {user, setUser} = AppState();

    const [name,setName] = useState("");
    const [idx,setIdx] = useState("");
    const [batch,setBatch] = useState("");
    const [experience,setExperience] = useState("");
    const [email,setEmail] = useState("");

    const {id} = useParams();
    const history = useHistory();

    const selectUser = user.find((data)=>data.id === id);
    // console.log(selectUser);
    useEffect(()=>{
        setIdx(selectUser.id)
        setName(selectUser.name)
        setBatch(selectUser.batch)
        setEmail(selectUser.email)
        setExperience(selectUser.experience)
    },[])

    const updateUser = async()=>{
        const editIndex = user &&( user?.findIndex(per=>per.id===id));

        const editedData = {
            id : idx,
            name,
            email,
            batch,
            experience
        }
        try {
            const response = await fetch(`https://6410036b864814e5b644b6f5.mockapi.io/users/${idx}`,{
                method : "PUT",
                body : JSON.stringify(editedData),
                headers : {
                    "Content-Type" : "application/json"
                },
            })
            const data = await response.json();
            // console.log(data);
            user[editIndex] = data
            setUser([...user]);
            history.push("/")
        } catch (error) {
            console.log(error);
        }
        
    }

  return (
    <BaseDefault
        title={"Edit user"}
    >
        <form className="user-details">
                <TextField onChange={(event)=>setIdx(event.target.value)} value={idx} className="user-txt" type="text" variant="outlined" label="ID"/>
                <TextField onChange={(event)=>setName(event.target.value)} value={name} className="user-txt" type="text" variant="outlined" label="Name"/>
                <TextField onChange={(event)=>setEmail(event.target.value)} value={email} className="user-txt" type="email" variant="outlined" label="Email ID"/>
                <TextField onChange={(event)=>setBatch(event.target.value)} value={batch} className="user-txt" type="text" variant="outlined" label="Batch"/>
                <TextField onChange={(event)=>setExperience(event.target.value)} value={experience} className="user-txt" type="text" variant="outlined" label="Experience"/>
                <Button onClick={updateUser} variant="primary">Submit</Button>
            </form>
    </BaseDefault>
  );

}

export default EditUser;
