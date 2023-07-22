import React from 'react'
import { useSelector } from 'react-redux';

const Skills = () => {
  const UIText = useSelector((store)=> store.languageReducer);
  return (
    <section id="skills">
        <h1 id='skillMainHeaders'>{UIText.skills}</h1>
        <div id='skillBoxSet'>
          <div id='skillBox'>
            <h2 id="skillSubHeader">ReactJS</h2>
            <p id="skillDefinition">{UIText.skillDescription1} </p> 
          </div>
          <div id='skillBox'>
            <h2 id="skillSubHeader">NodeJS</h2>
            <p id="skillDefinition">{UIText.skillDescription2} </p>
          </div>
          <div id='skillBox'>
            <h2 id="skillSubHeader">SCSS</h2>
            <p id="skillDefinition">{UIText.skillDescription3}  </p> 
          </div>
        </div>
    </section> 
  )
}

export default Skills