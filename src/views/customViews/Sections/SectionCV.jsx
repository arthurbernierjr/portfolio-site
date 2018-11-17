import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Quote from "components/Typography/Quote.jsx";
// core components

import blog4 from "assets/img/examples/blog4.jpg";
import blog3 from "assets/img/examples/blog3.jpg";
import blog1 from "assets/img/examples/blog1.jpg";

import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.jsx";

function SectionText({ ...props }) {
  const { classes } = props;
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>
          Curriculum Vitae
          </h3>
          <div className="work-experience group">
                    <div className="heading">
                        <h2 className={classes.title}>Work Experience</h2>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className={classes.title}>
                                <h3 className={classes.title}>Freelance Web Developer <br/>
                                + Attraction Marketing Consultant</h3>
                                <h4 className="organization">Arthurbernierjr.com</h4>
                            </div>
                            <div className="col-md-6"><span className="period">11/01/2010- Present</span></div>
                        </div>
                        <p className="text-muted">HTML, CSS, Javascript, Mongo DB, Express, React/Redux, Nodejs, jQuery, Bootstrap, and WordPress Development<br/></p>
                        <p className="text-muted">Worked with multiple organizations and Individuals from around the world, developing websites that include ecommerce, booking, portfolio, blog and multilingual functionalities.<br/></p>
                        <p className="text-muted">Increasing traffic and enhancing page ranking by improving website structure, performing Search Engine Optimization (SEO) and Search Engine Marketing (SEM) for local improvements. Responsible for updating the CRM of organizations and keeping a running spreadsheet of daily activity.<br/>
                            <br/>Promoting and demonstrating the value of Search Engine Marketing (PPC), Search Engine Optimization (SEO) Display Advertising, Social Media, Mobile Advertising, and website solutions to generate new business for my clients.<br/></p>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className={classes.title}>
                                <h3 className={classes.title}>United States Navy</h3>
                                <h4 className="organization">Master At Arms, &nbsp;Antiterrorism Training Supervisor</h4>
                                <h4 className="organization">Petty Officer First Class</h4>
                            </div>
                            <div className="col-md-6"><span className="period">04/06/2010- 08/30/2017</span></div>
                        </div>
                        <p className="text-muted">Shore Antiterrorism Assessment Team Member for United States Fleet Forces 4 Star Admiral , responsible for providing technical and operational support to all Navy Ashore public safety departments on matters relating to Force Protection programs, Law Enforcement
                            operations, Physical Security and Antiterrorism program development.</p>
                        <p className="text-muted">Responsible for training and certifying 177 personnel in all forms of non- lethal and lethal weapons and ensuring safety of all crew members during high risk training and live ammunition training. Managing Anti Terrorism program
                            for over 1,000 personnel. Provided technical analysis and recommendations for security measures to protect personnel, facilities and equipment. As a Watch Commander lead 30 Security personnel in controlling facility access
                            and safeguarding highly sensitive areas, ensuring proper physical safeguards for the protection of personnel and storage of classified information.<br/><br/></p>
                        <p className="text-muted"> Earned Two Navy and Marine Corp achievement medals, 5 Year Straight top 10% Evaluation/Early Promotion selection, various  military and civilian awards, Presidential Service Award for oustanding Volunteer Work with Prime Plus Norfolk Senior Center and 2016 USS Enterprise Senior Sailor of the Year. Overall I kicked ass, if
                            you read that you pay great attention detail and I applaud you.<br/><br/></p>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className={classes.title}>
                                <h3 className={classes.title}>ChaRosa Foundation</h3>
                                <h4 className="organization">Math Tutor, After School/Summer Camp Instructor</h4>
                                <h4 className="organization">Culture and Arts Program Liason</h4>
                            </div>
                            <div className="col-md-6"><span className="period">07/01/2003-11/22/2009</span></div>
                        </div>
                        <p className="text-muted">Tutored First Grade through 8th Grade Mathematics,<br/><br/>
                         Taught sports and step dancing to inner city youth <br/><br/>
                         Organized Culture and Arts Programs for African American Community in South East Queens, NY<br/><br/></p>
                    </div>
                </div>
          <Quote
            textClassName={classes.quoteText}
            text="“Being a web developer is what I have always wanted to do. Ever since 10th grade and my designed my first my space page back in 2003 and the first time I created a c-out statement, and if else ladder in C++... I knew this is who I wanted to be.”"
            author="Arthur Bernier Jr, Military Veteran."
          />
        </GridItem>
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog4} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog3} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog1} alt="..." className={imgClasses} />
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>Rest of the Story:</h3>
          <Quote
          textClassName={classes.quoteText}
          text='"Every one of our thougts, emotions and behaviors has an energy consequence, for better or for worse. The ultimate measure of our lives is not how much we spend on the plant, but rather how much energy we invest in the time that we have"'
          author="Jim Loehr and Tony Schwartz from The Power of Full Engagement"
          />

          <Quote
          textClassName={classes.quoteText}
          text='"We can let circumstances of our lives harden us so that we become increasingly resentful and afraid, or we let them soften us and make us kinder and more open to what sacres us. We always have the choice."'
          author="Pema Chödrön from The Places That Scare You"
          />
          <p>
            We are here to make life better. And now I look and look around and
            there’s so many opportunities to do that. I also believe that the way to be your best self is to give your greatest gifts in greatest service to the world. In a spiritual sense that's how I worship so to speak. I hope learning more about me has been a great experience for you. Be Blessed and Have Success. I love you like Kanye loves Kanye and that's alot.
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(sectionTextStyle)(SectionText);
