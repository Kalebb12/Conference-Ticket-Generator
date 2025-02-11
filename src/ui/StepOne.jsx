import React from 'react';
import { Controller } from "react-hook-form";

const StepOne = ({ control, errors, register }) => {
  const ticketOptions = [
    {
      type: "Regular Access",
      total: "20",
      price: "Free",
    },
    {
      type: "Vip",
      total: "20",
      price: "$50",
    },
    {
      type: "Vvip",
      total: "20",
      price: "$150",
    },
  ];

  return (
    <>
      <div id="banner" className="md:p-6 p-6 py-4 sm:h-50 rounded-3xl grow space-y-2">
        <div className="grow space-y-2 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-[62px] leading-[62px]" id="road-rage">
            Techember Fest ”25
          </h1>
          <p className="text-[16px] sm:mx-21">
            Join us for an unforgettable experience at [Event Name]! Secure your spot now.
          </p>
        </div>
        <div className="flex gap-4 grow justify-center">
          <span className='md:flex hidden'>📍 [Event Location]</span>
          <span className='md:flex hidden'>| |</span>
          <span>March 15, 2025 | 7:00 PM</span>
        </div>
      </div>
      <hr className="w-full h-1 text-[#07373F]" />
      <div className="space-y-2">
        <span>Select Ticket Type:</span>
        <div className="w-full rounded-3xl border border-[#07373f] p-4 bg-[#052228]">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
            <Controller
              name="ticketTypes"
              control={control}
              defaultValue="Regular Access"
              render={({ field }) => (
                <>
                  {ticketOptions.map((option) => (
                    <button
                      type="button"
                      key={option.type}
                      className={`items-start flex w-full gap-2 p-2 rounded-xl ${
                        field.value === option.type ? "bg-[#197686]" : "bg-[#07373F]"
                      }`}
                      onClick={() => field.onChange(option.type)}
                    >
                      <div className="flex flex-col items-start gap-1 grow">
                        <span>{option.type}</span>
                        <span>{option.total} left!</span>
                      </div>
                      <div className="font-semibold text-xl bg-[#0E464F] w-20 p-2 text-center border border-[#2BA4B9] rounded-lg">
                        {option.price}
                      </div>
                    </button>
                  ))}
                </>
              )}
            />
            {errors.ticketTypes && (
              <p className="text-red-500">{errors.ticketTypes.message}</p>
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <span> Number of Tickets</span>
        <select
          name="amount"
          defaultValue={1}
          {...register("amount")}
          className="grow outline-none border border-[#07373F] rounded-xl p-3"
        >
          {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
            <option value={num} className=" bg-[#0E464F]" key={num}>
              {num} {num <= 1 ? "Ticket" : "Tickets"}
            </option>
          ))}
        </select>
      </div>
      {errors.amount && (
        <p className="text-red-500">{errors.amount.message}</p>
      )}
    </>
  );
};

export default StepOne;
