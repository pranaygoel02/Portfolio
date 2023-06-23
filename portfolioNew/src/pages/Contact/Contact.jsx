import React, { useState } from "react";
import PageHead from "../../components/Heading/PageHead";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-hot-toast";
import { BiLoaderAlt } from "react-icons/bi";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [activeInput, setActiveInput] = useState(0);

  const inputs = [
    {
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
      name: "name",
      required: true,
      value: name,
      onChange: (e) => setName(e.target.value),
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      name: "email",
      required: true,
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      label: "Subject",
      type: "text",
      placeholder: "Enter your subject",
      name: "subject",
      required: true,
      value: subject,
      onChange: (e) => setSubject(e.target.value),
    },
    {
      label: "Message",
      type: "text-area",
      placeholder: "Enter your message",
      name: "message",
      required: true,
      value: message,
      onChange: (e) => setMessage(e.target.value),
    },
  ];

  const [sendingEmail, setSendingMail] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const form = {
        fullName: name,
        emailId: email,
        subject: subject,
        message: message,
      };
      setSendingMail((prev) => true);
      const res = await axios.post(
        "https://pranaygoel-server.vercel.app/sendEmail",
        form
      );
      console.log(res);
      toast.success("Message sent successfully!");
      resetForm();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    } finally {
      setSendingMail((prev) => false);
    }
  }

  function resetForm() {
    setName((prev) => "");
    setEmail((prev) => "");
    setSubject((prev) => "");
    setMessage((prev) => "");
  }

  return (
    <div className="w-full flex flex-col min-h-screen items-start justify-start gap-8 p-4 py-24 md:px-8 pb-32">
      <PageHead title={"Get in touch"} />
      <div className="container flex flex-col gap-4 mt-16 md:mt-0 lg:p-16">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full ">
          {inputs.map(
            (input, index) =>
              index === activeInput && (
                <div className="flex flex-col gap-2 w-full" key={index}>
                  <label className="text-sm font-semibold text-neutral-400">
                    {input.label}
                  </label>
                  {input.type === "text-area" ? (
                    <textarea
                      className="form-input"
                      placeholder={input.placeholder}
                      name={input.name}
                      required={input.required}
                      value={input.value}
                      onChange={input.onChange}
                      rows={5}
                    />
                  ) : (
                    <input
                      className="form-input"
                      type={input.type}
                      placeholder={input.placeholder}
                      name={input.name}
                      required={input.required}
                      value={input.value}
                      onChange={input.onChange}
                    />
                  )}
                </div>
              )
          )}
          <div className="flex gap-2 items-center justify-start text-neutral-500 py-2">
            <span
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                setActiveInput((prev) => Math.max(0, prev - 1));
              }}
            >
              <BsArrowLeft className="text-2xl" />
            </span>
            <span
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                setActiveInput((prev) => Math.min(inputs.length - 1, prev + 1));
              }}
            >
              <BsArrowRight className="text-2xl" />
            </span>
            {activeInput === inputs?.length - 1 && (
              <button disabled={sendingEmail} type="submit" className="btn ml-auto">
                {sendingEmail ? <BiLoaderAlt className="animate-spin"/> : 'Submit'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
