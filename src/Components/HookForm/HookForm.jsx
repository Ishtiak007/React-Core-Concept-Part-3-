import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
    const [name, handleNameChange]=useInputState("Ishtiak Hooked")


    const handleSubmit= e =>{
        e.preventDefault();
        console.log("Form data",name)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br></br>
                <input type="email" name="email" />
                <br></br>
                <input type="password" name="password" />
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;