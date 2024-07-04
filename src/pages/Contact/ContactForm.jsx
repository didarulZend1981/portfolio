import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xvgporjo");
  if (state.succeeded) {
      return <p className='text-[red] p-5 text-[25px]'>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
                
      <input type="text"id="name"name="name" placeholder="Name:" className="bg-primary bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded  "/>
       
      <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
      />
      
      <input type="email" id="email" name="email" placeholder="Email:" className="bg-primary bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"/>
               
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       <textarea name="message" id="message" cols="54" rows="4" className="bg-primary bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2" placeholder="Message:"></textarea>
                
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      
      <button type="submit" disabled={state.submitting} className="btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-secondery hover:text-red block uppercase">
                  Send
        </button>
    </form>
  );
};

export default ContactForm;