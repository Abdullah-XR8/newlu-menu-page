import styles from "./sanzeBeautyMenu.module.css";
import Logout from "./LogOut";
// import Images from "./index.js"; 

const SanzeBeautyMenu = () => {
  return (
    <section className={styles.offCanvasMenu}>
      <div className={styles.section1OfMenu}>
        <div className={styles.imgContainer}> 
          <img
            src= "/IMAGES/Sanze-Dark-Logo.png"
            alt="Sanze Dark Logo"
            width={40}
          />{" "}
          <div className={styles.buttons}>
            <button className={styles.Logoutbtn}>
              {" "}
              <Logout /> logout
            </button>
            <div className={styles.btnContainerTop}>
              <button>
                <img src="/IMAGES/Ellipse-51.png" alt="Close" width={90} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.fiftyPercent}>
          <div className={styles.openingTimes}>
            <h2>Opening Times</h2>
            <p>MON - FRI. 9:00AM - 6:00PM</p>
            <p>SAT - 9:00AM - 7:00PM</p>
            <p>SUN - Closed</p>
          </div>

          <div className={styles.privacyPolicies}>
            <p>PRIVACY POLICY</p>
            <p>REFUND POLICY</p>
            <p>TERMS AND CONDITION</p>
          </div>
        </div>
      </div>

      <div className={styles.section2OfMenu}>
        <div className={styles.headingTwo}>
          <h2>Menu</h2>
        </div>
        <div className={styles.section2OfMenuOptions}>
          <h2 data-text="Home" className={styles.Home}>
            Home
          </h2>
          <h2 data-text="Magazine">Magazine</h2>
          <h2 data-text="Services"> Services</h2>
          <h2 data-text="Shop">Shop</h2>

          <h2 data-text="Gallery">Gallery</h2>
        </div>
      </div>

      <div className={styles.sectionOfContactInfo}>
        <div className={styles.btnContainer}>
          <button>
            <img src="/IMAGES/Ellipse-51.png" alt="Close" width={40} />
          </button>
        </div>

        <div className={styles.contactInfo}>
          <h2>Contact Info</h2>

          <div className={styles.ContactMail}>
            <div className={styles.Contact}>
              {" "}
              <img
                className={styles.phoneIcon}
                src="/IMAGES/Icon.png"
                alt="contact"
              />{" "}
              &ensp; &nbsp;
              <p> +1(931)-266-6101</p>{" "}
            </div>
            <div className={styles.Mail}>
              {" "}
              <img
                className={styles.mailIcon}
                src="/IMAGES/mail.png"
                alt="mail"
              />{" "}
              &ensp; &nbsp;
              <p> info@senzebeauty.com </p>{" "}
            </div>
          </div>
        </div>
        <div className={styles.Address}>
          <h2>Address</h2>

          <p className={styles.Address1}>
            817 &nbsp; N &nbsp; Wilson &nbsp; Rd
          </p>

          <p>Radcliff, KY40160,</p>
          <p className={styles.forPadding}>Kentucky,</p>
        </div>

        <div className={styles.socialMediaLinks}>
          <h2>Social media</h2>

          <div className={styles.socialMediaIcons}>
            <img src="/IMAGES/fb.png" alt="facebook" width={45} />
            <img src="/IMAGES/Insta.png" alt="instagram" width={45} />
            <img
              id={styles.Xcom}
              src="/IMAGES/X.png"
              alt="X.com"
              width={45}
            />
          </div>
        </div>
      </div>

      {/* JSX & HTML FOR TABLET SCREEN SIZES  */}

      <div className={styles.forTabletSection}>
        <div className={styles.forTabletOpeningTimes}>
          <h2>Opening &nbsp; Times</h2>
          <p>MON - FRI. 9:00AM - 6:00PM</p>
          <div className={styles.forMobileresponsiveness}>
            {" "}
            <div>
              <p>SAT - 9:00AM - 7:00PM</p>{" "}
            </div>
            <div>
              {" "}
              <p>SUN - Closed</p>{" "}
            </div>{" "}
          </div>
        </div>

        <div className={styles.forTabletcontactInfo}>
          <h2>Contact Info</h2>

          <div className={styles.forTabletcontactInfoContactMail}>
            <div className={styles.forTabletContact}>
              {" "}
              <img
                className={styles.forTabletphoneIcon}
                src="/IMAGES/Icon.png"
                alt="contact"
              />{" "}
              &ensp; &nbsp;
              <p> +1(931)-266-6101</p>{" "}
            </div>
            <div className={styles.forTabletMail}>
              {" "}
              <img
                className={styles.forTabletmailIcon}
                src="/IMAGES/mail.png"
                alt="mail"
              />{" "}
              &ensp; &nbsp;
              <p> info@senzebeauty.com </p>{" "}
            </div>
          </div>
        </div>

        <div className={styles.forTabletAddress}>
          <h2>Address</h2>
          <div className={styles.forMobileresponsivenessaddress}>
            <div className={styles.inlineParagraph}>
              <p className={styles.forTabletAddress1}>
                817 &nbsp; N &nbsp; Wilson &nbsp; Rd &nbsp;
              </p>

              <p className={styles.forTabletblock}>Radcliff, KY40160,</p>
            </div>
            <p className={styles.forTabletforPadding}>Kentucky,</p>{" "}
          </div>
        </div>

        <div className={styles.forTabletsocialMediaLinks}>
          <h2>Social media</h2>

          <div className={styles.forTabletsocialMediaIcons}>
            <img src="/IMAGES/fb.png" alt="facebook" width={45} />
            <img src="/IMAGES/Insta.png" alt="instagram" width={45} />
            <img
              id={styles.forTabletXcom}
              src="/IMAGES/X.png"
              alt="X.com"
              width={45}
            />
          </div>

          <div className={styles.forMobileprivacyPolicies}>
        <p>PRIVACY POLICY</p>
        <p>REFUND POLICY</p>
        <p>TERMS AND CONDITION</p>
      </div>

        </div>

        
      </div>

      <div className={styles.forTabletprivacyPolicies}>
        <p>PRIVACY POLICY</p>
        <p>REFUND POLICY</p>
        <p>TERMS AND CONDITION</p>
      </div>
    </section>
  );
};

export default SanzeBeautyMenu;
