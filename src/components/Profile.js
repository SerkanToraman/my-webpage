import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {
  const UIText = useSelector((store)=> store.languageReducer);
  return (
    <section id="profile">
        <p id='profileMainHeaders'>{UIText.profileHeader}</p>
        <div id="profileSet" >
            <div id='profileBoxSet'>
              <p id='profileSubHeader'>{UIText.profileHeader}</p>
              <div id='profileBox'>
                <p id="key">{UIText.DOBQuestion}</p>
                <p id="value">{UIText.DOBAnswern}</p>
                <p id="key">{UIText.cityQuestion}</p>
                <p id="value">{UIText.cityAnswer}</p>
                <p id="key">{UIText.educationQuestion}</p>
                <p id="value">{UIText.educationAnswer}</p>
                <p id="key">{UIText.roleQuestion}</p>
                <p id="value">{UIText.roleAnswer}</p>
              </div>
            </div>
            <div id='aboutMeSet'>
              <p id="aboutMeSubHeader">{UIText.aboutme}</p>
              <p id="aboutMeDefinition"> {UIText.aboutMeDescription}</p>
            </div>
        </div>  
    </section> 
  )
}

export default Profile