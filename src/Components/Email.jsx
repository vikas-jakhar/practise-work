import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3rwtrur', 'template_4ruauh9', form.current, {
        publicKey: 'N9x2d_OkytANvnrD-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className=' py-2'>
      <div className="container">
        <h2 className="text-center fw-bold">
          Email js
        </h2>
        <form ref={form} onSubmit={sendEmail} className=' d-flex align-items-center justify-content-center gap-3 mt-3 input-group1'>
          <label>Name</label>
          <input type="text" name="user_name" className=' input1' />
          <label>Email</label>
          <input type="email" name="user_email" className=' input1' />
          <label>Message</label>
          <textarea name="message" className='text-area' />
          <input type="submit" value="Send" className=' py-2 px-3 btn-send text-white fw-semibold ' />
        </form>
      </div>
    </section>
  )
}

export default Email
