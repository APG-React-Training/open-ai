const Input = ({ handler }) => {

  return(
    <div className={"Input"}>
      <input type={"text"} placeholder={"prompt"}
             onChange={ (e) => handler(e.target.value)}/>
    </div>
  )

}

export default Input