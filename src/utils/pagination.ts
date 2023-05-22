
import { EventsProps } from "./events.types"


function paginate(events: EventsProps[]) {
 const eventsPerPage = 3
 const noOfPages = Math.ceil(events.length / eventsPerPage)
 const newDogs = Array.from({ length: noOfPages }, (_, index) => {
  const start = index * eventsPerPage
  return events.slice(start, start + eventsPerPage)
 })
 return newDogs
}

export default paginate
