const Accessibility = () => {
  return (
    <>
      <div
        className="md:h-[500px] h-[200px] w-full"
        style={{
          backgroundImage: `url(images/bread-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center text-white bg-[#021017] opacity-80">
        <h2 className="text-4xl md:text-5xl font-bold md:w-[60%] w-full text-center">
            Accessibility Statement
          </h2>
        </div>
      </div>
      <div className="bg-[#050C1D] text-white px-5 md:px-24 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
        Effective Date: August 5, 2024
        </h2>
        <p className="text-lg leading-8 mb-5">
        At GasUpp, we are committed to providing a website and mobile app that is accessible to all users, including those with disabilities. We aim to comply with accessibility standards to ensure an inclusive experience for all users.
        </p>
        <h2 className="text-3xl text-left font-bold mt-10 mb-5">
          1. Our Commitment to Accessibility
        </h2>
        <p className="text-lg leading-8 mb-5">
        We are working to ensure that our website and app meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. These guidelines have been developed to ensure digital content is accessible to individuals with disabilities, including people who use screen readers, keyboard navigation, or other assistive technologies.
        </p>

        <h2 className="text-3xl text-left font-bold mt-10 mb-5">
          2. Key Accessibility Features
        </h2>
        <p className="text-lg leading-8 mb-5">
        GasUpp incorporates the following accessibility features:
        </p>
        <ul className="list-disc list-inside ml-10 mb-5">
          <li className="text-lg leading-8">
          Text alternatives for non-text content (such as images and buttons)
          </li>
          <li className="text-lg leading-8">
          Keyboard navigation throughout the website and app
          </li>
          <li className="text-lg leading-8">
          Support for screen readers and assistive technologies
          </li>
          <li className="text-lg leading-8">
          Clear and consistent navigation for easy site usage
          </li>
        </ul>

        <h2 className="text-3xl text-left font-bold mt-10 mb-5">
          3. Ongoing Improvements
        </h2>
        <p className="text-lg leading-8 mb-5">
        We are continuously improving the accessibility of our digital properties and regularly updating our website and mobile app to enhance usability for all individuals. We encourage feedback from users with disabilities to help improve their experience.
        </p>

        <h2 className="text-3xl text-left font-bold mt-10 mb-5">Contact Us</h2>
        <p className="text-lg leading-8 mb-5">
        If you encounter any accessibility issues or have any feedback about our website or mobile app, please contact us:
        </p>
       <div className="ml-16">
       <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold mb-5">Email:</h2>
          <p className="text-lg leading-8 mb-5">accessibility@gasupp.com</p>
        </div>
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold mb-5">Phone:</h2>
          <p className="text-lg leading-8 mb-5">407-259-5949</p>
        </div>
       </div>
      </div>
    </>
  );
};

export default Accessibility;
