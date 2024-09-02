import React from "react";

export default function Contact() {
  return (
    <div className="">
      <p>Get In Touch</p>
      <h1>Contact Me</h1>
      <div className="contact">
        <div className="talk">
          <p>Talk to me</p>
          <div className="">
            <i class="fa-solid fa-envelope"></i>
            <p>Email</p>
            <p>dvkrishna142000@gmail.com</p>
            <p>
              <a href="" style={{ textDecoration: "none" }}>
                Write me
              </a>
            </p>
          </div>
          <div>
            <i class="fa-brands fa-whatsapp"></i>
            <p>WhatsApp</p>
            <p>9391128446</p>
            <p>
              <a href="" style={{ textDecoration: "none" }}>
                Write me
              </a>
            </p>
            <div>
              <i class="fa-brands fa-facebook-messenger"></i>
              <p>Messenger</p>
              <p>Vamsi Krishna Dudyala</p>
              <p>
                <a href="" style={{ textDecoration: "none" }}>
                  Write me
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="talk">
          <p>Write me your project</p>
          <div>
            <div>
              <label htmlFor="">FullName: </label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="">Email: </label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div>
              <label htmlFor="">Project Name</label>
              <textarea name="" id="" cols="30" rows="10">
                Project Details
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
