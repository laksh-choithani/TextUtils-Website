import React,{useState} from 'react'

export default function TextForm(pros) {

  const handleupclick = () => {
    console.log("Button has been clicked")
    let newtext = text.toLocaleUpperCase();
    setText(newtext)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The text you entered was: ${text}`);
  }

  const handlelpclick = ()=> {
    let lptext = text.toLocaleLowerCase();
    setText(lptext);
  }

  const onchange = (event)=>{
    console.log("on change button")
    setText(event.target.value)
  }

  const handleCopy = () =>{
    var textField = document.getElementById("mybox");
    textField.select()
    document.execCommand('copy')
    alert(`Copied Text! ${text},`,1000);
    document.getSelection().removeAllRanges()
  }
  
  const ClearBox = ()=>{
    setText(" ")
  }

  const RemoveSpaces=() =>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join());
  }

  const [text, setText] = useState("")
  return (  
    <> 
        <div className="container">
            <h3 className="container" style={pros.mode} >{pros.headings}</h3>
        </div>
        <div className="container"  >
            <textarea className="form-control" id="mybox" onChange={onchange} style={pros.mode} value={text} rows="5"></textarea>
        </div>
    <div className="container bg-dark my-3">
        <button disabled={text.length===0} className='btn btn-outline-light mx-2 my-2' onClick={handleSubmit} >Submit Text</button>
        <button disabled={text.length===0} className='btn btn-outline-light mx-2 my-2' onClick={handleupclick} >Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-outline-light mx-2 my-2' onClick={handlelpclick} >Convert to Lowercase</button>
        <button disabled={text.length===0} className='btn btn-outline-light mx-2 my-2' onClick={handleCopy} >Copy Text</button>
        <button disabled={text.length===0} className='btn btn-outline-light mx-2 my-2' onClick={ClearBox} >Clear Text</button>
        <button disabled={text.length===0} className='btn btn-outline-light mx-2 my-2' onClick={RemoveSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={pros.mode}>
        <h3>Your summary contain</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words And {text.length} Characters</p>
    </div>
    </>
  )
}
