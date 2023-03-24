import "./Contact.css";
import React from "react";

function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a7338364-67fd-4377-948c-d1f2b93baf31");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <>
    <div className="home-block">
      <span className="page-title">Contact</span>
      <div className="contact-bar">
        <span className="contact-bar-number">+44 (0) 7921 293782</span>
        <span className="contact-bar-email">mike@makemassair.co.uk</span>
        <span className="contact-bar-locale">Liverpool, UK</span>
        </div>
    </div>
    <div className="contact statement-container">
      <div className="page-statement">
        <div className="statement-block">
          <div id="block2">
            <h2>Drop me a line.</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="contact-block">
      {/* <div className="about">If you're interested in having me work on your project, or, want to say hello, drop me a line on the form below, or get at me on one of the links on the bottom of the page.</div> */}
      <div className="form">
        {/* <h4 className="contact"></h4> */}
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder='enter your name' required/>
          <input type="email" name="email" placeholder='enter your email' required/>
          <textarea name="message" placeholder='enter your message' required></textarea>
          <button type="submit">send</button>
          </form>
          <span>{result}</span></div>
    </div>

    </>
  );
}

export default ContactForm;