import maren from "../maren.png";
import "./About.css";

function About() {
  return (
    <section id="About">
      <h3>About</h3>
      <img
        src={maren}
        className="Maren-img"
        alt="Maren smiling at the camera"
      ></img>
      <p>
        I have been coding since 2010, and after going the 'self-taught' route,
        I started my formal education as a web developer at Noroff in the fall
        of 2020.
      </p>
      <p>
        I enjoy exploring and mastering new technologies, but I believe that we
        should take no shortcuts if it's depriving someone of having access to
        the things we are building. Therefore, writing semantically correct
        markup and making the product accessible is important to me.
      </p>
      <p>
        In my spare time, I spend time with family and friends, and I am
        passionate about my many hobbies.
      </p>
    </section>
  );
}
export default About;
