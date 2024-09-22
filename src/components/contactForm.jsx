import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
    contactMethod: [],
    attachments: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === 'checkbox') {
      let methods = formData.contactMethod;
      if (methods.includes(value)) {
        methods = methods.filter(method => method !== value);
      } else {
        methods.push(value);
      }
      setFormData({ ...formData, contactMethod: methods });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can integrate API calls here
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 bg-gray-900 text-white max-w-4xl mx-auto rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="bg-transparent border-b-2 border-gray-300 focus:border-blue-500 p-2"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email Address"
          className="bg-transparent border-b-2 border-gray-300 focus:border-blue-500 p-2"
          required
        />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Your Phone Number (Optional)"
          className="bg-transparent border-b-2 border-gray-300 focus:border-blue-500 p-2"
          required
        />
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="bg-transparent border-b-2 border-gray-300 focus:border-blue-500 p-2"
          required
        >
          <option value="">Choose a Subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Gas Delivery Request">Gas Delivery Request</option>
          <option value="Electric Car Charging">Electric Car Charging</option>
          <option value="Roadside Assistance">Roadside Assistance</option>
          <option value="Mobile Car Wash">Mobile Car Wash</option>
          <option value="Oil Change">Oil Change</option>
          <option value="Battery Replacement/Boosting">Battery Replacement/Boosting</option>
          <option value="Subscription Inquiry">Subscription Inquiry</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message or Question"
        className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 p-2 mb-4"
        required
      ></textarea>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input type="checkbox" value="Email" onChange={handleChange} className="text-blue-500" />
          <span className="ml-2">Email</span>
        </label>
        <label className="inline-flex items-center ml-6">
          <input type="checkbox" value="Phone" onChange={handleChange} className="text-blue-500" />
          <span className="ml-2">Phone</span>
        </label>
      </div>
      <div className="mb-6">
        <label className="block mb-2">Attachments:</label>
        <input
          type="file"
          name="attachments"
          onChange={handleChange}
          className="w-full text-white"
        />
      </div>
      <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Get A Quote
      </button>
    </form>
  );
}

export default ContactForm;
