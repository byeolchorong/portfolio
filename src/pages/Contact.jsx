import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="container">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h1>
            함께 성장하며 <br />
            더 나은 서비스를 <br />
            만들고 싶습니다.
          </h1>
        </div>
        <div className="contact-actions">
          <a
            href="https://github.com/byeolchorong"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <FaGithub className="icon" size={20} />
            GitHub
          </a>
          <a href="mailto:dudzlove@gmail.com" className="contact-btn">
            <Mail className="icon" size={20} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
