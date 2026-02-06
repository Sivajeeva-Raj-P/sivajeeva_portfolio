import { createBrowserRouter } from "react-router-dom";
import About from "./About"; 
import Education from "./Education" ;
import Experience from "./Experience" ; 
import Skill from "./Skills";       
import Contact from "./Contact";    
import Projects from "./Projects";
import App from "../App";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <App/> },
      { path: 'about', element: <About/> },
      { path: 'skill', element: <Skill/> },
      { path: 'experience', element: <Experience/> },
      { path: 'education', element: <Education/> },
      { path: 'contact', element: <Contact/> },
      { path: 'projects', element: <Projects/> },
    ]
  }
]);

export default router;
