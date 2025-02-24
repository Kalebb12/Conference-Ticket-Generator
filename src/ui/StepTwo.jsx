import React, { useState } from "react";
import { Controller } from "react-hook-form";
import Dropzone from "react-dropzone";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

const StepTwo = ({
  control,
  errors,
  setValue,
  register,
  trigger
}) => {
  const [uploading, setUploading] = useState(false);

  return (
    <>
      <div id="banner" className="p-6 rounded-3xl grow flex flex-col gap-8">
        <span>Upload Profile Photo</span>
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <Dropzone
              multiple={false}
              onDrop={(acceptedFiles) => {
                const file = acceptedFiles[0];
                if (file) {
                  uploadToCloudinary(file,setUploading,setValue , trigger);
                }
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className="rounded-xl text-center cursor-pointer bg-[var(--shadow-dark)]"
                >
                  <input {...getInputProps()} accept="image/*" />
                  {control._formValues.image == "" && (
                    <p className="flex flex-col gap-4 p-6 bg-[#0E464F] rounded-4xl justify-center items-center size-60 mx-auto">
                      <img src="/cloud-download.svg" />
                      Drag & drop an image here, or click to Upload
                    </p>
                  )}

                  {control._formValues.image !== "" && (
                    <div className="h-60 w-full">
                      <img
                        src={control._formValues.image}
                        alt="Preview"
                        className="h-full w-60 bg-[#0E464F] object-cover object-top mx-auto rounded-xl"
                      />
                    </div>
                  )}
                </div>
              )}
            </Dropzone>
          )}
        />
        {uploading && <p className="text-blue-400">Uploading...</p>}
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
      </div>
      <hr className="w-full h-1 text-[#07373F]" />
      <div className="flex grow gap-2 flex-col">
        <span>Enter your name</span>
        <input
          type="text"
          name="name"
          {...register("name")}
          className="grow outline-none border border-[#07373F] rounded-xl p-3"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="flex grow gap-2 flex-col">
        <span>Enter your email *</span>
        <input
          type="email"
          name="email"
          {...register("email")}
          className="grow outline-none border border-[#07373F] rounded-xl p-3"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="flex grow gap-2 flex-col">
        <span>Special request?</span>
        <textarea
          name="about"
          {...register("about")}
          className="resize-none h-[127px] grow rounded-xl p-3 outline-none border border-[#07373F]"
        ></textarea>
        {errors.about && <p className="text-red-500">please fill.</p>}
      </div>
    </>
  );
};

export default StepTwo;
