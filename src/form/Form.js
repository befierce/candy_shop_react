import "./Form.css";
import Button from "./Button.js";
import { useState } from "react";


const Form = () => {
  // const [name,setName] = useState("");
  // const [description,setDescription] = useState("");
  // const [price,setPrice] = useState("");

  // const nameChangeHandler = (event)=>{
  //     setName(event.target.value);
  // }
  // const descriptionChangeHandler = (event)=>{
  //     setDescription(event.target.value);
  // }
  // const priceChangeHandler = (event)=>{
  //     setPrice(event.target.value);
  // }
  // const onSubmitHandler = ()=>{

  // }
  // console.log(name);
  // console.log(description);
  // console.log(price);
  return (
      <form className="form">
        <input
          type="text"
          placeholder="Name"
        ></input>
        <input
          type="text"
          placeholder="Description"
        ></input>
        <input
          type="number"
          placeholder="Price"
        ></input>
        <Button>Submit</Button>
      </form>
  );
};

export default Form;
