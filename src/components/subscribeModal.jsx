

function SubscribeModal({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Subscribe Now</h2>
        <p>Fill in your details and get 20% off!</p>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <input type="tel" placeholder="Your Phone Number" name="phone" required />
          <button type="submit">Subscribe</button>
        </form>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default SubscribeModal;
