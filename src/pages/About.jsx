/* About page - Contains the content displayed on the about page. */

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
import ImageGrid from '../components/ImageGrid';
import InlineImageText from '../components/InlineImageText';




/* Content */
const About = () => {
  return (
    <div>
    <HeaderComp />
    <Navbar />


    <div className="About">

      {/* Main content - Introduction */}
      <div className={styles.about_content}>

        {/* Subheader */}
        <div className={styles.subheader} id="welcome">
          <p>
            Welcome to the Pocket Forests project of Sterling Heights, Michigan!
          </p>
        </div>

        <InlineImageText
          imageSrc="photos/about_image_001.jpg"
          imageAlt="Pocket Forest"
          attribution="Liriodendron tulipifera – Tulip tree."
        >
          <p>
            <span style={{ fontWeight: "bold", color: "#0057b8" }}>Pocket Forests</span>, otherwise known as{" "}
            <span style={{ fontStyle: "italic", color: "#0057b8" }}>Microforests </span> or{" "}
            <span style={{ fontStyle: "italic", color: "#0057b8" }}>Miniforests</span> are areas of densely-packed,
            highly biodiverse vegetation. These forests are unique, because they grow very quickly and require little maintenance,
            making them great for beginner gardeners.
          </p>

        </InlineImageText>

        <p>
          Pocket forests are a tool in urban forestry used to combat deforestation and
          provide ecological benefits, such as lowering an urban area’s heat index (in other words, cooling off a city during
          the hot summer months), improving air quality, and removing carbon from the atmosphere.&nbsp; 
        </p>

        <p>
          This website builds off of the work of Akira Miyawaki, a botanist and ecologist who pioneered the Miyawaki Method which
          describes the process of creating a Pocket Forest. Based off of work by LA Microforests designer Katherine Pakrodouni,
          this website features plants native to Southeast Michigan and prioritizes cultivating a variety of native vegetation.
          A benefit of increasing biodiversity means that Michigan’s native plants are protected from the effects of climate change.
        </p>

        <p>
          On this website, read <span style={{ fontWeight: "bold", color: "#0057b8" }}>step-by-step instructions</span> for 
          how to build a Pocket Forest, use our <Link to="/plant-calculator" className={styles["other_links"]}>Plant Calculator</Link> tool 
          to pick out your plants and figure out how many you will need, and visit our {" "}
          <Link to="/plot" className={styles["other_links"]}>Plot your forest</Link> page to design a layout of
          your Pocket Forest.
        </p>


        {/* Section 1: Background */}

        {/* Subheader */}
        <div className={styles.subheader} id="background">
        <p>
          Background
        </p>
        </div>

        {/* Content */}

        <p>
          Recently, the city of Sterling Heights {" "}
          <a
            className={styles.other_links}
            href="https://www.sterlingheights.gov/2330/Pathway-to-Play-and-Preservation"
            target="_blank"
            rel="noopener noreferrer"
          >
          passed a millage</a> {" "} that includes efforts to promote reforestation. 
          As a community with one of the lowest tree canopies in the state, prioritizing quick tree growth and increasing 
          biodiversity to prevent further deforestation is essential. 
        </p>

        <InlineImageText
          imageSrc="photos/akira_miyawaki.jpg"
          imageAlt="Akira Miyawaki"
          attribution="Renowned botanist Akira Miyawaki – photo by Yoshitomo Tanaka."
        >
          <p>
          That’s where Pocket Forests come into play. 
          Pioneered by the renowned botanist Akira Miyawaki, Pocket Forests use the Miyawaki Method to plant small, dense, and highly 
          biodiverse forests that grow up to {" "}

          <a
            className={styles.other_links}
            href="https://earth.org/microforests/"
            target="_blank"
            rel="noopener noreferrer"
          >
          10 times as quickly
          </a>
            {" "} as a regular forest. Their quick growth is attributed to the
            competitive nature resulting from their density. Another benefit of Pocket Forests is that they quickly become self-sustaining, 
            meaning that they can be cultivated with only about a year of maintenance. Weeding, watering, and protecting
            your forest from deer and other grazing animals is recommended for at least a year, though your forest can benefit
            from maintenance for 2 years. After that, your Pocket Forest will be mostly self-sustaining, though you may prefer
            to add additional maintenance into your routine as your forest grows for sustainability and beautification. 
          </p>

          <p>
            Aside from being easy to maintain, Pocket Forests also feature all-native plants, helping to restore ecological 
            balance in different communities. This guide features plants that are native across Southeast Michigan,
            so this website can be used by anyone in the region. Just make sure to check the status of native plants in your
            county using the <a
              className={styles.other_links}
              href="https://www.michiganflora.net/search"
              target="_blank"
              rel="noopener noreferrer">
              Michigan Flora database</a>!
          </p>

        </InlineImageText>




        {/* Section 2: What is a Pocket Forest? */}

        {/* Subheader */}
        <div className={styles.subheader} id="definition">
        <p>
          What is a Pocket Forest?
        </p>
        </div>


        {/* Content */}

        <p>
        Aside from being dense and highly biodiverse, a Pocket Forest at minimum requires three trees to be considered a forest, 
        as well as including only native species to the area they are planted in. 
        </p>

        <p>
        A typical Miyawaki forest packs plants in a density of about 3 plants per 10 square feet, but different local 
        climates might have different needs for best growing conditions.

        </p>

        <p>
        Pocket Forests are also built out of plants of different sizes. Larger plants and trees provide 
        canopy and shade for sub-trees and shrubs. Smaller plants enrich the soil and contribute to soil drainage. 
        </p>


        <FrostedImage
        src="photos/plant_height_dg_003.png"
        alt="Plant Height Diagram"
        attribution="Relative heights of different plants."
        style={{ width: "700px" }}
        className="large"
        />


        <p>
        Because Pocket Forests are meant to be self-sustaining with little maintenance during the first year of planting, 
        using fertilizers and pesticides is not recommended. The good news is that this makes starting your forest even easier, 
        with fewer steps required to grow your forest.
        </p>


        <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}>What makes a Michigan Pocket Forest?</span>


        

        <p>
          Pocket Forests in Michigan are slightly different from a typical forest constructed with the Miyawaki method. 
          The Miyawaki method was first introduced in Japan, where ecological conditions vary from Michigan. 
          Though there are some similarities, Pocket Forests in Michigan have some differences. 
          The most major difference is in planting density. Miyawaki method forests are typically planted at a 
          density of 3 to 7 plants per 10 square feet. In a Miyawaki forest, this results in about a 40% die-off rate, 
          where 40% of plants competing for nutrients will die off during their establishment period. In Michigan, it is 
          recommended to plant trees at a slightly lower density, between 3 - 5 plants per 10 square feet, in order to lower 
          die-off rates and initial planting costs.
        </p>

        <p>
          Below, take a closer look at the differences between a commercial forest, a Miyawaki forest, and a Michigan Pocket Forest.
        </p>


        <FrostedImage
        src="photos/forest_comp_003.png"
        alt="Forest Composition Table"
        attribution="Attributes of various forests."
        style={{ width: "700px" }}
        className="large"
        />


        <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}>Sterling Heights' Pocket Forest</span>

          <p>
            You can visit Sterling Heights’ very own Pocket Forest at James C. Nelson Park, part of Sterling Heights’ 
            Community Garden. The Pocket Forest was planted in April of 2025 and is one of the steps the city is taking to 
            improve reforestation. Housed next to the Butterfly Garden, the Pocket Forest will one day be a refuge for 
            pollinators and small animal life.
          </p>

          <InlineImageText
          imageSrc="photos/about_image_004.jpg"
          imageAlt="Sterling Heights' Pocket Forest"
          attribution="Sterling Heights' Pocket Forest."
          >
          
          <p>
            To learn more about the Pocket Forest and Community Gardens, visit the <a
              className={styles.other_links}
              href="https://www.sterlingheights.gov/2328/Community-Garden-at-Nelson-Park"
              target="_blank"
              rel="noopener noreferrer">
              Community Garden</a> webpage. You can also visit the 
            Pocket Forest in person at the James C. Nelson Park during visiting hours.
          </p>

        </InlineImageText>



        <span style={{ fontWeight: "bold", color: "#0057b8", fontSize: "2rem" }}>What's in our forest?</span>

       
          <div>
          There are many plants in our Pocket Forest. You'll be able to choose these plants using the plant calculator. 
          Here is a peek at what these plants may look like once they are full grown. Note that this is not all of the plants
          available in our plant calculator — there are plenty more to choose from!

          <ImageGrid />

          </div>

        {/* Section 3: Benefits and Challenges */}

        {/* Subheader */}
        <div className={styles.subheader} id="benefits_challenges">
        <p>
          Benefits and Challenges
        </p>
        </div>


        {/* Content */}

        <p>
        Aside from restoring native plants and increasing quick tree growth, reforestation will also help to lower Sterling Heights’ 
        Urban Heat Index, a phenomenon that describes when urban areas become hotter than surrounding rural regions 
        due to urban architecture trapping heat and a lack of vegetation to cool things off. By increasing urban vegetation, 
        we can make Sterling Heights more comfortable and safe for its residents, particularly during the hot summer months. 
        You can read more in the{" "}
        <a
          className={styles.other_links}
          href="https://www.sterlingheights.gov/2257/City-Plans"
          target="_blank"
          rel="noopener noreferrer">
          Sterling Heights 2025 Climate Action Plan</a>

        .{" "}
        </p>


        <InlineImageText
          imageSrc="photos/about_image_002.jpg"
          imageAlt="Oak Forest"
          attribution="A lush Oak forest."
          >
          
          <p>
            Pocket Forests also improve air quality, manage carbon dioxide levels, provide habitats for local animals, 
            and add natural beauty. Since Pocket Forests can grow in a variety of landscapes and layouts, they can be 
            used to reforest areas that might be otherwise unsuitable for traditional forestry. Check out the 
            <a className={styles.other_links}> Plot your forest</a> tool to learn more about Pocket Forest design.
          </p>

        </InlineImageText>







        {/* Section 4: Next Steps */}

        {/* Subheader */}
        <div className={styles.subheader} id="next_steps">
        <p>
          Next Steps
        </p>
        </div>


        {/* Content */}

        Now that you know a little more about Pocket Forests, take the next step by looking at the Pocket Forest Guide. 
        There, you’ll learn how to build your own Pocket Forest, including how much space you need, which plants qualify, 
        and methods for constructing your forest.





        {/* Final components */}
        <div style={{ marginTop: "2rem" }}>
          <BasicButton to="/Guide">Up Next: Guide</BasicButton>
          <ScrollToTop />
        </div>


      </div>

      <FooterComp />

    </div>

  </div>

  );
};

export default About;
