import React from "react";
import { FaUserFriends, FaTruck ,FaShoppingCart, FaCheck} from 'react-icons/fa';
const Services = () => {
    const Services = [
        {   icon:<div className="flex space-x-3">
            <div className="bg-[#63a800] bg-opacity-20 rounded-full p-3 flex items-center justify-center">
                <FaUserFriends className="h-5 w-5 text-white" />
            </div></div>,
            title:"Farmer-Buyer Connection",
            desc:"Our platform directly connects farmers with buyers, eliminating middlemen and ensuring fair prices for both parties.",
            link:"#Connection",
            benefits: [
                        "Real-time market pricing",
                        "Direct communication channels",
                        "Secure transaction system"
                        
                    ]
        },

        {   icon:<div className="flex space-x-3">
            <div className="bg-[#63a800] bg-opacity-20 rounded-full p-3 flex items-center justify-center">
                <FaShoppingCart className="h-5 w-5 text-white" />
            </div></div>,
            title:"E-Commerce Marketplace",
            desc:"A comprehensive marketplace where farmers can list their produce and  buyers can browse and purchase directly.",
            link:"#marketplace",
            benefits: [
                        "Easy product listing",
                        "Secure payment gateway",
                        "Order tracking system"
                    ]
        },

        {   icon:<div className="flex space-x-3">
            <div className="bg-[#63a800] bg-opacity-20 rounded-full p-3 flex items-center justify-center">
                <FaTruck className="h-5 w-5 text-white" />
            </div></div>,
            title:"Logistics & Delivery",
            desc:"Efficient logistics solutions to ensure timely delivery of fresh produce from farm to consumer.",
            link:"#delivery",
            benefits: [
                        "Refrigerated transport",
                        "Real-time tracking",
                        "Flexible delivery options"
                    ]
        }

    ];  

    return (
        <section
        id="services"
        className="py-20 overflow-hidden"
        aria-labelledby="services-heading"
        >
            <div className="container mx-auto px-4 mt-8 ">
                <header data-aos="fade-up" data-aos-delay="500" className="text-center mb-16">
                    <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-grsy-800 mb-4">
                        Our <span className="text-[#63a800]">Premiem Services </span>
                    </h2>
                    <p className="text-lg text-gray-800 max-w-1xl mx-auto">
                        We provide comprehensive solutions to connect farmers and buyers efficiently
                    </p>
                </header>
                <ul data-aos="fade-up" data-aos-delay="500" 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {Services.map((service, index) => (
                        <li key={index}>
                            <article
                            className="bg-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300
                            hover:transition-y-[-5px] h-full flex flex-col">
                                <figure className="mb-6">
                                    {service.icon}
                                </figure>
                                <h3 className="text-xl font-bold text-[#63a800] mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 m-6 flex-grow">{service.desc}
                                    
                                </p>
                                <ul className="space-y-2 mt-4">
                                {service.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start">
                                    <FaCheck className="text-[#ff9500] mt-1 mr-2 flex-shrink-0" />
                                    <span className="text-gray-700">{benefit}</span>
                                    </li>
                                ))}
                                </ul>

                            </article>

                        </li>
                    ))}

                </ul>
                <footer data-aos="fade-up" data-aos-delay="600" className="mt-20 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        Ready to transform your Exchange?
                    </h3>
                    <a href="#signin"
                    className="bg-[#63a800] hover:bg-[#003501] text-white px-8 py-3 rounded-full
                    inline-block transition shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-800
                    focus:ring-offset-2"
                    aria-label="Book Our Service Now">
                        Book Our Service Now
                    </a>

                </footer>

            </div>

        </section>
    );
};

export default Services;