import hero from '../assets/hero.png';
import bgImage from "../assets/bg.jpg";
const Hero = () => {
    const stats = [
        {value:"2,500+", label:"Happy Clients"},
        {value:"15+",label:"Farmers"},
        {value:"50+",label:"Buyers"},
        {value:"1+",label:"Years"},
    ];
    return (
        <section id="home" className="relative overflow-hidden" 
        style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}> 
            <article className="container mx-auto px-7 py-20 md:py-44 flex flex-col md:flex-row items-center">
                <div className="md:w1/2 mb-10 md:mb-0">
                <hgroup data-aos='fade-up' data-aos-delay="500" >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                         <mark className="text-[#63a800] bg-transparent text-7xl">Sell Smart.</mark> <br />
                         <mark className="text-white bg-transparent text-5xl ">Grow Strong</mark>
                    </h1>
                    <p className="text-lg text-[#63a800] mb-8 max-w-lg">
                        Join the Digital Agri Revolution
                    </p>
                </hgroup>
                <nav data-aos='fade-up' data-aos-delay="600" className="flex flex-col sm:flex-row gap-4 mb-12">
                    <a 
                    href="#signin"
                    className="bg-[#63a800] hover:bg-[#63a800] text-white px-8 py-3 rounded-full
                    text-center transition shadow-lg"
                    aria-label="Join Us Now">
                        Join Us Now!
                    </a>
                    <a 
                    href="#services"
                    className="border border-[#63a800] text-white hover:bg=white-50 px-8 py-3 rounded-full
                    text-center transitio"
                    aria-label="Explore Our services">
                        Explore Services
                    </a>
                </nav>
                <aside data-aos='fade-up' data-aos-delay="800" className="py-4">
                    <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-center">
                        {stats.map((stat, index) => (
                            <li key={index} className="px-2">
                                <strong className="text-2xl font-bold text-white">{stat.value}</strong>
                                <small className="block text-sm text-[#63a800]">{stat.label}</small>
                            </li>
                        ))}
                    </ul>
                </aside>
                </div>
                <figure data-aos='fade-up' data-aos-delay="400" className="md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 md:w-auto">
                <div className="relative w-full max-w-2xl ml-auto">
                   {/*  <span className="bg-pink-500 rounded-full w-80 h-80 absolute -top-10 -left-10 opacity-20"
                    aria-hidden="true">
                    </span>

                    <span className="bg-pink-400 rounded-full w-64 h-64 absolute -bottom-10 -right-10 opacity-20"
                    aria-hidden="true">
                    </span> */}
                    <img src={hero} alt="farmers assosiation"
                    className='relative z-10 w-full max-w-[800px] object-contain'
                    width="900"
                    height='900'
                    loading='eager'
                    style={{ maxHeight: '600px' }}
                    />

                </div>

                </figure>
            </article>
        </section>
    );
}

export default Hero