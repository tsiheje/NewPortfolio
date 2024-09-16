import { useState } from 'react';

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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitStatus('Votre message a été envoyé avec succès !');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Contactez-moi</h1>
        <p className="text-lg text-gray-700 mt-4">
          Vous avez des questions ou souhaitez collaborer ? N'hésitez pas à me contacter via le formulaire ci-dessous. Je me ferai un plaisir de vous répondre.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom"
            required
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="p-3 border border-gray-300 rounded-md"
          />
        </div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Sujet"
          required
          className="p-3 border border-gray-300 rounded-md mb-6 w-full"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          rows="6"
          required
          className="p-3 border border-gray-300 rounded-md mb-6 w-full"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
        </button>
        {submitStatus && (
          <p className="mt-4 text-green-600">{submitStatus}</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
