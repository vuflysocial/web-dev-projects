
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
                    <div style={{ background: "linear-gradient(90.21deg, rgba(217, 18, 7, 0.5) -5.91%, rgba(209, 121, 14, 0.5) 111.58%)", padding: "8px 10px", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.5)", fontSize: "20px", marginBottom: "16px", display: "inline-block" }}>
  <h2 style={{ color: "white", margin: "0" }}>Tokenomics</h2>
  </div>
  <div>
  <h2 style={{ color: "white", margin: "0" }}>420 billion</h2>
  </div>

<br/>
<br/>


                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <div style={{ background: "linear-gradient(90.21deg, rgba(217, 18, 7, 0.5) -5.91%, rgba(209, 121, 14, 0.5) 111.58%)", padding: "8px 10px", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.5)", fontSize: "20px", marginBottom: "16px", display: "inline-block" }}>
                                <h5>Liquidity</h5>
                                <h5> 2% goes to liquidity</h5>

                            </div>
                            </div>
                            <div style={{ background: "linear-gradient(90.21deg, rgba(217, 18, 7, 0.5) -5.91%, rgba(209, 121, 14, 0.5) 111.58%)", padding: "8px 10px", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.5)", fontSize: "20px", marginBottom: "16px", display: "inline-block" }}>
                            <div className="item">

                                <h5>Rewards</h5>
                                <h5>5% rewards distributed in $TOADY</h5>
                            </div>
                            </div>

                            <div style={{ background: "linear-gradient(90.21deg, rgba(217, 18, 7, 0.5) -5.91%, rgba(209, 121, 14, 0.5) 111.58%)", padding: "8px 10px", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.5)", fontSize: "20px", marginBottom: "16px", display: "inline-block" }}>
                            <div className="item">

                                <h5>Marketing</h5>
                                <h5>2% goes to marketing</h5>
                            </div>
                            </div>

                            <div style={{ background: "linear-gradient(90.21deg, rgba(217, 18, 7, 0.5) -5.91%, rgba(209, 121, 14, 0.5) 111.58%)", padding: "8px 10px", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.5)", fontSize: "20px", marginBottom: "16px", display: "inline-block" }}>
                            <div className="item">

                                <h5>Dev</h5>
                                <h5>2% goes to dev</h5>
                            </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
