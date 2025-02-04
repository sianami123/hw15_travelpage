import "./submit_form.css";

export default function SubmitForm() {
  return (
    <div className="submit-form">
      <h2>Subscribe to Our Newsletter</h2>
      <p className="form-description">
        Stay updated with our latest news and updates
      </p>
      <form className="email-form">
        <div className="form-fields">
          <div className="input-field">
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-field">
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-field">
            <input type="tel" placeholder="Enter your phone number" required />
          </div>
          <button type="submit" className="submit-button">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
