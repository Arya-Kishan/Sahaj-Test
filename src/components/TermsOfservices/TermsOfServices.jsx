import styles from "./termsOfService.module.css"

const data=[
  "1. Services Offered: Our website offers financial advice and guidance services to clients who are seeking to achieve their financial goals. Our services are fee- only, which means that we do not receive any commissions or other forms of compensation from third-party companies or financial products",
  "2.  Client Agreement: In order to use our services, you must first sign our client agreement, complete your KYC and fill in the risk profile questionnaire. This agreement outlines the scope of our services, our fees, and our responsibilities to you as a client",
  "3. Confidentiality: We understand the importance of keeping your financial information confidential. We will not disclose your personal or financial information to any third parties unless required by law or with your written permission or as mentioned in the privacy policy. Whilst we do take adequate measures to safeguard your information, we do not take responsibility of your information in case of a security breach at these service providers or in case you share your login information with anyone or in case your social media account was to get hacked. We require you to maintain adequate confidentiality of your social login information and use this facility after due consideration and with appropriate caution",
  "4.  Investment Advice: Our website may contain general information about investment strategies, but this information should not be considered personalized investment advice. Before making any investment decisions, you should consult with a licensed financial advisor",
  "5. No Guarantee of Results: While we strive to provide our clients with the best possible financial advice and guidance, we cannot guarantee that our recommendations will result in any specific investment outcomes or financial results. We will not be responsible for any losses or damages that may result from your investment decisions.",
  "6. Limitations of Liability: We will not be liable for any damages arising from the use of our website or our services, including but not limited to direct, indirect, incidental, or consequential damages. You acknowledge that our liability is limited to the fees paid by you for our services",
  "7. Termination: We reserve the right to terminate our services to any client at any time, for any reason. We will provide you with written notice of termination, and any fees paid for services not yet rendered will be refunded to you",
  "8. Changes to Terms and Conditions: We may update these terms and conditions at any time, without prior notice. Your continued use of our website and services after any such changes will constitute your acceptance of the revised terms and conditions.",
  "9.  Intellectual Property: Our website and all of its content, including but not limited to text, graphics, logos, and images, are the property of our company and are protected by copyright and other intellectual property laws. You may not use or reproduce any content from our website without our written permission",
  "10. Governing Law: In case of any dispute, either judicial or quasi-judicial same will be subject to the exclusive jurisdiction of the courts in Delhi. These terms shall be construed in accordance with the laws prevalent in India and are subject to SEBI guidelines, circulars, press releases, or notifications that may be issued by SEBI from time to time or the Government of India, to regulate the activities of RIAs (Registered Investment Advisors)"
]
const TermsOfServices = () => {
  return (
    <div>
        <div className={styles.header}>
            <p>Terms of Services</p>
        </div>
        <section className={styles.mainContainer}>
          <p className={styles.heading}>Terms of Services</p>
          <p className={styles.subheading}>
                Thank you for selecting the Investment Advisory Services 
                offered by Abhishek Kumar (SEBI Registered Investment Adviser INA 100008045) 
                through their website (hereinafter referred to as “SahajMoney®“) via its 
                website www.sahajmoney.com 
            </p>
            <p  className={styles.secondsubheading}>
                   This document is an electronic record, being generated by a computer system
                    and it does not require any physical or digital signature. This document is published 
                    in accordance with Information Technology guidelines for intermediaries and contains the rules and regulations for accessing and using SahajMoney®.
                    Please carefully examine these Terms and Conditions. By continuing, and accepting through 
                    electronic means (such as clicking “I Agree”), either by accessing the website using your 
                    login credentials or utilising the Services, you are consenting to these Terms and Conditions.
                    Access to and use of the Services may only be granted upon acceptance of these terms and conditions.
            </p>
            <div className={styles.mainPoints}>
              <ul>
                {data.map((points,i)=>(
                  <li key={i} className={styles.point}>{points}</li>
                ))}
              </ul>
            </div>
        </section>
      
    </div>
  )
}

export default TermsOfServices
