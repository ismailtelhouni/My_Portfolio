import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
// Data
import { skillData, resume } from "../data";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import { useEffect, useState } from "react";

export default function Skills() {
  const { theme } = useAppContext();
  const [ skills , setSkills ] = useState([]);
  const [showAllSkillsText, setShowAllSkillsText] = useState(false);
  useEffect(()=>{
    setSkills(skillData.slice(0,12))
  },[])

  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Skills</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
            { skills && skills.map((skills) => {
              return (
                <Col xs={2} key={skills.id} className="my-md-5">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
          <Row className="justify-content-center" >
            
            <Col xs lg="2">
              {showAllSkillsText ? "" : (
                  <Button
                    size="lg"
                    variant={
                      theme === "light" ? "outline-dark" : "outline-light"
                    }
                    className="mt-5"
                    onClick={() => {
                      setSkills(skillData);
                      setShowAllSkillsText(true);
                    }}
                  >
                    All Skills
                  </Button>
                )}
            </Col>
            {resume && (
              <Col xs lg="1">
                <a href={resume}>
                  <Button
                    size="lg"
                    variant={theme === "light" ? "outline-dark" : "outline-light"}
                    className="mt-5"
                  >
                    R&eacute;sum&eacute;
                  </Button>
                </a>
              </Col>
            )}
          </Row>
          
        </Container>
      </section>
    </Element>
  );
}
