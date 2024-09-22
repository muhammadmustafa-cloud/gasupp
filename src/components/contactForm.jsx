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
    <form onSubmit={handleSubmit} className="p-8  text-white w-full mx-auto rounded-lg">
      {/* <h2 className="text-2xl font-bold mb-6">Get in Touch</h2> */}
      <div className="grid grid-cols-2 gap-8 mb-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="bg-transparent border-2 rounded-md focus:outline-none p-2"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email Address"
          className="bg-transparent border-2 rounded-md focus:outline-none p-2"
          required
        />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Your Phone Number"
          className="bg-transparent border-2 rounded-md focus:outline-none p-2"
          required
        />
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="bg-transparent border-2 rounded-md focus:outline-none  p-2"
          required
        >
          <option className='text-black' value="">Choose a Subject</option>
          <option className='text-black' value="General Inquiry">General Inquiry</option>
          <option className='text-black' value="Gas Delivery Request">Gas Delivery Request</option>
          <option className='text-black' value="Electric Car Charging">Electric Car Charging</option>
          <option className='text-black' value="Roadside Assistance">Roadside Assistance</option>
          <option className='text-black' value="Mobile Car Wash">Mobile Car Wash</option>
          <option className='text-black' value="Oil Change">Oil Change</option>
          <option className='text-black' value="Battery Replacement/Boosting">Battery Replacement/Boosting</option>
          <option className='text-black' value="Subscription Inquiry">Subscription Inquiry</option>
          <option className='text-black' value="Other">Other</option>
        </select>
      </div>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message or Question"
        className="w-full bg-transparent border-2 rounded-md focus:outline-none p-2 mb-4"
        required
      ></textarea>
      <div className='flex '>
        <div className="mb-4 w-[50%]">
          <label className="block mb-2 text-lg">How would you like us to contact you?</label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              name="contactMethod" 
              value="Email"
              onChange={handleChange}
              className="text-blue-500"
            />
            <span className="ml-2">Email</span>
          </label>

          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              name="contactMethod"
              value="Phone"
              onChange={handleChange}
              className="text-blue-500"
            />
            <span className="ml-2">Phone</span>
          </label>
        </div>

        <div className="mb-6 ml-5">
          <label className="block mb-2 text-lg">Attachments:</label>
          <input
            type="file"
            name="attachments"
            onChange={handleChange}
            className="w-full text-white"
          />
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <button type="submit" className="bg-[#41CB5B] hover:bg-white hover:text-[#41CB5B] mt-5 text-white font-medium py-3 px-10 rounded-lg">
          Get A Quote
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
