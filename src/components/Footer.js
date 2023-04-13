import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/odina2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/f6.jpeg";
import navIcon3 from "../assets/img/ali.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div style={{paddingTop:"20px", paddingLeft:"450px", display:"flex",flexDirection:"row"}} className="social-icon">
            <div>
                <a href="https://www.linkedin.com/in/abdul-ahad-5605511bb/"><img style={{height:"20px",width:"30px" }} src={navIcon1} alt="" /></a>
                </div>
                <div>
                <a href="https://www.fiverr.com/abdulahad___?up_rollout=true"><img style={{height:"30px",width:"30px",borderRadius:"50%"}} src={navIcon2} alt="" /></a>
                </div>
                <div >
                <a href="https://www.upwork.com/freelancers/~01f8b939ba640d80c4"><img style={{height:"40px",width:"40px", borderRadius:"50%" }} src={navIcon3} alt="" /></a>
                </div>
            </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
