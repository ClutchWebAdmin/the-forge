import InfoSectionTextLeft from "../components/InfoSectionTextLeft";
import ForgePhotoSection from "../components/ForgePhotoSection";

export default function TheForge() {
    return (
        <section id="the-forge" className="flex flex-col md:flex-row text-white">
            <InfoSectionTextLeft
            eyebrowText="Restaurant & Retail Space"
            headingText="The Forge"
            title="Welcome to Your New Favorite Hangout"
            topBackgroundColor="bg-forgeRed-dark"
            bottomBackgroundColor="bg-forgeRed-medium"
            description="Welcome to The Forge, Salem's emerging social hub poised to become the city's premier destination for entertainment and dining. This floor is actively seeking vibrant local businesses, from dynamic sports bars to complimentary dining and entertainment."
            floorNumber="1"
            />
            <ForgePhotoSection />
        </section>
    );
}