import InfoSectionTextRight from "../components/InfoSectionTextRight";
import VaultPhotoSection from "../components/VaultPhotoSection";
import InfoSectionTextLeft from "../components/InfoSectionTextLeft";

export default function TheVault() {
    return (

        <section
        id="the-vault"
        className="text-white bg-forgeRed-light"
        >
            <div className="flex flex-col md:flex-row">
                <InfoSectionTextLeft
                    eyebrowText="Wine Cellar"
                    headingText="The Vault"
                    title="If You Know, You Know"
                    topBackgroundColor="bg-vaultPurple-dark"
                    bottomBackgroundColor="bg-vaultPurple-medium"
                    description="Descend into The Vault, a hidden gem beneath the bustling activity of the floors above. This versatile basement space offers two distinct possibilities: a private underground event venue perfect for exclusive gatherings, or a sophisticated bourbon and wine lounge tailored for connoisseurs. Both options provide a secure and private setting, ideal for those seeking to enjoy their favorite beverages in an atmosphere of exclusivity and refinement."
                    floorNumber="B"
            />
                <VaultPhotoSection sectionId="section1" sectionBId="section1"/>
            </div>
            <div className="flex flex-col md:flex-row">
                <InfoSectionTextRight 
                    eyebrowText="Salon, Spa, & Beauty Space"
                    headingText="The Forge"
                    topBackgroundColor="bg-vaultPurple-medium"
                    bottomBackgroundColor="bg-vaultPurple-dark"
                    title="Welcome To The Club"
                    description="Embrace the allure of The Vault, where elegance meets intimacy in an ambiance unlike any other in Salem. Designed for those who appreciate a curated experience, this unique space invites patrons to step away from the ordinary and into a refined underground retreat. With its carefully crafted decor and distinct, secluded vibe, The Vault is the perfect backdrop for unforgettable moments, whether it’s a high-end tasting, a private celebration, or a night out with friends seeking something truly extraordinary."
                    floorNumber="2"
                />
                <VaultPhotoSection sectionId="section2" sectionBId="section2" />
            </div>
        </section>
    );
}