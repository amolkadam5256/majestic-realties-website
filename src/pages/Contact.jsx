import React from 'react'
import CallToAction from '../components/HomeComp/CallToAction';
import BottomSection from '../components/HomeComp/BottomSection';
import ContactSection from '../components/ContactComp/ContactSection';
import ContactForm from '../components/ContactComp/ContactForm';
const Contact = () => {
  return (
    <div className="w-full pt-16 overflow-x-hidden">
      <ContactForm/>
      <ContactSection />
      <BottomSection />
      <CallToAction />
    </div>
  )
}

export default Contact