import AnthemPhotoSection from "../components/AnthemPhotoSection";
import InfoSectionTextLeft from "../components/InfoSectionTextLeft";

export default function Anthem() {
    return (
        <section id="anthem" >
            <div className="flex flex-col md:flex-row text-white">
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
                <AnthemPhotoSection />
            </div>
        </section>
    );
}