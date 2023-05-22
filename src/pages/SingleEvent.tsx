import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import { EventsProps } from "../utils/events.types";
const SingleEvent = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [event, setEvent] = useState<EventsProps | null>(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events/${id}`
        );
        const event = await res.json();
        if (event) {
          setEvent(event);
        } else {
          setEvent(null);
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [id]);
  if (isLoading) {
    return <Loading />;
  }
  if (!event) {
    return <h2 className="section-title">no dog to display</h2>;
  } else {
    const {
      category,
      date,
      description,
      location,
      organizer,
      petsAllowed,
      time,
      title,
    } = event;
    return (
      <article className="talks-container">
        <div className="single-talk">
          <div className="single-talk-content">
            <div>
              <p className="talk-details-head">{title}</p>
              <p className="talk-details">{category}</p>
              <p className="talk-details">{description}</p>
              <p className="talk-details">{organizer}</p>
              <p className="talk-details">{location}</p>
              <div className="talk-bottom">
                <p className="talkdetailsr">{time}</p>
                <p className="talk-details">{date}</p>
              </div>
              <p className="talk-details">{petsAllowed ? "Pet allowed" : "Pet not allowed"}</p>
            </div>
          </div>

          <Link
            to={`/`}
            className="talk-btn"
          >
            Back Home
          </Link>
        </div>
      </article>
    );
  }
};

export default SingleEvent;
