const Form = (props) => {
    const formSubmitHandler = ()=>{
        
    }
  return (
    <>
      <div className="form_container">
        <form className="form" onSubmit={formSubmitHandler}>
          <div className="input">
            <input id="name" placeholder="candy name"></input>
          </div>
          <div className="input">
            <input id="description" placeholder="description"></input>
          </div>
          <div className="input">
            <input id="price" placeholder="price"></input>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
