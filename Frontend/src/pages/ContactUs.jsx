import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="mb-6 text-center">Click on your nearest store location below to set the road on Google Map.</p>
      <div className="w-full md:w-2/3 lg:w-1/2 mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093706!2d144.96315761531652!3d-37.814107979751775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57740c8bb90e68!2sVictoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1604065179316!5m2!1sen!2sus"
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <div className="flex flex-col md:flex-row justify-around w-full md:w-2/3 lg:w-1/2 text-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Our Store</h2>
          <p>7021 Washington SQ.</p>
          <p>South New York, NY 10012</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Contact Info</h2>
          <p>Telephone: 703.172.3412</p>
          <p>E-mail: hello@example.com</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Business Hours</h2>
          <p>Monday - Sunday:</p>
          <p>09:00 am - 20:00 pm</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
