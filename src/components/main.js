import About from "./main_elements/about";
import Contact from "./main_elements/contact";
import Entry from "./main_elements/entry";
import Portfolio from "./main_elements/portfolio";
import Skills from "./main_elements/skills";



const Main = () => {
    
    
    

    return (
        <div id="main">
           <Entry/>
           <About/>
           <Skills/>
           <Portfolio/>
           <Contact/>
        </div>
    )
}

export default Main;