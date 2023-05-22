import React, { useState, useEffect, SetStateAction } from "react";
import { EventsProps } from "../utils/events.types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";
import Loading from "./Loading";
import Event from "./Event";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";


const Events = () => {
 // const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [events, setEvents] = useState<EventsProps[]>([]);
  const [search, setSearch] = useState("");
  const [pet, setPet] = useState(false);
  const EventsAPI = `https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events`;

  const getAllEvents = async () => {
    setLoading(true);
    try {
      const res = await axios.get(EventsAPI);
      setEvents(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  // const handlePage = (index: number) => {
  //   setPage(index);
  // };
  // const nextPage = () => {
  //   setPage((prevState) => {
  //     let nextPage = prevState + 1;
  //     if (nextPage > events.length - 1) {
  //       nextPage = 0;
  //     }
  //     return nextPage;
  //   });
  // };
  // const prevPage = () => {
  //   setPage((prevState) => {
  //     let lastPage = prevState - 1;
  //     if (lastPage < 0) {
  //       lastPage = events.length - 1;
  //     }
  //     return lastPage;
  //   });
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearch(e.target.value)
  };

  const toggleFilter = () => {
   setPet(!pet)
   console.log(pet)
    // const newEvents = events.filter((event) => event.petsAllowed === true);
    // return newEvents;
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="section products">
      <div className="talks-container">
        <h4 className="events-heading">All Events</h4>
        <div className="filters">
          <input
            type="text"
            placeholder="search by event"
            value={search}
            onChange={handleChange}
          />

          <span>
            Filter By Pet
            <button
              className="toggle-btn"
              onClick={toggleFilter}
            >
              {pet === false ? <FaToggleOn /> : <FaToggleOff />}
            </button>
          </span>
        </div>
        <div className="talks">
          {events.map((event) => {
            const { id } = event;
            return (
              <Event
                key={id}
                {...event}
              />
            );
          })}
        </div>
      </div>
      {/* <div className="btn-container">
        <button
          className="prev-btn"
          onClick={prevPage}
        >
          <FaChevronLeft />
        </button>
        {loading &&
          events.map((_, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${index === page ? "active-btn" : null}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
        <button
          className="next-btn"
          onClick={nextPage}
        >
          <FaChevronRight />
        </button>
      </div> */}
    </section>
  );
};

export default Events;
