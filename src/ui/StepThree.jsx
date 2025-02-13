import TicketInfo from "../components/TicketInfo";

const StepThree = ({control ,ticketRef}) => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <div className="space-y-4 text-center">
          <h1 className="text-[32px]">Your Ticket is Booked!</h1>
          <p className="font-bold">
            Check your email for a copy or you can download
          </p>
        </div>
        <div className="relative grow" ref={ticketRef}>
          <img src="/ticket.svg" draggable={false} alt="ticket" className="mx-auto h-[600px]" />
          <TicketInfo
            name={control._formValues.name}
            image={control._formValues.image}
            amount={control._formValues.amount}
            email={control._formValues.email}
            type={control._formValues.ticketTypes}
            about={control._formValues.about}
          />
          <img
            src="/Bar Code.png"
            draggable={false}
            alt="bar code"
            className="absolute bottom-5 left-[50%] translate-x-[-50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default StepThree;
