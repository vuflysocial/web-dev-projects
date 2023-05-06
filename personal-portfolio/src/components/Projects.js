import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const [q1Open, setQ1Open] = useState(false);
  const [q2Open, setQ2Open] = useState(false);
  const [q3Open, setQ3Open] = useState(false);

  const toggleQ1 = () => setQ1Open(!q1Open);
  const toggleQ2 = () => setQ2Open(!q2Open);
  const toggleQ3 = () => setQ3Open(!q3Open);

  return (
    <section className="project" id="project">
      <Container>
        <h2>questions TOD cant answer</h2>
        <Row className="justify-content-center">
          <Col>
            <div style={{ background: "linear-gradient(90.21deg, rgba(217, 18, 7, 0.5) -5.91%, rgba(209, 121, 14, 0.5) 111.58%)", padding: "8px 10px", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.5)", fontSize: "20px", marginBottom: "16px", display: "block" }}>
              <div className="question-container" onClick={toggleQ1}>
                <div className="question">
                  <h5>What token do i get rewarded with & how do i add it to my wallet?</h5>
                  <ArrowRightCircle className={`arrow-icon ${q1Open ? 'rotate' : ''}`} />
                </div>
                {q1Open && <p>$TOADY BSC. go to trust wallet. click the top right token settings icon. next click the plus (+) button to add $TOADY. Change the network to bnb smart chain. paste the $TOADY Contract Address: 0x4f833cc89Ad9f2C300288B3C7a26927a473458a2. wait a moment for the details to populate. press done or save.</p>}
              </div>
            </div>
            <div style={{ background: "linear-gradient(90.21deg, rgba(217, 18, 7, 0.5) -5.91%, rgba(209, 121, 14, 0.5) 111.58%)", padding: "8px 10px", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.5)", fontSize: "20px", marginBottom: "16px", display: "block" }}>
              <div className="question-container" onClick={toggleQ2}>
                <div className="question">
                  <h5>Wtf is TOD tho?</h5>
                  <ArrowRightCircle className={`arrow-icon ${q2Open ? 'rotate' : ''}`} />
                </div>
                {q2Open && <p>TOD is just a fusion of BOB, spongebob and TOADY.</p>}
              </div>
            </div>
            <div style={{ background: "linear-gradient(90.21deg, rgba(217, 18, 7, 0.5) -5.91%, rgba(209, 121, 14, 0.5) 111.58%)", padding: "8px 10px", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.5)", fontSize: "20px", marginBottom: "16px", display: "block" }}>
              <div className="question-container" onClick={toggleQ2}>
                <div className="question">
                  <h5>?</h5>
                  <ArrowRightCircle className={`arrow-icon ${q3Open ? 'rotate' : ''}`} />
                </div>
                {q3Open && <p>.</p>}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
