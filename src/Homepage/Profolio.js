import logo from "../image/logo.png";
const Profolio = () => {
  return (
    <section id="profolio">
      <h2>Profolio</h2>
      <div>
        <div>
          <h3>Meals for me</h3>
          <p>
            A meal subscription platform for busy professionals to eat from
            their favorite local restaurants at affordable prices.
          </p>
          <img src={logo} className="" alt="image" />
          <p>7 months Engagement</p>
        </div>
        <div>
          <h3>Manifest</h3>
          <p>
            A productivity app for people with memory issues 0 in collaboration
            with Tulane University
          </p>
          <img src={logo} className="" alt="image" />
          <p>2 Years Engagement</p>
        </div>
      </div>

      <div>
        <h3>Serving Fresh</h3>
        <p>Lorem ipsum </p>
        <img src={logo} className="" alt="image" />
        <p>1 Year Engagement</p>
      </div>

      <div>
        <div>
          <h3>Just Delivered</h3>
          <p>A digital platform for last mile food delivery</p>
          <img src={logo} className="" alt="image" />
          <p>4 months Engagement</p>
        </div>
        <div>
          <h3>Nitya Ayurveda</h3>
          <p>A digital platform for last mile food delivery</p>
          <img src={logo} className="" alt="image" />
          <p>2 months Engagement</p>
        </div>
      </div>
    </section>
  );
};

export default Profolio;
