const TermServices = () => {
  return (
    <>
      <div
        className="h-[500px] w-full"
        style={{
          backgroundImage: `url(images/bread-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center text-white bg-[#021017] opacity-80">
          <h2 className="text-5xl font-bold w-[60%] items-center text-center">
            Terms of Services
          </h2>
        </div>
      </div>
      <div className="bg-[#050C1D] text-white px-5 md:px-24 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Effective Date: August 5, 2024
        </h2>
        <p className="text-lg leading-8 mb-5">
          Welcome to GasUpp! By using our website, mobile app, and services, you
          agree to the following Terms of Service. Please read these terms
          carefully before accessing or using GasUpp’s services.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-5">1. Agreement to Terms</h2>
        <p className="text-lg leading-8 mb-5">
          By accessing our website or using our mobile app, you accept these
          Terms of Service and agree to be bound by them. If you do not agree to
          these terms, please do not use our services.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-5">2. Services Provided</h2>
        <p className="text-lg leading-8 mb-5">
          GasUpp offers fuel delivery, electric vehicle charging, wiper blade
          replacements, roadside assistance, mobile car washes, oil changes, and
          battery services through our website and mobile app. The availability
          of our services may vary depending on your location.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-5">3. User Accounts</h2>
        <p className="text-lg leading-8 mb-5">
          To access certain services, you may need to create a user account. You
          agree to provide accurate, current, and complete information during
          the registration process. You are responsible for maintaining the
          confidentiality of your account credentials and for all activities
          that occur under your account.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-5">
          4. Payments and Charges
        </h2>
        <p className="text-lg leading-8 mb-5">
          All payments for services must be made through our secure online
          payment platform. You agree to pay for all services provided to you in
          accordance with the prices listed at the time of your order. GasUpp
          reserves the right to change service pricing at any time.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-5">
          5. Cancellations and Refunds
        </h2>
        <p className="text-lg leading-8 mb-5">
          You may cancel a service request through the GasUpp mobile app before
          the delivery is en route. Once a service is confirmed, no refunds will
          be provided for completed services. Refund requests for unresolved or
          unsatisfactory services will be considered on a case-by-case basis.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-5">
          6. Limitation of Liability
        </h2>
        <p className="text-lg leading-8 mb-5">
          GasUpp is not liable for any indirect, incidental, or consequential
          damages that result from the use of our services. Our liability for
          direct damages is limited to the total amount paid for the specific
          service in question.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-5">
          7. Intellectual Property
        </h2>
        <p className="text-lg leading-8 mb-5">
          All content on the GasUpp website and mobile app, including text,
          images, logos, and designs, is the property of GasUpp. You may not
          copy, distribute, or use any content from our website or app without
          written permission from GasUpp.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-5">
          8. Third-Party Services
        </h2>
        <p className="text-lg leading-8 mb-5">
          GasUpp may use third-party service providers (e.g., gas stations, car
          wash operators) to deliver services. While we ensure that these
          providers meet GasUpp's service standards, we are not liable for the
          actions or omissions of third-party providers.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-5">9. Termination</h2>
        <p className="text-lg leading-8 mb-5">
          GasUpp reserves the right to suspend or terminate your access to our
          services at any time, for any reason, without notice, including if you
          violate these Terms of Service.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-5">
          10. Changes to the Terms
        </h2>
        <p className="text-lg leading-8 mb-5">
          GasUpp may update or modify these Terms of Service from time to time.
          Changes will be posted on this page, and the updated terms will become
          effective on the date listed. Your continued use of our services after
          any changes constitutes acceptance of the new terms.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-5">11. Governing Law</h2>
        <p className="text-lg leading-8 mb-5">
          These Terms of Service are governed by and construed in accordance
          with the laws of the State of Florida. Any disputes arising from these
          terms will be subject to the exclusive jurisdiction of the courts of
          Florida.
        </p>

        <h2 className="text-4xl font-bold mt-10 mb-5">Contact Us</h2>
        <p className="text-lg leading-8 mb-5">
          If you have any questions or concerns about these Terms of Service,
          please contact us at:
        </p>
        <p className="text-lg leading-8 mb-5">GasUpp</p>
        <p className="text-lg leading-8 mb-5">
          5118 Cassatt Ave, Orlando, FL 32808
        </p>

        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold mb-5">Email:</h2>
          <p className="text-lg leading-8 mb-5">info@gasupp.com</p>
        </div>
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold mb-5">Phone:</h2>
          <p className="text-lg leading-8 mb-5">765-413-9667</p>
        </div>
      </div>
    </>
  );
};

export default TermServices;
