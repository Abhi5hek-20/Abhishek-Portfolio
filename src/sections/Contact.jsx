import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Particles } from "../components/Particles";
import toast from 'react-hot-toast';
import {Loader} from 'lucide-react'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e)=>{
       try{
           e.preventDefault();
           setIsLoading(true);
           let result= await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,e.target,import.meta.env.VITE_API_KEY)
           toast.success("Email sent successfully!")
           setFormData({name:"",email:"",message:""}) // clear state
           setIsLoading(false);

        }catch(err){
            console.log(err)
            toast.error("Failed to send email. Please try again later.")
        }
  }
  return (

    <div id="contact" className="min-h-screen">
      {<section className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className="flex flex-col items-center justify-center w-2xl p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're loking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Enter your name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="Enter your mail"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation flex items-center justify-center"
          >
          {isLoading ?  <Loader size={20} className="text-white" /> : "Submit"}
          </button>
        </form>
      </div>
    </section>
}
    </div>

      );
};

export default Contact;
