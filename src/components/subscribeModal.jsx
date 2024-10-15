import { useState } from "react";
import emailjs from "@emailjs/browser";

function SubscribeModal({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [modalOpen, setModalOpen] = useState(false); // State for modal
  const [errors, setErrors] = useState({});
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return emailRegex.test(email);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!name) validationErrors.name = "Full name is required.";
    if (!email || !validateEmail(email))
      validationErrors.email = "Valid email is required.";
    if (!number) validationErrors.number = "Phone number is required.";

    // If there are errors, set the error state and prevent form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const serviceId = "service_xohw6ue";
    const templateId = "gasupp_t36qu28";
    const publicKey = "V7OUXBKphSqFSfSAN";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_number: number,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setNumber("");
        setModalOpen(true); // Open modal when email is sent successfully
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  }
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="text-2xl font-bold items-center text-center">Try Any Of Our Services.</h2>
        <p className="text-xl font-normal items-center text-center">Fill in your details and get 20% off!</p>
        <form onSubmit={handleSubmit}>
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
              let value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
              if (value.length <= 10) {
                if (value.length > 6) {
                  value = value.replace(/^(\d{3})(\d{3})(\d+)/, '$1-$2-$3'); // Format as 123-456-7890
                } else if (value.length > 3) {
                  value = value.replace(/^(\d{3})(\d+)/, '$1-$2'); // Format as 123-456
                }
                setNumber(value);
              }
            }}
            placeholder="Enter 10-digit Number"
            className="bg-transparent border-2 rounded-md focus:outline-none p-2"
            maxLength={12} // Adjusted to account for the dashes
            required
          />


          <div className="flex gap-5 items-center justify-center">
            <button
              type="submit"
              className="bg-[#41CB5B] border border-red-500 hover:bg-[#41CB5B] hover:text-[white] mt-5 text-white font-medium py-3 px-10 rounded-lg"
            >
              Submit
            </button>
            <button className="modal-close bg-[#41CB5B] border border-red-500 mt-5 text-white font-medium py-3 px-10 rounded-lg" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubscribeModal;
