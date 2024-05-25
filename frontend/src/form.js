import "./form.css"; 
import "./tailwind.css";
import {useState} from "react";
function Loginform() {
  let [state, setState] = useState({name: "", email: ""});
 
 
let inputChange = (e) => {
let {name,value} = e.target;
    setState(
      [name]= value


    );
  }
  





let updateInfo=()=>{
 
    console.log(state);
    };

    return (
    <div className="flex justify-center items-center max-w-screen max-h-screen ">
    <div className="box max-w-[70%] bg-gradient-to-r from-transparent via-blue-300 to-transparent">
      <label className="formformat" htmlFor="nameform">Name: </label> <input type="text" id="nameform" name="name" value={state.name}  onChange={inputChange}/>
      <br />
      <label className="formformat" htmlFor="emailform">Email: </label> <input type="text" id="emailform" name="email" value={state.email} onchange={inputChange}/>
      <br/>
      <button type="submit" onClick= {updateInfo} className="cursor-pointer size-fit min-w-[3%] first-line:shadow-xl rounded-full blur-[0.9px] bg-white"> Submit </button>
    </div>
    </div>
  );
}
export default Loginform;
