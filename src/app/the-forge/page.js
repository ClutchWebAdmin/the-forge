import InfoSectionTextLeft from "../components/InfoSectionTextLeft";
import ForgePhotoSection from "../components/ForgePhotoSection";
import InfoSectionTextRight from "../components/InfoSectionTextRight";

export default function TheForge() {
    return (

        <section
        id="the-forge"
        className="text-white bg-forgeRed-light"
        >
            <div className="flex flex-col md:flex-row">
                <InfoSectionTextLeft
                eyebrowText="Restaurant & Retail Space"
                    headingText="The Forge"
                    title="Welcome To Your New Favorite Hangout"
                    topBackgroundColor="bg-forgeRed-dark"
                    bottomBackgroundColor="bg-forgeRed-medium"
                    description="Welcome to The Forge, Salem's emerging social hub poised to become the city's premier destination for entertainment and dining. This floor is actively seeking vibrant local businesses, from dynamic sports bars to complimentary dining and entertainment. Designed to foster a lively, inclusive atmosphere, The Forge aims to create a seamless blend of experiences that reflect Salem's unique character. It’s not just a place to eat and drink; it's a space to connect, celebrate, and create memorable moments for locals and visitors alike."
                    floorNumber="1"
                    />
                <ForgePhotoSection sectionId="section1" sectionBId="section1"/>
            </div>
            <div className="flex flex-col md:flex-row">
                <InfoSectionTextRight 
                    eyebrowText="Salon, Spa, & Beauty Space"
                    headingText="The Forge"
                    topBackgroundColor="bg-forgeRed-medium"
                    bottomBackgroundColor="bg-forgeRed-dark"
                    title="Be A Part Of The Next Big Thing"
                    description="The Forge offers an unparalleled opportunity for businesses to thrive in an atmosphere designed to captivate and engage the community. With thoughtfully curated spaces and a focus on bringing people together, this level invites businesses that add character and excitement to Salem's social landscape. Whether you’re a unique eatery, an artisan cafe, or an immersive entertainment concept, this is the place to make your mark."
                    floorNumber="2"
                />
                <ForgePhotoSection sectionId="section2" sectionBId="section2" className="hidden " />
            </div>
        </section>
    );
}