
import {
  FaClinicMedical,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import {
  MdAccessTime,
  MdEmail,
  MdLocationOn,
  MdPhone
} from "react-icons/md";
import logo from "../assets/logo1.png"
const Footer = () => {
    const socialLinks =[
        {icon:<FaFacebookF className="text-lg"/>,label:"Facebook"},
        {icon:<FaTwitter className="text-lg"/>,label:"Twiter"},
        {icon:<FaInstagram className="text-lg"/>,label:"Instagram"},
        {icon:<FaLinkedin className="text-lg"/>,label:"LinkedIn"},
        {icon:<FaYoutube className="text-lg"/>,label:"Youtube"},
        
    ];
    const quickLinks = [
        {text:"Home", href:"#"},
        {text:"About Us", href:"#about"},
        {text:"Our services ", href:"#services"},
        {text:"Our specialists", href:"#specialists"},
        {text:"Contact Us", href:"#contact"},
        
    ];
    const contactInfo =[
      {
        icon: <MdLocationOn className="text-white text-xl mt-1 mr-4 flex-shrink-0"/>,
        content: <a href="#" className="text-white hover:text-[#63a800] transition">
          123 Beauty Avenue, Medical District, London
        </a>
      },
      {
        icon: <MdPhone className="text-white text-xl mt-1 mr-4 flex-shrink-0"/>,
        content: <a href="#" className="text-white hover:text-[#63a800] transition">
          +2519-xxxx-xxx
        </a>
      },
      {
        icon: <MdEmail className="text-white text-xl mt-1 mr-4 flex-shrink-0"/>,
        content: <a href="#" className="text-white hover:text-[#63a800] transition">
          info@gmail.com
        </a>
      },
      {
        icon: <MdAccessTime className="text-white text-xl mt-1 mr-4 flex-shrink-0"/>,
        content: <a href="#" className="text-white hover:text-[#63a800] transition">
          iSun-Thu: 9AM-8PM, Fri:2PM-9PM
        </a>
      },

        
    ];
    const legalLinks = [
      {text:"Privacy policy", href:"#"},
      {text:"Terms of Service", href:"#"},
      {text:"Sitemap", href:"#"},

    ];
  return (
    <footer className="bg-[#16431a] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-8">
          <section className="lf:col-span-2 bg-[#003501]" style={{boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.7)',}}>
            <header className="flex items-center mb-6 px-14 ml-16 mt-4">
              <img src={logo} alt="YengaFarm" className="h-[50px] w-auto transform scale-100 hover:scale-105 transition-transform" />
            </header>
            <p className="text-white  mb-4 px-6 justify-center">
               Connecting farmers directly with buyers to create a sustainable and profitable agricultural ecosystem.
               
            </p>
            <nav aria-label="Social media links">
              <ul className="flex space-x-4 ml-10">
                {socialLinks.map((item,index)=>(
                  <li key={index}>
                    <a 
                    href="#"
                    className=" hover:text-[#63a800] w-10 h-10 rounded-full
                    flex items-center justify-center transition "
                    aria-label={item.label}
                    >{item.icon} </a>
                  </li>

                ))}

              </ul>

            </nav>

          </section>
          <section className="gap-x-16">
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0
            after:bottom-0 after:w-12 after:h-1 after:bg-[#63a800]">
              Quick Link
            </h3>
            <nav aria-label="Quick links">
              <ul className="space-y-3">
                {quickLinks.map((link, index)=>(
                    <li key={index}>
                      <a href={link.href}className="text-white hover:text-[#63a800] transition">
                        {link.text}
                      </a>

                    </li>

                  ))
                }

              </ul>

            </nav>
          </section>

          <address px-20>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute
            after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-[#63a800]">
              Contact Us
            </h3>
            <ul className="space-y-4 ">
              {contactInfo.map((info,index)=>(
                <li key={index} className="flex items-start">
                  {info.icon}
                  {info.content}


                </li>
              ))}
            </ul>
          </address>

        </div>
        
        <footer className="pt-4 border-t border-[#63a800] flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm mb-2 ">
            &copy;{new Date().getFullYear()} YegnaFarm. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex space-x-6">
              {legalLinks.map((link,index)=>(
                <li key={index}>
                  <a href={link.text} className="text-white hover:text-[#63a800] text-sm transition">
                    {link.text}
                  </a>

                </li>
              )
              )}

            </ul>
          </nav>

        </footer>

      </div>

    </footer>
  
  );
};

export default Footer;
