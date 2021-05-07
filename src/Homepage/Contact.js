import logo from "../image/logo.png";
const Contact = () => {
  return (
    <section id="contact" style={{ backgroundColor: "#F6A833" }}>
      <p>Let's have a chat</p>
      <form>
        <div>
          <input type="text" name="name" placeholder="Name"></input>
          <input type="url" name="websiteURL" placeholder="Website URL"></input>
        </div>
        <div>
          <input type="email" name="url" placeholder="Email"></input>
          <input type="text" name="text" placeholder="Phone"></input>
        </div>
        <div>
          <p>Pick the pieces where we can help</p>
          <input type="checkbox" id="" />
          <label for="">Business Strategy</label>
          <input type="checkbox" />
          <label for="">UI/UX Design</label>
          <input type="checkbox" />
          <label for="">Marketing & Branding</label>
          <input type="checkbox" />
          <label for="">Mobile Apps</label>
          <input type="checkbox" />
          <label for="">Web/Software Development</label>
        </div>
        <div>
          <textarea placeholder="Anything else you want to your note to us?"></textarea>
        </div>
        <button>Send a Message</button>
      </form>
    </section>
  );
};

export default Contact;
