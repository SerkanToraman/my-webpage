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
          <img id="projectImg" src={require("../../src/img/pizzaorder.jpeg")} alt="pizzaOrder"/>
        </div>
        <p id='projectSubHeader'>{UIText.projectName1}e</p>
        <p id='projectDefinition'>{UIText.projectDescription1}
        </p>
        <div id='skillsUsed'>
          <p>react</p>
          <p>yup</p>
          <p>reactstrap</p>
        </div>
        <div id='links'>
          <a id="projectsLink"href="https://github.com/SerkanToraman/fsweb-s7-challenge-pizza.git">Github</a>
          <a id="projectsLink"href="https://serkan-toraman-pizzaorder-f9ud94m6x-serkantoraman.vercel.app/">{UIText.viewSite}</a>
        </div>
      </div>
      <div id='projectBoxSet'>
        <div id='projectImg'>
          <img id="projectImg" src={require("../../src/img/friendsLogin.jpeg")} alt="friendsLogin"/>
        </div>
        <p id='projectSubHeader'>{UIText.projectName2}</p>
        <p id='projectDefinition'>{UIText.projectDescription2}
        </p>
        <div id='skillsUsed'>
          <p>useForm</p>
          <p>context API</p>
          <p>tailwind</p>
        </div>
        <div id='links'>
          <a id="projectsLink"href="https://github.com/SerkanToraman/fsweb-s11g2-client-auth-friends">Github</a>
          <a id="projectsLink"href="https://serkantoraman-loginfriends.vercel.app/">{UIText.viewSite}</a>
        </div>
      </div>
      <div id='projectBoxSet'>
        <div id='projectImg'>
          <img id="projectImg" src={require("../../src/img/movieList.jpeg")} alt="movieList"/>
        </div>
        <p id='projectSubHeader'>{UIText.projectName3}</p>
        <p id='projectDefinition'>{UIText.projectDescription3}
        </p>
        <div id='skillsUsed'>
          <p>react</p>
          <p>redux</p>
          <p>middleware</p>
        </div>
        <div id='links'>
          <a id="projectsLink"href="https://github.com/SerkanToraman/fsweb-s10g3-redux-watchlist">Github</a>
          <a id="projectsLink"href="https://serkan-toraman-movielist.vercel.app/">{UIText.viewSite}</a>
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