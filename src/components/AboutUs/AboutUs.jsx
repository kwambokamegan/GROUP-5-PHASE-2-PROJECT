import React from 'react';
import './AboutUs.css';
import logo from "../pictures/SAFIRI LOGO.png"
import markImage from "../pictures/Mark image.png"
import aronImage from "../pictures/Aronn image.png"
import kevinImage from "../pictures/kev image.png"
import NavBar from '../NavBar/NavBar';
import meganImage from "../pictures/Meg image.png"
import Footer from '../Footer/Footer';

function AboutUs() {
  return (
    <>
    <NavBar />
      <div className="about-us">
        <Logo />
        <h1>About</h1>
        <VisionSection />
        <MissionSection />
        <TeamSection />
        <Footer />
      </div>
    </>
  );
}

function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="Company Logo" className="logo" />
    </div>
  );
}

function VisionSection() {
  return (
    <div className="vision-section">
      <div className="vision-content">
        <h2>Vision</h2>
        <p>
Welcome to safiri,our vision as a company is to become the most efficient exploration platform that seamlessly connects tourists and locals to travel destinations. Our core values driving us as an organization include:</p>
          <ol>
<li> Connection: We believe in fostering strong relationships with our clients that transcend borders by offering them an experience that would be life changing.</li>
<li> Authenticity: We are committed to tailoring exquisite expeditions that are unique to this plaform,ensuring that what we offer is unlike other platform.</li>

<li> Innovation:We are committed to improve accessibility and functionality on our online plaform,ensuring that user experience is prioritized</li>
<li>Sustainability: We have consinstently worked with local communities and travel agencies to ensure that pur travel itineraries benefit local establishments while not threatening the local communities' way of life</li>
            <li>Customer-Centricity and Inclusivity: We embrace diversity and strive to creaye a platform that welcomes people from all walks of life and cultures</li>
          </ol>
      </div>
    </div>
  );
}

function MissionSection() {
  return (
    <div className="mission-section">
      <div className="mission-content">
        <h2>Mission Statement</h2>
        <p> Our mission as safiri is to empower international and local tourists by providing personalized and affordable services that facilitate life changing experiences, making every trip worthwhile and memorable.
        </p>
      </div>
    </div>
  );
}

function TeamSection() {
  return (
    <div className="team-section">
      <h2>Our Team</h2>
      <div className="team-members">
        <TeamMember 
          name="Aron Kipkorir" 
          imageUrl={aronImage} 
          githubLink="https://github.com/KipkorirA"
        />
        <TeamMember 
          name="Mark Brian" 
          imageUrl={markImage} 
          githubLink="https://github.com/Markbkiunga"
        />
     <TeamMember 
          name="Megan Kwamboka" 
          imageUrl={meganImage} 
          githubLink="https://github.com/kwambokamegan"
        />
         <TeamMember 
          name="Kevin Kamau" 
          imageUrl={kevinImage} 
          githubLink="https://github.com/Kevinichai"
        />
      </div>
    </div>
  );
}

function TeamMember({ name, imageUrl, githubLink }) {
  return (
    <div className="team-member">
      <img src={imageUrl} alt={`${name}`} className="team-member-image" />
      <h3>{name}</h3>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  );
}


export default AboutUs;
