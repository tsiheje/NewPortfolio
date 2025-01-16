'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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
      className="p-3 border border-gray-300 rounded-md"
    />
  );

  const renderTextarea = () => (
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Your message"
      rows="6"
      required
      className="p-3 border border-gray-300 rounded-md mb-6 w-full"
    />
  );

  const contactDetails = [
    { icon: faEnvelope, text: 'tsihejem@gmail.com' },
    { icon: faPhone, text: '+261 34 23 415 66' },
    { icon: faMapMarkerAlt, text: 'À Madagascar' },
  ];

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col lg:px-16 pt-24 pb-8" id='contact'>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Contact Me</h1>
        <p className="text-lg text-gray-700 mt-4">
          🌟 Have questions, ideas, or a desire to collaborate? Don’t hesitate to get in touch—I’m here to assist! Whether through the form below, on WhatsApp, or directly via email, I’m always happy to connect, discuss your vision, and work together to bring your projects to life.
        </p>
      </div>
      <div className='flex items-center flex-wrap gap-5'>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white p-4 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {renderInput('name', 'text', 'Name')}
            {renderInput('email', 'email', 'Email')}
          </div>
          <div className='w-full'>
            {renderInput('subject', 'text', 'Subject')}
          </div>
          <div>
            {renderTextarea()}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Send'}
          </button>
          {submitStatus && (
            <p className="mt-4 text-green-600">{submitStatus}</p>
          )}
        </form>
        <div className="flex flex-col">
          {contactDetails.map(({ icon, text }, index) => (
            <div className="flex items-center mb-2" key={index}>
              <FontAwesomeIcon icon={icon} className="mr-2 text-gray-600" />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
