import IoTImage from '../images/IoT.jpg';
import NavBar from "../components/NavBar";
import arduino from '../images/arduino-logo.png';
import arduinoCode from '../images/arduino-code.png';
import arduinoSchematic from '../images/arduino-schematic.jpeg';
import arduinoCircuit from '../images/arduino-circuit.jpeg';

import { useTranslation } from "react-i18next";
import '../styles/Course.css'
import { Button } from "../components/Button";
import ParticlesComponent from "../components/Particles";
import SocialNetwork from "../components/SocialNetwork";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import ImageSlider from '../components/ImageSlider';
const IoT = ({user,checked, setChecked}) => {
    const {t} = useTranslation();
    const [headerIsSticky, setHeaderIsSticky] = useState(false);
    const [firstMonthIsSticky, setFirstMonthIsSticky] = useState(false);
    const [firstPartIsSticky, setFirstPartIsSticky] = useState(false);
    const [secondPartIsSticky, setSecondPartIsSticky] = useState(false);
    const [secondMonthIsSticky, setSecondMonthIsSticky] = useState(false);
    const [thirdMonthIsSticky, setThirdMonthIsSticky] = useState(false);

    const [buttonIsSticky, setButtonIsSticky] = useState(true);






    const headerRef = useRef(null);

    const firstMonthRef = useRef(null);
    const firstPartRef = useRef(null);
    const secondPartRef = useRef(null);
    const secondMonthRef = useRef(null);
    const thirdMonthRef = useRef(null);

    const unStickRef = useRef(null);
    const secondPartUnStickRef = useRef(null);
    const secondMonthUnStickRef = useRef(null);
    const thirdMonthUnStickRef = useRef(null);

    const buttonStickRef = useRef(null);


    const images = [
        require('../images/arduino.png'),
        require('../images/esp32.jpeg'),
        require('../images/esphome.png'),
        require('../images/sonoff.png'),
        require('../images/shelly.png'),
        require('../images/homeassistant.jpg'),
        require('../images/raspberrypi.png'),
        require('../images/html.png'),
        require('../images/css.png'),
        require('../images/js.png'),
        require('../images/mongodb.png'),
        require('../images/express.png'),
        require('../images/react.jpg'),
        require('../images/node.png'),
        
      ];

    useEffect(() => {
        let lastScrollPosition = 0; 
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const isScrollingDown = scrollPosition > lastScrollPosition; // Determine scroll direction (down or up)

            const header = headerRef.current;
            const firstMonth = firstMonthRef.current;
            const firstPart = firstPartRef.current;
            const secondPart = secondPartRef.current;
            const secondMonth = secondMonthRef.current;
            const thirdMonth = thirdMonthRef.current;


            const unStick = unStickRef.current;
            const secondPartUnStick = secondPartUnStickRef.current;
            const secondMonthUnStick = secondMonthUnStickRef.current;
            const thirdMonthUnStick = thirdMonthUnStickRef.current;

            const buttonStick = buttonStickRef.current;

            if(isScrollingDown){
                if(header){
                    const offset = header.offsetTop;
                    setHeaderIsSticky(scrollPosition >= offset);
                }
                if(firstMonth){
                    const offset = firstMonth.offsetTop;
                    setFirstMonthIsSticky(scrollPosition >= offset);
                }
                if(firstPart){
                    const offset = firstPart.offsetTop;
                    setFirstPartIsSticky(scrollPosition >= offset);
                }
                if(secondPart){
                    const offset = secondPart.offsetTop;
                    setSecondPartIsSticky(scrollPosition >= offset);
                }
                if(secondMonth){
                    const offset = secondMonth.offsetTop;
                    if(scrollPosition >= offset){
                        setSecondMonthIsSticky(true); 
                        setFirstMonthIsSticky(false);
                        setSecondPartIsSticky(false);
                        setFirstPartIsSticky(false);
                    }
                }
                if(thirdMonth){
                    const offset = thirdMonth.offsetTop;
                    if(scrollPosition >= offset){
                        setSecondMonthIsSticky(false); 
                        setThirdMonthIsSticky(true);
                    }
                }
                
            }
            else{
                if(thirdMonthUnStick){
                    const offset = thirdMonthUnStick.offsetTop;
                    if(scrollPosition <= offset){
                        setThirdMonthIsSticky(false);
                        setSecondMonthIsSticky(true)
                    }
                }
                if(secondMonthUnStick){
                    const offset = secondMonthUnStick.offsetTop;
                    if(scrollPosition <= offset){
                        setSecondMonthIsSticky(false);
                        setFirstMonthIsSticky(true);
                        setFirstPartIsSticky(true);
                        setSecondPartIsSticky(true);
                    }
                }

                if(secondPartUnStick){
                    const offset = secondPartUnStick.offsetTop;
                    if(scrollPosition <= offset){
                        setSecondPartIsSticky(false);
                        setFirstPartIsSticky(true);
                        setFirstMonthIsSticky(true);

                    }
                }
                if(unStick){
                    const offset = unStick.offsetTop;
                    if(scrollPosition <= offset){
                        setFirstPartIsSticky(false);
                        setFirstMonthIsSticky(false);
                        setHeaderIsSticky(false)
                    }
                }
            }

            if(buttonStick){
                const offset = buttonStick.offsetTop;
                if(scrollPosition >= offset){
                    setButtonIsSticky(false);
                }
                else{
                    setButtonIsSticky(true);
                }
            }
            lastScrollPosition = scrollPosition;

        };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    return (
        <div>
            <NavBar user={user} checked={checked} setChecked={setChecked}/>
            <ParticlesComponent/>
            <SocialNetwork/>
            <div>

            </div>
            <div>
                <div className="course-container">
                    <div className="course-info-container">
                        <div className='course-image'><img  src={IoTImage} alt="Smart Home & IoT"/></div>

                        <div className="course-info">
                            <div className='course-topic'>
                                <h2>{t('Course')}:</h2>
                                <p className="contenu1">{t('Smart Home & IoT')}</p>
                            </div>

                            <div className='course-duration'>
                                <h2>{t('Duration')}:</h2>
                                <p className="contenu1">64 {t('Hours')} {t('in')} 4 {t('Months')} </p>
                            </div>
                            <div className='course-level'>
                                <h2>{t('Level')} :</h2>
                                <p className="contenu1">{t('Beginner')} </p>
                            </div>
                            <div className='course-price'>
                                <h2>{t('Price')} :</h2>
                                <p className="contenu1">600 DH/{t('Month')}{t('Matériels inclut')} </p>

                            </div>

                        </div>
                        
                    </div>
                    <div className="course-cible-video"> 
                        <div className="course-cible">
                            
                                <p>{t('Découvrez notre formation spécialisée en Domotique et Internet des Objets (IoT). Apprenez à maîtriser les technologies les plus récentes pour créer des systèmes connectés intelligents pour la maison et l\'industrie. Cette formation pratique vous permet d\’acquérir des compétences en programmation, en conception d\’interfaces web, en intégration de capteurs et actionneurs, et en automatisation via des plateformes domotiques comme Home Assistant.')}</p>
                                <h4>{t('À qui s\'adresse cette formation ?')}</h4>
                                <p>{t(' Cette formation s\'adresse à plusieurs profils intéressés par la domotique et l\'Internet des Objets (IoT) :')}</p>
                            <ul>
                           

                                <li><h4>{t('Développeurs et Ingénieurs')}</h4>
                                    <p>{t('Les professionnels souhaitant élargir leurs compétences en programmation IoT et maîtriser les microcontrôleurs ESP8266, ESP32 et ESP32-CAM pour créer des systèmes connectés.')}</p>
                                </li>
                                <li><h4>{t('Techniciens et Installateurs Domotiques')}</h4>
                                    <p>{t('Ceux qui travaillent dans le domaine de la domotique et cherchent à approfondir leurs connaissances sur l\'intégration de dispositifs intelligents comme Sonoff, Shelly, et l\’automatisation avec Home Assistant.')}</p>
                                </li>
                    
                                <li><h4>{t('Étudiants en Électronique, Informatique ou Automatisation')}</h4>
                                    <p>{t('Les étudiants voulant se spécialiser dans les technologies émergentes du IoT et apprendre à développer des solutions intelligentes pour la maison ou l\'industrie.')}</p>

                                </li>
                                <li><h4>{t('Passionnés de Technologie et Makers')}</h4>
                                    <p>{t('Les amateurs de bricolage technologique et d\’électronique qui souhaitent concevoir leurs propres systèmes connectés, créer des projets pratiques (robotique, capteurs, automation), et explorer les possibilités offertes par l\’IoT.')}</p>
                                </li>

                            
                                <li><h4>{t('Entrepreneurs en Domotique')}</h4>
                                    <p>{t('Ceux qui cherchent à développer leur propre activité dans le secteur des maisons intelligentes et de l’automatisation, en apprenant à concevoir et mettre en œuvre des solutions domotiques avancées.')}</p>
                                </li>
                            </ul>                      

                        </div>
                    
                    
                        <div className="course-video">
                            <iframe  src="https://www.youtube.com/embed/GW3CMm8oK1k?si=FqTM7dnNJRmg9_a6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe  src="https://www.youtube.com/embed/GW3CMm8oK1k?si=FqTM7dnNJRmg9_a6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        
                        </div>
                    </div>
                   
                    <div className="course-objectif-images">
                    <div className="course-objectif">
                            <h2>{t('Objectif :')}</h2>
                            <p>{t('Cette formation a pour objectif de vous enseigner à concevoir, programmer, et déployer des systèmes domotiques et IoT complets. Vous apprendrez à maîtriser les microcontrôleurs ESP8266, ESP32, et ESP32-CAM, à créer des interfaces web interactives, à automatiser des dispositifs connectés, et à utiliser des plateformes domotiques comme Home Assistant. Vous découvrirez également les protocoles de communication IoT, l\'intégration avec le cloud, et la gestion d\'appareils via des projets pratiques.')}</p>
                            <ul>
                            <p>{t('À la fin de la formation, vous serez capable de :')}</p>

                            



                                <li><p>{t('Programmation des microcontrôleurs : ESP8266, ESP32, ESP32-CAM pour la gestion des appareils connectés.')}</p></li>
                                <li><p>{t('Création d’interfaces web : Développement d’applications web responsives avec HTML, CSS et JavaScript.')}</p></li>
                                <li><p>{t('Intégration domotique : Utilisation de dispositifs Sonoff, Shelly et automatisation via Home Assistant.')}</p></li>
                                <li><p>{t('Protocoles IoT et Cloud : Communication sans fil avec Bluetooth, MQTT et synchronisation des données avec Firebase.')}</p></li>
                             </ul>

                        </div>
                        <div className="images-container">
                            <div className="image1"><img src={arduinoCode} alt="Arduino Code"></img></div>
                            <div className="image2"><img src={arduinoSchematic} alt="Arduino Schematic"></img></div>
                            <div ref={unStickRef} className="image3"><img src={arduinoCircuit} alt="Arduino Circuit"></img></div>

                        </div>
                    </div>
                    <div className="course-description">
                        <h2 ref={headerRef} className={headerIsSticky ? "header-stick" : "unstick"}>{t('Programme')} :</h2>
                        <div className="course-content">
                            <div className="first-month">
                                <h3 ref={firstMonthRef} className={firstMonthIsSticky ? "first-month-stick":"unstick"}>{t('1ér et 2ème Mois')}</h3>
                                
                                <div className="content-part1">
                                    <h4 ref={firstPartRef} className={firstPartIsSticky ? "first-part-stick":"unstick"}>{t('Partie 1 : Programmation avec ESP')}</h4>
                                    
                                    <ol  className="ol">
                                        <li><p>{t('Blinking LED')}</p></li>
                                        <li><p>{t('Connecting to WiFi')}</p></li>
                                        <li><p>{t('Creating a web server')}</p></li>
                                        <li><p>{t('HTML Page')}</p></li>
                                        <li><p>{t('Adding CSS')}</p></li>
                                        <li><p>{t('Responsive web page')}</p></li>

                                        <li><p>{t('Async Web Server')}</p></li>
                                       

                                        <li><h4>{t('Project 1 : Smart Lampe 220V')}</h4></li>

                                        <li>
                                            <ol><h4>{t('Capteur de Température')}</h4>
                                                <li><p>{t('Reading Data from sensors')}</p></li>
                                                <li><p>{t('Creating a responsive Gauge with HTML CSS and Javascript')}</p></li>
                                            </ol>
                                        </li>

                                        <li>
                                            <ol><h4>{t('DC Motor')}</h4>
                                                <li><p>{t('Creating a responsive Buttons with HTML CSS and Javascript')}</p></li>
                                                <li><p>{t('Controlling DC Motor')}</p></li>
                                            </ol>
                                        </li>

                                        <li><h4>{t('Project 2 : Robot Car')}</h4></li>

                                        <li>
                                            <ol><h4>{t('Servo Motor')}</h4>
                                                <li><p>{t('Creating a responsive Slide with HTML CSS and Javascript')}</p></li>
                                                <li><p>{t('Controlling Servo Motor')}</p></li>
                                            </ol>
                                        </li>

                                        
                                        
                                        <li>
                                            <ol><h4>{t('RFID')}</h4>
                                                <li><p>{t('Reading Data from sensor')}</p></li>
                                                <li><p>{t('Creating a responsive Cards with HTML CSS and Javascript')}</p></li>
                                            </ol>
                                        </li>

                                        <li><h4>{t('Project 3 : Smart Door 1')}</h4></li>

                                        <li>
                                            <ol><h4>{t('Empreinte')}</h4>
                                                <li><p>{t('Reading Data from sensor')}</p></li>
                                                <li><p>{t('Creating a responsive Cards with HTML CSS and Javascript')}</p></li>
                                            </ol>
                                        </li>

                                        <li><h4>{t('Project 4 : Smart Door 2')}</h4></li>

                                        <li>
                                            <ol><h4>{t('Capteur de Mouvement')}</h4>
                                                <li><p>{t('Detecting Objects')}</p></li>
                                                <li><p>{t('Creating a responsive page with HTML CSS and Javascript')}</p></li>
                                            </ol>
                                        </li>

                                        <li><p>{t('Bluetooth')}</p></li>
                                        <li><p>{t('ESP-NOW')}</p></li>
                                        <li><p>{t('WebSocket')}</p></li>
                                        <li><p>{t('MQTT')}</p></li>
                                        <li><p>{t('Communication entre Raspberry pi et ESP')}</p></li>
                                        <li><p>{t('Firebase')}</p></li>

                                        <li><h4>{t('Project 5 : Weather Station')}</h4></li>
                                        <li><h4>{t('Project 6 : Smart Home')}</h4></li>

                                         <li>
                                            <ol><h4>{t('ESP32-CAM')}</h4>
                                                <li><p>{t('Streaming Video')}</p></li>
                                                <li><p>{t('Creating a responsive page with HTML CSS and Javascript')}</p></li>
                                            </ol>
                                        </li>
                                        <li><h4>{t('Project 7 : Robot Car with camera')}</h4></li>


                                        <li>
                                            <ol><h4>{t('MERN Full-Stack')}</h4>
                                                <li><p>{t('Creating the Frontend with React')}</p></li>
                                                <li><p>{t('Creating the Backend server with Node.js and Express')}</p></li>
                                                <li ref={secondMonthUnStickRef}><p>{t('Linking to the MongoDb Database')}</p></li>
                                                <li><p>{t('Creating the ESP Server')}</p></li>
                                                <li><p>{t('Communication between Backend Server and ESP Server')}</p></li>
                                            </ol>
                                        </li>    
                                        
                                    </ol>
                                    

                                </div>
                            </div>
                            <div className="content-part3">
                                <div className="second-month">
                                    <h3 ref={secondMonthRef} className={secondMonthIsSticky ? "second-month-stick":"unstick"}>{t('3ème Mois')}</h3>
                                    <h4 className={secondMonthIsSticky ? "third-part-stick":"unstick"}>{t('Partie 2 : Domotique avec Sonoff et Shelly')}</h4>

                                    <ol className="ol">
                                        <li>
                                            <ol><h4>{t('Lights')}</h4>
                                                <li><p>{t('Lampe')}</p></li>
                                                <li><p>{t('Va-et-vient')}</p></li>
                                                <li><p>{t('RGB Light')}</p></li>
                                                <li><p>{t('RGB Stripe')}</p></li>
                                            </ol>
                                        </li>  
                                        <li><p>{t('Volet Roulant')}</p></li>
                                        <li>
                                            <ol><h4>{t('Sensors')}</h4>
                                                <li><p>{t('Capteur de Mouvement')}</p></li>
                                                <li><p>{t('Capteur magnétique détection d\'ouverture de la porte')}</p></li>
                                                <li><p>{t('Capteur de température et d\'humidité')}</p></li>
                                                <li><p>{t('Capteur de gaz')}</p></li>
                                            </ol>
                                        </li> 
                                        <li ref={thirdMonthUnStickRef}><p>{t('Caméra d\'intérieur')}</p></li>
                                        <li><p>{t('NS Panel')}</p></li>
                                        <li><p>{t('Automations with eWelink and shelly')}</p></li>
                                    </ol>
                                </div>
    
                                <div className="content-part4">
                                    <div className="third-month">
                                        <h3 ref={thirdMonthRef} className={thirdMonthIsSticky ? "third-month-stick":"unstick"}>{t('4ème Mois')}</h3>
                                            <h4 className={thirdMonthIsSticky ? "forth-part-stick":"unstick"}>{t('Partie 3 : Home Assistant')}</h4>

                                        <ol className="ol">
                                            <li ref={buttonStickRef} ><p>{t('Configuration de home assistant sur la raspberry pi')}</p></li>
                                            <li><p>{t('Connecting devices')}</p></li>
                                            <li><p>{t('Creating Dashboards')}</p></li>
                                            <li><p>{t('Creating Senarios')}</p></li>
                                            <li><p>{t('Creating Automations')}</p></li>
                                            <li><p>{t('Remote Acces')}</p></li>
                                            <li><p>{t('ESP Home')}</p></li>
                                            <li><p>{t('Voice Assistant')}</p></li>
                                            <li><p>{t('Caméra de surveillance')}</p></li>




                                        </ol>
                                    </div>

                                    <div className='course-knowledge'>
                                        <h2>{t('What used in this course :')}</h2>
                                        <ImageSlider images={images}/>
                                    </div>
                                                           
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={buttonIsSticky ? "course-button" : "unstick-button" }>
                        <Button $BackgroundColor="var(--button-subscribe)" $HoverBackgroundColor="var(--button-subscribe-hover)" $Border="2px solid #428b52">{t('Subscribe to this course')}</Button>
                    </div>

                   

                   

                   
                </div>  
            </div>
            <Footer/>
        </div>
        
    );
}
 
export default IoT;