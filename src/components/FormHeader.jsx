const FormHeader = ({ index , steps }) => {
  const formDetails = [
    "Ticket Selection","Attendee Details","Ready"
  ]
  return (
    <div className="flex flex-col gap-3">
      <div className="md:flex-row flex flex-col md:items-center gap-3 justify-start md:justify-between">
        <h1 className="md:text-[32px] text-2xl">{formDetails[index-1]}</h1>
        <span>Step {index}/{steps}</span>
      </div>

      <progress value={index} max={steps} className="w-full h-1"></progress>
    </div>
  );
};

export default FormHeader;
