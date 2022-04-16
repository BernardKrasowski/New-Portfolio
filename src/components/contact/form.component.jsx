import "./form.styles.scss";

const Form = ({ sendEmail, name, setName, message, setMessage }) => {
  return (
    <form onSubmit={() => sendEmail()} className="contact_form">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};
export default Form;
