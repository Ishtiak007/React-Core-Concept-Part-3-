import { useEffect, useRef } from "react";

const RefForm = () => {
    const handleSubmit = e=>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value)
    }
    useEffect(()=>{
        nameRef.current.focus();
    },[])
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" />
                <br></br>
                <input defaultValue={"ishtiak.sparrow98@gmail.com"} ref={emailRef} type="email" name="email" />
                <br></br>
                <input ref={passwordRef} type="password" name="password" />
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;