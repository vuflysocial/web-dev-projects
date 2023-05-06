import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderImg from "../assets/img/HeaderImg.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "your", "perfect", "dummy" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">TOD</span>
                <h1>{``} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "burn", "burn", "burn" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Everyone loves Tod just as much a bob. Even Bob loves Tod.. he just dont know it yet. Tod was created for bsc and is a fusion of bob, spongebob, and TOADY. He simply thinks he knows it all but hes actually dead wrong 98% of the time. When in doubt, ask google before asking tod. Hes here for you as a good friend, hes just not assistant material. In his ratchet demeanour, he will most likely fart and blow it your away, then lie about it.
 go see your doctor , tod CAN NOT help you or your problems..your wife or husband are giving you trouble? disassociate with tod. You have constipation? disassociate with tod. You don’t know where you are going in life, disassociate with tod because hes most likely rubbing off on you.
I mean let’s be real here. you probably shouldnt count on tod for anything but mischief and jokes. His peanut brain is too small to handle the capapbility of large interactions so he makes a fool of himself and anyone that believes him.</p>
                  <button onClick={() => console.log('connect')}>get $TOD <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={HeaderImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
