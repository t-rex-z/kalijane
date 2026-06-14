import React, { Component, useEffect, useRef, useState } from 'react';
import withRouter from '../withRouter';
import { PageBlock, PageWrapper, Container, PageHeader } from 'react-pageloom';

import "./MainPage.scss";
import { useInView, useOnInView } from 'react-intersection-observer';


export default function MainPage(){
    const [words, setWords] = useState([]);
    const [currentPage, setCurrentPage] = useState("home");

    const UniversBlockRef = useRef(null);
    const CouvScrollRef = useRef(null);
    const ExtraitsScrollRef = useRef(null);
    const LibrairieScrollRef = useRef(null);

    const CbUniversBlockTrackingRef = useOnInView(
        (inView, entry) => {
        if (inView) {
            // Element is in view - perhaps log an impression
            setCurrentPage("couv");
            console.log("Element appeared in view", entry.target);
            const now = Date.now();
            UniversBlockRef.current = setInterval(() => {
                startTimer(now);
            }, 200)
        } else {
            console.log("Element left view", entry.target);
            clearInterval(UniversBlockRef.current);

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

    useEffect(()=> {
        setDefaultWords();

    },[])


 

    const setDefaultWords = ()=>{
        let defaultWords = [
            {value: "AVEC",x: 32,y: 50,size: 18,start: 1,end: 1.3,fontSize: "5vw",color: "#c5fd01", opacity : 0},  
            {value: "KALI-JANE",x: 25,y: 50,size: 18,start: 1.3,end: 1.6,fontSize: "5vw",color: "#b80444", opacity : 0}, 
            {value: "KALI-JANE",x: 25,y: 50,size: 18,start: 1.6,end: 1.9,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "KALI-JANE",x: 25,y: 50,size: 18,start: 1.9,end: 2.1,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "KALI-JANE",x: 25,y: 50,size: 18,start: 2.1,end: 2.3,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "KALI-JANE",x: 25,y: 50,size: 18,start: 2.3,end: 3.3,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "SEBASTIEN",x: 23,y: 50,size: 18,start: 3.3,end: 3.7,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "BELLANGER",x: 23,y: 50,size: 18,start: 3.7,end: 4.1,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "ECRIT",x: 29,y: 50,size: 18,start: 4.1,end: 4.5,fontSize: "5vw",color: "#c5fd01", opacity : 0}, 
            {value: "SON ALICE",x: 25,y: 50,size: 18,start: 4.5,end: 4.9,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "AUX",x: 17,y: 50,size: 18,start: 4.9,end: 5.5,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "POLLUANTS",x: 30,y: 50,size: 18,start: 5.1,end: 5.5,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "ETERNELS",x: 25,y: 50,size: 18,start: 5.5 ,end: 5.9,fontSize: "5vw",color: "#c5fd01", opacity : 0},  
        
            {value: "MUTASY",x: 27,y: 50,size: 18,start: 6,end: 6.2,fontSize: "5vw",color: "#b80444", opacity : 0}, 
            {value: "MUTASY",x: 27,y: 50,size: 18,start: 6.2,end: 6.4,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "MUTASY",x: 27,y: 50,size: 18,start: 6.4,end: 6.6,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "MUTASY",x: 27,y: 50,size: 18,start: 6.6,end: 6.8,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "MUTASY",x: 27,y: 50,size: 18,start: 6.8,end: 8,fontSize: "5vw",color: "#b80444", opacity : 0},

            {value: "FANTAISIE",x: 24,y: 50,size: 18,start: 8,end: 8.4,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "MUTANTE",x: 25,y: 50,size: 18,start: 8.4, end: 8.8,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "OUI",x: 32,y: 50,size: 18,start: 8.8,end: 9.2,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "LES PLASTIQUES",x: 17,y: 50,size:31,start: 9.2,end: 9.6,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "EN",x: 31,y: 50,size: 18,start: 9.6,end: 10.2,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "ONT",x: 39,y: 50,size: 18,start: 9.9,end: 10.2,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "PERTURBE",x: 24,y: 50,size: 18,start: 10.2,end: 10.6,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "LE RECIT",x: 25,y: 50,size: 18,start: 10.6,end: 11,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "ODYSSEE",x: 25,y: 50,size: 18,start: 11,end: 12.9,fontSize: "5vw",color: "#c5fd01", opacity : 0},
        
            {value: "A HAUTEUR",x: 23,y: 50,size: 18,start: 12.9,end: 13.3,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "D'ENFANT",x: 25,y: 50,size: 18,start: 13.3,end: 13.7,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "CE DRAME",x: 24,y: 50,size: 18,start: 13.7,end: 14.1,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "FEROCE",x: 26,y: 50,size: 18,start: 14.1,end: 14.5,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "A",x: 20,y: 50,size: 18,start: 14.5,end: 15.4,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "LA",x: 24,y: 50,size: 18,start: 14.8,end: 15.4,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "CROISEE",x: 31,y: 50,size: 18,start: 15.1,end: 15.4,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "DU ROMAN",x: 24,y: 50,size: 18,start: 15.4,end: 15.8,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "ET DU POEME",x: 20,y: 50,size: 18,start: 15.8,end: 16.2,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "EPIQUE",x: 27,y: 50,size: 18,start: 16.2,end: 16.6,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "SE DEPLOIE",x: 22,y: 50,size: 18,start: 16.6,end: 17,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "EN",x: 33,y: 50,size: 18,start: 17,end: 17.4,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "DIX",x: 28,y: 50,size: 18,start: 17.4,end: 18,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "ECLATS",x: 38,y: 50,size: 18,start: 17.7,end: 18,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "SENSIBLES",x: 25,y: 50,size: 18,start: 18,end: 18.5,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "AUSSI APPELES",x: 17,y: 50,size: 18,start: 18.5,end: 18.9,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "ALLELIES",x: 25,y: 50,size: 18,start: 18.9,end: 21,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "CELLE",x: 27,y: 50,size: 18,start: 21,end: 21.4,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "DE",x: 33,y: 50,size: 18,start: 21.4,end: 22,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "LA",x: 40,y: 50,size: 18,start: 21.7,end: 22,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "FUGUE",x: 27,y: 50,size: 18,start: 22,end: 22.5,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "OUVRE",x: 27,y: 50,size: 18,start: 22.5,end: 22.9,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "L'EPOPEE",x: 25,y: 50,size: 18,start: 23,end: 23.2,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "L'EPOPEE",x: 25,y: 50,size: 18,start: 23.2,end: 23.5,fontSize: "5vw",color: "#c5fd01", opacity : 0},
            {value: "L'EPOPEE",x: 25,y: 50,size: 18,start: 23.5,end: 23.7,fontSize: "5vw",color: "#b80444", opacity : 0},
            {value: "L'EPOPEE",x: 25,y: 50,size: 18,start: 23.7,end: 25,fontSize: "5vw",color: "#c5fd01", opacity : 0}
        ];

        setWords(defaultWords);
    }

  

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
            clearInterval(UniversBlockRef.current);
            const now = Date.now();
            UniversBlockRef.current = setInterval(() => {
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
                    fontSize : word.fontSize,
                    opacity: word.opacity,
                    color : word.color
                }}>
                    {word.value}
                </span>
            );
        }

        return result;
    }

    console.log("INNER HEIGHT", window.innerHeight)

    return (
        <>
            <div className='menu'>
                <div className='mainMenu'>
                    <div className={`couvButton${(currentPage == "couv" ? "Selected" : "")}`} onClick={()=> {CouvScrollRef.current.scrollIntoView({ behavior: 'smooth' });}}></div>
                    <div id='extraitButton' className={`extraitButton${(currentPage == "extraits" ? "Selected" : "")}`} onClick={()=> {ExtraitsScrollRef.current.scrollIntoView({ behavior: 'smooth' });}}></div>
                    <div id="librairieButton" className={`librairieButton${(currentPage == "librairie" ? "Selected" : "")}`} onClick={()=> {LibrairieScrollRef.current.scrollIntoView({ behavior: 'smooth' });}}></div>
                </div>
                <div className='betweenMenus'></div>
                <div className='extraMenu'>
                    <div className='mailButton'></div>
                    <div className='instaButton'></div>
                    <div className='youtubeButton'></div>
                </div>
            </div>
            <PageWrapper snapScroll>
                <PageBlock >
                    <div className="homeBlock" ref={CbHomeBlockTrackingRef}>
                        <div className='precoBlock'>

                        </div>
                    
                    </div>
                </PageBlock>
                <PageBlock ref={CouvScrollRef}>
                    <div className='universBlock' ref={CbUniversBlockTrackingRef}>
                        <div className='letters'>
                            {getWords()}
                        </div>
                        <div className='bookBack'>
                            <br/>
                            <img src="assets/images/4 de couv.png"></img>
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
                                L’enfant part sauver sa Dame, une biche au sang de dragon. Elle lui a juré qu’elle ne serait pas abattue. Elle rêve de la voir guérir et l'emmène se soigner à la mer.
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
                    </div>
                </PageBlock>
                <PageBlock ref={ExtraitsScrollRef}>
                    <Container>
                        <div className='extraitBlock' ref={CbExtraitsBlockTrackingRef}>
                            <div className='extraitLeft'>
                                <div id="extrait1L"></div>
                            </div>
                            <div className='extraitRight'>
                                <div id="extrait1R"></div>
                            </div>
                        </div>
                    </Container>
                </PageBlock>
                <PageBlock>
                    <Container>
                    <div className='extraitBlock'>
                        <div className='extraitLeft'>
                            <div id="extrait2L"></div>
                        </div>
                        <div className='extraitRight'>
                            <div id="extrait2R"></div>
                        </div>
                    </div>
                    </Container>
                </PageBlock>
                <PageBlock>
                    <Container>
                    <div className='extraitBlock'>
                        <div className='extraitLeft'>
                            <div id="extrait3L"></div>
                        </div>
                        <div className='extraitRight'>
                            <div id="extrait3R"></div>
                        </div>
                    </div>
                    </Container>
                </PageBlock>
                <PageBlock>
                    <Container>
                    <div className='extraitBlock'>
                        <div className='extraitLeft'>
                            <div id="extrait4L"></div>
                        </div>
                        <div className='extraitRight'>
                            <div id="extrait4R"></div>
                        </div>
                    </div>
                    </Container>
                </PageBlock>
                <PageBlock ref={LibrairieScrollRef}>
                    <Container>
                        <div className='librairieBlock' ref={CbLibrairieBlockTrackingRef}>
                            <div id="librairieHead">
                                <div id='signature' style={{height: '100%', width : Math.trunc(window.outerHeight * 35 / 100) + "px"}}>
                                    <div id="sigPicture"></div>
                                </div>
                                <div id='author'>
                                    <div id="authorPhoto">
                                        <div id='authorBackground'></div>
                                        <div id='authorPicture'></div>
                                        <div className='clear'></div>
                                    </div>
                                    <div id='authorName'></div>
                                    <div id="authorText">
                                        <p className='authorFont'>
                                            Bonjour à tous ! Je ne vous ai pas dit : à 5 ans, j’adorais jouer de la batterie avec mon bâton et les poubelles de la cour. Cela faisait un boucan de fou ! Je ne sais plus très bien si j’étais super heureux ou super énervé, mais j’ai le souvenir de purs moments artistiques !
                                            <br/>
                                            <br/>
                                            Pourquoi je vous raconte ça ? Parce que Kali-Jane braille fort et réagit n’importe comment parfois, je sais bien, elle saoule... Mais ne lui en voulez pas, en tout cas pas trop, c’est pas sa faute ! Dès que j’écris son histoire, voilà, j’avoue, ça me rattrape, je sens compulsivement vibrer les poubelles sur les touches de clavier.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div id="librairieBody">
                                <div id="librairieBackground">
                                    <div style={{height: '80%', width : Math.trunc(window.outerHeight * 35 / 100) + "px"}}></div>
                                    <div className='librairieLivres' style={{height: '80%'}}>
                                        <div className='librairieItem'>
                                            <div className="tome1"></div>
                                            <div className='itemSeparator'></div>
                                            <p>
                                                Kali-Jane - tome 1
                                                <br/>
                                                Alélie de la fugue
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </Container>
                </PageBlock>
            </PageWrapper>
        </>
    )
}