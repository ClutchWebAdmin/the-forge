import InfoSectionTextRight from "../components/InfoSectionTextRight";
import CollectivePhotoSection from "../components/CollectivePhotoSection";
import InfoSectionTextLeft from "../components/InfoSectionTextLeft";
import WelcomePopup from "../components/WelcomePopup";
import Carousel from "../components/Carousel";

export default function TheCollective() {
    
    return (
        <section
        id="the-collective"
        className="text-white bg-collectivePink-light"
        >
            <div className="flex flex-col md:flex-row">
                <InfoSectionTextRight
                eyebrowText="Salon, Spa, & Beauty Space"
                headingText="The Collective"
                topBackgroundColor="bg-collectivePink-dark"
                title="Welcome to The Collective at Forge"
                bottomBackgroundColor="bg-collectivePink-medium"
                description="Discover Floor 2—where beauty, wellness, and connection unite in a modern and dynamic space. The Collective is a curated space designed to inspire and elevate influential women in the beauty and wellness industries. Our community thrives in an environment that blends luxury, networking, and innovation, offering 28 suites crafted to empower your business and enhance client experiences."
                floorNumber="2"
                />
                <CollectivePhotoSection sectionId="section1" sectionBId="section1"/>
            </div>
            <div className="flex flex-col md:flex-row">
                <InfoSectionTextLeft 
                    eyebrowText="Salon, Spa, & Beauty Space"
                    headingText="The Collective"
                    topBackgroundColor="bg-collectivePink-medium"
                    bottomBackgroundColor="bg-collectivePink-dark"
                    title="Immerse Yourself in Sophistication"
                    description="Step into a vibrant, refined atmosphere that caters to every sense. From CLINK!, a chic champagne and martini bar—perfect for socializing and unwinding—to the thoughtfully designed suites, The Collective offers a premium space for business and connection. Our suites provide the ideal setting for your brand to flourish and your clientele to feel pampered.
    "
                    floorNumber="2"
                />
                <CollectivePhotoSection sectionId="section2" sectionBId="section2" className="hidden " />
            </div>

            {/* <div className="lg:flex flex-col bg-collectivePink-light justify-center items-center p-5">
                <h4
                className="text-3xl xl:text-4xl text-collectivePink-dark border-b border-collectivePink-dark pb-2 px-2 w-fit font-medium w-full text-center mb-4"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
                >
                Take A Look
                </h4>
                <Carousel />
            </div> */}

            <div className="flex flex-col md:flex-row">
                <InfoSectionTextRight
                eyebrowText="Salon, Spa, & Beauty Space"
                headingText="The Collective"
                topBackgroundColor="bg-collectivePink-dark"
                title="Who Can Thrive Here?"
                bottomBackgroundColor="bg-collectivePink-medium"
                description={`
                Hairstylists and Color Specialists\n
                Estheticians and Skin Care Experts\n
                Lash and Brow Technicians\n
                Makeup Artists\n
                Nail Technicians and Manicurists\n
                Massage Therapists\n
                Wellness Coaches and Holistic Practitioners\n
                Boutique Spa Owners\n
                Personal Stylists\n
                Women-Centric Financial Planner\n
                Therapist or Counselor\n
                Business Consultant or Career Coach\n
                Legal Consultant\n
                Nutritionist or Dietitian\n
                Physical Therapist\n
                Women’s Wellness Coach\n
                Life Coach\n
                Event Planner\n
                PR or Marketing Specialist\n
                Yoga or Pilates Instructor\n
                Reiki Healer or Energy Worker\n
                Acupuncturist\n
                Holistic Beauty Therapist\n
                Boutique Fitness Studio Owner\n
                Artisan Shop or Boutique\n
                Health Food or Smoothie Bar Owner\n
                Women’s Support Group Facilitator\n
                Workshops & Classes Facilitator\n `}
                floorNumber="2"
                />
                <CollectivePhotoSection sectionId="section3" sectionBId="section3"/>
            </div>

            <div className="flex flex-col md:flex-row">
                <InfoSectionTextLeft 
                    eyebrowText="Salon, Spa, & Beauty Space"
                    headingText="The Collective"
                    topBackgroundColor="bg-collectivePink-medium"
                    bottomBackgroundColor="bg-collectivePink-dark"
                    title="Why Choose The Collective?"
                    description={` 
                        Secure and Private Facilities: Enjoy the convenience of a beautifully designed, locked bathroom, accessible only by a private code and designed with women’s needs in mind.\n
                        Prime Location: Situated in the heart of the city with convenient access for you and your clients, surrounded by a vibrant neighborhood.\n
                        Free Covered Parking: Take advantage of complimentary parking in the Chemeketa Parkade, with a fully covered sky bridge leading directly to The Collective floor for easy and secure access.\n
                        Private Salon Suites: Each suite offers flexibility, privacy, and a professional setting tailored to your brand and client experience.\n
                        Networking Opportunities: Join a supportive community of like-minded professionals, creating opportunities for collaboration and growth.\n
                        `}
                    floorNumber="2"
                />
                <CollectivePhotoSection sectionId="section4" sectionBId="section4"/>
            </div>
        
            <div className="bg-collectivePink-medium p-5 rounded-md w-full grid grid-cols-3 gap-4 flex items-center justify-center lg:h-3/4"> 
                <video
                    className="object-cover w-full lg:h-3/4 rounded-md"
                    src="/videos/CollectiveMassage.mp4" // Path to your video file
                    loop
                    autoPlay
                    muted
                    playsInline // Helps autoplay on mobile devices
                />
                <video
                    className="object-cover w-full lg:h-3/4 rounded-md"
                    src="/videos/CollectiveLayout.mp4" // Path to your video file
                    loop
                    autoPlay
                    muted
                    playsInline // Helps autoplay on mobile devices
                />
                <video
                    className="object-cover w-full lg:h-3/4 rounded-md"
                    src="/videos/CollectiveEyebrow.mp4" // Path to your video file
                    loop
                    autoPlay
                    muted
                    playsInline // Helps autoplay on mobile devices
                />
            </div>
            <WelcomePopup />
        </section>
    );
}