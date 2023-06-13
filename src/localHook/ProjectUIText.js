// In order to avoid high code count in Project js this custom hook created, the data comes from reducer and then is sent to Project js
import pizzaImg from "../../src/img/pizzaorder.jpeg";
import friendImg from "../../src/img/friendsLogin.jpeg";
import movieListPic from "../../src/img/movieList.jpeg";
import { useSelector } from "react-redux";

export const ProjectUIText = () => {

  const UITextProject = useSelector((store)=> store.languageReducer)

  const projectsData = [{
    img :pizzaImg,
    alt:"pizzaOrder",
    name:UITextProject.projectName1,
    definition:UITextProject.projectDescription1,
    skill1:"react",
    skill2:"yup",
    skill3:"reactstrap",
    githubLink:"https://github.com/SerkanToraman/fsweb-s7-challenge-pizza.git",
    websitelink:"https://serkan-toraman-pizzaorder-f9ud94m6x-serkantoraman.vercel.app/",
    website:UITextProject.viewSite
  },
  {
    img :friendImg,
    alt:"friendsLogin",
    name:UITextProject.projectName2,
    definition:UITextProject.projectDescription2,
    skill1:"useForm",
    skill2:"context API",
    skill3:"tailwind",
    githubLink:"https://github.com/SerkanToraman/fsweb-s11g2-client-auth-friends",
    websitelink:"https://serkantoraman-loginfriends.vercel.app/",
    website:UITextProject.viewSite
  },
  {
    img:movieListPic,
    alt:"movieList",
    name:UITextProject.projectName3,
    definition:UITextProject.projectDescription3,
    skill1:"react",
    skill2:"redux",
    skill3:"middleware",
    githubLink:"https://github.com/SerkanToraman/fsweb-s10g3-redux-watchlist",
    websitelink:"https://serkan-toraman-movielist.vercel.app/",
    website:UITextProject.viewSite
  }]
  return projectsData;
}


