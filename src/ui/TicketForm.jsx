import { useState } from "react";
import FormHeader from "../components/FormHeader";
import Button from "../components/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const TicketForm = () => {
  const [step, setStep] = useState(0);
  const [uploading, setUploading] = useState(false);

  const CLOUDINARY_UPLOAD_URL =
    "https://api.cloudinary.com/v1_1/dhrhpd7a5/image/upload";
  const CLOUDINARY_UPLOAD_PRESET = import.meta.env.PRESET;
  console.log(import.meta.env.VITE_CLOUDINARY_PRESET)

  const clear = (e) => {
    e.preventDefault();
    setStep(0);
    reset();
  };

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
    yup.object().shape({}),
  ];

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    trigger,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(stepSchemas[step]),
    mode: "onTouched",
    defaultValues: {
      ticketTypes: "Regular Access",
      amount: "1",
      image: "",
    },
  });

  const uploadToCloudinary = async (file) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await fetch(CLOUDINARY_UPLOAD_URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setUploading(false);

      if (data.secure_url) {
        setValue("image", data.secure_url, { shouldValidate: true });
        trigger("image");
        alert("Image successfully uploaded👌👌");
      }
    } catch (error) {
      setUploading(false);
      alert("Cloudinary Upload Error:🤦🤦");
      console.error("Cloudinary Upload Error:", error);
    }
  };

  const onSubmit = (data) => {
    if (step < stepSchemas.length - 1) {
      setStep(step + 1);
    } else {
      alert("Form submitted successfully! 🎉");
      console.log("Final Data:", data);
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
            uploadToCloudinary={uploadToCloudinary}
            uploading={uploading}
          />
        )}
        {step === 2 && (
            <div className="flex flex-col gap-8">
              <div className="space-y-4 text-center">
                <h1 className="text-[32px]">Your Ticket is Booked!</h1>
                <p>You can download or Check your email for a copy</p>
              </div>
              <div className="relative grow">
                <img src="/ticket.png" alt="ticket" className="mx-auto" />
              </div>
            </div>
        )}
        <div className="flex items-center flex-col gap-4 md:flex-row md:ap-[32px] md:px-12 w-full">
          <Button type="outline" className="grow w-full justify-center" onClick={clear}>
            Cancel
          </Button>
          <Button className="grow w-full justify-center">
            {step < stepSchemas.length - 1 ? "Next" : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
