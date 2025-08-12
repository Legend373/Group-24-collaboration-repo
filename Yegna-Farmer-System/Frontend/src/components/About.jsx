import { FaUserMd,FaLeaf,FaTruck,FaShoppingBasket } from "react-icons/fa";
import aboutImage from '../assets/wheat1.jpg';
import aboutImage1 from '../assets/agri3.jpg'
const About = () => {
    
    const approachItems = [
    {
        icon: <FaLeaf className="text-white" aria-hidden="true" />,
        title: "We connect farmers directly to buyers for fair and transparent trade.",
    },
    {
        icon: <FaTruck className="text-white" aria-hidden="true" />,
        title: "We ensure fast, reliable, and fresh delivery from farm to doorstep.",
    },
    {
        icon: <FaShoppingBasket className="text-white" aria-hidden="true" />,
        title: "We offer a secure and easy-to-use marketplace for agricultural products.",
    },
    ];

    return (
        <section id="about" className="py-14 overflow-hidden ">
            <div className="container mx-auto px-4">
                <article data-aos="fade-up" data-aos-delay="400" className="flex flex-col lg:flex-row items-center gap-12">
                    <figure className="lg:w-5/12 relative">
                        <div className="relative w-full max-w-md mx-auto">
                            {/* First Image */}
                            <div className="rounded-2xl overflow-hidden " style={{boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.7)', }}>
                            <img
                                src={aboutImage}
                                alt="Wood background with grains"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                            </div>

                            {/* Second Image - Overlapping */}
                            <div className="absolute -bottom-10 -right-10 rounded-2xl overflow-hidden  " style={{boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.7)', }}>
                            <img
                                src={aboutImage1}
                                alt="Fresh vegetables and soil"
                                className="w-70 h-auto object-cover"
                                loading="lazy"
                            />
                            </div>
                        </div>
                        </figure>

                    
                    <div data-aos="fade-up" data-aos-delay="600" className="lg:w-7/12 mt-8">
                        <header>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                About <span className="text-[#63a800]">YengaFarm</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                YengaFarm is a digital marketplace that connects farmers directly with buyers, ensuring fair prices, fresh produce, and a more sustainable agricultural ecosystem.
                                 </p>

                        </header>
                        <section className="m-8">
                            <h3 className="text-xl font-semibold text-grry-800 mb-4">Our Approach</h3>
                            <ul className="space-y-3">
                                {approachItems.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <figure className="bg-[#63a800] p-1 rounded-full mr-3 ">
                                            {item.icon}
                                        </figure>
                                        <p className="text-gray-700">{item.title}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        

                        <nav>
                            <a 
                            href="#"
                            className="inline-block bg-[#63a800] hover:bg-[#003501] text-white px-6 py-3 rounded-full
                            transition shadow-md focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2">
                                Meet Our Services

                            </a>
                        </nav>

                    </div>

                </article>
                <aside className="mt-6 bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
                    <span className="absolute -top-20 -right-20 w-50 h-50 rounded-full bg-[#63a800] opacity-30"
                        aria-hidden="true">
                    </span>
                    <div className="relative z-6">
                        <h3 className="text-2xl font-bold text-[#63a800] mb-2">Our Mission</h3>
                        <blockquote className="text-lg text-gray-700">
                            "Our mission is to empower farmers and buyers through a transparent, secure, and sustainable marketplace that delivers fresh produce, fair prices, and stronger agricultural communities."
                        </blockquote>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <figure className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-[#63a800] flex items-center justify-center mr-4">
                                    <FaUserMd className="text-white" aria-hidden="true" />
                                </div>
                                <figcaption>
                                    <cite className="font-semibold text-gray-800 not-italic">Fair Pricing</cite>
                                </figcaption>

                            </figure>
                            
                            <figure className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-[#63a800] flex items-center justify-center mr-4">
                                    <FaTruck className="text-white" aria-hidden="true" />
                                </div>
                                <figcaption>
                                    <cite className="font-semibold text-gray-800 not-italic">Fast Delivery</cite>
                                </figcaption>

                            </figure>
                            <figure className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-[#63a800] flex items-center justify-center mr-4">
                                    <FaLeaf className="text-white" aria-hidden="true" />
                                </div>
                                <figcaption>
                                    <cite className="font-semibold text-gray-800 not-italic">Quality Assurance</cite>
                                </figcaption>

                            </figure>

                        </div>
                        
                        
                    </div>

                </aside>
            </div>

        </section>
    );
};

export default About;