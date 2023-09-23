import './App.css'
import ReuseableForm from './Components/ReusableForm/ReuseableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StateFullForm from './Components/StateFullForm/StateFullForm'

function App() {
  const handleSignUpSubmit = data =>{
    console.log("Sign up data", data)
  }
  const handleUpdateProfile = data =>{
    console.log("Update Profile data", data)
  }
  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm 
      handleSubmit={handleSignUpSubmit}
       formTitle={"Sign Up"} 
       submitBtnText='Update'> <div>
       <h2>Sign Up</h2>
       <p>Please sign up right now</p>
     </div></ReuseableForm>
      <ReuseableForm handleSubmit={handleUpdateProfile} formTitle={"Profile Update"}><div>
          <h2>Update profile</h2>
          <p>Always keep your profile update</p>
        </div></ReuseableForm>
    </>
  )
}

export default App
