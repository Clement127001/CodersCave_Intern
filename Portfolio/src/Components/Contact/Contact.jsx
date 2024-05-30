import ContactDetails from "./ContactDetails";
import QNA from "./QNA";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <ContactDetails />
      <QNA />
      <ContactForm />
    </div>
  );
};

export default Contact;
