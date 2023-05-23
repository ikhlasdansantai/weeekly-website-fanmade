import Swal from "sweetalert2";

const ScheduleCard = ({ events }) => {
  const handleClick = () => {
    const result = Swal.fire({
      icon: "error",
      title: "Ticket Is Sold Out",
      text: "Try Your Luck Next Year 😁",
    });
  };

  return (
    <>
      {events.map((event, index) => {
        return (
          <div className="max-w-lg mx-auto bg-white hover:shadow-lg hover:shadow-[rgba(255,255,255,.3)] rounded-lg overflow-hidden hover:-mt-4 transition-all duration-300 cursor-pointer" key={index}>
            <figure>
              <img className="w-full h-full object-cover" src={event.src} alt="Gambar festival" />
            </figure>
            <div className="p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">{event.event}</h3>
              <p className="text-gray-700 leading-snug">{event.desc}.</p>
              <div className="mt-4">
                <p className="text-gray-700 font-semibold">Date:</p>
                <p className="text-gray-700">{event.date}</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-700 font-semibold">Location:</p>
                <p className="text-gray-700">{event.location}</p>
              </div>
              <div className="mt-6">
                <span onClick={handleClick} className="bg-blue-600 hover:bg-blue-950 text-white py-2 px-4 rounded-lg font-semibold">
                  Beli Tiket
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ScheduleCard;
