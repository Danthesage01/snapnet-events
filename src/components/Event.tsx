import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { EventsProps } from "../utils/events.types";

const Event: React.FC<EventsProps> = ({
  id,
  category,
  date,

  petsAllowed,
  time,
  title,
}) => {
  return (
    <div className="single-talk">
      <div className="single-talk-content">
        <div>
          <p className="talk-details-head">{title}</p>
          <p className="talk-details">{category}</p>
          <div className="talk-bottom">
            <p className="talk-details">{time}</p>
            <p className="talk-details">{date}</p>
          </div>
          <p className="talk-details">
            {petsAllowed ? "Pet allowed" : "Pet not allowed"}
          </p>
        </div>
      </div>

      <Link
        to={`/events/${id}`}
        className="talk-btn"
      >
        View Event
      </Link>
    </div>
  );
};

export default Event;
