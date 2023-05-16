import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="nav">
        <h1>
          <span>PG</span>Match
        </h1>
      </div>
      <hr />
      <div className="hero-cont">
        <div className="hero-txt">
          <p>Find your Dream PG right from the comfort of your home</p>
          <div className="join">Join</div>
        </div>

        <div className="imagehold">
          <img
            src="https://images.pexels.com/photos/14648086/pexels-photo-14648086.jpeg"
            alt=""
            id="hero-img1"
          />
          <img
            src="https://images.pexels.com/photos/5158461/pexels-photo-5158461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            id="hero-img2"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
