import React, { useEffect } from "react";
import "./Feedcard.css";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface FeedcardProps {
  pg_name: string;
  price: string;
  location: string;
  rating: number;
  amenities: string[];
  photo: string;
}

const Feedcard: React.FC<FeedcardProps> = ({
  pg_name,
  price,
  location,
  rating,
  amenities,
  photo,
}) => {
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
      <img src={photo} alt="" className="feedimg" />
      <div className="feedtxt">
        <div className="feed-details">
          <div className="feed-details-txt">
            <h3>{pg_name}</h3>
            <p id="price-feed">Rs. {price}</p>
            <p>Location: {location}</p>
          </div>
          <div className="rating">
            <p>Rating: {rating}</p>
          </div>
        </div>
        <div className="feed-amenities">
          {amenities.map((amenity) => (
            <p key={amenity}>{amenity}</p>
          ))}
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
