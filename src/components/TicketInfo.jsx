const TicketInfo = ({ image, name, email, type, amount, about }) => {
  return (
    <div className="w-[260px] h-[446px] rounded-2xl border-line p-[15px] absolute bottom-34 left-[50%] translate-x-[-50%]">
      <div className="flex flex-col gap-5 items-center">
        <div className="w-[175px] mx-auto grow space-y-2 text-center">
          <h1 className="text-[32px] leading-[34px]" id="road-rage">
            Techember Fest ”25
          </h1>
          <div className="p-1 gap-1 flex flex-col items-center">
            <p className="text-[10px]">📍 04 Rumens road, Ikoyi, Lagos</p>
            <p className="text-[10px]">📅 March 15, 2025 | 7:00 PM</p>
          </div>
        </div>

        <img
          src={image}
          draggable={false}
          alt={`${name} image`}
          className="size-35 object-cover object-top rounded-xl border-[#24A0B5] border-4"
        />

        <div className="rounded-lg p-1">
          <div className="grid grid-cols-2 border-b border-[#12464E]">
            <div className="flex-col flex border-r border-[#12464E] p-1 gap-1">
              <span className="text-[10px]">name</span>
              <span className="text-[10px] truncate">{name}</span>
            </div>
            <div className="flex-col flex p-1 gap-1">
              <span className="text-[10px]">Email</span>
              <span className="text-[10px] truncate">{email}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 border-b border-[#12464E]">
            <div className="flex-col flex border-r border-[#12464E] p-1 gap-1">
              <span className="text-[10px]">Ticket Type</span>
              <span className="text-[10px] uppercase truncate">{type}</span>
            </div>
            <div className="flex-col flex p-1 gap-1">
              <span className="text-[10px]">Ticket for</span>
              <span className="text-[10px] truncate">{amount}</span>
            </div>
          </div>

          <div className="w- flex flex-col p-2 gap-1">
            <span className="text-[10px]">About</span>
            <div className="text-[10px] w-[208px] h-[30px] overflow-ellipsis truncate">
              {about}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketInfo;
