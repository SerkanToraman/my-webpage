import React from 'react'
import { useSelector } from 'react-redux';
import pizzaImg from "../../src/img/pizzaorder.jpeg";
import friendImg from "../../src/img/friendsLogin.jpeg";
import movieListPic from "../../src/img/movieList.jpeg"


const Projects = () => {
  const UIText = useSelector((store)=> store.languageReducer);
  const projectsData = [{
    img :pizzaImg,
    alt:"pizzaOrder",
    name:UIText.projectName1,
    definition:UIText.projectDescription1,
    skill1:"react",
    skill2:"yup",
    skill3:"reactstrap",
    githubLink:"https://github.com/SerkanToraman/fsweb-s7-challenge-pizza.git",
    websitelink:"https://serkan-toraman-pizzaorder-f9ud94m6x-serkantoraman.vercel.app/",
    website:UIText.viewSite
  },
  {
    img :friendImg,
    alt:"friendsLogin",
    name:UIText.projectName2,
    definition:UIText.projectDescription2,
    skill1:"useForm",
    skill2:"context API",
    skill3:"tailwind",
    githubLink:"https://github.com/SerkanToraman/fsweb-s11g2-client-auth-friends",
    websitelink:"https://serkantoraman-loginfriends.vercel.app/",
    website:UIText.viewSite
  },
  {
    img:movieListPic,
    alt:"movieList",
    name:UIText.projectName3,
    definition:UIText.projectDescription3,
    skill1:"react",
    skill2:"redux",
    skill3:"middleware",
    githubLink:"https://github.com/SerkanToraman/fsweb-s10g3-redux-watchlist",
    websitelink:"https://serkan-toraman-movielist.vercel.app/",
    website:UIText.viewSite
  }
  ]
  return (
  <section id="projects">
    <p id='projectMainHeaders'>{UIText.projects}</p>
    <div id="projectSet" >
      {projectsData.map((item)=>
      <div id='projectBoxSet'>
        <div id='projectImg'>
          <img id="projectImg" src={item.img} alt={item.alt}/>
        </div>
        <p id='projectSubHeader'>{item.name}</p>
        <p id='projectDefinition'>{item.definition}
        </p>
        <div id='skillsUsed'>
          <p>{item.skill1}</p>
          <p>{item.skill2}</p>
          <p>{item.skill3}</p>
        </div>
        <div id='links'>
          <a id="projectsLink"href={item.githubLink}>Github</a>
          <a id="projectsLink"href={item.websitelink}>{item.website}</a>
        </div>
      </div>
      )}
    </div>  
  </section> 
  )
}

export default Projects
