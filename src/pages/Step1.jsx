/* First Guide page - Contains the content displayed on the Step 1: Before Planting page. */

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


/* Content */
const Step1 = () => {
  return (
    <div>
    <HeaderComp />
    <Navbar />


    <div className="Content">



      {/* Content */}

      {/* Introduction */}
      <div className={styles.about_content}>

        {/* Subheader */}
        <div className={styles.subheader}>
          <p>
            Step 1: Before Planting
          </p>
        </div>

        <p>
            Before you start planting, you’ll want to carefully assess your planting space and understand the maintenance requirements 
            for your unique Pocket Forest. Some things you’ll want to consider might include the soil type of your 
            plot area, the shape and size of your plot area, any preexisting plants in your planting area, 
            and underground utilities and obstructions within your plot area. 
        </p>


          <p>
            Pocket Forests are very resilient, and as 
            long as you have about 30 square feet of space, with 10 contiguous square feet of space in any direction, you can create a
            Pocket Forest. It is recommended, however, to have about 125 square feet of space for best results.
          </p>


        {/* Note */}
        <p style={{ width: "80%", display: "inline-block", backgroundColor: "#c3e344", borderRadius: "10px", outline: "solid 2px", outlineColor: "#0057b8" }}>
          <img src="icons/information-box-outline.svg" style={{width: "40px", marginTop: "15px" }}></img>
          <li style={{paddingLeft: "3%", paddingRight: "3%", paddingBottom: "3%", listStyle: "none"}}>
          Some of the Forest Types you can choose from in our Plant Calculator will have more trees than others.
          Make sure to choose the Forest Type that best suits your needs!
          </li>
        </p>

        <div style={{ clear: "both" }}></div>



      {/* Step 1: Choosing your site */}
      <div className={styles.subheader}>
        <p>
          Choosing your site
        </p>
      </div>

        <p>
            First, you’ll want to choose your planting site. This could be in your yard or on of land that you own. 
            First, you'll want to determine whether or not you have permission to plant on the land and if there are 
            any restrictions on what you can plant on your land.
        </p>

        {/* Note */}
        <p style={{ width: "80%", display: "inline-block", backgroundColor: "#c3e344", borderRadius: "10px", outline: "solid 2px", outlineColor: "#0057b8" }}>
          <img src="icons/information-box-outline.svg" style={{width: "40px", marginTop: "15px" }}></img>
          <li style={{paddingLeft: "3%", paddingRight: "3%", paddingBottom: "3%", listStyle: "none"}}>
          Note that planting a Pocket Forest with native plants might expand planting options on your property. 
          Make sure to check for any restrictions in your area that apply to your planting site.
          </li>
        </p>

          <p>
          Next, you’ll want to assess the specific conditions of your planting site. What is the soil type? How well does the soil 
          drain? How much sunlight will your forest get? Is there enough room for a buffer between your home or any 
          other buildings on your property and the planting site? This will help you to determine which plants 
          will grow best in your forest.
          </p>


  



      {/* Step 2: Soil Type and Soil Drainage */}
      <div className={styles.subheader}>
        <p>
          Soil Type and Soil Drainage
        </p>
      </div>


        {/* Soil Type */}
        <p>
          <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}> 
            Soil Type
          </span>
        </p>

        <p>
            You can estimate your soil type by inspecting the soil visually. First, you’ll want to dig 
            into your soil about 4 to 10 inches deep. Deeper is best, ensuring that any organic matter on the soil’s 
            surface doesn’t affect your assessment of the soil type. Think about it – the tree roots of your forest will 
            be digging deeper than you will!
        </p>

          <p>
            <div className="frosted-container float-left">
              <img className="frosted-image" src="photos/step1_image_003.jpg" alt="Step 1: Photo 003" />
              <div className="frosted-overlay">Root system in soil.</div>
            </div>

            For an easy way to evaluate your soil type, you can read the {" "}
            <a
              className={styles.other_links}
              href="https://www.dammannsgardenco.com/blog/how-to-identify-soil-types#:~:text=THE%20SQUISH%20TEST,have%20a%20high%20silt%20percentage"
              target="_blank"
              rel="noopener noreferrer"
            > Dammann's Garden Co. guide</a>,
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
            where samples mailed to the university will be processed for detailed assessment and results. Finally, if you would like to learn more details about your soil type, you can also use the {" "}
            <a
              className={styles.other_links}
              href="https://umich.maps.arcgis.com/apps/mapviewer/index.html?layers=06e5fd61bdb6453fb16534c676e1c9b9"
              target="_blank"
              rel="noopener noreferrer"
            > USA Soils Map Units tool</a> {" "} 
            or the {" "}
            <a
              className={styles.other_links}
              href="https://websoilsurvey.nrcs.usda.gov/app/"
              target="_blank"
              rel="noopener noreferrer"
            > USDA Web Soil Survey tool</a> {" "}
            for more information.
        </p>



        {/* Note */}
        <p style={{ width: "80%", display: "inline-block", backgroundColor: "#c3e344", borderRadius: "10px", outline: "solid 2px", outlineColor: "#0057b8" }}>
          <img src="icons/information-box-outline.svg" style={{width: "40px", marginTop: "15px" }}></img>
          <li style={{paddingLeft: "3%", paddingRight: "3%", paddingBottom: "3%", listStyle: "none"}}>
          Note that beginner foresters might find the map tools confusing, but don’t worry! 
          A simple soil test is good enough to determine which plants are best suited for your Pocket Forest.
          </li>
        </p>



        {/* Soil Drainage */}
        <p>
          <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}> 
            Soil Drainage
          </span>
        </p>


          <p>
            Another important aspect of your soil is its ability to drain water. Because plants have 
            different moisture needs, understanding soil drainage is important in building your forest. 
            Testing soil drainage is also easy. Follow the steps below to figure out how your soil drains.
          </p>


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
        Write down your start time and watch the hole as it drains. Once it has drained completely, write down the end time. 
        By determining how much time has passed, you can understand your soil’s drainage type.
        </p>



        <div className={styles.result_content}>
        <p>
        <span style={{fontWeight: "900", color: "#0057b8" }}>Results</span>
        </p>

        <p>
        <span style={{fontWeight: "bold", color: "#0057b8" }}>0 - 4 minutes drainage:</span>
        </p>

        <p>
        Your soil is{" "}
        <span style={{ color: "#006747" }}>fast-draining</span> and is acceptable for most plants.
        </p>

        <p>
        <span style={{fontWeight: "bold", color: "#0057b8" }}>5 - 15 minutes drainage:</span>
        </p>

        <p>
        Your soil is{" "}
        <span style={{ color: "#006747" }}>moderate-draining</span>. This drainage type is ideal for most plants.
        </p>

        <p>
        <span style={{fontWeight: "bold", color: "#0057b8" }}>16 - 60+ minutes drainage:</span>
        </p>

        <p>
        Your soil is{" "}
        <span style={{ color: "#006747" }}>slow-draining</span>. While still acceptable for many plants, 
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



        <p>
        <a
          className={styles.other_links}
          href="https://www.treepeople.org/wp-content/uploads/2020/08/How-to-Test-Soil-Drainage.pdf"
          target="_blank"
          rel="noopener noreferrer">TreePeople's one-page guide</a> {" "} may be helpful for your soil test.
        </p>

      </div>


      <p>
          <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}> 
            Other Considerations
          </span>
      </p>


      <p>
        To help with planting, you’ll want to make sure that your Pocket Forest site is easily accessible both on 
        foot and by vehicle. For the establishment period, you will want to make sure that your Pocket Forest 
        can easily be watered if needed, with a hose or sprinkler system nearby.
      </p>



      {/* Step 3: Choosing your plants */}
      <div className={styles.subheader}>
        <p>
          Choosing your plants
        </p>
      </div>

        <p>
          Now that you have considered your Pocket Forest placement, soil, and accessibility, 
          it’s time to choose your plants. Remember, a Pocket Forest consists of {" "}
          <span style={{fontWeight: "bold", color: "#0057b8" }}>only native plants</span>!
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


        {/* Links to the Plant Calculator tool on a separate page */}
        <BasicButton to="/plant-calculator" variant="highlighted">Plant Calculator</BasicButton>


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


      {/* Step 4: Preparing to plant */}
      <div className={styles.subheader}>
        <p>
          Preparing to plant
        </p>
      </div>

          <p>
            <div className="frosted-container float-left">
              <img className="frosted-image" src="photos/step1_image_005.jpg" alt="Step 1: Photo 005" />
              <div className="frosted-overlay">Gardener removing weeds from soil.</div>
            </div>
            After choosing your plants, there are still a few things you need to do before planting day.
          </p>

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


      {/* Step 5: Next steps */}
      <div className={styles.subheader}>
        <p>
          Next steps
        </p>
      </div>

        <p>
          Now that you've chosen your plants and prepared your planting area, it's time to plant.
        </p>


      <div style={{
          marginTop: "2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.5rem"
        }}>
          <BasicButton to="/Step2">Step 2: Planting day</BasicButton>
          <ScrollToTop />
      </div>
    </div>
    <FooterComp />
    </div>
  </div>

  );
};

export default Step1;
