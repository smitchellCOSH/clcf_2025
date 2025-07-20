/* Second Guide page - Contains the content displayed on the Step 2: Planting day. */

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
import FrostedImage from '../components/FrostedImage';
import BasicButton from '../components/BasicButton';
import ScrollToTop from '../components/ScrollToTop';
import { Link } from 'react-router-dom';
import InlineImageText from '../components/InlineImageText';


/* Content */
const Step2 = () => {
  return (
    <div>
    <HeaderComp />
    <Navbar />


    <div className="About">


      {/* Introduction */}
      <div className={styles.about_content}>

        {/* Subheader */}
        <div className={styles.subheader}>
          <p>
            Step 2: Planting Day
          </p>
        </div>


          <p>
              Preparation takes a lot of work. The good news is that once your preparation is complete, it’s time for fun – planting!
          </p>

          <p>
              Before you start planting, you will want to consider methods for protecting your plants from deer. You can protect your 
              plants by using fencing. Though any fencing will act as a deterrent to deer, it is recommended to use sturdy fencing that 
              is at least 6 feet tall to prevent deer grazing. Whether you build your fencing before or after you plant your forest, 
              make sure you adequately protect your forest while it is in the establishment period, for at least one year. For resources 
              on suitable fencing products, see {" "}
              <a
                className={styles.other_links}
                href="https://www.dammannsgardenco.com/blog/how-to-identify-soil-types#:~:text=THE%20SQUISH%20TEST,have%20a%20high%20silt%20percentage"
                target="_blank"
                rel="noopener noreferrer"
              > Deerbusters</a>.
          </p>


          <p>
              Another consideration is that some plants are naturally deer resistant. Some plants have strong scents that deer avoid, 
              others affect a deer’s skin or respiratory tract, and others deer simply don’t want to eat. 
              To find out which plants are deer resistant, consult our plant calculator.
          </p>


          <p>
              As a last step before you begin planting, make sure that you have access to and from your site both by foot and by vehicle. 
              Be prepared to water your plants and do a final sweep of your site for lingering weeds or obstructions.
          </p>


          <p>
              Finally, it’s time to plant. Optionally, use our <Link to="/plant-calculator" className={styles.other_links}>layout tool</Link> to decide where 
              to plant each of your plants. Once you’re ready, follow the steps below to plant your forest.
          </p>




      {/* Instructions for planting */}
      <div className={styles.subheader}>
        <p>
          How to plant
        </p>
      </div>

          <p>
            <div className="frosted-container float-left">
              <img className="frosted-image" src="photos/step2_image_002.jpg" alt="Step 2: Photo 002" />
              <div className="frosted-overlay">A gardener holds small plants in clumps of soil.</div>
            </div>
            Since your plants should all be relatively young and should fit in a planting container that is no larger than 
            5 gallons, planting should be the same for most, if not all, of your plants. 
        </p>


        <p>
          If you used the “cover and smother” method of weeding, you will need to first choose 
          where to place your plant, and cut a hole in the burlap large enough to dig a hole to fit the plant. 
          The hole should be deep enough to cover the root-ball of your plant and twice as wide as the depth. 
          Start digging and set your soil to the side, using a tarp if necessary to protect nearby plants
          Only after preparing your hole should you remove your plant from its planting container. Gently loosen the roots in their 
          potted soil, spreading them naturally. 
        </p>

        <p>
          Place your plant gently into the hole you dug. The base of your plant should be at or slightly above grade (higher than the surrounding soil). 
          Using the soil you set to the side, gently refill the hole, covering the roots up to the base of the plant. 
          Optionally, you can create a berm around your plant – a slight cup shape of soil a few inches from your plant – to help retain water 
          during your watering phase. Unless your soil is particularly dry or fast-draining, this step is not necessary and all berms will need 
          to be leveled after the maintenance period.
        </p>

        <p>
          Finally, after each planting, you will need to generously water your plant and, optionally, apply mulch. Watering and mulching can 
          happen after each plant, or can occur after all of your plants are in the ground. When mulching, leave space around the base of 
          your plant without mulch, in order to prevent accidentally suppressing your plants. The space you leave around the base of your plant 
          should be as wide as your berms, if you add berms to your forest. You will want to apply at least 2 inches of mulch to cover your forest floor.
        </p>


      <div className={styles.result_content}>
        <p>
          <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}> 
            Step 1: Gather your plants
          </span>
        </p>

        <p>
            First, gather your plants. You’ll want to have all of your plants ready to go near your planting site. 
            However, make sure to keep them cool and covered until they are ready to plant to prevent damage from the sun, insects, or a lack of water.
        </p>

        <p>
          <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}> 
            Step 2: Plant your Canopy Trees
          </span>
        </p>

        <p>
            Start with your largest trees first. You will want to plant these trees equidistant across your planting site, around 10 feet apart. 
            You may need to modify your layout depending on what lies outside your plot, leaving a buffer of at least 5 feet between your largest 
            trees and any surrounding roads, buildings, and other structures. 
        </p>

        {/* TODO: ADD DIAGRAM */}

        <p>
          <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}> 
            Step 3: Plant your Trees
          </span>
        </p>

        <p>
            Next, fill in your second largest set of plants, your trees. Spread your trees equally between the canopy trees, leaving at 
            least 5 feet of space between other tree types and 10 feet of space between canopy plantings. Again, it is best if you leave a buffer between your trees and any 
            sidewalks, roads, or buildings.
        </p>

        {/* TODO: ADD DIAGRAM */}

        <p>
          <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}> 
            Step 4: Plant your Sub-Trees
          </span>
        </p>

        <p>
            For the third step of planting, begin to fill in your site with sub-trees. Sub-trees that are the same species should be spaced apart as 
            much as possible, creating species diversity throughout the plot.
        </p>

        {/* TODO: ADD DIAGRAM */}

        <p>
          <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}> 
            Step 5: Plant your Shrubs
          </span>
        </p>

        <p>
            For the fourth and final step of planting, fill in the gaps in your planting site with the shrubs you have chosen, randomizing 
            selection as much as possible. Depending on the species you choose, it may not always be possible to space them apart. 
            Similar species may be planted close together in those cases.
        </p>

        {/* TODO: ADD DIAGRAM */}

        <p>
          <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}> 
            Step 6: After planting
          </span>
        </p>

        <p>
            Once you’ve finished planting, make sure to thoroughly water and mulch your planting site (if you choose). After that, your Pocket Forest is ready to grow!
        </p>

        </div>

        {/* TODO: ADD DIAGRAM */}

        <p>
            At this point, it may be a good idea to document your Pocket Forest by taking pictures so that you can see your forest’s 
            growth over time. Keeping a diagram of your forest showing where specific plants were placed may be helpful for maintenance. 
        </p>

        <p>
            Finally, check out the final step of building your Pocket Forest: After planting & Maintenance.
        </p>


        <div style={{
          marginTop: "2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem"
        }}>
          <BasicButton to="/Step3">Step 3: Maintenance</BasicButton>
          <ScrollToTop />
        </div>

      </div>

      <FooterComp />

    </div>

  </div>

  );
};

export default Step2;
