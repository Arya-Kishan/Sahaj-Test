import styles from "./cookiepolicy.module.css"

const nonPersonalInfo = [
    "When you visit our website, we collect and store information to provide an online experience that matches your device. The information collected includes the type and address of the device you use, the browser and its version, the operating system and its version, and the website from which you came to the SahajMoney website",
    "When you access our website through a mobile device, we collect information including your location, IP address, the make, model, and the unique identifier of the device in use, the browser and its version, the operating system installed on the device, and its version.",
    "When you browse our site or receive an e-mail from us, we and the companies we work with use cookies and/or pixel tags to collect information and store your online preferences. Cookies are widely used, and most browsers are set to accept them automatically. You can choose to disable cookies through your browser settings.",
    "Cookies and pixel tags help us improve your online experience, including your response to any of our e-mails, the time and duration of your visit to our site, and the pages you viewed while on our site.",
    "We may supplement the information we collect with information received from other companies. For instance, we may use marketing segments developed by us or other companies to customize certain services to your local area and provide relevant SahajMoney offers tailored to you",
    "Any information provided to us by you or collected by us about you shall be deemed to have been disclosed willingly by you, without coercion by our officers, agents, or affiliates. While we make efforts to validate the information provided by you, we do not undertake any liability nor make any representations regarding the genuineness, validity, completeness, or correctness of the information provided by you"
]

const howWeUseCookies = [
    "To improve the performance and functionality of our website.",
    "To offer personalized content and recommendations based on your browsing history.",
    "To analyze website usage patterns to help us improve the user experience.",
    "To enable relevant advertising and track the effectiveness of our marketing efforts."
]
const CookiePolicy = () => {
    return (
        <div>
            <div className={styles.header}>
                <p>Cookie Policy </p>
            </div>
            <section className={styles.mainContainer}>
                <p className={styles.heading}>Cookie Policy for SahajMoney®</p>
                <p className={styles.subheading}>At SahajMoney®, we value your privacy and are committed to providing you with a transparent and secure experience when using our website. This Cookie Policy explains how we use cookies and similar technologies to enhance your user experience.</p>
                <div className={styles.questionContainer}>
                    <p className={styles.question}>What Are Cookies?</p>
                    <p className={styles.answer}>Cookies are small text files stored on your device (such as your computer, smartphone, or tablet) when you visit our website. They help us recognize your device, track your preferences, and improve your experience while navigating our site.</p>
                </div>
                <div className={styles.questionContainer}>
                    <p className={styles.question}>Types of Cookies We Use:</p>
                    <div>
                        <p className={styles.subquestion}>Essential Cookies</p>
                        <p className={styles.answer}>These cookies are necessary for the website to function correctly. They enable basic features such as secure login, navigation, and form submission. Without these cookies, our website may not function as intended.</p>
                    </div>
                    <div>
                        <p className={styles.subquestion}>Performance Cookies</p>
                        <p className={styles.answer}>These cookies collect anonymous information about how you use our website, such as which pages you visit most often and any error messages you may encounter. This helps us improve the performance and functionality of our website.</p>
                    </div>
                    <div>
                        <p className={styles.subquestion}>Functionality Cookies</p>
                        <p className={styles.answer}> These cookies allow us to remember your preferences and settings (such as language or region) to provide a more personalized experience on our website.</p>
                    </div>
                    <div>
                        <p className={styles.subquestion}>Targeting/Advertising Cookies</p>
                        <p className={styles.answer}> These cookies track your browsing habits across various websites and are used to display personalized ads based on your interests. We may share this data with third-party advertisers to improve the relevance of the ads you see.</p>
                    </div>
                    <div>
                        <p className={styles.subquestion}>Non-Personal Information</p>
                        <ul className={styles.subanswer}>
                            {nonPersonalInfo.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.questionContainer}>
                    <p className={styles.question}> How We Use Cookies:</p>
                    <ul className={styles.subanswer}>
                        {howWeUseCookies.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>

                </div>

                <div className={styles.questionContainer}>
                    <p className={styles.question}>Managing Cookies:</p>
                    <p className={styles.answer}>You can manage or disable cookies through your browser settings. However, please note that some features of the website may not work properly if you disable cookies. For more detailed instructions on how to control cookies in different browsers, please refer to the &quot;Help&quot; section of your browser or visit the relevant support page for your browser.</p>
                </div>

                <div className={styles.questionContainer}>
                    <p className={styles.question}>Third-Party Cookies:</p>
                    <p className={styles.answer}>We may also allow third-party service providers, such as Google Analytics and other advertisers, to set cookies on your device. These third-party cookies are governed by the respective privacy policies of these third parties.</p>

                </div>

                <div className={styles.questionContainer}>
                    <p className={styles.question}>Consent:</p>
                    <p className={styles.answer}>By using our website, you consent to our use of cookies as described in this Cookie Policy. You can change your cookie preferences at any time by updating your browser settings or by opting out of targeted advertising cookies.</p>
                </div>

                <div className={styles.questionContainer}>
                    <p className={styles.question}>Changes to This Cookie Policy:</p>
                    <p className={styles.answer}>We may update this Cookie Policy from time to time. Any changes will be posted on this page, and the revised policy will take effect as soon as it is posted. We encourage you to review this page periodically to stay informed about how we use cookies.</p>
                </div>

                <div className={styles.questionContainer}>
                    <p className={styles.question}>Contact Us:</p>
                    <div className={styles.answer}>If you have any questions about this Cookie Policy or need assistance with managing your cookie preferences, please contact us at:
                        <ul className={styles.subanswer}>
                            <li> Email: [Insert Email Address]</li>
                            <li>Phone: [Insert Phone Number]</li>
                            <li>Mailing Address: [Insert Physical Address]</li>
                        </ul>

                    </div>
                </div>

                <p className={styles.question}>Thank you for choosing SahajMoney®.</p>
            </section>

        </div>
    )
}

export default CookiePolicy
