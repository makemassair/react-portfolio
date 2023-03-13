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
    <div className="App">
      <h1>React File Upload Form</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder='Enter your name' required/>
        <input type="email" name="email" placeholder='Enter your email' required/>
        <textarea name="message" placeholder='Enter your message' required></textarea>
        <button type="submit">Submit</button>
      </form>
      <span>{result}</span>
    </div>
  );
}

export default ContactForm;