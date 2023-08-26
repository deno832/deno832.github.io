import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Python from "../assets/img/Python.svg";
import C_sharp from "../assets/img/C_sharp.svg";
import Java from "../assets/img/Java.svg";
import c_ples from "../assets/img/c_ples_ples.svg";
import JS from "../assets/img/JS.svg";
import Others from "../assets/img/Other.svg";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Yazılım Dilleri</h2>
                        <p>Şu Kadar Yazdığım Kodların Dillere Oranı <br/> <br/> GitHub'dan Alınmıştır</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={Python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={C_sharp} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={c_ples} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={Java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={JS} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={Others} alt="Image" />
                                <h5>Diğer</h5>
                                <h9>(HTML/CSS/Assembly vb.)</h9>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
