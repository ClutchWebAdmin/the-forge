import SmallHeadingAndText from "../components/SmallHeadingAndText";

export default async function PrivacyPage() {
  const privacyArray = [
    {
      heading: "Effective Date",
      paragraph: "This Privacy Policy is effective as of May 1, 2025.",
    },
    {
      heading: "Information We Collect",
      paragraph:
        "We may collect the following types of personal information: contact information (such as name and email), usage data (such as IP address and browsing behavior), and cookies and similar tracking technologies.",
    },
    {
      heading: "How We Collect Information",
      paragraph:
        "Information is collected directly when you submit forms or contact us, automatically through cookies and analytics, and indirectly through platforms like Meta (Facebook/Instagram) that refer users to our site.",
    },
    {
      heading: "How We Use Your Information",
      paragraph:
        "We use your information to respond to inquiries, improve site performance, market services via advertising platforms, and monitor usage trends.",
    },
    {
      heading: "Sharing Your Information",
      paragraph:
        "We do not sell your personal information. We may share data with trusted service providers (e.g., Google Analytics, Meta), and legal authorities when required.",
    },
    {
      heading: "Cookies and Tracking",
      paragraph:
        "Cookies help us track usage, personalize content, and analyze performance. You can manage cookies through your browser or opt-out tools such as:",
      bullets: [
        "Google Analytics Opt-Out: https://tools.google.com/dlpage/gaoptout",
        "Meta Ad Preferences: https://www.facebook.com/adpreferences",
      ],
    },
    {
      heading: "Your Rights",
      paragraph:
        "Depending on your location, you may have rights to access, update, or delete your data, and opt out of marketing communications. Contact us to exercise these rights.",
    },
    {
      heading: "Data Security",
      paragraph:
        "We implement reasonable security measures to protect your information, but no system is 100% secure.",
    },
    {
      heading: "Third-Party Links",
      paragraph:
        "Our site may contain links to third-party websites or platforms. We are not responsible for their privacy practices or content.",
    },
    {
      heading: "Children’s Privacy",
      paragraph:
        "We do not knowingly collect information from children under 13. If you believe a child has submitted personal information, contact us to request deletion.",
    },
    {
      heading: "Changes to This Policy",
      paragraph:
        "We may update this Privacy Policy periodically. Any changes will be posted on this page with the updated effective date.",
    },
    {
      heading: "Contact Us",
      paragraph:
        "If you have questions about this Privacy Policy, please contact us at office@clutchindustries.com.",
    },
  ];

  return (
    <main>
      <section
        id="privacy-policy"
        className="flex flex-col gap-8 lg:gap-16 py-10 lg:py-20 bg-new-light"
      >
        <div
          className="flex flex-col gap-6 lg:gap-10 w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-5 lg:px-10"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl md:text-7xl 2xl:text-8xl text-start">
              Privacy Policy
            </h2>
            <p>
              This Privacy Policy explains how The Forge ("we", "us", or "our") collects, uses, and safeguards your information when you visit our website forgesalem.com ("Site").
            </p>
          </div>

          {privacyArray.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <SmallHeadingAndText
                heading={item.heading}
                paragraph={item.paragraph}
                uniqueKey={index}
                bullets={item.bullets}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
