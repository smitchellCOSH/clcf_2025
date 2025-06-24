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
import FrostedImage from '../components/FrosterImage';
import BasicButton from '../components/BasicButton';
import ScrollToTop from '../components/ScrollToTop';



const About = () => {
  return (
    <div>
    <HeaderComp />
    <Navbar />


    <div className="About">



      {/* Subheader */}
      <div className={styles.subheader}>
        <p>
          <span style={{ fontFamily: "Nunito Sans", fontWeight: "bold", color: "#0057b8", fontSize: "3rem" }}>Welcome</span>{" "}
          
          <span style={{ fontFamily: "Nunito Sans", fontSize: "2.5rem", fontWeight: "bold" }}>to the Pocket Forests project
            of Sterling Heights, Michigan!</span>
        </p>
      </div>




      {/* Main content - Introduction */}
      <div className={styles.about_content}>
        <p>
          <span style={{ fontWeight: "bold", color: "#0057b8" }}>Pocket Forests</span>, otherwise known as{" "}
          <span style={{ fontStyle: "italic", color: "#0057b8" }}>Microforests </span> or{" "}
          <span style={{ fontStyle: "italic", color: "#0057b8" }}>Miniforests</span> are areas of densely-packed,
          highly biodiverse vegetation. Pocket forests are a tool in urban forestry used to combat deforestation and
          provide ecological benefits, such as lowering an urban area’s heat index (in other words, cooling off a city during
           the hot summer months), improving air quality, and removing carbon from the atmosphere.&nbsp;
        </p>

      <FrostedImage
      src="/photos/about_image_001.jpg"
      alt="Pocket forest"
      attribution="Liriodendron tulipifera - Tulip tree"
      />

        <p>
          This website builds off of the work of Akira Miyawaki, a botanist and ecologist who pioneered the Miyawaki Method which
          describes the process of creating a Pocket Forest. Based off of work by LA Microforests designer Katherine Pakrodouni,
          this website features plants native to Southeast Michigan and prioritizes cultivating a variety of native vegetation.
          A benefit of increasing biodiversity means that Michigan’s native plants are protected from the effects of climate change.
        </p>

        <p>
          On this website, read <span style={{ fontWeight: "bold", color: "#0057b8" }}>step-by-step instructions</span> for how to build a Pocket Forest, 
          use our<span style={{ fontWeight: "bold", color: "#0057b8" }}> Plant Calculator </span>tool to pick out your plants and figure out how many you will need, 
          and visit our <span style={{ fontWeight: "bold", color: "#0057b8" }}>Plot your forest</span> page to design a layout of
          your Pocket Forest.
        </p>
      </div>





      {/* Section 1: Background */}

        {/* Subheader */}
        <div className={styles.subheader}>
        <p>
          <span style={{ fontFamily: "Nunito Sans", fontWeight: "bold", fontSize: "2rem" }}>Background</span>{" "}
        </p>
        </div>

      {/* Content */}
      <div className={styles.about_content}>

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
          biodiversity to prevent further deforestation is essential. That’s where Pocket Forests come into play. 
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
          meaning that they can be cultivated with only about a year of maintenance. Pocket Forests also feature all-native plants, 
          helping to restore ecological balance in different communities.

        </p>

        <FrostedImage
          src="/photos/akira_miyawaki.jpg"
          alt="Akira Miyawaki"
          attribution="Renowned botanist Akira Miyawaki – photo by Yoshitomo Tanaka."
          />

      </div>





      {/* Section 2: What is a Pocket Forest? */}

        {/* Subheader */}
        <div className={styles.subheader}>
        <p>
          <span style={{ fontFamily: "Nunito Sans", fontWeight: "bold", fontSize: "2rem" }}>What is a Pocket Forest?</span>{" "}
        </p>
        </div>

      <div className={styles.about_content}>

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

        <img
          src="photos/plant_height_dg.png" // Public
          className="Plant Height Diagram"
          alt="Plant Height Diagram"
          style={{ width: "80%", height: "auto", padding: "10px"}}
        />

        <p>
        Because Pocket Forests are meant to be self-sustaining with little maintenance during the first year of planting, 
        using fertilizers and pesticides is not recommended. The good news is that this makes starting your forest even easier, 
        with fewer steps required to grow your forest.
        </p>

      </div>
  




      {/* Section 3: What makes a Michigan Pocket Forest? */}

        {/* Subheader */}
        <div className={styles.subheader}>
        <p>
          <span style={{ fontFamily: "Nunito Sans", fontWeight: "bold", fontSize: "2rem" }}>What makes a Michigan Pocket Forest?</span>{" "}
        </p>
        </div>

      <div className={styles.about_content}>

        {/* Content */}

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

        <img
          src="photos/forest_comp_002.png" // Public
          className="Forest Composition Table"
          alt="Forest Composition Table"
          style={{ width: "80%", height: "auto", padding: "10px"}}
        />

      </div>





      {/* Section 4: Sterling Heights' Pocket Forest */}

        {/* Subheader */}
        <div className={styles.subheader}>
        <p>
          <span style={{ fontFamily: "Nunito Sans", fontWeight: "bold", fontSize: "2rem" }}>Sterling Heights' Pocket Forest</span>{" "}
        </p>
        </div>

      <div className={styles.about_content}>

        {/* Content */}

        TODO: Add section!

      </div>





      {/* Section 5: What's in our forest? */}

        {/* Subheader */}
        <div className={styles.subheader}>
        <p>
          <span style={{ fontFamily: "Nunito Sans", fontWeight: "bold", fontSize: "2rem" }}>What's in our forest?</span>{" "}
        </p>
        </div>

      <div className={styles.about_content}>

        {/* Content */}

        TODO: Add section!

      </div>





      {/* Section 6: Benefits and Challenges */}

        {/* Subheader */}
        <div className={styles.subheader}>
        <p>
          <span style={{ fontFamily: "Nunito Sans", fontWeight: "bold", fontSize: "2rem" }}>Benefits and Challenges</span>{" "}
        </p>
        </div>

      <div className={styles.about_content}>

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

        .{" "} Pocket Forests also improve air quality, manage carbon dioxide levels, provide habitats for local animals, 
        and add natural beauty. Since Pocket Forests can grow in a variety of landscapes and layouts, they can be 
        used to reforest areas that might be otherwise unsuitable for traditional forestry. Check out the 
        <span style={{ fontWeight: "bold", color: "#0057b8" }}> Plot your forest</span> tool to learn more about Pocket Forest design.
        </p>



        <FrostedImage
        src="/photos/about_image_002.jpg"
        alt="Pocket forest"
        attribution="A lush Oak forest."
        />


      </div>





      {/* Section 7: Next Steps */}

        {/* Subheader */}
        <div className={styles.subheader}>
        <p>
          <span style={{ fontFamily: "Nunito Sans", fontWeight: "bold", fontSize: "2rem" }}>Next Steps</span>{" "}
        </p>
        </div>

      <div className={styles.about_content}>

        {/* Content */}

        Now that you know a little more about Pocket Forests, take the next step by looking at the Pocket Forest Guide. 
        There, you’ll learn how to build your own Pocket Forest, including how much space you need, which plants qualify, 
        and methods for constructing your forest.


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
