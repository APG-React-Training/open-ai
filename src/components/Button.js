const Button = ({ text, action }) => {

  return(
    <div className={'Button'} onClick={() => action()}>
      { text }
    </div>
  )
}

export default Button