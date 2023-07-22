// In order to avoid high code count in Project js this custom hook created, the data comes from reducer and then is sent to Project js
import pizzaImg from "../../src/img/pizzaorder.jpeg";
import twitterProject from "../../src/img/twitterProject.png"
import movieListPic from "../../src/img/movieList.jpeg";
import { useSelector } from "react-redux";

export const ProjectUIText = () => {

  const UITextProject = useSelector((store)=> store.languageReducer)

  const projectsData = [{
    img :pizzaImg,
    alt:"pizzaOrder",
    name:UITextProject.projectName1,
    definition:UITextProject.projectDescription1,
    skill1:"ReactJS",
    skill2:"Yup",
    skill3:"Reactstrap",
    githubLink:"https://github.com/SerkanToraman/fsweb-s7-challenge-pizza.git",
    websitelink:"https://serkan-toraman-pizzaorder.vercel.app/",
    website:UITextProject.viewSite
  },
  {
    img :twitterProject,
    alt:"friendsLogin",
    name:UITextProject.projectName2,
    definition:UITextProject.projectDescription2,
    skill1:"NodeJS",
    skill2:"ReactJS",
    skill3:"SCSS",
    githubLink:"https://github.com/SerkanToraman/fsweb-backend-challenge",
    websitelink:"https://serkantoraman-twitterproject.vercel.app/",
    website:UITextProject.viewSite
  },
  {
    img:movieListPic,
    alt:"movieList",
    name:UITextProject.projectName3,
    definition:UITextProject.projectDescription3,
    skill1:"ReactJS",
    skill2:"Redux",
    skill3:"Tailwind",
    githubLink:"https://github.com/SerkanToraman/fsweb-s10g3-redux-watchlist",
    websitelink:"https://serkan-toraman-movielist.vercel.app/",
    website:UITextProject.viewSite
  }]
  return projectsData;
}


