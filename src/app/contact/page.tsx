'use client';
import React from 'react';
import ContactForm from '../components/form';
import Navbar from '../components/Navbar';
import Footar from '../components/footar';
import { useTranslation } from 'react-i18next';




  
export default function Contact(){
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
    return(
        <>
      
        <Navbar />

        

     <section className="w-full max-w-screen-lg mx-auto px-4 py-6 mt-24 md:mt-44 mb-32">
  <h1 className="text-3xl font-bold text-center mb-8">{t('contact.title')}</h1>
  <div className="rounded-lg overflow-hidden shadow-md">
    <div className="relative w-full h-52 sm:h-64 md:h-72 lg:h-64 xl:h-72">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.947209388737!2d46.675295775395664!3d24.713551178062483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038c5f9b33af%3A0x187e21ce7e4c43db!2z2YXYs9in2YQg2KfZhNmF2YrYqSDYp9mE2YTYp9iq2YjZhQ!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
        className="absolute top-0 left-0 w-full h-full border-none"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  <div className="mt-6">
    <h2 className="text-xl font-semibold mb-4" style={{ textAlign: isRTL ? 'right' : 'left' }}>{t('contact.location.title')}</h2>
  </div>
</section>


<section>

 
 <main className="py-12 px-4">
      <ContactForm />
    </main>
</section>
<Footar />










        
        </>
    )
}