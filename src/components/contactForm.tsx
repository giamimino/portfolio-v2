'use client'

import styles from '../styles/contact.module.scss'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!')
          alert('Message sent successfully.')
          form.current?.reset()
        },
        (error) => {
          console.log('FAILED...', error.text)
          alert('Failed to send message.')
        }
      )
  }

  return (
    <main className={styles.contactWrapper}>
      <form ref={form} onSubmit={sendEmail} className={styles.contact}>
        <div>
          <label>Name</label>
          <input type="text" name="name" required />
        </div>

        <div>
          <label>Phone</label>
          <input type="text" name="number" required />
        </div>

        <div>
          <label>Email</label>
          <input type="email" name="gmail" required />
        </div>

        <div>
          <label>Title</label>
          <input type="text" name="title" required />
        </div>

        <div>
          <label>Message</label>
          <textarea name="message" rows={8} cols={30} required />
        </div>

        <input type="submit" value="Send" />
    </form>
    </main>
  )
}
