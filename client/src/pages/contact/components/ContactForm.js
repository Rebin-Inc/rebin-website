import React, { useState } from 'react';
import { MdLocationPin, MdEmail } from 'react-icons/md';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {

  const { t } =useTranslation();

  const [inputs, setInputs] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const result = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: 'service_gx6m6mz',
        template_id: 'template_bywh74c',
        user_id: 'NX7_T34KfIWfA-7ma',
        template_params: {
          from_name: inputs.name || "No Name",
          message: inputs.message || "No Message",
          phone: inputs.phone || "No Phone",
          email: inputs.email || "No Email",
        },
      });
  
      console.log("Success:", result);
      setInputs({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error("Error sending email:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="items-top relative flex justify-center bg-white sm:items-center sm:pt-0">
      <div className="border-1 mx-auto max-w-5xl rounded-xl p-3 px-2 shadow-around">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 space-x-2 md:grid-cols-5">
            {/* Blue banner */}
            <div className="bg-gradient-reverse col-span-2 space-y-10 rounded-lg p-8">
              <h1 className="text-normal my-5 mb-16 text-lg font-semibold text-white sm:text-xl">
              {t("contactpage.form_information")}
              </h1>
              <div className="flex items-center text-white">
                <MdEmail className="size-10"></MdEmail>
                <div className="ml-4 ">
                  <span>Email</span>
                  <div className="text-md w-40 font-medium tracking-wide">
                    info@rebin.be
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center text-white">
                <MdLocationPin className="size-10"></MdLocationPin>
                <div className="ml-4 ">
                  <span>{t("contactpage.form_address_title")}</span>
                  <div className="text-md w-45 font-medium tracking-wide">
                  {t("contactpage.form_address_info")}
                  </div>
                </div>
              </div>
            </div>
            {/* Contact form */}
            <form
              onSubmit={handleSubmit}
              className="col-span-3 flex flex-col justify-center space-y-8 p-8"
              name="contactForm"
            >
              <h1 className="text-normal my-5 text-xl font-semibold text-black">
              {t("contactpage.form_touch")}
              </h1>
              <div className="grid grid-cols-1 space-y-5 sm:grid-cols-2 sm:space-y-0">
                <div className="flex flex-col space-y-2 sm:mr-3">
                  <label htmlFor="name" className="font-medium">
                  {t("contactpage.form_name_title")}
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    placeholder={t("contactpage.form_name_info")}
                    className="border-rebin mb-4 block w-full rounded-md py-2 pl-5 pr-20 text-sm font-light"
                    value={inputs.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="tel" className="font-medium">
                    {t("contactpage.form_phone_title")}
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    id="tel"
                    autoComplete="tel"
                    placeholder={t("contactpage.form_phone_info")}
                    className="border-rebin mb-4 block w-full rounded-md py-2 pl-5 pr-20 text-sm font-light"
                    value={inputs.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-2 flex flex-col space-y-2">
                <label htmlFor="email" className="font-medium">
                {t("contactpage.form_email_title")}
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder={t("contactpage.form_email_info")}
                  className="border-rebin mb-4 block w-full rounded-md py-2 pl-5 pr-20 text-sm font-light"
                  value={inputs.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-2 flex flex-col space-y-2">
                <label htmlFor="message" className="font-medium">
                  {t("contactpage.form_message_title")}
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder={t("contactpage.form_message_info")}
                  className="border-rebin mb-4 block w-full rounded-md py-2 pl-5 pr-20 text-sm font-light"
                  value={inputs.message}
                  onChange={handleChange}
                  rows="4"
                />
              </div>

              <button
                type="submit"
                className="bg-gradient relative mx-auto flex w-fit transform items-center justify-center rounded-lg p-3 font-bold text-white transition-transform hover:scale-95 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:scale-90 sm:mr-0"
                disabled={loading} // Disable button when loading
              >
                {loading && (
                  <svg
                    aria-hidden="true"
                    className="text-white-200 mr-2 h-6 w-6 animate-spin fill-blue-600 dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                )}
                <span className="">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
