import React, { useEffect } from "react";
import "./Feedcard.css";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);
const Feedcard = () => {
  useEffect(() => {
    var sections = gsap.utils.toArray(".FeedCard");

    sections.forEach((section) => {
      gsap.fromTo(
        section,

        {
          opacity: 0,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 95%",
            end: "bottom 90%",
            scrub: 2,
            stagger: 0.5,
          },
        }
      );
    });
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".FeedCard",

      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        delay: 0,
      }
    );
  }, []);
  
  return (
    <div className="FeedCard">
      <img
        src="https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-1612351.jpg&fm=jpg"
        alt=""
        className="feedimg"
      />
      <div className="feedtxt">
        <div className="feed-details">
          <h3>Radissons</h3>
          <p id="price-feed">Rs. 5000</p>
          <p>Location: Bangalore</p>

        </div>
        <div className="feed-amenities">
          <p>Wifi</p>
          <p>AC</p>
          <p>Food</p>
          <p>Laundry</p>
          <p>TV</p>
          <p>Attached Bathroom</p>
        </div>
        <div className="feed-btns">
          <button className="feed-btn color-view">View</button>
          <button className="feed-btn color-btn">Book</button>
        </div>
      </div>
    </div>
  );
};

export default Feedcard;
