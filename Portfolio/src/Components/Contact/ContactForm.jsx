import send from "../../assets/send.png";
import { contactInfo } from "../../../utils/constants";
const ContactForm = () => {
  return (
    <div className="flex gap-4 justify-center items-center my-12 w-[80%] max-sm:w-[90%] max-sm:flex-col max-sm:my-6">
      <div className="flex-1">
        <div className="text-white">
          <h3 className="text-[52px] font-semibold">
            Have a project in mind ?{" "}
          </h3>
          <p className="opacity-75 max-w-[400px]">
            Use the form to give me as much detail as possible and I’ll get back
            to you as soon as I can.
          </p>
        </div>
        <div className="mt-4 text-white">
          {contactInfo.map((item) => (
            <div key={item.title}>
              <h4 className=" font-semibold">{item.title}</h4>
              <p className="opacity-75 mb-2">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <form className="flex flex-col gap-4 flex-1 max-sm:w-full">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="bg-white bg-opacity-0 py-2 px-4 text-white  border-2 border-[#a1a1a1] rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-white bg-opacity-0 py-2 px-4 text-white border-2 border-[#a1a1a1] rounded-lg"
        />
        <textarea
          rows={5}
          name="message"
          placeholder="Message"
          className="bg-white bg-opacity-0 py-2 px-4 text-white  border-2 border-[#a1a1a1] rounded-lg"
        />

        <button className=" gap-8 bg-gradient-to-r from-secondary to-primary px-10 py-3 rounded-full flex justify-center items-center text-white font-medium text-lg shadow-xl max-sm:text-[16px] ">
          Send Message{" "}
          <span>
            <img src={send} alt="send" width={18} />
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
