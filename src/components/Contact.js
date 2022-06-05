import "./Contact.css";

function Contact() {
  return (
    <section id="Contact">
      <h3>Contact</h3>
      <adress>
        I'm currently looking for new opportunities, and my{" "}
        <a href="mailto:marenlilleberre@gmail.com">
          <span className="Link-hover">inbox</span>{" "}
        </a>{" "}
        is always open! You can also contact me on{" "}
        <a
          href="https://www.linkedin.com/in/maren-lilleberre-117406188/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="Link-hover">LinkedIn</span>{" "}
        </a>{" "}
        or{" "}
        <a
          href="https://twitter.com/MarenLilleberre"
          target="_blank"
          rel="noreferrer"
        >
          <span className="Link-hover">Twitter</span>.
        </a>
      </adress>
    </section>
  );
}
export default Contact;
