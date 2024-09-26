import { useState } from "react";
import emailjs from "@emailjs/browser";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState("Email"); 
  const [attachments, setAttachments] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const serviceId = "service_xx5njob";
    const templateId = "template_buqzqxb";
    const publicKey = "jy3MOzC-PMHViMmuX";
 

  const templateParams = {
    from_name: name,
    from_email: email,
    from_number: number,
    from_subject: subject,
    from_message: message,
    from_contactMethod: contactMethod,
    from_attachments: attachments,
  }

  emailjs.send(serviceId, templateId, templateParams, publicKey).then((response)=>{
    console.log("Email sent successfully", response);
    setName('');
    setEmail('');
    setNumber('');
    setSubject('');
    setMessage('');
    setContactMethod('');
    setAttachments('');
  }).catch((error)=> {
    console.error("Error sending email", error)
  })
};
  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 md:p-8 text-white w-full mx-auto rounded-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-4">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          placeholder="Full Name"
          className="bg-transparent border-2 rounded-md focus:outline-none p-2"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email Address"
          className="bg-transparent border-2 rounded-md focus:outline-none p-2"
          required
        />
        <input
          type="text"
          name="phoneNumber"
          value={number}
          onChange={(e) => setNumber(e.target.value)} // Update number state
          placeholder="Your Phone Number"
          className="bg-transparent border-2 rounded-md focus:outline-none p-2"
          required
        />
        <select
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)} // Update subject state
          className="bg-transparent border-2 rounded-md focus:outline-none p-2"
          required
        >
          <option className="text-black" value="">
            Choose a Subject
          </option>
          <option className="text-black" value="General Inquiry">
            General Inquiry
          </option>
          <option className="text-black" value="Gas Delivery Request">
            Gas Delivery Request
          </option>
          <option className="text-black" value="Electric Car Charging">
            Electric Car Charging
          </option>
          <option className="text-black" value="Roadside Assistance">
            Roadside Assistance
          </option>
          <option className="text-black" value="Mobile Car Wash">
            Mobile Car Wash
          </option>
          <option className="text-black" value="Oil Change">
            Oil Change
          </option>
          <option className="text-black" value="Battery Replacement/Boosting">
            Battery Replacement/Boosting
          </option>
          <option className="text-black" value="Subscription Inquiry">
            Subscription Inquiry
          </option>
          <option className="text-black" value="Other">
            Other
          </option>
        </select>
      </div>
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)} // Update message state
        placeholder="Your Message or Question"
        className="w-full bg-transparent border-2 rounded-md focus:outline-none p-2 mb-4"
        required
      ></textarea>
      <div className="flex flex-col md:flex-row">
        <div className="mb-4 w-full md:w-[50%]">
          <label className="block mb-2 text-lg">
            How would you like us to contact you?
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="contactMethod"
              value="Email"
              onChange={(e) => setContactMethod(e.target.value)} // Update contact method
              checked={contactMethod === "Email"} // Check if selected
              className="text-blue-500"
            />
            <span className="ml-2">Email</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              name="contactMethod"
              value="Phone"
              onChange={(e) => setContactMethod(e.target.value)} // Update contact method
              checked={contactMethod === "Phone"} // Check if selected
              className="text-blue-500"
            />
            <span className="ml-2">Phone</span>
          </label>
        </div>

        <div className="mb-6 md:ml-5 w-full">
          <label className="block mb-2 text-lg">Attachments:</label>
          <input
            type="file"
            name="attachments"
            onChange={(e) => setAttachments(e.target.files[0])} // Update attachments state
            className="w-full text-white"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-[#41CB5B] hover:bg-white hover:text-[#41CB5B] mt-5 text-white font-medium py-3 px-10 rounded-lg"
        >
          Get A Quote
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
