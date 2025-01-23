import AnthemPhotoSection from "../components/AnthemPhotoSection";
import InfoSectionTextLeft from "../components/InfoSectionTextLeft";
import InfoSectionTextRight from "../components/InfoSectionTextRight";
import AIRender from "../components/AIRender";
import anthem1 from "../../../public/images/Anthem-Office-View.jpg";
import anthem2 from "../../../public/images/Anthem-Office-View-2.PNG";
import anthem3 from "../../../public/images/Anthem-3rd-Floor.PNG";
import Image from "next/image";

export default function Anthem() {
    return (
        
        <section
        id="the-collective"
        className="text-white bg-dpwBlue-light"
        >
            <div className="flex flex-col md:flex-row">
                <InfoSectionTextLeft
                eyebrowText="Tax & Business Advisory Firm"
                            headingText="Anthem"
                            websiteLink="https://dpwcpas.com/"
                            websiteText="www.dpwcpas.com"
                            title="Tax and Business Experts"
                            topBackgroundColor="bg-dpwBlue-dark"
                            bottomBackgroundColor="bg-dpwBlue-medium"
                            description="We are thrilled to welcome Anthem, a distinguished tax and business advisory firm, as the newest tenant on the top floor of The Forge. Headquartered in Salem, Oregon, Anthem offers comprehensive financial services with a reputation for excellence. Their new space at The Forge is a testament to their growth and the trust their clients place in them. We are confident that Anthem's presence will enhance our vibrant business community. We look forward to welcoming you and continuing to serve your financial needs with the professionalism you expect from Anthem."
                            floorNumber="3"
                        />
                <AnthemPhotoSection sectionId="section1" sectionBId="section1"/>
            </div>
            <div className="flex flex-col md:flex-row">
                <InfoSectionTextRight 
                    eyebrowText="Tax & Business Advisory Firm"
                                headingText="Anthem"
                                websiteLink="https://dpwcpas.com/"
                                websiteText="www.dpwcpas.com"
                                title="Streamlined Performance to Increase Profit"
                                topBackgroundColor="bg-dpwBlue-medium"
                                bottomBackgroundColor="bg-dpwBlue-dark"
                                description={`- Record Books (S-Corp and LLC): Ensuring meticulous record-keeping for S-Corps and LLCs, this service provides peace of mind by maintaining accurate financial records and meeting compliance standards, enabling smooth operations and informed decision-making.\n
                                - Business Valuations: Get practical assistance to determine the true value of your business with professional business valuation services, essential for mergers, acquisitions, and strategic decision-making.\n
                                - Business Operations and Documentation: Streamline your business operations with meticulous documentation, ensuring compliance with regulations and facilitating efficient day-to-day management. \n
                                -Technology Integration Solutions: Leverage technology to streamline operations and enhance productivity with customized integration solutions tailored to your business requirements.`}
                                floorNumber="3"
                            />
                <AnthemPhotoSection sectionId="section2" sectionBId="section2" className="hidden " />
            </div>
            <div className="flex flex-col md:flex-row">
                <InfoSectionTextLeft
                eyebrowText="Tax & Business Advisory Firm"
                            headingText="Anthem"
                            websiteLink="https://dpwcpas.com/"
                            websiteText="www.dpwcpas.com"
                            title="Expert Guidance to Inspire Leaders"
                            topBackgroundColor="bg-dpwBlue-dark"
                            bottomBackgroundColor="bg-dpwBlue-medium"
                            description={`- Entity Structure Planning (Partnership, Single Member LLC, S-Corp, Multiple Member LLC) \n
                            - Cash Flow Planning Using Your S-Corp/LLC \n
                            - Equity Planning \n
                            -Education Savings & Income Shifting \n
                            - Estate Planning \n
                            - Succession Planning`}
                            floorNumber="3"
                        />
                <AnthemPhotoSection sectionId="section3" sectionBId="section3"/>
            </div>
            <div className="flex flex-col md:flex-row">
                <InfoSectionTextRight 
                    eyebrowText="Tax & Business Advisory Firm"
                                headingText="Anthem"
                                websiteLink="https://dpwcpas.com/"
                                websiteText="www.dpwcpas.com"
                                title="Strategy is the Starting Point of a Leader’s Planning"
                                topBackgroundColor="bg-dpwBlue-medium"
                                bottomBackgroundColor="bg-dpwBlue-dark"
                                description={`- Corporate/LLC Income Strategies\n
                                - Tax Planning Strategies\n
                                - Independent Contractor Strategies \n
                                - Company Fringe Benefits Strategies\n
                                - Rental Properties Strategies\n
                                - Cost Segregation Strategies \n
                                - 1031 Exchange Strategies\n
                                - Cryptocurrency Taxation Strategies\n`}
                                floorNumber="3"
                            />
                <AnthemPhotoSection sectionId="section4" sectionBId="section4" className="hidden " />
            </div>
            {/* <div className="bg-dpwBlue-medium p-5 rounded-md w-full grid grid-cols-3 gap-4 flex items-center justify-center lg:h-1/2"> 
                <Image src={anthem1.src} alt="Anthem Image" width={208} height={108} className="w-full fill h-2/3 rounded-md" />
                <video
                    className="object-cover w-full h-2/3 rounded-md"
                    src="/images/Anthem-Layout-Vid.mp4" // Path to your video file
                    loop
                    autoPlay
                    muted
                    playsInline // Helps autoplay on mobile devices
                />
                <Image src={anthem3.src} alt="Anthem Image" width={208} height={108} className="w-full fill h-2/3 rounded-md" />
            </div> */}
        </section>
    );
}