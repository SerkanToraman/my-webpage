import React from 'react'
import { useSelector } from 'react-redux';

const Projects = () => {
  const UIText = useSelector((store)=> store.languageReducer);
  return (
  <section id="projects">
    <p id='projectMainHeaders'>{UIText.projects}</p>
    <div id="projectSet" >
      <div id='projectBoxSet'>
        <div id='projectImg'>
          <img id="projectImg" src="https://picsum.photos/seed/picsum/300/180" alt="projectImg"/>
        </div>
        <p id='projectSubHeader'>{UIText.projectName1}e</p>
        <p id='projectDefinition'>{UIText.projectDescription1}
        </p>
        <div id='skillsUsed'>
          <p>react</p>
          <p>redux</p>
          <p>axios</p>
        </div>
        <div id='links'>
          <a id="projectsLink"href="https://www.w3schools.com">Github</a>
          <a id="projectsLink"href="https://www.w3schools.com">{UIText.viewSite}</a>
        </div>
      </div>
      <div id='projectBoxSet'>
        <div id='projectImg'>
          <img id="projectImg" src="https://picsum.photos/seed/picsum/300/180" alt="projectImg"/>
        </div>
        <p id='projectSubHeader'>{UIText.projectName2}</p>
        <p id='projectDefinition'>{UIText.projectDescription2}
        </p>
        <div id='skillsUsed'>
          <p>react</p>
          <p>redux</p>
          <p>axios</p>
        </div>
        <div id='links'>
          <a id="projectsLink"href="https://www.w3schools.com">Github</a>
          <a id="projectsLink"href="https://www.w3schools.com">{UIText.viewSite}</a>
        </div>
      </div>
      <div id='projectBoxSet'>
        <div id='projectImg'>
          <img id="projectImg" src="https://picsum.photos/seed/picsum/300/180" alt="projectImg"/>
        </div>
        <p id='projectSubHeader'>{UIText.projectName3}</p>
        <p id='projectDefinition'>{UIText.projectDescription3}
        </p>
        <div id='skillsUsed'>
          <p>react</p>
          <p>redux</p>
          <p>axios</p>
        </div>
        <div id='links'>
          <a id="projectsLink"href="https://www.w3schools.com">Github</a>
          <a id="projectsLink"href="https://www.w3schools.com">{UIText.viewSite}</a>
        </div>
      </div>
      {/* <div id='projectBoxSet'>
        <div id='projectImg'>
          <img id="projectImg" src="https://picsum.photos/seed/picsum/300/180" alt="projectImg"/>
        </div>
        <p id='projectSubHeader'>Project Name</p>
        <p id='projectDefinition'>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes
        </p>
        <div id='skillsUsed'>
          <p>react</p>
          <p>redux</p>
          <p>axios</p>
        </div>
        <div id='links'>
          <a id="projectsLink"href="https://www.w3schools.com">Github</a>
          <a id="projectsLink"href="https://www.w3schools.com">View Site</a>
        </div>
      </div>
      <div id='projectBoxSet'>
        <div id='projectImg'>
          <img id="projectImg" src="https://picsum.photos/seed/picsum/300/180" alt="projectImg"/>
        </div>
        <p id='projectSubHeader'>Project Name</p>
        <p id='projectDefinition'>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes
        </p>
        <div id='skillsUsed'>
          <p>react</p>
          <p>redux</p>
          <p>axios</p>
        </div>
        <div id='links'>
          <a id="projectsLink"href="https://www.w3schools.com">Github</a>
          <a id="projectsLink"href="https://www.w3schools.com">View Site</a>
        </div>
      </div>
      <div id='projectBoxSet'>
        <div id='projectImg'>
          <img id="projectImg" src="https://picsum.photos/seed/picsum/300/180" alt="projectImg"/>
        </div>
        <p id='projectSubHeader'>Project Name</p>
        <p id='projectDefinition'>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes
        </p>
        <div id='skillsUsed'>
          <p>react</p>
          <p>redux</p>
          <p>axios</p>
        </div>
        <div id='links'>
          <a id="projectsLink"href="https://www.w3schools.com">Github</a>
          <a id="projectsLink"href="https://www.w3schools.com">View Site</a>
        </div>
      </div> */}
    </div>  
  </section> 
  )
}

export default Projects