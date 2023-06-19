import React from 'react'
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirecting } from '../toastify';

const Personalntroduction = ({themeMode}) => {
  const UIText = useSelector((store)=> store.languageReducer);
  //const toastifyMode = themeMode ? "dark":"light";


  return (
    <section id="personalIntroduction">
          <div id="personalIntroductionLeftColoumn">
            <div id="nameAndLine">
              <hr id="lineNextoName"></hr>
              <h2 id='name'>Serkan Toraman</h2>
            </div>
            <h1 id="mainHeader">{UIText.mainHeader1} 
              <br/>
              {UIText.mainHeader2} 
            </h1>
            <p id='shortIntroduction'>{UIText.shortIntroduction}</p>
            <nav>
              <a href="mailto:serkantrmn85@gmail.com">&nbsp;{UIText.hireMe}&nbsp;</a>
              <a href="##" onClick={()=>{redirecting("github","https://www.linkedin.com/in/serkan-toraman-a2a68146/")}}><i className="fa fa-github fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;Github</a>
              <a href="https://www.linkedin.com/in/serkan-toraman-a2a68146/"><i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;linkedin</a>
            </nav> 
          </div>
          <div id="personalIntroductionRightColoumn">
            <img src={require("../../src/img/myPhoto.jpeg")} alt="myPhoto"/>
          </div>
        {/* <ToastContainer
        // position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        // closeOnClick
        theme={toastifyMode}
      /> */}
        </section> 
        
  )
}

export default Personalntroduction