import InfoSectionTextRight from "../components/InfoSectionTextRight";
import VaultPhotoSection from "../components/VaultPhotoSection";

export default function TheVault() {
    return (
        <section id="the-vault" className="flex flex-col md:flex-row text-white">
            <InfoSectionTextRight
            eyebrowText="Wine Cellar"
            headingText="The Vault"
            title="If You Know, You Know"
            topBackgroundColor="bg-vaultPurple-dark"
            bottomBackgroundColor="bg-vaultPurple-medium"
            description="Descend into The Vault, a hidden gem beneath the bustling activity of the floors above. This versatile basement space offers two distinct possibilities: a private underground event venue perfect for exclusive gatherings, or a sophisticated bourbon and wine lounge tailored for connoisseurs. Both options provide a secure and private setting, ideal for those seeking to enjoy their favorite beverages in an atmosphere of exclusivity and refinement."
            floorNumber="B"
            />
            <VaultPhotoSection />
        </section>
    );
}