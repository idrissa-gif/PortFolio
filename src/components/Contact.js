import React, { useState } from 'react';

function Contact() {
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   subject: '',
   message: ''
 });

 const [status, setStatus] = useState('');
 const [isSubmitting, setIsSubmitting] = useState(false);

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData(prevState => ({
     ...prevState,
     [name]: value
   }));
 };

 const handleSubmit = async (e) => {
   e.preventDefault();
   setIsSubmitting(true);
   setStatus('');

   try {
     const response = await fetch('https://formspree.io/f/meoqwrlr', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(formData)
     });

     if (response.ok) {
       setStatus('Message sent successfully!');
       setFormData({
         name: '',
         email: '',
         subject: '',
         message: ''
       });
     } else {
       setStatus('Failed to send message. Please try again.');
     }
   } catch (error) {
     console.error('Submission error:', error);
     setStatus('An error occurred. Please try again.');
   } finally {
     setIsSubmitting(false);
   }
 };

 return (
   <div className="max-w-md mx-auto">
     <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
     <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
       <div className="mb-4">
         <label
           className="block text-gray-700 text-sm font-bold mb-2"
           htmlFor="name"
         >
           Name
         </label>
         <input
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
           id="name"
           name="name"
           type="text"
           placeholder="Your Name"
           value={formData.name}
           onChange={handleChange}
           required
         />
       </div>
       <div className="mb-4">
         <label
           className="block text-gray-700 text-sm font-bold mb-2"
           htmlFor="email"
         >
           Email
         </label>
         <input
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
           id="email"
           name="email"
           type="email"
           placeholder="Your Email"
           value={formData.email}
           onChange={handleChange}
           required
         />
       </div>
       <div className="mb-4">
         <label
           className="block text-gray-700 text-sm font-bold mb-2"
           htmlFor="subject"
         >
           Subject
         </label>
         <input
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
           id="subject"
           name="subject"
           type="text"
           placeholder="Subject"
           value={formData.subject}
           onChange={handleChange}
           required
         />
       </div>
       <div className="mb-6">
         <label
           className="block text-gray-700 text-sm font-bold mb-2"
           htmlFor="message"
         >
           Message
         </label>
         <textarea
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-24"
           id="message"
           name="message"
           placeholder="Your Message"
           value={formData.message}
           onChange={handleChange}
           required
         />
       </div>
       {status && (
         <div className={`mb-4 text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
           {status}
         </div>
       )}
       <div className="flex items-center justify-center">
         <button
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
           type="submit"
           disabled={isSubmitting}
         >
           {isSubmitting ? 'Sending...' : 'Send Message'}
         </button>
       </div>
     </form>
   </div>
 );
}

export default Contact;