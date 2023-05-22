import React, { useState, useEffect, Suspense } from "react";
import { EventsProps, FiltersProps } from "../utils/events.types";
import axios from "axios";
import Loading from "./Loading";
import Event from "./Event";
const Events = () => {

  const EventsAPI = `https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events`;
  const [loading, setLoading] = useState<boolean>(false);
  const [events, setEvents] = useState<EventsProps[]>([]);
  const [filters, setFilters] = useState<FiltersProps>({
    pet: false,
    search: "",
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFilters((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <div className="talks-container">
        <h4 className="events-heading">All Events</h4>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
          className="filters"
        >
          <input
            type="text"
            placeholder="search by event title"
            name="search"
            value={filters.search}
            onChange={handleChange}
          />
          <div className="pet-filters">
            <label htmlFor="pet">Allow Pet?</label>
            <input
              type="checkbox"
              name="pet"
              id="pet"
              onChange={handleChange}
              checked={filters.pet}
              className="toggle-btn"
            />
          </div>
        </form>
        <div className="talks">
          {[...events]
            .filter((event) => {
              if (filters.pet) {
                return event.petsAllowed === true;
              }
              if (filters.search) {
                return event.title.toLowerCase().includes(filters.search);
              }
              return event;
            })
            .map((event) => {
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
    </section>
  );
};

export default Events;


