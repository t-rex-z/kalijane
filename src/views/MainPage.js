import React, { Component } from 'react';
import withRouter from '../withRouter';
import { PageBlock, PageWrapper, Container, PageHeader } from 'react-pageloom';
import "./MainPage.scss";

class MainPage extends Component {
  constructor(){
    console.log("OK")
    super();

    this.state = {
    };
  }

  createWordsAnimation(){
    const words = [
        {value: "AVEC",x: 31,y: 50,size: 18,start: 2,end: 3,fontSize: "5vw",color: "#c5fd01"},  
        {value: "KALI-JANE",x: 25,y: 50,size: 18,start: 3.5,end: 7,fontSize: "5vw",color: "#b80444"}, 
        {value: "SEBASTIEN",x: 25,y: 50,size: 18,start: 8,end: 10,fontSize: "5vw",color: "#c5fd01"},
        {value: "BELLANGER",x: 25,y: 50,size: 18,start: 10,end: 12,fontSize: "5vw",color: "#b80444"},
        {value: "ECRIT",x: 29,y: 50,size: 18,start: 13,end: 15,fontSize: "5vw",color: "#c5fd01"}, 
        {value: "SON ALICE",x: 25,y: 50,size: 18,start: 16,end: 18,fontSize: "5vw",color: "#c5fd01"},
        {value: "AUX POLLUANTS",x: 23,y: 50,size: 18,start: 18.5,end: 20,fontSize: "5vw",color: "#c5fd01"},
        {value: "ETERNELS",x: 27,y: 50,size: 18,start: 20,end: 22,fontSize: "5vw",color: "#c5fd01"},  
        {value: "UNE",x: 34,y: 43,size: 18,start: 23,end: 24,fontSize: "5vw",color: "#b80444"}, 
        {value: "MUTASY",x: 27,y: 50,size: 18,start: 24,end: 27,fontSize: "5vw",color: "#c5fd01"}, 
        {value: "FANTAISIE",x: 25,y: 63,size: 18,start: 28,end: 28.5,fontSize: "5vw",color: "#c5fd01"},
        {value: "MUTANTE",x: 27,y: 63,size: 18,start: 28.5, end: 29,fontSize: "5vw",color: "#b80444"},
        {value: "OUI",x: 12,y: 60,size: 18,start: 29,end: 30,fontSize: "5vw",color: "#c5fd01"},
        {value: "LES PLASTIQUES",x: 8,y: 50,size:31,start: 31,end: 33,fontSize: "5vw",color: "#b80444"},
        {value: "EN",x: 8,y: 50,size: 18,start: 33,end: 33.25,fontSize: "5vw",color: "#c5fd01"},
        {value: "ONT",x: 8,y: 50,size: 18,start: 33.25,end: 33.50,fontSize: "5vw",color: "#b80444"},
        {value: "PERTURBE",x: 8,y: 50,size: 18,start: 33.50,end: 33.75,fontSize: "5vw",color: "#c5fd01"},
        {value: "LE RECIT",x: 8,y: 50,size: 18,start: 33.75,end: 34,fontSize: "5vw",color: "#b80444"},
        {value: "ODYSSEE",x: 8,y: 50,size: 18,start: 36,end: 38,fontSize: "5vw",color: "#c5fd01"},
        {value: "A HAUTEUR",x: 8,y: 50,size: 18,start: 38,end: 38.5,fontSize: "5vw",color: "#b80444"},
        {value: "D'ENFANT",x: 8,y: 50,size: 18,start: 38.5,end: 40,fontSize: "5vw",color: "#c5fd01"},
        {value: "CE DRAME",x: 8,y: 50,size: 18,start: 41,end: 42,fontSize: "5vw",color: "#b80444"},
        {value: "FEROCE",x: 8,y: 50,size: 18,start: 43,end: 45,fontSize: "5vw",color: "#c5fd01"},
        {value: "A LA CROISEE",x: 8,y: 50,size: 18,start: 45,end: 46,fontSize: "5vw",color: "#b80444"},
        {value: "DU ROMAN",x: 8,y: 50,size: 18,start: 47,end: 48,fontSize: "5vw",color: "#c5fd01"},
        {value: "ET DU POEME",x: 8,y: 50,size: 18,start: 48,end: 50,fontSize: "5vw",color: "#b80444"},
        {value: "EPIQUE",x: 8,y: 50,size: 18,start: 50,end: 53,fontSize: "5vw",color: "#c5fd01"},
        {value: "SE DEPLOIE",x: 8,y: 50,size: 18,start: 53,end: 53.5,fontSize: "5vw",color: "#b80444"},
        {value: "EN",x: 8,y: 50,size: 18,start: 53.5,end: 54,fontSize: "5vw",color: "#c5fd01"},
        {value: "DIX",x: 8,y: 50,size: 18,start: 54,end: 56,fontSize: "5vw",color: "#b80444"},
        {value: "ECLATS",x: 8,y: 50,size: 18,start: 57,end: 57.5,fontSize: "5vw",color: "#c5fd01"},
        {value: "SENSIBLES",x: 8,y: 50,size: 18,start: 57.5,end: 59.5,fontSize: "5vw",color: "#b80444"},
        {value: "AUSSI APPELES",x: 8,y: 50,size: 18,start: 60,end: 61,fontSize: "5vw",color: "#c5fd01"},
        {value: "ALLELIES",x: 8,y: 50,size: 18,start: 63,end: 66,fontSize: "5vw",color: "#b80444"},
        {value: "CELLE",x: 8,y: 50,size: 18,start: 67,end: 68,fontSize: "5vw",color: "#c5fd01"},
        {value: "DE",x: 8,y: 50,size: 18,start: 68,end: 68.25,fontSize: "5vw",color: "#b80444"},
        {value: "LA",x: 8,y: 50,size: 18,start: 68.25,end: 68.50,fontSize: "5vw",color: "#c5fd01"},
        {value: "FUGUE",x: 8,y: 50,size: 18,start: 68.50,end: 70,fontSize: "5vw",color: "#b80444"},
        {value: "OUVRE",x: 8,y: 50,size: 18,start: 70,end: 72,fontSize: "5vw",color: "#c5fd01"},
        {value: "L'EPOPEE",x: 27,y: 60,size: 18,start: 72,end: 76,fontSize: "5vw",color: "#b80444"}
    ];

    let result = [];
    for(let i = 0; i < words.length; ++i){
        const word = words[i];
        result.push(
            <span 
            className='fade-in-out'
            style={{
                float: "left",
                position : "absolute",
                left : word.x + "%",
                top : word.y + "%",
                fontSize : word.fontSize,
                opacity: 0,
                animationDelay : `${word.start}s`,
                animationDuration : `${word.end - word.start}s`,
                color : word.color
            }}>
                {word.value}
            </span>
        );
    }

    return result;
  }

