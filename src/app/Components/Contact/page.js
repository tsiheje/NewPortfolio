'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FaEnvelope } from "react-icons/fa";
import contact from "../../Assets/Images/contact.jpg";
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    setTimeout(() => {
      setSubmitStatus('Votre message a été envoyé avec succès !');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const renderInput = (name, type, placeholder) => (
    <input
      type={type}
      name={name}
      value={formData[name]}
      onChange={handleChange}
      placeholder={placeholder}
      required
      className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
    />
  );

  const contactDetails = [
    { icon: faEnvelope, text: 'tsihejem@gmail.com' },
    { icon: faPhone, text: '+261 34 23 415 66' },
    { icon: faMapMarkerAlt, text: 'À Fianarantsoa Madagascar' },
  ];

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col px-4 sm:px-6 lg:px-16 pt-16 sm:pt-20 lg:pt-24 pb-8" id="contact">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 flex items-center gap-2 sm:gap-3">
          <FaEnvelope className="text-blue-500" />
          Contact Me
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mt-3 sm:mt-4">
          🌟 Have questions, ideas, or a desire to collaborate? Don&apos;t hesitate to get in touch—I&apos;m here to assist! Whether through the form below, on WhatsApp, or directly via email, I&apos;m always happy to connect, discuss your vision, and work together to bring your projects to life.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-10">
        <form onSubmit={handleSubmit} className="w-full lg:w-1/2 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {renderInput('name', 'text', 'Name')}
            {renderInput('email', 'email', 'Email')}
          </div>
          <div className="w-full mb-4 sm:mb-6">
            {renderInput('subject', 'text', 'Subject')}
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="6"
            required
            className="p-2 sm:p-3 border border-gray-300 rounded-md mb-4 sm:mb-6 w-full focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 text-sm sm:text-base ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Send'}
          </button>
          {submitStatus && (
            <p className="mt-3 sm:mt-4 text-green-600 text-sm sm:text-base">
              {submitStatus}
            </p>
          )}
        </form>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="overflow-hidden rounded-lg mb-6">
            <Image
              src={contact}
              alt="Contact illustration"
              width={200}
              height={200}
              className="w-full h-48 sm:h-60 object-cover"
            />
          </div>
          <div className="space-y-4 sm:space-y-6">
            {contactDetails.map(({ icon, text }, index) => (
              <div className="flex items-center" key={index}>
                <FontAwesomeIcon
                  icon={icon}
                  className="mr-3 sm:mr-4 text-blue-500 text-lg sm:text-xl"
                />
                <p className="text-gray-700 text-sm sm:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
