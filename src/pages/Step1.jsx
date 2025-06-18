import React from 'react';
import styles from '../mystyle.module.css';
import Navbar from '../components/Navbar';
import FooterComp from '../components/FooterComp';
import HeaderComp from '../components/HeaderComp';
import FrostedImage from '../components/FrosterImage';
import BasicButton from '../components/BasicButton';
import ScrollToTop from '../components/ScrollToTop';


/* Step 1: Before Planting - content */

/* 
Styling:

Some styling is "in-line", where style={{}} in this file.
Basic styling comes from mystyle.module.css file.
Navbar styling from components/Navbar.module.css
See the imports above for direction.

*/

const Step1 = () => {
  return (
    <div>
    <HeaderComp />
    <Navbar />


    <div className="About">



      {/* Subheader */}
      <div className={styles.subheader}>
        <p>
          <span style={{ fontFamily: "Nunito Sans", fontWeight: "bold", color: "#0057b8", fontSize: "2.5rem" }}>Step 1:</span>{" "}
          
          <span style={{ fontFamily: "Nunito Sans", fontSize: "2.5rem", fontWeight: "bold" }}>Before Planting</span>
        </p>

        </div>
      
      <div className={styles.about_content}>
        <p>
            Before you start planting, you’ll want to carefully assess your planting space and understand the maintenance requirements 
            for your unique Pocket Forest. Some things you’ll want to consider might include the soil type of your 
            plot area, the shape and size of your plot area, any preexisting plants in your planting area, 
            underground utilities and obstructions within your plot area. Pocket Forests are very resilient, and as 
            long as you have about 125 square feet of space, with 10 contiguous square feet of space in any direction, 
            you have enough room for a Pocket Forest, though smaller forests may be an option with specific conditions.
        </p>

        <p>
          <span style={{ fontWeight: "bold", color: "#383838" }}> 
            Remember – Pocket Forests require at least 3 canopy trees, properly spaced!
          </span>
        </p>

        {/* TODO: ADD IMAGE */}

      </div>

      <div className={styles.subheader}>
        <p>
          Choosing your site
        </p>
      </div>


      <div className={styles.about_content}>
        <p>
            First, you’ll want to choose your planting site. This could be in your yard or piece of land that you own. 
            You’ll want to consider whether or not you have permission to plant on the land and if there are 
            any restrictions on what you can plant on your land.
        </p>

        <p>
          <span style={{ fontWeight: "bold", color: "#383838" }}> 
            Note that while planting a Pocket Forest with native plants might expand planting options on your property, 
            but make sure to check for any restrictions that may apply to your planting site.
          </span>
        </p>

        <p>
            Next, you’ll want to assess the specific conditions of your planting site. What is the soil type? 
            How much sunlight does your forest get? Is there enough room for a buffer between your home or any 
            other buildings on your property and the planting site? What is the soil type? How well does the soil 
            drain? This will help you to determine which plants will grow best in your forest.
        </p>

        {/* TODO: ADD IMAGE */}

      </div>


      <div className={styles.subheader}>
        <p>
          Soil Type and Soil Drainage
        </p>
      </div>


      <div className={styles.about_content}>

        <p>
          <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}> 
            Soil Type
          </span>
        </p>

        <p>
            You can get a good idea about your soil type by inspecting the soil visually. First, you’ll want to dig 
            into your soil about 4 to 10 inches deep. Deeper is best, ensuring that any organic matter on the soil’s 
            surface doesn’t affect your assessment of the soil type. Think about it – your trees roots will be digging 
            down far deeper than you will!
        </p>

        <p>
            For an easy way to evaluate your soil type, you can read {" "}
            <a
              className={styles.other_links}
              href="https://www.dammannsgardenco.com/blog/how-to-identify-soil-types#:~:text=THE%20SQUISH%20TEST,have%20a%20high%20silt%20percentage"
              target="_blank"
              rel="noopener noreferrer"
            > this guide</a>,
            which lists several tests to help you determine whether your soil is clay, chalk, peat, silt, 
            sand, or loam. Sterling Heights has diverse soil types, so it is important to know which 
            trees and shrubs will grow best on your land.
        </p>

        <p>
            You can also purchase a soil test from {" "}
            <a
              className={styles.other_links}
              href="https://homesoiltest.msu.edu/get-started"
              target="_blank"
              rel="noopener noreferrer"
            > Michigan State University Extension</a>,
            where samples mailed to the university will be processed for detailed assessment and results. 
        </p>

        {/* TODO: ADD IMAGE - Soil Type */}

        <p>
            Finally, if you would like to learn more details about your soil type, you can also use {" "}
            <a
              className={styles.other_links}
              href="https://umich.maps.arcgis.com/apps/mapviewer/index.html?layers=06e5fd61bdb6453fb16534c676e1c9b9"
              target="_blank"
              rel="noopener noreferrer"
            > this map tool</a>,
            for more information.
        </p>

        <p>
          <span style={{ fontWeight: "bold", color: "#383838", backgroundColor: "#c3e344", borderRadius: "10px" }}> 
            Note that beginner foresters might find the map tool confusing, but don’t worry! 
            A simple soil test is good enough to determine which plants are best suited for your Pocket Forest.
          </span>
        </p>


        <p>
          <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}> 
            Soil Drainage
          </span>
        </p>


        <p>
            Another important aspect of your soil is its ability to drain water. Because plants have 
            different moisture needs, understanding soil drainage is important in building your forest. 
        </p>

        <p>
          Testing soil drainage is also easy. Follow the steps below to figure out how your soil drains.
        </p>

        {/* TODO: ADD IMAGE HERE */}

        <p>
        <span style={{fontWeight: "bold", color: "#0057b8" }}>First</span>, in your forest plot, dig a hole that is at least 12 
        inches deep and about the same width. 
        </p>


        <p>
        <span style={{fontWeight: "bold", color: "#0057b8" }}>After digging</span> your hole, fill the hole with water once and 
        let it drain until it is empty. You do not need to note the start time for the first drain.
        </p>

        <p>
        <span style={{fontWeight: "bold", color: "#0057b8" }}>Next</span>, fill the hole completely with water once again. 
        Write down your start time and watch the hole for drainage. Once it has drained completely, write down your end time. 
        By determining how much time has passed, you can understand your soil’s drainage type.
        </p>

        <p>
        <span style={{fontWeight: "bold", color: "#0057b8" }}>Results</span>
        </p>

        <p>
        <span style={{fontWeight: "bold", color: "#0057b8" }}>0 - 4 minutes drainage:</span>
        </p>

        <p>
        Your soil is{" "}
        <span style={{fontWeight: "bold", color: "#0057b8" }}>fast-draining</span> and is acceptable for most plants.
        </p>

        <p>
        <span style={{fontWeight: "bold", color: "#0057b8" }}>5 - 15 minutes drainage:</span>
        </p>

        <p>
        Your soil is{" "}
        <span style={{fontWeight: "bold", color: "#0057b8" }}>moderate-draining</span>. This drainage type is ideal for most plants.
        </p>

        <p>
        <span style={{fontWeight: "bold", color: "#0057b8" }}>16 - 60+ minutes drainage:</span>
        </p>

        <p>
        Your soil is{" "}
        <span style={{fontWeight: "bold", color: "#0057b8" }}>slow-draining</span>. While still acceptable for many plants, 
        some plants will require more well-drained soil.
        </p>

        <p>
        <span style={{fontWeight: "bold", color: "#0057b8" }}>More than 6 hours:</span>
        </p>

        <p>
        This soil will not be suitable for most trees and will likely not support your Pocket Forest. 
        However, some plants, especially those that typically thrive in stream or river-system environments, 
        may thrive in your planting area.
        </p>

        {/* TODO: Chart version / image for soil drainage */}

        <p>
        This {" "}
        <a
          className={styles.other_links}
          href="https://www.treepeople.org/wp-content/uploads/2020/08/How-to-Test-Soil-Drainage.pdf"
          target="_blank"
          rel="noopener noreferrer">one-page guide</a> {" "} may be helpful for your soil test.

        To learn more about which plants work best in your soil type and moisture level, continue reading.
        </p>

      </div>

      <div className={styles.subheader}>
        <p>
          Other Considerations
        </p>
      </div>

      <div className={styles.about_content}>
        <p>
          To help with planting, you’ll want to make sure that your Pocket Forest site is easily accessible both on 
          foot and by vehicle. For the establishment period, you will want to make sure that your Pocket Forest 
          can easily be watered, with a hose or sprinkler system nearby.
        </p>
      </div>

      <div className={styles.subheader}>
        <p>
          Choosing your plants
        </p>
      </div>

      <div className={styles.about_content}>
        <p>
          Now that you have considered your Pocket Forest placement, soil, and accessibility, 
          it’s time to choose your plants. Remember, a Pocket Forest consists of {" "}
          <span style={{fontWeight: "bold", color: "#0057b8" }}>only native plants! </span>
          To make it easier to choose your plants, we’ve created a tool for you to discover a variety 
          of plants that are native to Southeast Michigan. We also created forest types that work well 
          in the various soils of Sterling Heights. Though it is recommended that you curate your Pocket 
          Forest with plants from the forest type that fits your soil, you can make changes to fit the 
          unique needs of your land. Just make sure to use only native plants!
        </p>

        <p>
          Use the button below to go to the Plant calculator tool. Just make sure to return here after to read through
          the rest of the guide!
        </p>

        <BasicButton to="/PlantCalculator">Plant calculator</BasicButton>


        <p>
          All of your plants should be relatively young upon planting. A good guideline to use is that your plants 
          should not be included in your forest if they are potted in a 5 gallon pot or larger. The larger and older your plant is, 
          the more difficult it will be for the plant to establish itself in new soil. Younger plants are more resilient 
          to change and are more suitable for your Pocket Forest.
        </p>

        <p>
          If you would like to learn more about native plants in Michigan, you can visit the University of Michigan Herbarium's {" "}
          <a
          className={styles.other_links}
          href="https://www.michiganflora.net/search-results"
          target="_blank"
          rel="noopener noreferrer">Michigan Flora Database</a>, which includes photos, maps, and basic species information.

        </p>

      </div>

      <div className={styles.subheader}>
        <p>
          Preparing to plant
        </p>
      </div>

      <div className={styles.about_content}>

        {/* TODO: ADD IMAGES TO THIS SECTION */}

        <p>After choosing your plants, there are still a few things you need to do before planting day.</p>

        <p><span style={{ fontWeight: "bold", color: "#0057b8" }}>First</span>, mark your planting area. 
        You can use simple wooden pegs or grass spray. This will ensure that you maintain a buffer zone 
        between your Pocket Forest and any obstructions on your property and make it easier to properly space your plants.</p>

        <p><span style={{ fontWeight: "bold", color: "#0057b8" }}>Then</span>, you’ll want to weed your planting area. 
        Herbicides are strictly not recommended for Pocket Forests. Not only does the use of herbicides require more maintenance, 
        it risks harming your plants – and particularly native species – during their establishment period. Instead, a helpful 
        method is the “cover and smother” method. First, you will need to manually remove as many weeds as possible. 
        Then, to suppress the weeds, cover your planting area with burlap. After that, add a layer of soil on top. Ideally, 
        you will also want to use landscaping staples to hold your burlap in place and effectively suppress new weed growth.</p>

        <p>Make sure to use plant-based rather than synthetic burlap. The burlap will degrade naturally in a few years, 
          after which time your plants will already be established. Using this method will also make the maintenance period 
          easier, with less weeding required overall.</p>

        <p><span style={{ fontWeight: "bold", color: "#0057b8" }}>Optionally</span>, you may choose to prewater your soil. 
        Prewatering is not necessary in Michigan’s climate, but may be recommended if your site has not experienced significant 
        rain for several weeks.</p>

        <p><span style={{ fontWeight: "bold", color: "#0057b8" }}>Note</span> that you should avoid tilling your soil. 
        Although it may appear helpful, unless your weeding is 100% effective, tilling will spread weeds across your plot 
        and assist their growth. Tilling is not necessary for your Pocket Forest except for in special circumstances.</p>

      </div>


      <div className={styles.subheader}>
        <p>
          Next steps
        </p>
      </div>

      <div className={styles.about_content}>
        <p>
          Now that you've chosen your plants and prepared your planting area, it's time to plant.
        </p>
      </div>

      <div style={{ marginTop: "2rem" }}>
          <BasicButton to="/Step2">Step 2: Planting day</BasicButton>
          <ScrollToTop />
        </div>

      <FooterComp />

    </div>

  </div>

  );
};

export default Step1;
