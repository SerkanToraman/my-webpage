import React from 'react'
import { useSelector } from 'react-redux';

const Skills = () => {
  const UIText = useSelector((store)=> store.languageReducer);
  return (
    <section id="skills">
        <p id='skillMainHeaders'>{UIText.skills}</p>
        <div id='skillBoxSet'>
          <div id='skillBox'>
            <p id="skillSubHeader">Java Script</p>
            <p id="skillDefinition">{UIText.skillDescription1} </p> 
          </div>
          <div id='skillBox'>
            <p id="skillSubHeader">React</p>
            <p id="skillDefinition">{UIText.skillDescription2} </p>
          </div>
          <div id='skillBox'>
            <p id="skillSubHeader">SCSS</p>
            <p id="skillDefinition">{UIText.skillDescription3}  </p> 
          </div>
          {/* <div id='skillBox'>
            <p id="skillSubHeader">SCSS</p>
            <p id="skillDefinition"> Jsdfsdft</p></div>
          <div id='skillBox'>
            <p id="skillSubHeader">Node</p>
            <p id="skillDefinition"> Jsdfsdft</p></div>
          <div id='skillBox'>
            <p id="skillSubHeader">Figma</p>
            <p id="skillDefinition"> Jsdfsdft</p>
          </div> */}
        </div>
    </section> 
  )
}

export default Skills