const EventDetailCard = ({ data }) => {
    return (
        <div className="flex flex-col items-start justify-start p-4 rounded-lg w-full max-w-full sm:flex-row sm:items-start sm:justify-start">
            <img
                className="w-96 object-contain rounded-md p-[10px]"
                loading="lazy"
                alt="event_img"
                src={data.image}
            />
            <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col items-start justify-start">
                <h2 className="mb-2 text-5xl font-semibold">{data.title}</h2>
                <p className="text-lg text-gray-700">{data.subtitle}</p>
            </div>
        </div>
    );
};

export default EventDetailCard;
