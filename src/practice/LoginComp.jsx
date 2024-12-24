import React, { useState } from "react";
import AuthenticationModel from "./AuthenticationModel"
import { useNavigate } from "react-router-dom";

export default function LoginComp() {
    // const [user, setUser] = useState("");
    // const [result, setResult] = useState("");
    const [modalShow, setModalShow] = React.useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        expiresInMins: 30,
    });
    const [res, setResponse] = useState(false);
    const handleInput = (e) => {
        // setUser(e.target.value);
        let { name, value, type } = e.target;
        setFormData((a) => {
            return {
                ...a,
                [name]: value,
            }
        });
    };
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
            credentials: 'include' // Include cookies (e.g., accessToken) in the request
        })
            .then(res => res.json())
            .then((res) => {
                // res.accessToken ? setResponse(true) : setResponse(false);
                res.accessToken?navigate("/home"):navigate("*");
                setModalShow(true);
            });
        setModalShow(true)
        // setResult(user);
        // setUser("");
    };
    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "50vw" }}>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInput}
                    placeholder="UserName"
                />
                <input
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleInput}
                    placeholder="Password"
                />
                <input
                    type="text"
                    name="expiresInMins"
                    value={formData.expiresInMins}
                    onChange={handleInput}
                    placeholder="Email"
                />
                <input type="submit" />
            </form>
            <h1>{formData.user}</h1>
            <h1>{formData.mobile}</h1>
            <h1>{formData.email}</h1>

            <AuthenticationModel
                show={modalShow}
                onHide={() => setModalShow(false)}
                user={formData.username}
                pass={formData.password}
                expre={formData.expiresInMins}
            />

        </div>
    );
}