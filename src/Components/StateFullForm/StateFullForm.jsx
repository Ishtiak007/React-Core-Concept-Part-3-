import { useState } from "react";

const StateFullForm = () => {

    const handleSubmit =e =>{
        if(password.length < 6){
            setError("Password must be 6 char or longer then 6");
        }else{
            setError("")
        }
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);
    }

    const [name, setName] =useState(null);
    const [email, setEmail]=useState(null);
    const [password, setPassword]=useState(null);
    const [error,setError]=useState('')

    
    const nameHandle=e=>{
        setName(e.target.value);
    }
    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handlePassword = e =>{
        setPassword(e.target.value);
    }
    return (
        <div>
            <div>
            <form onSubmit={handleSubmit}>
                <input onChange={nameHandle} type="text" name="name" />
                <br></br>
                <input onChange={handleEmail} type="email" name="email" />
                <br></br>
                <input onChange={handlePassword} required type="password" name="password" />
                <br></br>
                <input type="submit" value="Submit" />
            </form>
            {
                    error && <p>{error}</p>
            }
        </div>
        </div>
    );
};

export default StateFullForm;