import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

const ReCaptchaComponent = ({ onVerify, onExpired }) => {
  if (!SITE_KEY) {
    console.error("⚠️ reCAPTCHA site key absent! Verify your .env");
  }
  return (
<<<<<<< HEAD
    <div className="mt-6">
      <ReCAPTCHA sitekey={SITE_KEY} onChange={onVerify} onExpired={onExpired} />
=======
    <div className="mt-6 flex justify-center">
      <ReCAPTCHA 
        sitekey={SITE_KEY} 
        onChange={onVerify} 
        onExpired={onExpired} />
>>>>>>> front-end
    </div>
  );
};

export default ReCaptchaComponent;
