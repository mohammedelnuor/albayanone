"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from './form.module.css';


export default function ContactForm() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [isSubmitting, setIsSubmitting] = useState(false);
  type SubmitStatus = {
    type: 'success' | 'error' | null;
    message: string;
  };

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: null, message: '' });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData(event.currentTarget);
    
    // Check for honeypot field - if filled, it's likely a bot
    const botField = formData.get('bot-field');
          if (botField && botField.toString().trim() !== '') {
        setSubmitStatus({ 
          type: 'error', 
          message: 'Suspicious activity detected. Please try again.' 
        });
      setIsSubmitting(false);
      return;
    }
    formData.append("access_key", "1dbba363-0a74-4fa1-8cd0-f75db59dde19");
    formData.append("to", "Tasheed@albayaninte.com"); // Replace with your email
    formData.append("subject", "New message from contact form");
    formData.append("from_name", "Contact Form");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: t('contact.form.success')
        });
        (event.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: t('contact.form.error')
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Connection error. Please check your internet connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 sm:p-6 lg:p-8" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 lg:p-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {t('contact.title')}
          </h1>
          <p className={`text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg ${isRTL ? styles.rtlTextAlign : styles.ltrTextAlign}`}>
            {t('contact.form.description')}
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className={`block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 ${isRTL ? styles.rtlTextAlign : styles.ltrTextAlign}`}>
              {t('contact.form.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
              placeholder={t('contact.form.name')}
            />
          </div>

          <div>
            <label htmlFor="email" className={`block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 ${isRTL ? styles.rtlTextAlign : styles.ltrTextAlign}`}>
              {t('contact.form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
              placeholder={t('contact.form.email')}
            />
          </div>

          <div>
            <label htmlFor="message" className={`block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 ${isRTL ? styles.rtlTextAlign : styles.ltrTextAlign}`}>
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-3 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white resize-none transition-all duration-200"
              placeholder={t('contact.form.message')}
            />
          </div>

          {/* Honeypot field - hidden from real users but visible to bots */}
          <div className="absolute left-[-9999px] opacity-0 pointer-events-none">
            <input
              type="text"
              name="bot-field"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
          </div>

          {submitStatus.type && (
            <div className={`p-4 rounded-md ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
            }`}>
              <p className={`text-sm ${
                submitStatus.type === 'success' 
                  ? 'text-green-800 dark:text-green-200' 
                  : 'text-red-800 dark:text-red-200'
              }`}>
                {submitStatus.message}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-lg hover:shadow-xl disabled:transform-none"
          >
            {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
          </button>
        </form>
      </div>
    </div>
  );
}
