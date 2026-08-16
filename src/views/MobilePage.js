import React, { Component, useEffect, useRef, useState } from 'react';
import withRouter from '../withRouter';
import { PageBlock, PageWrapper, Container, PageHeader } from 'react-pageloom';
import { FaArrowAltCircleRight, FaArrowCircleRight, FaBars, FaCross } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TbShoppingCartShare } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { BiLogoTiktok } from "react-icons/bi";
import "./MobilePage.scss";
import { useInView, useOnInView } from 'react-intersection-observer';

const images = [
    {
        src: './assets/images/extraits/page1.jpg',
        loading: 'lazy',
    },
    {
        src: './assets/images/extraits/page2.jpg',
        loading: 'lazy',
    },
    {
        src: './assets/images/extraits/page3.jpg',
        loading: 'lazy',
    },
];

export default function MobilePage(){
    const [showMenu, setShowMenu] = useState(false);
    const [currentPage, setCurrentPage] = useState("home");
    const [extraitsArrowPosition, setExtraitsArrowPosition] = useState(null);
    const [words, setWords] = useState([]);

    const setDefaultWords = ()=>{
        let defaultWords = [
            {value: "AVEC",x: 32,y: 30,size: 18,start: 1,end: 1.3,fontSize: "5vw",color: "#c5fd01", opacity : 0},  
            {value: "KALI-JANE",x: 25,y: 30,size: 18,start: 1.3,end: 1.6,fontSize: "5vw",color: "#b80444", opacity : 0}, 
            {value: "KALI-JANE",x: 25,y: 30,size: 18,start: 1.6,end: 1.9,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "KALI-JANE",x: 25,y: 30,size: 18,start: 1.9,end: 2.1,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "KALI-JANE",x: 25,y: 30,size: 18,start: 2.1,end: 2.3,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "KALI-JANE",x: 25,y: 30,size: 18,start: 2.3,end: 3.3,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "SEBASTIEN",x: 23,y: 30,size: 18,start: 3.3,end: 3.7,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "BELLANGER",x: 23,y: 30,size: 18,start: 3.7,end: 4.1,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "ECRIT",x: 29,y: 30,size: 18,start: 4.1,end: 4.5,fontSize: "5vw",color: "#c5fd01", opacity : 0}, 
            {value: "SON ALICE",x: 25,y: 30,size: 18,start: 4.5,end: 4.9,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "AUX",x: 17,y: 30,size: 18,start: 4.9,end: 5.5,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "POLLUANTS",x: 30,y: 40,size: 18,start: 5.1,end: 5.5,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "ETERNELS",x: 25,y: 50,size: 18,start: 5.5 ,end: 5.9,fontSize: "5vw",color: "#c5fd01", opacity : 0},  
        
            {value: "MUTASY",x: 27,y: 30,size: 18,start: 6,end: 6.2,fontSize: "5vw",color: "#b80444", opacity : 0}, 
            {value: "MUTASY",x: 27,y: 30,size: 18,start: 6.2,end: 6.4,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "MUTASY",x: 27,y: 30,size: 18,start: 6.4,end: 6.6,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "MUTASY",x: 27,y: 30,size: 18,start: 6.6,end: 6.8,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "MUTASY",x: 27,y: 30,size: 18,start: 6.8,end: 8,fontSize: "5vw",color: "#b80444", opacity : 0},

            {value: "FANTAISIE",x: 24,y: 30,size: 18,start: 8,end: 8.4,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "MUTANTE",x: 25,y: 30,size: 18,start: 8.4, end: 8.8,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "OUI",x: 32,y: 30,size: 18,start: 8.8,end: 9.2,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "LES PLASTIQUES",x: 17,y: 30,size:31,start: 9.2,end: 9.6,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "EN",x: 31,y: 30,size: 18,start: 9.6,end: 10.2,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "ONT",x: 39,y: 40,size: 18,start: 9.9,end: 10.2,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "PERTURBE",x: 24,y: 30,size: 18,start: 10.2,end: 10.6,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "LE RECIT",x: 25,y: 30,size: 18,start: 10.6,end: 11,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "ODYSSEE",x: 25,y: 30,size: 18,start: 11,end: 12.9,fontSize: "5vw",color: "#c5fd01", opacity : 0},
        
            {value: "A HAUTEUR",x: 23,y: 30,size: 18,start: 12.9,end: 13.3,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "D'ENFANT",x: 25,y: 30,size: 18,start: 13.3,end: 13.7,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "CE DRAME",x: 24,y: 30,size: 18,start: 13.7,end: 14.1,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "FEROCE",x: 26,y: 30,size: 18,start: 14.1,end: 14.5,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "A",x: 20,y: 30,size: 18,start: 14.5,end: 15.4,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "LA",x: 30,y: 30,size: 18,start: 14.8,end: 15.4,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "CROISEE",x: 31,y: 40,size: 18,start: 15.1,end: 15.4,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "DU ROMAN",x: 24,y: 30,size: 18,start: 15.4,end: 15.8,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "ET DU POEME",x: 20,y: 30,size: 18,start: 15.8,end: 16.2,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "EPIQUE",x: 27,y: 30,size: 18,start: 16.2,end: 16.6,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "SE DEPLOIE",x: 22,y: 30,size: 18,start: 16.6,end: 17,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "EN",x: 33,y: 30,size: 18,start: 17,end: 17.4,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "DIX",x: 37,y: 30,size: 18,start: 17.4,end: 18,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "ECLATS",x: 38,y: 40,size: 18,start: 17.7,end: 18,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "SENSIBLES",x: 25,y: 30,size: 18,start: 18,end: 18.5,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "AUSSI APPELES",x: 17,y: 30,size: 18,start: 18.5,end: 18.9,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "ALLELIES",x: 25,y: 30,size: 18,start: 18.9,end: 21,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "CELLE",x: 27,y: 30,size: 18,start: 21,end: 21.4,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "DE",x: 33,y: 30,size: 18,start: 21.4,end: 22,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "LA",x: 45,y: 30,size: 18,start: 21.7,end: 22,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "FUGUE",x: 27,y: 30,size: 18,start: 22,end: 22.5,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "OUVRE",x: 27,y: 30,size: 18,start: 22.5,end: 22.9,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "L'EPOPEE",x: 25,y: 30,size: 18,start: 23,end: 23.2,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "L'EPOPEE",x: 25,y: 30,size: 18,start: 23.2,end: 23.5,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "L'EPOPEE",x: 25,y: 30,size: 18,start: 23.5,end: 23.7,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "L'EPOPEE",x: 25,y: 30,size: 18,start: 23.7,end: 25,fontSize: "5vw",color: "#c5fd01", opacity : 0}
        ];

        setWords(defaultWords);
    }

    useEffect(()=> {
        setDefaultWords();
    },[])

     const startTimer = (startTime) => {
        let updatedWords = [...words];
        const timeElapsed = (Date.now() - startTime) / 1000;
        let hasChanged = false;

        for(let i = 0; i < updatedWords.length; ++i){
            let word = updatedWords[i];
            if(word.end < timeElapsed && word.opacity > 0){
                word.opacity = 0;
                hasChanged = true;
            }
            else if(word.start <= timeElapsed && word.end >= timeElapsed && word.opacity == 0){
                console.log("MATCH FOR ", word)
                word.opacity = 100;
                hasChanged = true;
            }
        }

        if(hasChanged){
            setWords(updatedWords);
        }

        //If we reach the end + 2 seconds, play again
        if(timeElapsed > updatedWords[updatedWords.length - 1].end + 2){
            clearInterval(AdnScrollRef.current);
            const now = Date.now();
            AdnScrollRef.current = setInterval(() => {
                startTimer(now);
            }, 200)
        }
    }

    const getWords = ()=>{
        let result = [];
        for(let i = 0; i < words.length; ++i){
            const word = words[i];
            result.push(
                <span 
                className='wordFont'
                key={i}
                style={{
                    float: "left",
                    position : "absolute",
                    left : word.x + "%",
                    top : word.y + "%",
                    fontSize : "10vw",//word.fontSize,
                    opacity: word.opacity,
                    color : word.color
                }}>
                    {word.value}
                </span>
            );
        }

        return result;
    }

    const extraits = [
        "./assets/images/extraits/page1.jpg",
        "./assets/images/extraits/page2.jpg",
        "./assets/images/extraits/page3.jpg",
        "./assets/images/extraits/page4.jpg",
        "./assets/images/extraits/page5.jpg",
        "./assets/images/extraits/page6.jpg",
        "./assets/images/extraits/page7.jpg",
        "./assets/images/extraits/page8.jpg"
    ]

    const UniversBlockRef = useRef(null);
    const CouvScrollRef = useRef(null);
    const AdnScrollRef = useRef(null);
    const ExtraitsScrollRef = useRef(null);
    const AuteurScrollRef = useRef(null);
    const LibrairieScrollRef = useRef(null);

    const CbUniversBlockTrackingRef = useOnInView(
        (inView, entry) => {
        if (inView) {
            // Element is in view - perhaps log an impression
            setCurrentPage("couv");
            
        } 
        },
        {
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false,
        },
    );

    const CbAdnBlockTrackingRef = useOnInView(
        (inView, entry) => {
        if (inView) {
            // Element is in view - perhaps log an impression
            setCurrentPage("adn");
            console.log("Element appeared in view", entry.target);
            const now = Date.now();
            AdnScrollRef.current = setInterval(() => {
                startTimer(now);
            }, 200)
        } else {
            console.log("Element left view", entry.target);
            clearInterval(AdnScrollRef.current);

            let updatedWords = [...words];
            for(let i = 0; i < updatedWords.length; ++i){
                let word = updatedWords[i];
                word.opacity = 0;
            }
            setWords(updatedWords);
        }
        },
        {
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false,
        },
    );

    const CbExtraitsBlockTrackingRef = useOnInView(
        (inView, entry) => {
            if (inView) {
                setCurrentPage("extraits");
            }
        },
        {
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false,
        },
    );

    const CbLibrairieBlockTrackingRef = useOnInView(
        (inView, entry) => {
            if (inView) {
                setCurrentPage("librairie");
            }
        },
        {
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false,
        },
    );

    const CbAuteurBlockTrackingRef = useOnInView(
        (inView, entry) => {
            if (inView) {
                setCurrentPage("auteur");
            }
        },
        {
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false,
        },
    );

    const CbHomeBlockTrackingRef = useOnInView(
        (inView, entry) => {
            if (inView) {
                setCurrentPage("home");
            }
        },
        {
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false,
        },
    );

    return (
        <>
        <div id="landscape">
            <h3>Veuillez passer en mode portrait svp.</h3>
        </div>
        <div id="portrait">
            <div className='mMenuButton'>
                <a href="mailto:sebastien.bellanger@kali-jane.fr"  target='_blank'><MdOutlineEmail /></a>
                <a href="https://www.instagram.com/twamili/" target='_blank'><CiInstagram /></a>
                <a href="https://www.tiktok.com/@twamili" target='_blank'><BiLogoTiktok /></a>
            </div>


            <div className='mShopButton'>
                <TbShoppingCartShare />
            </div>

            
            
            {showMenu && 
            <div id="mMenu">
                <div className='mCloseButton' onClick={()=>{setShowMenu(false)}}><IoClose/></div>
                <div className='mMenuButtons'>
                    <div className={`mCouvButton${(currentPage == "couv" ? "Selected" : "")}`} onClick={()=> {setShowMenu(false);CouvScrollRef.current.scrollIntoView({ behavior: 'smooth' });}}></div>
                    <div id='extraitButton' className={`mExtraitButton${(currentPage == "extraits" ? "Selected" : "")}`} onClick={()=> {setShowMenu(false);ExtraitsScrollRef.current.scrollIntoView({ behavior: 'smooth' });}}></div>
                    <div id="librairieButton" className={`mLibrairieButton${(currentPage == "librairie" ? "Selected" : "")}`} onClick={()=> {setShowMenu(false);LibrairieScrollRef.current.scrollIntoView({ behavior: 'smooth' });}}></div>
                    <div className='mMailButton'></div>
                    <div className='mInstaButton'></div>
                    <div className='mTiktokButton'></div>
                </div>
            </div>
            }
            <PageWrapper snapScroll>
                <PageBlock >
                    <div className="mHomeBlock" ref={CbHomeBlockTrackingRef}>
                        <div className='mPrecoButton'></div>
                    </div>
                </PageBlock>
                <PageBlock  ref={CouvScrollRef}>
                    <div className='mUniversBlock'ref={CbUniversBlockTrackingRef}>
                        <p className='bookFont'>
                            <br/>
                            <br/>
                            Kali-Jane a six ans, amazone ou gitane, elle hésite, c’est une fille du futur.
                            <br/>
                            <br/>
                            Elle voyage dans une roulotte avec son papāye, le boucher de la tribu. Ensemble, et génération après génération pour son peuple, ils font le tour de notre planète sauvage et hybride.
                            <br/>
                            <br/>
                            Aujourd’hui, les deux nomades ont pris du retard sur le reste de la caravane ; c’est la nuit et Kali-Jane ne dort pas. Elle fugue.
                            <br/>
                            <br/>
                            L’enfant part sauver sa Dame, une biche au sang dragon. Elle lui a juré qu’elle ne serait pas abattue. Elle rêve de la soigner et l'emmène guérir à la mer Méditerranée.
                            <br/>
                            <br/>
                            Mais la biche n’est pas malade, l’animale est enceinte et s’est livrée au boucher pour son accouchement prochain.
                            <br/>
                            <br/>
                            Enceinte comme les femmes de jadis.
                            <br/>
                            <br/>
                            Alors, si l’automne tropical les asphyxie, si les lianes entrelacent des barricades et les ronces électrocutent ; non, Kali-Jane n’aura pas le choix, il faudra qu’elle la déclare, à l’encre vivant de son crachat, sa guerre contre la nature.
                        </p>
                    </div>
                </PageBlock>
                <PageBlock  ref={AdnScrollRef}>
                    <div className='mAdnBlock'ref={CbAdnBlockTrackingRef}>
                        <div className='letters'>
                            {getWords()}
                        </div>
                    </div>
                </PageBlock>
                <PageBlock ref={ExtraitsScrollRef}>
                    <div className='mExtraitBlock' ref={CbExtraitsBlockTrackingRef}>
                        <div className='mExtraitGallery'>
                            {extraits.map((url, index)=> {
                                return (
                                    <>
                                    
                                    <img 
                                        onLoad={(event) => {
                                            console.log("LOADED", event.target.height);
                                            setExtraitsArrowPosition({width : event.target.width, height : event.target.height})
                                        }}
                                        src={url}
                                        style={{
                                            position : (index == 0 ?"relative" : "absolute"),
                                            top: 0,
                                            left: (index * 100) + "%",
                                            float: "left"
                                        }
                                        }
                                    ></img>
                                    {index == 0 && extraitsArrowPosition != null && 
                                        <div 
                                            className='extraitsArrow'
                                        style={{
                                            zIndex: 999999999999,
                                            position: "absolute",
                                            left : (extraitsArrowPosition.width - 50) + "px",
                                            top : (extraitsArrowPosition.height - 50) + "px",

                                            width: "50px",
                                            height: "50px",
                                            color: "black",
                                            display: "block",
                                            fontSize: "xx-large"
                                        }}><FaArrowCircleRight/></div>
                                    }
                                </>
                                )
                            })}
                        </div>
                    </div>
                </PageBlock>
                <PageBlock ref={AuteurScrollRef}>
                    <Container>
                        <div className='mAuteurBlock' ref={CbAuteurBlockTrackingRef}>
                            <div className='mAuthorTitle'></div>
                            <div className='mAuthorText'>
                                <p>
                                    Bonjour à tous ! Je ne vous ai pas dit : à 5 ans, j’adorais jouer de la batterie avec mon bâton et les poubelles de la cour. Cela faisait un boucan de fou ! Je ne sais plus très bien si j’étais super heureux ou super énervé, mais j’ai le souvenir de purs moments artistiques !
                                    <br/>
                                    <br/>
                                    Pourquoi je vous raconte ça ? Parce que Kali-Jane braille fort et réagit n’importe comment parfois, je sais bien, elle saoule... Mais ne lui en voulez pas, en tout cas pas trop, c’est pas sa faute ! Dès que j’écris son histoire, voilà, j’avoue, ça me rattrape, je sens compulsivement vibrer les poubelles sur les touches de clavier.
                                </p>
                            </div>
                        </div>
                    </Container>
                </PageBlock>
                <PageBlock ref={LibrairieScrollRef}>
                    <Container>
                        <div className='mLibrairieBlock' ref={CbLibrairieBlockTrackingRef}>
                            <div className='mLibrairieItem'>
                                <div className="mTome1">
                                    
                                </div>
                                <div className='mItemSeparator'></div>
                                <p className='libraryFont'>
                                    Kali-Jane - tome 1
                                    <br/>
                                    Allèlie de la fugue
                                </p>
                            </div>
                        </div>
                    </Container>
                </PageBlock>
            </PageWrapper>
        </div>
        </>
    );
}