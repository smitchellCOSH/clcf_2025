/* Third Guide page - Contains the content displayed on the Step 3: Maintenance. */

/* 
Styling:

Some styling is "in-line".

Other basic styling comes from mystyle.module.css file.

Styling for individual components contained in respective component files.

See the import statements for navigation.

*/




/* Imports */
import React from 'react';
import styles from '../mystyle.module.css';
import Navbar from '../components/Navbar';
import FooterComp from '../components/FooterComp';
import HeaderComp from '../components/HeaderComp';
import BasicButton from '../components/BasicButton';
import ScrollToTop from '../components/ScrollToTop';
import { Link } from 'react-router-dom';




/* Content */
const Step3 = () => {
  return (
    <div>
    <HeaderComp />
    <Navbar />


    <div className="About">

      <div className={styles.about_content}>

        {/* Subheader */}
        <div className={styles.subheader}>
            <p>
            Step 3: After Planting and Maintenance
            </p>
        </div>

        <p>
            Now that you’ve finished planting, it is time to move on to maintenance. Pocket Forests are designed to grow very quickly, meaning that your 
            forest should establish itself within only 1-2 years. However, minor maintenance is still recommended in order to give your plants the 
            best chance of survival.
        </p>

        <div className={styles.subheader}>
            Weeding and Watering
        </div>

        <p>
          <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}> 
            Weeding
          </span>
        </p>
        
        <p>
          Frequent and diligent weeding is recommended for your Pocket Forest in the first 1-2 years of 
          establishment. Weeds take up nutrients and space, making it harder for your plants to grow. 
          Many of them are not native and may also be invasive. 
        </p>


        <p>
          It is best to prevent weeds from growing in the first place by limiting their ability to seed. 
          The “cover and smother” method described in the <Link to="/Step1" className={styles.other_links}>Before you plant</Link> 
          {" "} section will take care of your weeds’ ability to seed in your soil. Additionally, the burlap you use in your Pocket Forest will
          last and degrade naturally during your plants’ establishment period. However, this method is imperfect. 
          It is recommended to check frequently for new weeds and remove them promptly. This is especially true 
          during warm periods where weed growth is at its peak.
        </p>

        <p>
            In the first year of your forest, plan to remove weeds at least every two weeks during the warmest months. 
            During winter, you may choose to weed less frequently.
        </p>

        <p>
          For more information about identifying weeds in your forest, take a look at Michigan State University’s Department of Plant, 
          Soil and Microbial Sciences {" "}
          <a className={styles.other_links}
              href="https://www.dammannsgardenco.com/blog/how-to-identify-soil-types#:~:text=THE%20SQUISH%20TEST,have%20a%20high%20silt%20percentage"
              target="_blank"
              rel="noopener noreferrer">Michigan’s Worst Weeds</a> article.
        </p>

        <p>
          <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}> 
            Watering
          </span>
        </p>
        
        <p>
            In general, Pocket Forests in Michigan do not require regular watering. However, depending on 
            your soil type, drainage speed, and general moisture level, you may want to develop a regular 
            watering schedule for the first 1-2 years, after which your plants will have established themselves. 
            For example, you might plan to do deep watering once a month, or general watering every two weeks, 
            gradually decreasing watering sessions as your Pocket Forest gets older.
        </p>


          <p>
            <div className="frosted-container float-left">
              <img className="frosted-image" src="photos/step3_image_003.jpg" alt="Step 3: Photo 003" />
              <div className="frosted-overlay">A sprinkler providing water.</div>
            </div>
            For all Pocket Forests, it is important to provide watering support during particularly dry periods. 
            If there hasn’t been significant rain in your area for 2-3 weeks, a thorough watering is crucial to
            your forests’ survival. Take care to monitor weather in your area, particularly during the hottest 
            part of your summer, and especially while your plants are still young.
          </p>





        <p>
            It is also important to check in with your plants at least once a week during the first 6 months 
            following planting. If your plants appear to need more water, it is acceptable to give more water, 
            even if it doesn’t follow your typical watering schedule. Use your best judgment, and your plants will thank you!
        </p>




        <div className={styles.subheader}>
            Animal Care and Plant Care
        </div>

        <p>
          <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}> 
            Animal Care
          </span>
        </p>


          <p>
            Check on your fencing every once in a while, making sure that it cannot be easily breached 
            by deer or other large grazing animals. Walk the perimeter of your fencing every once in a 
            while to look for problems and amend them if necessary.
          </p>


        <p>
            You may also choose to monitor for pests. Again, herbicides are strongly discouraged, 
            especially if you chose a food-friendly or pollinator forest type. The good news is that 
            the more biodiverse your forest is, and the higher density you planted at, the more your forest is protected from pests.
        </p>

        <p>
            When doing routine maintenance of your forest, be sure to check yourself for pests. 
            In particular, ticks can be a health concern in Michigan, especially during the summer. 
            If you are concerned, wear long sleeves and long pants with socks long enough to cover the 
            base of your pants. Limit exposed skin as much as possible. Check yourself before and after 
            arriving inside, and change and wash your clothes if necessary to prevent transporting any pests with you.
        </p>

        <p>
          <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}> 
            Plant Care
          </span>
        </p>

        <p>
          <div className="frosted-container float-left">
              <img className="frosted-image" src="photos/step3_image_005.jpg" alt="Step 3: Photo 005" />
              <div className="frosted-overlay">A leaf with an unknown disease.</div>
          </div>
            Symptoms of plant disease can be alarming, but it is helpful to remember that your 
            plants are strong and resilient. Furthermore, it is expected that some of the plants 
            in your Pocket Forest will die off before your forest grows to maturity. Not only is 
            that expected, but it’s a good thing – it will ensure that your forest grows quickly 
            and that the plants that survive will be strong and hearty. 
        </p>


          <p>
            Monitor your plants for problems, but don’t feel the need to keep an overly watchful eye. 
            To learn more about common plant diseases, see <a className={styles.other_links}
                href="https://www.proflowers.com/blog/plant-diseases"
                target="_blank"
                rel="noopener noreferrer">this article from Proflowers.com</a>. Some plants will require
            more care than others, so make sure to choose your plants with your ability to provide ongoing
            care in mind.
          </p>

          <div style={{ clear: "both" }}></div>



        <div className={styles.subheader}>
            Wrapping Up and Questions
        </div>

        <p>
            That's a wrap! Congratulations on building your very own Pocket Forest. We appreciate your
            efforts to help reforest our city. We hope that in building this forest, you can benefit from
            better air, more shade, and company from the small animals and insects that may visit.

        </p>

        <p>
            If you have any questions about the care and keeping of your Pocket Forest, visit 
            our <Link to="/Contact" className={styles.other_links}>Contact</Link> page. 
            We are happy to help or point you in the right direction. Once you've finished planting
            your Pocket Forest, please let us know! We'd love to learn more about the Forests 
            that are being planted by community members like you.
            
            If you need additional help, you can also visit 
            our <Link to="/Resources" className={styles.other_links}>Resources</Link> page for 
            more information.
        </p>




        <div style={{
          marginTop: "2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem"
        }}>
          <BasicButton to="/FAQ">Frequently Asked Questions</BasicButton>
          <ScrollToTop />
        </div>

        </div>

      <FooterComp />

    </div>

  </div>

  );
};

export default Step3;
