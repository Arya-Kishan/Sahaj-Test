
import styles from './Policy.module.css'
import ReviewsContainer from '../Blog/Reviews/ReviewsContainer'

const PrivacyPolicy = () => {
  return (
    <>

      <header className={styles.header}>Privacy Policy</header>
      <div className={styles.privacyPolicy}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.date}>Effective Date: Dec 20, 2024</p>
        <p className={styles.paragraph}>
          Welcome to SahajMoney®! Your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our services. By using our website or services, you agree to the practices described in this policy.
        </p>
        <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
        <p className={styles.paragraph}>We may collect the following types of information:</p>

        <h3 className={styles.subSectionTitle}>Personal Information:</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Your name, contact number, and e-mail that is collected for signing up on SahajMoney.</li>
          <li className={styles.listItem}>
            Information provided by you for using the services provided by us, such as your mobile number, e-mail, password, date of birth, residential address, gender, marital status, and Permanent Account Number (PAN).
          </li>
          <li className={styles.listItem}>
            Additional information may be required to provide depending on the services that you wish to use, at your discretion.
          </li>
          <li className={styles.listItem}>
            Information retrieved from centralized Know Your Customer (KYC) databases such as CVLKRA, NDLKRA, CERSAI (CKYC), including your KYC status, father’s name, occupation, identity, and address proof documents.
          </li>
          <li className={styles.listItem}>
            Information required to perform Know Your Customer registration check and register/update your KYC, including KYC information, documentary evidence of identity, address, financial details, and a live video interaction to verify your identity.
          </li>
          <li className={styles.listItem}>
            Records of your interactions with our customer support systems, including but not limited to chatbots, emails, and live interactions with agents via chat or call.
          </li>
        </ul>

        <h3 className={styles.subSectionTitle}>Non-Personal Information:</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            When you visit our website, we collect and store information to provide an online experience that matches your device. The information collected includes the type and address of the device you use, the browser and its version, the operating system and its version, and the website from which you came to the SahajMoney website.
          </li>
          <li className={styles.listItem}>
            When you access our website through a mobile device, we collect information including your location, IP address, the make, model, and the unique identifier of the device in use, the browser and its version, the operating system installed on the device, and its version.
          </li>
          <li className={styles.listItem}>
            When you browse our site or receive an e-mail from us, we and the companies we work with use cookies and/or pixel tags to collect information and store your online preferences. Cookies are widely used, and most browsers are set to accept them automatically. You can choose to disable cookies through your browser settings.
          </li>
          <li className={styles.listItem}>
            Cookies and pixels help us improve your online experience, including your response to any of our e-mails, the time and duration of your visit to our site, and the pages you visited while on our site.
          </li>
          <li className={styles.listItem}>
            We may supplement the information we collect with information received from other companies. For instance, we may use marketing segments developed by us or other companies to customize certain services to your local area and provide relevant SahajMoney offers tailored to you.
          </li>
          <li className={styles.listItem}>
            Any information provided to us by you or collected by us about you shall be deemed to have been disclosed willingly by you, without coercion by our officers, agents, or affiliates. While we make efforts to validate the information provided by you, we do not undertake any liability nor make any representations regarding the genuineness, validity, completeness, or correctness of the information provided by you.
          </li>
        </ul>

        <h2 className={styles.sectionTitle}>2. Storage of your information</h2>
        <p className={styles.paragraph}>
          Information collected is stored on our servers, log files, and/or storage systems owned by us or by third parties specifically providing such storage services.
        </p>

        <h2 className={styles.sectionTitle}>3. Use of information</h2>
        <p className={styles.paragraph}>
          We use the personal information and non-personal information provided by you for:
        </p>

        <h3 className={styles.subSectionTitle}>We use personal information and non-personal information provided by you for:</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Facilitating various services provided by us, including completing your registration with us and/or with relevant entities, at your discretion.</li>
          <li className={styles.listItem}>Checking, updating, or registering your KYC in centralized KYC databases such as NDMLKRA and CERSAI (CKYC).</li>
          <li className={styles.listItem}>Resolving your queries and concerns and providing support for any issues during the use of our services or those provided by our partners.</li>
          <li className={styles.listItem}>Informing you about offers related to services, including sharing marketing material with you.</li>
          <li className={styles.listItem}>Streamlining and customizing your experience while accessing our services through the mobile browser or website.</li>
          <li className={styles.listItem}>Informing you via email or call about the progress of any issues or transactions initiated by you, including their resolution and services availed.</li>
          <li className={styles.listItem}>Preparing analyses, reports, and tools for your use, such as first-cut calculations or financial analyses.</li>
        </ul>

        <h3 className={styles.subSectionTitle}>Non-Personal Information:</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>To improve your experience while using our website and mobile website.</li>
          <li className={styles.listItem}>For troubleshooting, identifying bugs, operational issues, process bottlenecks, errors in the application, and analyzing usage and activity trends.</li>
          <li className={styles.listItem}>To prepare analyses, reports, and tools for your use.</li>
          <li className={styles.listItem}>To monitor, identify, resolve, and prevent security incidents, fraud, criminal activities, prohibited activities, and non-compliance.</li>
          <li className={styles.listItem}>
            For research, design, and development of the services offered by us.
          </li>
          <li className={styles.listItem}>
            We may use aggregated information we individually identify for better product design, research, and for developing customized marketing offers either by us or any affiliated or unaffiliated third-party consultants or service providers.
          </li>
        </ul>
        <h2 className={styles.sectionTitle}>4. Sharing of your information</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            When we use third parties to provide services, we require them to protect the confidentiality of your personal information that they receive from us. The information is disclosed on a need-to-know basis.
          </li>
          <li className={styles.listItem}>
            We may use third-party service providers to assist in providing certain services to you, such as sending emails, tracking them on our behalf, collecting fees for our services, and providing technical support for any issues with features or functionality on our website.
          </li>
          <li className={styles.listItem}>
            Information may be shared with select third parties, such as entities registered under applicable laws with the Securities and Exchange Board of India (SEBI), Reserve Bank of India (RBI), Central Registry of Securitisation Asset Reconstruction and Security Interest of India (CERSAI), KYC registration agencies (KRA), and payment gateway providers.
          </li>
          <li className={styles.listItem}>
            We also use third-party services, such as Google Tag Manager and Google Analytics, that may collect information used to identify you.
          </li>
          <li className={styles.listItem}>
            We will not share your personal information with any third party without your authorization unless we are specifically directed or mandated to do so under any applicable law, legal proceeding, or directive by any administrative, judicial, quasi-judicial, statutory, or regulatory body or any authority or agency of the Government.
          </li>
        </ul>

        <h2 className={styles.sectionTitle}>5. Security of your information</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Registering for a service on our website requires creating a Login ID and Password to ensure the privacy and security of your information. Your Login ID and Password are the primary means of accessing our services and website, and we require that your password meets certain complexity requirements. We recommend keeping your Login ID and Password confidential and changing your password periodically. We are not responsible for unauthorized access if you share your Login ID and Password or violate the Privacy Policy or Terms of Use.
          </li>
          <li className={styles.listItem}>
            Every time you log in, we use authentication and encryption protocols, along with session timeouts and firewalls, to protect your account from unauthorized access. Your password is not accessible to anyone, including us, and can only be updated by you using a two-factor authentication process.
          </li>
          <li className={styles.listItem}>
            We may offer social logins or identity providers, such as Google, to simplify account creation and registration. These services are governed by the respective service provider’s terms. While we take steps to protect your information, we are not responsible for any security breach at these service providers or if you share your login details. We advise maintaining confidentiality of your social login information.
          </li>
          <li className={styles.listItem}>
            When you provide personal information while setting up an account, it is maintained by the division responsible for your account management. You can view and update this information by logging into your account. We may use your information to offer customized recommendations or marketing communications, which you can opt out of at any time.
          </li>
        </ul>

        <h2 className={styles.sectionTitle}>6. Content and changes to the privacy policy</h2>
        <p className={styles.paragraph}>
          When you create a login ID and password or sign in to Plnr, you are providing your consent to this Privacy Policy.
        </p>
        <p className={styles.paragraph}>
          <strong>Withdrawal of consent:</strong> Personal information collected will not be used for any purposes other than as mentioned herein. You may withdraw your consent for the use of personal information at any time by deactivating your account. Withdrawing your consent will not affect the lawfulness of any processing we conducted prior to your withdrawal, nor will it affect the processing of your personal data conducted in reliance on lawful processing grounds other than consent. In the event you choose to withdraw your consent for collecting and processing your personal data, we will be unable to provide you with our products and services.
        </p>
        <p className={styles.paragraph}>
          <strong>Changes to the Privacy Policy:</strong> We reserve the right to unconditionally modify, change or update this Privacy Policy in part or its entirety at any point at our discretion without assigning any reason whatsoever. An update of this Privacy Policy shall be adequate notification of these changes, if any. We will publish the date of the last update made to this Privacy Policy right at the beginning of this document/web page. Further, the most updated Privacy Policy and the date of the last update of this Privacy Policy shall be available on https://plnr.in/privacy-policy on the web.
        </p>

        <h2 className={styles.sectionTitle}>7. Grievance Redressal</h2>
        <p className={styles.paragraph}>
          You may reach out to us for any queries with respect to this Privacy Policy through our Help section or by writing to support@sahajmoney.com. We comply with the requirements of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. For the purposes of this Act, we have designated Ajay Pruthi as the Grievance Officer. The Grievance Officer may be reached by writing to support@sahajmoney.com.
        </p>


      </div>


      <ReviewsContainer />
    </>
  )
}

export default PrivacyPolicy