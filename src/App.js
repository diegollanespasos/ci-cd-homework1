import './App.css';
import profilePhoto from './profile_photo.JPG';

function App() {
  return (
    <div className="container">
      <div className="resume">
      <h1>Diego Ivan Llanes Pasos - Mechatronics Engineer</h1>
        <div className="section-about">
          <div className="section-about-right">
            <img src={profilePhoto} className="profilePhoto" alt="photo" />
          </div>
          <div className="section-about-left">          
            <h2>About me</h2>
            <p>I’m a mechatronics engineering graduate from UADY.
            I’m 25 years old, I like programming and electronics.
            I enjoy studying new things on my own. I have been taking online courses to learn 
            Web Development and I am interested in focusing on Front End Development.</p>
          </div>
        </div>
        <div className="section-profesionalExperience">
          <h2>Profesional Experience</h2>
          <h4>PCC AIRFOILS | Quality Intern (Front End)</h4>
          <ul>
            <li>
            SQL programming to generate reports with the purpose of analyzing the performance of the Front End department.
            </li>
            <li>  
            SolidWorks design of a prototype to illuminate internally the pieces during the Lightcheck process.
            </li>
          </ul>
          <h4>“Agricultura de Precisión en Yucatán: Desarrollo de cultivos inteligentes” | Social Service</h4>
          <ul>
            <li>Sensors instrumentation and PCB design..</li>
            <li>3D design on SolidWorks</li>
          </ul>
        </div>
        <div className="section-profesionalSkills">
          <h2>Profesional Skills</h2>
          <ul>
            <li>Front End technologies: HTML 5, CSS3 & JS ES6.</li>
            <li>Javascript Technologies: React JS, Redux, React Hooks.</li>
            <li>Database Management System: PostgreSQL.</li>
            <li>Version control system: Git/Github.</li>
          </ul>
        </div>
        <div className="section-education">
        <h2>Education</h2>
        <h4>2015 –2019  Mechatronics Engineering. Merida, Yucatan Facultad de Ingenieria UADY.</h4>
      </div>
      <div className="section-contact">
      <h2>Contact</h2>
      <ul>
        <li>9992-00-00-64</li>
        <li>diegollanespasos@hotmail.com</li>
        <li>www.linkedin.com/in/diego-llanes/</li>
      </ul>
    </div>
      </div>
    </div>
  );
}

export default App;
