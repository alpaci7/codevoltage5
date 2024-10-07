import "../styles/Home1.css";
import code from "../images/code.png";
import item1 from "../images/item1.png";
import item2 from "../images/item2.png";
import item3 from "../images/item3.png";
import item4 from "../images/item4.png";
import item5 from "../images/item5.png";

import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { useTranslation } from 'react-i18next';
import "../styles/Home.css";
import robotics from '../images/robotics.png';
import IoT from '../images/IoT.jpg';
import Matlab from '../images/M&S.jpg';
import Z80 from '../images/Z80.png';
import PLD from '../images/PLD.jpg';
import CCE from '../images/cce.jpeg';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import SocialNetwork from '../components/SocialNetwork';
import Footer from '../components/Footer';
import ParticlesComponent from '../components/Particles';

import ImageSlider from "../components/ImageSlider";





const Home1 = ({user, MESSAGE, setIsAuthenticated, setUser, checked, setChecked}) => {
    const [message, setMessage] = useState("");
    const {t} = useTranslation();


    const navigate = useNavigate();

    const images = [
        require('../images/arduino.png'),
        require('../images/esp32.jpeg'),
        require('../images/esphome.png'),
        require('../images/sonoff.png'),
        require('../images/shelly.png'),
        require('../images/homeassistant.jpg'),
        require('../images/raspberrypi.png'),
        require('../images/altera.jpg'),
        require('../images/zilog.png'),
        require('../images/proteus.png'),
        require('../images/altium.png'),
        require('../images/c++.png'),
        require('../images/html.png'),
        require('../images/css.png'),
        require('../images/js.png'),
        require('../images/mongodb.png'),
        require('../images/express.png'),
        require('../images/react.jpg'),
        require('../images/node.png'),
        require('../images/matlab.jpg'),
        require('../images/simulink.png'),
    
    
    
    
        
      ];

    useEffect(()=>{
        if(user === "none"){
            setIsAuthenticated(false);
            setUser("none");
        }
        else{
            setIsAuthenticated(true);
        }
    });
    useEffect(()=>{
        if(MESSAGE === "success&verify"){
            setMessage(t('Success And Verify'));
        }
        else if(MESSAGE === "success"){
            setMessage(t('Success'));
        }
        else if(MESSAGE === "welcome"){
            setMessage(t('Welcome'));
        }
        else if(MESSAGE === "welcome&verified"){
            setMessage(t('Welcome & Verified'));
            
        }
        else{
            setMessage("");
        }
    },[MESSAGE, t]);

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);


    return (
        <div>
            <NavBar user={user} checked={checked} setChecked={setChecked}></NavBar>
            <ParticlesComponent/>
            <SocialNetwork/>
            <div className="info">
                <div className="info-code">
                    <img className="item1" src={item1} alt="item1"></img>
                    <img className="info-code-image" src={code} alt="REACT Code"></img>

                </div>
                
                <div className="item4">
                    <img src={item4} alt="code logo"></img>
                </div>
                
                <div className="info-description">
                    <h1>
                        <span style={{color : "var(--heading-color)"}}>{t('Code')}</span><span style={{color : "var(--button-subscribe-hover)"}}>{t('Voltage')}</span> {t('School')}
                        <br/>
                        {t('Formations présentiels')}
                        <br/>
                        {t('en')}<span style={{color : "var(--button-subscribe-hover)"}}> {t('Électronique')} </span>{t('et')} <span style={{color : "var(--heading-color)"}}>{t('Informatique')}</span>
                    </h1>
                    <h2>{t('Learning by doing')}</h2>
                
                </div>

                <div className="item3">
                    <img src={item5} alt="trace"></img>
                </div>
                <div className="item5">
                    <img src={item5} alt="trace"></img>
                </div>
                
            </div>
            <div className="course-header">
                <div>
                    <img src={item2} alt="trace"></img>
                </div>
                <h2>{t('Courses')}</h2>
                <div>
                    <img src={item3} alt="trace"></img>
                </div>
            </div>

            <div className='main-container'>
            {message ? <div className="message home-message">{message}</div> : <div></div>}
            <div className='course-container1'>
                <div className='item course-image1'><img src={robotics} alt="Robotics"/></div>

                <div className='item topic1'>
                    <h2>{t('Course')} :</h2>
                    <p className='contenu'>{t('Robotics')}</p>
                </div>
                <div className='item duration1'>
                    <h2>{t('Duration')} :</h2>
                    <p className='contenu'>64 {t('Hours')} {t('in')} 4 {t('Months')} </p>
                </div>
                <div className='item level1'>
                    <h2>{t('Level')} :</h2>
                    <p className='contenu'>{t('Beginner')} </p>
                </div>
                <div className='item price1'>
                    <h2>{t('Price')} :</h2>
                    <p className='contenu price-child'>600 DH/{t('Month')} </p>
                </div>
                
                <div className="course-button11">
                    <Button onClick={()=>{navigate("/courses/robotics")}} $Border="2px solid #17596c">{t('Show More')}</Button>
                </div>
                
                <div className="course-button12">
                    <Button $BackgroundColor="#84dba8" $HoverBackgroundColor="#6a886f" $Border="2px solid #428b52">{t('Subscribe to this course')}</Button>
                </div>

            </div>
            <div className='course-container2'>
                <div className='item course-image2'><img src={IoT} alt="IoT"/></div>
                
                <div className='item topic2'>
                    <h2>{t('Course')} :</h2>
                    <div>
                        <p className='contenu'>{t('Smart Home & IoT')}</p>
                    </div>
                </div>
                <div className='item topic2-name'>
                    <p>{t('Internet Of Things')}</p>
                </div>

                <div className='item duration2'>
                    <h2>{t('Duration')} :</h2>
                    <p className='contenu'>64 {t('Hours')} {t('in')} 4 {t('Months')} </p>
                </div>
                <div className='item level2'>
                    <h2>{t('Level')} :</h2>
                    <p className='contenu'>{t('Intermediate')} </p>
                </div>
                <div className='item price2'>
                    <h2>{t('Price')} :</h2>
                    <p className='contenu'>600 DH/{t('Month')} </p>
                </div>
                
                <div className="course-button21">
                    <Button onClick={()=>{navigate("/courses/IoT")}} $Border="2px solid #17596c">{t('Show More')}</Button>
                </div>
                
                <div className="course-button22">
                    <Button $BackgroundColor="#84dba8" $HoverColor="#6a886f" $Border="2px solid #428b52">{t('Subscribe to this course')}</Button>

                </div>
            </div>
           
            <div className='course-container2'>
                <div className='item course-image2'><img  src={CCE} alt="Conception des cartes électroniques"/></div>
               
                <div className='item topic2'>
                    <h2>{t('Course')} :</h2>
                    <div></div>
                    
                </div>
                <div className='item topic2-name'>
                    <p className='contenu'>{t('PCB Design and Manufacturing')}</p>
                </div>
                <div className='item duration2'>
                    <h2>{t('Duration')} :</h2>
                    <p className='contenu'>64 {t('Hours')} {t('in')} 4 {t('Months')} </p>
                </div>
                <div className='item level2'>
                    <h2>{t('Level')} :</h2>
                    <p className='contenu'>{t('Beginner')} </p>
                </div>
                <div className='item price2'>
                    <h2>{t('Price')} :</h2>
                    <p className='contenu'>600 DH/{t('Month')} </p>
                </div>
                
                <div className="course-button21">
                    <Button onClick={()=>{navigate("/courses/robotics")}} $Border="2px solid #17596c">{t('Show More')}</Button>
                </div>
                
                <div className="course-button22">
                    <Button $BackgroundColor="#84dba8" $HoverColor="#6a886f" $Border="2px solid #428b52">{t('Subscribe to this course')}</Button>

                </div>
            </div>
            <div className='course-container1'>
                <div className='item course-image1'><img src={Matlab} alt="MATLAB & SIMULINK"/></div>
                
                <div className='item topic1'>
                    <h2>{t('Course')}:</h2>
                    <div>

                    <p className='contenu'>{t('MATLAB & SIMULINK')}</p>
                    </div>
                </div>
                <div className='item duration1'>
                    <h2>{t('Duration')} :</h2>
                    <p>64 {t('Hours')} {t('in')} 4 {t('Months')} </p>
                </div>
                <div className='item level1'>
                    <h2>{t('Level')} :</h2>
                    <p className='contenu'>{t('Intermediate')} </p>
                </div>
                <div className='item price1'>
                    <h2>{t('Price')} :</h2>
                    <p className='contenu'>600 DH/{t('Month')} </p>
                </div>
                
                <div className="course-button11">
                    <Button onClick={()=>{navigate("/courses/robotics")}} $Border="2px solid #17596c">{t('Show More')}</Button>
                </div>
                
                <div className="course-button12">
                    <Button $BackgroundColor="#84dba8" $HoverColor="#6a886f" $Border="2px solid #428b52">{t('Subscribe to this course')}</Button>
    
                </div>
            </div>
            <div className='course-container1'>
                <div className='item course-image1'><img src={Z80} alt="Assembly z80"/></div>

                <div className='item topic1'>
                    <h2>{t('Course')} :</h2>
                    <p className='contenu'>{t('Assembly')}</p>
                </div>
                <div className='item duration1'>
                    <h2>{t('Duration')} :</h2>
                    <p className='contenu'>64 {t('Hours')} {t('in')} 4 {t('Months')} </p>
                </div>
                <div className='item level1'>
                    <h2>{t('Level')} :</h2>
                    <p className='contenu'>{t('Advanced')} </p>
                </div>
                <div className='item price1'>
                    <h2>{t('Price')} :</h2>
                    <p className='contenu'>600 DH/{t('Month')} </p>
                </div>
                
                <div className="course-button11">
                    <Button onClick={()=>{navigate("/courses/robotics")}} $Border="2px solid #17596c">{t('Show More')}</Button>
                </div>
                
                <div className="course-button12">
                    <Button $BackgroundColor="#84dba8" $HoverColor="#6a886f" $Border="2px solid #428b52">{t('Subscribe to this course')}</Button>


                </div>

            </div>
            <div className='course-container1'>
                <div className='item course-image1'><img src={PLD} alt="Circuit logiue programmable"/></div>
                
                <div className='item topic1'>
                    <h2>{t('Course')} :</h2>
                    <p className='contenu'>{t('VHDL - FPGA')}</p>
                </div>
                <div className='item duration1'>
                    <h2>{t('Duration')} :</h2>
                    <p className='contenu'>64 {t('Hours')} {t('in')} 4 {t('Months')} </p>
                </div>
                <div className='item level1'>
                    <h2>{t('Level')} :</h2>
                    <p className='contenu'>{t('Advanced')} </p>
                </div>
                <div className='item price1'>
                    <h2>{t('Price')} :</h2>
                    <p className='contenu'>600 DH/{t('Month')} </p>
                </div>
                
                <div className="course-button11">
                    <Button onClick={()=>{navigate("/courses/robotics")}} $Border="2px solid #17596c">{t('Show More')}</Button>
                </div>
                
                <div className="course-button12">
                    <Button $BackgroundColor="#84dba8" $HoverColor="#6a886f" $Border="2px solid #428b52">{t('Subscribe to this course')}</Button>
    
                </div>
            </div>
            
            </div>
            <ImageSlider images={images}/>

            <Footer/>



        </div>
    );
}
 
export default Home1;