import EventDetailCard from "./EventDetailCard";
import { events } from "../Utils/Constant";
import { useParams } from "react-router-dom";

const EventDetail = () => {
  const { eventid } = useParams(); 
  const event = events.find((event) => event.id === parseInt(eventid)); 

  if (!event) {
    return <div>Event not found</div>;
  }

  const otherEvents = events.filter((e) => e.id !== parseInt(eventid)); 

  return (
    <div className="w-full flex justify-center items-center bg-[#fffafa]">
      <div className="bg-[#fffafa] overflow-hidden flex flex-col items-start justify-start gap-[20px] sm:gap-[20px]">
        <section className="self-stretch flex flex-col items-center justify-start gap-[50.5px] ">
          <img
            className="w-full h-full"
            loading="lazy"
            alt=""
            src={event.image}
          />
        </section>
        
        <section className="w-[1413px] flex flex-row items-start justify-center pt-0 px-5 pb-[157px] box-border max-w-full text-left text-3xl text-[#0a0a0a] font-lato">
          <div className="w-[1173px] flex flex-col items-start justify-start gap-[20px] max-w-full">
            <h1 className="text-5xl font-semibold">{event.title}</h1>
            <div className="relative font-normal text-[#666666] text-2xl font-lato">
              <p className="m-0">{event.subtitle} </p>
              <p className="m-0 whitespace-pre-wrap">{event.subtitle}</p>
              <p className="m-0">{event.subtitle}</p>
              <p className="m-0">{event.subtitle}</p>
            </div>
          </div>
        </section>
        <section className="w-11/12  flex flex-col items-center justify-start gap-[46px] shrink-0 self-center max-w-full text-left pt-0 px-5 pb-[157px]">
          {otherEvents.map((event) => (
            <EventDetailCard key={event.id} data={event} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default EventDetail;
