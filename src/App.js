import { useState } from 'react'

import './resources/styles/main.css'
import Button from "./components/Button"
import Spinner from "./components/Spinner";
import Input from "./components/Input";

const App = () => {

  const [isLoading, setLoading] = useState(false)
  const [prompt, setPrompt] = useState('')



  const generateText = () => {
    alert(prompt)
    setLoading(true)
  }

  const generateImage = () => {
    setLoading(true)
  }


  const renderButtonBar = () => {
    if(!isLoading) {
      return (
        <div className={'button-bar'}>
          <Button text={'Text'} action={generateText} />
          <Button text={'Image'} action={generateImage} />
        </div>
      )
    }
    return( <Spinner />)
  }


  return (
    <div className={'Form'}>
      <div>
        <Input handler={setPrompt}/>
      </div>
      { renderButtonBar()}
    </div>
  )
}

export default App;
