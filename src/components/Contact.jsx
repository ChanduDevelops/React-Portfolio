import { useEffect, useState } from 'react';
import { GrSend } from 'react-icons/gr'
import { IoCheckmarkDoneSharp } from "react-icons/io5";


export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    emailSubject: '',
    message: ''
  });
  const [result, setResult] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setFormState({
        name: '',
        phone: '',
        email: '',
        emailSubject: '',
        message: ''
      })
      setResult('')
    }, 10000)
  }, [result]);
  async function sendEmail(e) {
    e.preventDefault()
    setResult('Sending....')
    const formData = new FormData(e.target)
    formData.append("access_key", import.meta.env.VITE_CONTACT_API_KEY)
    const response = await fetch(import.meta.env.VITE_CONTACT_URL, {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }
  return (
    <section id='contact'>
      <div className="container">
        <h1>Contact <span>Me</span></h1>
        <form onSubmit={sendEmail}>
          <div className="form-container">
            <input type="text" name="fullName" id="fullName" placeholder="Full Name" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />

            <input type="number" inputMode='numeric' pattern='[0-9]*' name="phoneNumber" id="phoneNumber" placeholder="Phone Number" required value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} />

            <input type="email" name="email" id="email" placeholder="Email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} />

            <input type="text" name="emailSubject" id='emailSubject' placeholder="Email Subject" required value={formState.emailSubject} onChange={(e) => setFormState({ ...formState, emailSubject: e.target.value })} />
          </div>
          <textarea name="message" id="message" placeholder="Message" required value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}></textarea>
          {
            result ?
              <span className='form-result'>{result}<IoCheckmarkDoneSharp className='icon' /></span> :
              <button type='submit'>Send Message<GrSend /></button>
          }
        </form>
      </div>
    </section >)
}