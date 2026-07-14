import React, { Component, useEffect, useRef, useState } from 'react';
import withRouter from '../withRouter';
import { PageBlock, PageWrapper, Container, PageHeader } from 'react-pageloom';
import { FaArrowAltCircleRight, FaArrowCircleRight, FaBars, FaCross } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TbShoppingCartShare } from "react-icons/tb";
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
    const ExtraitsScrollRef = useRef(null);
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
            <div className='mMenuButton' onClick={()=> {
                setShowMenu(true);
            }}>
                <FaBars/>
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
                            Elle voyage dans une roulotte avec son papāye, le boucher de la tribu. Ensemble, et génération pour son peuple, ils font le tour de notre planète sauvage et hybride.
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
                <PageBlock ref={LibrairieScrollRef}>
                    <Container>
                        <div className='mLibrairieBlock' ref={CbLibrairieBlockTrackingRef}></div>
                    </Container>
                </PageBlock>
            </PageWrapper>
        </div>
        </>
    );
}