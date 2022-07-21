import { SiSuperuser } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { MdWeb , MdOutlineContactless } from "react-icons/md";
import { AiFillRightCircle } from "react-icons/ai";
import { AiFillLeftCircle } from "react-icons/ai";
import { TbArrowTopCircle } from "react-icons/tb";
import { useState } from 'react';


const Header = () => {
    
    const [toggle, setToggle] = useState(true);
    const [back, setBack] = useState(true);
    const toggleMenu = event =>  {
        setToggle (!toggle);
    };
    var moreButton;
    if (toggle) {
      moreButton = <AiFillLeftCircle onClick={toggleMenu}/>;
    } else {
      moreButton = <AiFillRightCircle onClick={toggleMenu} />;
    }
    var backButton; 
    const handleScroll = event => {
        let scrollTop = window.scrollY;
        if(scrollTop > 50){
            setBack(true);
            
        }
        else{
            setBack(false);
           
        }
        
    }
    if(back){
        backButton = <div className="back_to_top"><a href="#"><TbArrowTopCircle/></a></div>;
    }
    else{
        backButton = null;
    }
    
    
    window.addEventListener('scroll', handleScroll);

   

    return (
        <div id="header">
            <div className={"header_nav" + (toggle ? '' : ' thin')}>
                <div className="header_nav_link">
                    <b></b>
                    <a href="#about">
                        <div className="header_nav_link__icon">
                            <SiSuperuser/>
                        </div>
                        <div className="header_nav_link__label">
                            <span>About</span>
                        </div>
                    </a>
                    <b></b>
                </div>
                <div className="header_nav_link">
                    <b></b>
                    <a href="#">
                        <div className="header_nav_link__icon">
                            <GiSkills/>
                        </div>
                        <div className="header_nav_link__label">
                            <span>Skills</span>
                        </div>
                    </a>
                    <b></b>
                </div>
                <div className="header_nav_link">
                    <b></b>
                    <a href="#">
                        <div className="header_nav_link__icon">
                            <MdWeb/>
                        </div>
                        <div className="header_nav_link__label">
                            <span>Portfolio</span>
                        </div>
                    </a>
                    <b></b>
                </div>
                <div className="header_nav_link">
                    <b></b>
                    <a href="#">
                        <div className="header_nav_link__icon">
                            <MdOutlineContactless/>
                        </div>
                        <div className="header_nav_link__label">
                            <span>Contact</span>
                        </div>
                    </a>
                    <b></b>
                </div>
                <div className="header_nav_link no_action">
                    <b></b>
                    <a href="#">
                        <div className="header_nav_link__icon">
                            {moreButton}
                        </div>
                        
                    </a>
                    <b></b>
                </div>

                
            </div>
            {backButton}
            
            
        </div>
    )
}

export default Header;