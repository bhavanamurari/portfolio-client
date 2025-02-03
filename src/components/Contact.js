import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://portfolio-server-pied-mu.vercel.app/send",
        formData
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!", {
          duration: 3000,
          position: "top-center",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message!", {
          duration: 3000,
          position: "top-center",
        });
      }
    } catch (err) {
      toast.error("Error sending message", {
        duration: 3000,
        position: "top-center",
      });
      console.log("Error: " + err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="contact-1">
          <div className="name">
            {/* <label htmlFor="name">Name</label> */}

            <input
              type="text"
              name="name"
              value={formData.name}
              id="name"
              required
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div className="email">
            {/* <label htmlFor="email">Email Address</label> */}
            <input
              type="email"
              name="email"
              value={formData.email}
              id="email"
              required
              onChange={handleChange}
              placeholder="Email Address"
            />
          </div>
        </div>

        <div className="message">
          {/* <label htmlFor="message">Message</label> */}
          <input
            name="message"
            id="message"
            value={formData.message}
            required
            onChange={handleChange}
            placeholder="Message"
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
