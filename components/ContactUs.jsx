import React from 'react'

const ContactUs = () => {
  return (
    <section className="body-font relative">
                      <div className='flex items-center justify-center'>
            <h1 className='text-5xl font-bold text-green-900'>
                Contact Us
            </h1>
        </div>

    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-semibold title-font">Feedback</h2>
        <p className="leading-relaxed mb-5 text-gray-600">Send Your Feedback..</p>
        <div className="relative mb-4">
            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-green-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-green-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>

        <div className="relative mb-4">
            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-green-400 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button className="text-white bg-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">Send</button>
        <p className="text-xs text-gray-500 mt-3">Response will be made within 24 hours.</p>
        </div>

        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex justify-center items-end relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.258640237541!2d114.9257617214478!3d4.896312682392432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3222f54c8e78afdf%3A0x207cc0fb9a4b2948!2sKiarong%20Complex!5e0!3m2!1sar!2seg!4v1693221269920!5m2!1sar!2seg" width="3200" height="500"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        <div className="bg-white absolute flex flex-wrap py-4 rounded shadow-md justify-center items-center sm:items-start ">
            <div className="lg:w-1/2 px-6 flex  ">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-normal ">ADDRESS</h2>
            <p className="mt-1 text-xs">
            Unit No.10, Block A, 2nd Floor Kiarong Complex​ <br/>
            Jalan Lebuhraya Sultan Haji Hassanal Bolkiah, BE1318 ​<br/>
            P.O Box 2468, BSB 8674 ​<br/>
            Bandar Seri Begawan, Brunei Darussalam
            </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-normal">EMAIL</h2>
            <a className="text-indigo-500 leading-relaxed text-sm">kpibrunei@gmail.com</a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-normal mt-4">PHONE</h2>
            <p className="leading-relaxed text-sm">(673) 2444844 / 2420532</p>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-normal mt-4">FAX</h2>
            <p className="leading-relaxed text-sm">(673) 2237845</p>
            </div>
        </div>
        </div>


    </div>
</section>
  )
}

export default ContactUs
