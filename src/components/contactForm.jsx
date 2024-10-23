import { useState } from "react";
import emailjs from "@emailjs/browser";
import { NavLink } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState("Email");
  const [attachments, setAttachments] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // State for modal
  const [errors, setErrors] = useState({});
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return emailRegex.test(email);
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!name) validationErrors.name = "Full name is required.";
    if (!email || !validateEmail(email))
      validationErrors.email = "Valid email is required.";
    if (!number) validationErrors.number = "Phone number is required.";
    if (!subject) validationErrors.subject = "Subject is required.";
    if (!message) validationErrors.message = "Message is required.";
  
    // If there are errors, set the error state and prevent form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    const serviceId = "gasupp_xohw6ue";
    const templateId = "gasupp_1e0msux";
    const publicKey = "V7OUXBKphSqFSfSAN";
  
    const templateParams = {
      from_name: name,
      from_email: email,
      from_number: number,
      from_subject: subject,
      from_message: message,
      from_contactMethod: contactMethod,
      // Ensure attachments are passed as a single string or an array of base64 strings
      from_attachments: attachments ? attachments : "", // Ensure attachments is a string or handle multiple
    };
  
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        // Clear form fields
        setName("");
        setEmail("");
        setNumber("");
        setSubject("");
        setMessage("");
        setContactMethod("Email"); // Resetting to default
        setAttachments(null); // Reset attachments
        setModalOpen(true); // Open modal when email is sent successfully
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };
  

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setAttachments(reader.result); // Set the base64 string
    };
    reader.readAsDataURL(file); // Convert file to base64
  }
};


  return (
    <div>
      <form
        // action="mailto:info@gasupp.com"
        // method="post"
        // encType="text/plain"
        onSubmit={handleSubmit}
        className="p-4 md:p-8 text-white w-full mx-auto rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-4">
          {/* Input Fields */}
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
            className={`bg-transparent border-2 rounded-md focus:outline-none p-2 ${errors.email ? "border-red-500" : ""
              }`}
            required
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <input
            type="text"
            name="phoneNumber"
            value={number}
            onChange={(e) => {
              let value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
              if (value.length <= 10) {
                if (value.length > 6) {
                  value = value.replace(/^(\d{3})(\d{3})(\d+)/, "$1-$2-$3"); // Format as 123-456-7890
                } else if (value.length > 3) {
                  value = value.replace(/^(\d{3})(\d+)/, "$1-$2"); // Format as 123-456
                }
                setNumber(value);
              }
            }}
            placeholder="Your Phone Number"
            className="bg-transparent border-2 rounded-md focus:outline-none p-2"
            maxLength={12} // Adjusted to account for the dashes
            required
          />

          <select
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-transparent border-2 rounded-md focus:outline-none p-2"
            required
          >
            {/* Subject Options */}
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
            <option className="text-black" value="Wiper Blade Replacement">
              Wiper Blade Replacement
            </option>
            <option className="text-black" value="Tire Rotation">
              Tire Rotation
            </option>
            <option className="text-black" value="Fluid Top-Up">
              Fluid Top-Up
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

        {/* Message Input */}
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message or Question"
          className="w-full bg-transparent border-2 rounded-md focus:outline-none p-2 mb-4"
          required
        ></textarea>

        {/* Contact Method Radio Buttons */}
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
                onChange={(e) => setContactMethod(e.target.value)}
                checked={contactMethod === "Email"}
                className="text-blue-500"
              />
              <span className="ml-2">Email</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="contactMethod"
                value="Phone"
                onChange={(e) => setContactMethod(e.target.value)}
                checked={contactMethod === "Phone"}
                className="text-blue-500"
              />
              <span className="ml-2">Phone</span>
            </label>
          </div>

          {/* File Attachments */}
          <div className="mb-6 md:ml-5 w-full">
            <label className="block mb-2 text-lg">Attachments:</label>
            <input
              type="file"
              name="attachments"
              onChange={handleFileChange}
              className="w-full text-white"
            />
          </div>
        </div>
        {/* <ReCAPTCHA
          sitekey="6Ler0WkqAAAAALrIg1OMbDZdG3_tvzHwEoN70qHT"
          onChange={onChange}
        /> */}
        {/* Privacy Policy */}
        <div>
          <NavLink onClick={() => window.scrollTo(0, 0)} to="/privacy-policy">
            <p className="text-center underline italic"></p>
            <p className="">
              <span className="text-center underline italic">
                Privacy Notice:{" "}<br />
              </span>
              Your privacy is important to us. We will only use the information
              provided to respond to your inquiry and will not share it with
              third parties.
            </p>
          </NavLink>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-[#41CB5B] hover:bg-white hover:text-[#41CB5B] mt-5 text-white font-medium py-3 px-10 rounded-lg"
          >
              Submit
          </button>
        </div>
      </form>

      {/* Animated Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-[#41CB5B]">
              Thank you for contacting us
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              A representative will be in touch with you as soon as possible.
            </p>
            <button
              onClick={closeModal}
              className="bg-[#41CB5B] text-white mt-6 px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
