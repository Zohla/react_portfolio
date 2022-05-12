import "./Languages.css";

function Languages() {
  return (
    <section id="languages">
      <h3>Languages</h3>
      <div className="All-languages-container">
        <div className="Language-container">
          <h4>HTML</h4>
          <p>
            HTML might not be a logical programming language, but we're
            dependent on it for the content we want to display on the web.
            Writing septically correct is important for making our products
            accessible to everyone.
          </p>
        </div>
        <div className="Language-container">
          <h4>CSS</h4>
          <p>
            I've written mostly in pure CSS but also used SCSS. CSS is a
            powerful tool in combination with just HTML. Why load JavaScript
            where CSS can do the trick?
          </p>
        </div>
        <div className="Language-container">
          <h4>JavaScript</h4>
          <p>
            I've done many projects with JavaScript, and the possibilities never
            cease to amaze me! I'm also preparing to learn Typescript.
          </p>
        </div>
        <div className="Language-container">
          <h4>React</h4>
          <p>
            I'm currently working on mastering React and have started to build
            some projects to get to know this widely used library. This very
            page is made with React.
          </p>
        </div>
        <div className="Knowledge-container">
          <h4>Other tools, and academic studies.</h4>
          <div className="Tools-tech">
            <div>
              <h5>Tools and tech</h5>
              <p>
                jQuery, nmp, Node.js, AdobeXD, Adobe Illustrator, VS Code,
                Python, SVG, Netlify, CircleCI, GitHub and the commandline.
              </p>
            </div>
            <div>
              <h5>Academic studies</h5>
              <p>
                Design, Web and Communications Technology, Project Methodology,
                Interaction Design(IxD).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Languages;
