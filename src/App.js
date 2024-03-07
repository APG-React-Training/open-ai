import { useState } from 'react'

import './resources/styles/main.css'
import Button from "./components/Button"
import Spinner from "./components/Spinner";
import Input from "./components/Input";
import Paragraph from "./components/Paragraph";
import Image from "./components/Image";
import { executeText, executeImage } from "./lib/api"

const App = () => {

  const [isLoading, setLoading] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [textResult, setTextResult] = useState()
  const [imageResult, setImageResult] = useState()


  const generateText = async () => {
    setLoading(true)
    setTextResult(false)
    setImageResult(false)
    let txt = await executeText(prompt)
    setTextResult(txt)
    setLoading(false)
  }

  const generateImage = async () => {
    setLoading(true)
    let img =  await executeImage(prompt)
    setImageResult(img)
    setLoading(false)
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
      { renderButtonBar() }
      { textResult && <Paragraph text={textResult} /> }
      { imageResult && <Image url={imageResult}/> }
    </div>
  )
}

export default App;
