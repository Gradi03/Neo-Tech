import Head from "next/head";
import { Phone, Mail, MapPin } from "lucide-react";
import swal from "sweetalert";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    swal({
      title: "Sending...",
      text: "Please wait while we send your message.",
      icon: "info",
      buttons: false,
      closeOnClickOutside: false,
    });

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "08e08b0c-32fa-4fe4-b4b7-e1b6db1fc2e9", // Replace this
        ...formData,
      }),
    });

    if (response.ok) {
      swal("Success!", "Your message has been sent.", "success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } else {
      swal("Error!", "Something went wrong. Please try again.", "error");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | NEO DStv Technologies</title>
        <meta
          name="description"
          content="Get in touch with NEO DStv Technologies for DStv installations and CCTV services across Cape Town and the Western Cape."
        />
        <link
          rel="canonical"
          href="https://neodstvtechnologies.co.za/contact"
        />
      </Head>

      <section className="bg-gray-50 py-20 px-4 sm:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            We offer fast, reliable DStv installations, repairs, and CCTV setups
            in Cape Town and across the Western Cape.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-blue-700 mb-4">
                Contact Information
              </h2>
              <div className="space-y-5 text-gray-700">
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-600" />
                  <a
                    href="tel:+27721598813"
                    className="hover:underline font-medium"
                  >
                    +27 72 159 8813
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-600" />
                  <a
                    href="mailto:info@neodstvtechnologies.co.za"
                    className="hover:underline font-medium"
                  >
                    Info@neodstvtechnologies.co.za
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-600" />
                  <p className="font-medium">
                    105 Cook St, Vasco Estate, Cape Town, 7460
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Business Hours:</strong>
                    <br />
                    Mon–Sun, 7:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.5063442755836!2d18.554215075076247!3d-33.90236552079714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5bba679f3d25%3A0x5b20685dfe067270!2s105%20Cook%20St%2C%20Vasco%20Estate%2C%20Cape%20Town%2C%207460!5e0!3m2!1sen!2sza!4v1745953793391!5m2!1sen!2sza"
                width="100%"
                height="250"
                className="w-full h-[250px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+27 82 123 4567"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how we can help..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                We usually respond within 1–2 business hours.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
