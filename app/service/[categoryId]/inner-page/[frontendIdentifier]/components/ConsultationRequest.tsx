"use client";

import Input from "@/app/components/FormComponents/Input";
import { ToggleSwitch } from "@/app/components/FormComponents/ToggleSwitch";
import { db } from "@/app/configs/firebase";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

function ConsultationRequest() {
  const [phoneValue, setPhoneValue] = useState("");
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleRequestConsultation = async () => {
    const collectionRef = collection(db, "consultationRequests");
    const docRef = await addDoc(collectionRef, {
      email,
      name,
      mobileNumber: phoneValue,
      whatsappConsent: isChecked,
    });
    if (docRef.id) {
      setStep(1);
      setPhoneValue("");
      setName("");
      setEmail("");
    }
  };

  return (
    <div className='inline-flex h-[275px] w-full shrink-0 flex-col items-start justify-start gap-5 rounded-[15px] border-2 border-[#d75337] bg-white p-5 xl:h-auto xl:w-[587px] xl:p-[30px]'>
      <div className='flex h-[162px] flex-col items-start justify-start gap-2.5 self-stretch xl:mb-[25px] xl:h-auto'>
        <div className='self-stretch'>
          <span className='text-[19px] font-medium leading-[33px] text-[#151515] xl:text-[28px]'>
            Get{" "}
          </span>
          <span className='text-[19px] font-medium leading-[33px] text-[#d75337] xl:text-[28px]'>
            free
          </span>
          <span className='text-[19px] font-medium leading-[33px] text-[#151515] xl:text-[28px]'>
            {" "}
            consultation
          </span>
        </div>
        <div className='flex h-[119px] flex-col items-start justify-start gap-2.5 self-stretch'>
          <div className='flex w-full items-center justify-between'>
            {step === 1 && (
              <div className='self-stretch text-base font-normal leading-[23px] text-[#464646]'>
                Please enter your mobile number:
              </div>
            )}
            {step === 2 && (
              <div className='self-stretch text-base font-normal leading-[23px] text-[#464646]'>
                Please enter your name:
              </div>
            )}
            {step === 3 && (
              <div className='self-stretch text-base font-normal leading-[23px] text-[#464646]'>
                Please enter your email:
              </div>
            )}
            {step !== 1 && (
              <div
                className='flex cursor-pointer gap-1.5'
                onClick={() => setStep(step - 1)}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  color='#9B9B9B'
                  fontSize={14}
                />
                <p className='text-[15px] text-[#9B9B9B]'>Go Back</p>
              </div>
            )}
          </div>
          <div className='inline-flex h-[43.61px] items-center justify-start gap-[8.23px] self-stretch rounded-md py-[12.34px] pl-[12.34px] pr-[5.76px] xl:h-[53px] xl:gap-2.5 xl:pl-0'>
            {step === 1 && (
              <PhoneInput
                value={phoneValue}
                inputStyle={{
                  width: "100%",
                  borderColor: "#F1F1F1",
                  fontSize: "16px",
                  background: "#f7f7f7",
                }}
                inputClass='h-8 xl:!h-[53px]'
                onChange={(value) => setPhoneValue(value)}
                countryCodeEditable={false}
                enableSearch={true}
                disableSearchIcon={true}
                placeholder='1234567890'
                disableCountryCode={false}
                country={"in"}
              />
            )}
            {step === 2 && (
              <Input
                placeholder='Name'
                value={name}
                onChange={(event) => setName(event.target.value)}
                className='w-full'
              />
            )}
            {step === 3 && (
              <Input
                placeholder='example@gmail.com'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className='w-full'
              />
            )}

            {step !== 3 && (
              <button
                onClick={() => setStep(step + 1)}
                className='flex-center h-[35px] w-[42px] cursor-pointer rounded-lg bg-[#D75337] xl:h-[53px] xl:w-[68px]'
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color='#fff'
                  fontSize={20}
                />
              </button>
            )}
          </div>
          <div className='inline-flex items-center justify-start gap-2.5'>
            <ToggleSwitch check={isChecked} toggleChecked={setIsChecked} />
            <div className='text-sm font-normal leading-[23px] text-[#151515]'>
              Reach me on whatsapp
            </div>
          </div>
        </div>
      </div>
      <button
        disabled={step !== 3}
        className={`inline-flex items-center justify-center gap-2.5 self-stretch rounded-[10px] bg-[#d75337] px-2.5 py-[15px] ${step !== 3 ? "opacity-25" : "opacity-100"}`}
        onClick={handleRequestConsultation}
      >
        <h4 className='text-base font-semibold leading-[23px] text-white'>
          Meet our architect
        </h4>
      </button>
    </div>
  );
}

export default ConsultationRequest;
