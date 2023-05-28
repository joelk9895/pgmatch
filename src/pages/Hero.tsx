import "./hero.css";
import { Link } from "react-router-dom";
import TweenMax from "gsap";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    TweenMax.fromTo(
      ".hero-txt p",

      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
      }
    );
  }, []);
  useEffect(() => {
    TweenMax.fromTo(
      ".join",

      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 1.5,
      }
    );
  }, []);
  useEffect(() => {
    TweenMax.fromTo(
      ".fillerhero",

      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 0.3,
        scale: 1,
        duration: 1,
        delay: 3,
      }
    );
  }, []);
  useEffect(() => {
    TweenMax.fromTo(
      ".fillerhero",

      {
        scale: 1,
      },
      {
        scale: 0.7,
        duration: 4,
        delay: 5,
        repeat: -1,
        ease: "power1.inOut",
        repeatDelay: 1,
        yoyo: true,
      }
    );
  }, []);
  useEffect(() => {
    TweenMax.fromTo(
      ".nav",

      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0,
      }
    );
  }, []);
  useEffect(() => {
    TweenMax.fromTo(
      "hr",

      {
        opacity: 1,
        scaleX: 0,
      },
      {
        opacity: 1,
        scaleX: 1,
        duration: 1,
        delay: 1.5,
      }
    );
  }, []);
  useEffect(() => {
    TweenMax.fromTo(
      ".hello",

      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.1,
        stagger: 0.5,
      }
    );
  }, []);
  useEffect(() => {
    TweenMax.fromTo(
      "#hero-img1",

      {
        borderTopLeftRadius: "0",
        borderBottomRightRadius: "0",
      },
      {
        borderTopLeftRadius: "150px",
        borderBottomRightRadius: "150px",
        duration: 1,
        delay: 2,
        stagger: 0.5,
      }
    );
  }, []);
  useEffect(() => {
    TweenMax.fromTo(
      "#hero-img2",

      {
        borderTopLeftRadius: "0",
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
      },
      {
        borderTopLeftRadius: "150px",
        borderTopRightRadius: "150px",
        borderBottomRightRadius: "150px",
        duration: 1.5,
        delay: 1.5,
      }
    );
  }, []);

  return (
    <>
      <div className="hero">
        <div className="fillerhero"></div>
        <div className="nav">
          <h1>
            <span>PG</span>Match
          </h1>
        </div>
        <hr />
        <div className="hero-cont">
          <div className="hero-txt">
            <p>Find your Dream PG right from the comfort of your home</p>
            <Link to={"/signup"} className="join">
              Join
            </Link>
          </div>

          <div className="imagehold">
            <img
              src="https://images.pexels.com/photos/14648086/pexels-photo-14648086.jpeg"
              alt=""
              id="hero-img1"
              className="hello"
            />
            <img
              src="https://images.pexels.com/photos/5158461/pexels-photo-5158461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              id="hero-img2"
              className="hello"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
