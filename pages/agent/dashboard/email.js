// import Input from '@/components/Input'
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function Email() {
  const router = useRouter();
  const [email, setEmail] = useState({});

  const handleEmailChange = (e) => {
    setEmail({ ...email, email: e.target.value })
  }

  const handleSubjectChange = (e) => {
    setEmail({ ...email, subject: e.target.value })
  }

  const handleTextChange = (e) => {
    setEmail({ ...email, text: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/agent/sendemail", email);
      setEmail(response.data);
    }
    catch (error) {
      router.push('/');
      console.log(error.message);
    }
  }

  return (
    <>
      <h3>Send Email</h3>
      <form onSubmit={handleSubmit}>
        {/* <Input type="email" label="Email" name="email" id="email" />
        <Input type="text" label="Subject" name="subject" id="subject" />
        <Input type="text" label="Text" name="text" id="text" /> */}

        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" onChange={handleEmailChange} /> <br />

        <label htmlFor="subject">Subject</label> <br />
        <input type="text" id="subject" name="subject" onChange={handleSubjectChange} /> <br />

        <label htmlFor="text">Message</label> <br />
        <input type="text" id="text" name="text" onChange={handleTextChange} /> <br />

        <input type='submit' value='Send' />
      </form>
    </>
  )
}
