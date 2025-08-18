import {FaEnvelope, FaMapMarkerAlt,FaLeaf, FaPhoneAlt, FaClock} from "react-icons/fa";
import contactImg from "../assets/wheat.jpg";
const Contact = () => {
    const contactItems=[
        {
            icon: <FaMapMarkerAlt className="text-white text-xl" />,
            title: "Our Location",
            content:(
                <p className="text-gray-600">
                    Addis Ababa, 
                    Ethiopia
                </p>
            )
        },

        {
            icon: <FaPhoneAlt className="text-white text-xl" />,
            title: "Phone Numbers",
            content:(
                <p className="text-gray-600">
                    <a href="#" className="hover:text-[#63a800]">+251 9xxx xxxxx</a>
    
                </p>
            )
        },
        {
            icon: <FaEnvelope className="text-white text-xl" />,
            title: "Email",
            content:(
                <p className="text-gray-600">
                   <a href="#" className="hover:text-[#63a800]">info@YegnaFarm.com </a> 
                   
                </p>
            )
        },
        {
            icon: <FaClock className="text-white text-xl" />,
            title: "Working Hours",
            content:(
                <p className="text-gray-600">
                   Monday-Friday: 9:00 AM - 6:00 PM <br />
                    Saturday: 10:00 AM - 4:00 PM 
                </p>
            )
        },
    ];
   
  return (
    <article id="contact" className="py-20 overflow-hidden ">
        <div className="container mx-auto px-4">
            <header data-aos="fade-up" data-aos-delay="500" className="text-center mb-4 mt-14 relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 
             w-12 h-12 rounded-full bg-[#63a800] opacity-30 z-0 
             flex items-center justify-center"><FaLeaf className="text-white text-4xl"></FaLeaf></div>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800  relative z-10">
                        Contact <span className="text-[#63a800]">YegnaFarm</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
                        We are here to assist you with any inquiries or concerns you may have. 
                        Please feel free to reach out to us using the contact information provided below.

                    </p>

                

            </header>
            <main className="flex flex-col md:flex-row gap-10 ml-20 ">
                
                <section data-aos="fade-up" data-aos-delay="600" className="lg:w-1/2 ">
                <div className="bg-white rounded-2xl shadow-xl p-8 ">
                    <h2 className="text-2xl font-bold text-[#63a800] mb-2">Send Us a Message</h2>
                    <form className="space-y-2 ">
                        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Full name</label>
                                <input 
                                type="text" 
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                                focus:ring-[#63a800] focus:border-transparent"
                                placeholder="Your name"
                                required/>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                                <input 
                                type="tel" 
                                id="phone"
                                name="phone"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                                focus:ring-[#63a800] focus:border-transparent"
                                placeholder="+251-9xxx xxxxx"
                                required/>
                            </div>

                        </fieldset>
                        <div>
                                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                                <input 
                                type="email" 
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                                focus:ring-[#63a800] focus:border-transparent"
                                placeholder="Your@gmail.com"
                                required/>
                        </div>
            
                        <div>
                                <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                                <textarea 
                    
                                id="message"
                                name="message"
                                rows="5"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2
                                focus:ring-[#63a800] focus:border-transparent"
                                placeholder="Tell us about your concerns or questions"
                                required/>
                        </div>
                        <div>
                            <button 
                            type="submit"
                            className="bg-[#63a800] hover:bg-[#003501] text-white px-8 py-3 rounded-full
                             transition shadow-lg w-full md:w-auto"
                             aria-label="submi contact form">
                                Send Message

                            </button>
                        </div>

                    </form>

                </div>

                </section>
                <aside data-aos="fade-up" data-aos-delay="500" className="lg:w-1/3">
                <section className="bg-white rounded-2xl shadow-xl p-8 ">
                    <h2 className="text-2xl font-bold text-[#63a800] mb-2">Get In Touch</h2>
                    <address className="space-y-2">
                        {contactItems.map((item, index) => (
                            <article key={index} className="flex items-start">
                                <figure className="bg-[#63a800] p-3 rounded-full mr-4 flex-shrink-0">
                                    {item.icon}
                                </figure>
                                <div>
                                    <h3 className="font-medium text-gray-800 mb-1">{item.title}</h3>
                                    {item.content}
                                </div>

                            </article>
                        
                        ))}

                    </address>
                    <figure className="mt-8 rounded-xl overflow-hidden shadow-md">
                        <img 
                        src={contactImg}
                 
                        className="w-full h-30 object-cover hover:scale-105 transition-transform duration-500"
                        width={400}
                        height={200}
                        loading="lazy" />  
                    </figure>

                </section>

                </aside>

            </main>
            <figure data-aos="fade-up" data-aos-delay="600"
            className="mt-14 bg-white rounded-2xl shadow-xl overflow-hidden">
                <iframe 
                src="https://www.openstreetmap.org/export/embed.html?bbox=38.70%2C8.95%2C38.80%2C9.05&amp;layer=mapnik"
                width="100%"
                height="450"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                title="Map of our location"
                className="rounded-2xl"
                aria-label="map of our location"
                frameborder="0">

                </iframe>
            </figure>

        </div>

    </article>
    );
};

export default Contact;