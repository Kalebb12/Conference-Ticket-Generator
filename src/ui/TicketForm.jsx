import { useEffect, useRef, useState } from "react";
import FormHeader from "../components/FormHeader";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import toast from "react-hot-toast";
import StepThree from "./StepThree";
import { handleDownload } from "../utils/handleDownload";

const TicketForm = () => {
  const ticketRef = useRef(null);
  const stepSchemas = [
    yup.object().shape({
      ticketTypes: yup.string().required("Select a contact method"),
      amount: yup.number().required("Select ticket amount to purchase"),
    }),
    yup.object().shape({
      image: yup.string().url().required("Please upload an image"),
      name: yup.string().required("Please Enter Your Name"),
      email: yup.string().email().required(),
      about: yup.string(),
    }),
  ];

  const [step, setStep] = useState(0);

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    trigger,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(stepSchemas[step]),
    mode: "onTouched",
    defaultValues: {
      ticketTypes: "Regular access",
      amount: 1,
      image: "",
    },
  });

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key, parsedData[key]); // Set each field with stored data
      });
    }
  }, [setValue]);

  useEffect(() => {
    const subscription = watch((formValues) => {
      localStorage.setItem("formData", JSON.stringify(formValues));
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  const clear = (e) => {
    e.preventDefault();
    setStep(0);
    reset();
  };

  

  const onSubmit = (data) => {
    if (step < stepSchemas.length - 1) {
      setStep(step + 1);
    } else {
      toast.success("Form submitted successfully! 🎉");
      setStep(2);
    }
  };

  return (
    <div className="border-line text-[#fafafa] w-full md:w-[700px] bg-[#041E23;] mx-auto rounded-4xl md:rounded-[40px] p-6 md:p-12 flex flex-col gap-8">
      <FormHeader index={step + 1} steps={3} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:border-line md:bg-[#08252B] md:p-6 md:rounded-[32px] grow flex flex-col gap-8"
      >
        {step === 0 && (
          <StepOne control={control} errors={errors} register={register} />
        )}
        {step === 1 && (
          <StepTwo
            control={control}
            errors={errors}
            register={register}
          />
        )}
        {step === 2 && <StepThree control={control} ticketRef={ticketRef} />}
        {step < 2 ? (
          <div className="flex items-center flex-col gap-4 md:flex-row md:ap-[32px] md:px-12 w-full">
            <Button
              type="outline"
              className="grow w-full justify-center"
              onClick={clear}
            >
              Cancel
            </Button>
            <Button className="grow w-full justify-center">
              {step < stepSchemas.length - 1 ? "Next" : "Submit"}
            </Button>
          </div>
        ) : (
          <div className="flex items-center flex-col gap-4 md:flex-row md:ap-[32px] md:px-12 w-full">
            <Button
              type="outline"
              className="grow w-full justify-center"
              onClick={clear}
            >
              Book Another Ticket
            </Button>
            <Button
              className="grow w-full justify-center"
              onClick={(e) => handleDownload(e, ticketRef)}
            >
              Download Ticket
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default TicketForm;
