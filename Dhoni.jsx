import React, { useContext } from 'react'
import './Dhoni.css'
import { assets } from './assets/assets'
import { Context } from './context/Context'

const Dhoni = () => {
  <React></React>
  
const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
   
  return (
    <div className='main'>
      <div className="nav">
        <p>O A S I S AI</p>
        <img src= {assets.user_icon} alt="" />
      </div>
      <div className="main-container">

          {!showResult
          ?<>
                 <div className="greet">
          <p><span>Hello, YASH.</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards"> 
          <div className="card">
          <p>Suggest beautiful places to see on an upcoming road trip</p>
          <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
          <p>Briefly summarize this concept: urban planning</p>
          <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
          <p>Brainstorm team boning activities for our work retreat</p>
          <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
          <p>Improve the reability of the folloing code</p>
          <img src={assets.code_icon} alt="" />
          </div>
        </div>
          </>
          :<div className='result'>
             <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
             </div>
             <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
              ?<div className='loader'>
                <hr />
                <hr />
                <hr />
              </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
              
             </div>
          </div>
          }

       
        <div className="main-botton">
          <div className="search-box">
              <input onChange={(e)=>setInput(e.target.value)}  value={input} type="text" placeholder='Enter a prompt here' />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
               {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
              </div>
            </div>
            <p className="botton-info"></p>
            O A S I S AI may display inaccurate info, including about 
          </div>
      </div>
    </div>
  )
}

export default Dhoni
