import React, { useContext, useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { ThemeModeContext } from '../contexts/ThemeContext';
//Redux is used insteadof ContextAPI 
//import { LanguageContext } from '../contexts/LanguageContext';
import { useDispatch, useSelector } from 'react-redux';
import { languageSelection } from '../store/actions/languageAction';
import useLocalStorage from '../localHook/UseLocalStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const {themeMode,SetThemeMode}= useContext(ThemeModeContext);
  const mode = themeMode?"light_mode":"dark_mode";
  // Redux is used insteadof ContextAPI 
  //const {UIText}=useContext(LanguageContext);
  const UIText = useSelector((store)=> store.languageReducer);
  const dispatch = useDispatch()
  const [englishLangSelection,setEnglishLangSelection] = useLocalStorage ("English",true);
  const UISelector = () =>{
    setEnglishLangSelection(!englishLangSelection);
    
  }

  useEffect(()=>{
      dispatch(languageSelection(englishLangSelection,UIText))
  },[englishLangSelection])

  console.log("UIText",UIText)
  console.log("englishLangSelection",englishLangSelection)


  return (
  <div className={`${mode} header_main`}>
    
    <div id="header_first_row">
        <div id='mode_toggle' className='toggle_switch'>
          <label>
                <input onClick={()=>{SetThemeMode(!themeMode)}} checked={!themeMode} type = 'checkbox'/>
                <span className='slider'></span>    
          </label>
        </div>
        <p id="sliderText">{themeMode ? UIText.themeModeDark:UIText.themeModeLight}</p>
        <p id="verticalLine">|</p>
        <p id="languageText" onClick={UISelector}> <span>{UIText.lang}</span>{UIText.lang1}</p>
      </div>
      <div id="header_second_row">
        <div id="header_logo">S</div>
          <nav id="header_selections">
            <HashLink to="#skills" smooth>
              <button>{UIText.skills}</button>
            </HashLink>
            <HashLink to="#projects" smooth>
              <button>{UIText.projects}</button>
            </HashLink>
            <HashLink to="/" smooth>
               <button onClick={()=>toast.warn(UIText.pageUnderConstruction,{ position: toast.POSITION.TOP_LEFT})}>{UIText.hireMe}</button>
            </HashLink>
          </nav> 
      </div>
      <ToastContainer
        // position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        // closeOnClick
        theme={mode}
      />
  </div>
  )
}

export default Header