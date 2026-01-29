import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact page">
      <h1>Contact</h1>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your name"
        />

        <input
          type="email"
          placeholder="Your email"
        />

        <textarea
          rows="5"
          placeholder="Your message"
        />

        <button className="btn" type="submit">
          Send Message
        </button>

      </form>
    </section>
  );
};

export default Contact;