  render(){
    return (
        <>
            <div className='menu'>
                <div className='mainMenu'>
                    <div className='couvButton'></div>
                    <div className='extraitButton'></div>
                    <div className='auteurButton'></div>
                    <div className='librairieButton'></div>
                </div>
                <div className='betweenMenus'></div>
                <div className='extraMenu'>
                    <div className='mailButton'></div>
                    <div className='instaButton'></div>
                    <div className='youtubeButton'></div>
                </div>
            </div>
            <PageWrapper snapScroll>
                <PageBlock>
                    <div className="homeBlock">
                        <div className='precoBlock'>

                        </div>
                    
                    </div>

                </PageBlock>
                <PageBlock>
                    <div className='universBlock'>
                        <div className='letters'>
                            {this.createWordsAnimation()}
                        </div>
                        <div className='bookBack'>
                            <img src="assets/images/4 de couv.png"></img>
                            <p>
                                Kali-Jane a six ans, amazone ou gitane, elle hésite, c’est une fille du futur. Elle voyage dans une roulotte avec son papāye, le boucher de la tribu ; ensemble, et génération pour son peuple, ils font le tour de notre planète sauvage et hybride.
                                <br/>
                                <br/>
                                Aujourd’hui, les deux nomades ont pris du retard sur le reste de la caravane ; c’est la nuit et Kali-Jane ne dort pas. Elle fugue.
                                <br/>
                                <br/>
                                L’enfant part sauver sa Dame, une biche au sang de dragon. Elle lui a juré qu’elle ne serait pas abattue. Elle rêve de la voir guérir, c’est pour ça qu’elle l’emmène voir la Méditerranée. Mais la biche n’est pas malade, l’animale est enceinte et s’est livrée au boucher pour son accouchement prochain.
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
                <PageBlock>
                    <Container>
                    <div className='otherBlock'>
                        HAUT DE LA PAGE
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                        </p>
                        <br/>
                        <br/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                        </p>
                        <div className='testBottom'>BAS DE LA PAGE</div>
                    </div>
                    </Container>
                </PageBlock>
                <PageBlock>
                    <div className="homeBlock">

                    
                    </div>
                </PageBlock>
            </PageWrapper>
        </>
    )
  }
}

export default withRouter(MainPage);