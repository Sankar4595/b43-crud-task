import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function BaseDefault({title,styles,children}){
    const history = useHistory();
    return(
        <>
            <div className="navbar">
                <Button onClick={()=>history.push("/")} variant="success">Home</Button>
                <Button onClick={()=>history.push("/adduser")} variant="primary">Add User</Button>
            </div>
            <div className={styles}>{title}</div>
            <div className="children">{children}</div>
        </>
    )
}