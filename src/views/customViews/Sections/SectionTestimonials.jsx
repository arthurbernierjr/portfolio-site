import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import FormatQuote from "@material-ui/icons/FormatQuote";
import Star from "@material-ui/icons/Star";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import Muted from "components/Typography/Muted.jsx";
import Warning from "components/Typography/Warning.jsx";

import testimonialsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle.jsx";

import dg2 from "assets/img/dg2.jpg";
import danny from "assets/img/portfolio/danny.jpeg";
import evan from "assets/img/portfolio/evan.jpeg";
import tyler from "assets/img/portfolio/tyler.jpeg";
import cardProfile1Square from "assets/img/portfolio/girdle.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/img/portfolio/brucebrown.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import christian from "assets/img/faces/christian.jpg";

function SectionTestimonials({ ...props }) {
  const { classes, ...rest } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className="cd-section" {...rest}>
      {/*  Evan, Daniel, Daniel and Tyler */}
        <div className={classes.container}>
      {/* Use Datz Dem and Daniel Girdle as a Testimonial Change to md{6} */}
      <div className={classes.testimonials}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <h2 className={classes.title}>What People Are Saying...</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>

            {/* <GridItem xs={12} sm={4} md={4}>
            //   <Card testimonial plain>
            //     <CardAvatar testimonial plain>
            //       <a href="#pablo" onClick={e => e.preventDefault()}>
            //         <img src={cardProfile4Square} alt="..." />
            //       </a>
            //     </CardAvatar>
            //     <CardBody plain>
            //       <h4 className={classes.title}>Bruce Brown</h4>
            //       <Muted>
            //         <h6>Published Author & Author Coach</h6>
            //       </Muted>
            //       <h5 className={classes.cardDescription}>
            //         "Wow. You are to web development what I am to marketing."
            //       </h5>
            //     </CardBody>
            //   </Card>
            </GridItem> */}
            <GridItem xs={12} sm={3} md={3}>
              <Card testimonial plain>
                <CardAvatar testimonial plain>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={evan} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody plain>
                  <h4 className={classes.title}>Evan Lane</h4>
                  <Muted>
                    <h6>Full Stack Web Developer & Musician</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    "Arthur is exceptionally friendly, knowledgable, and community-oriented. He is a driven worker who I feel especially fortunate to have studied with at General Assembly. Not only did Arthur excel in the immersive web development program, but he managed his time so well that he successfully completed freelance projects during the course and always made himself available to help others with their coursework. Just being around Arthur has inspired me to dig deeper in my own work."
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card testimonial plain>
                <CardAvatar testimonial plain>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={cardProfile1Square} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody plain>
                  <h4 className={classes.title}>Daniel Girdle</h4>
                  <Muted>
                    <h6>Entrepreneur @ Millennial Business Owner Group</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    "I bought this gig because I needed an attractive website and Arthur delivered exactly what I needed. It’s rare you find someone who can take your idea to the next level but I promise if you trust this freelancer with your ideas he can develop what you need. "
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card testimonial plain>
                <CardAvatar testimonial plain>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={tyler} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody plain>
                  <h4 className={classes.title}>Tyler Gosla</h4>
                  <Muted>
                    <h6>Project Manager & Military Veteran</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    "Working with Arthur will humble a person. He doesn’t showboat his quick whit or his ability to learn on the fly and he makes you wonder if he ever looses his patience. He can wear many hats and wears them well. Words can’t describe how impressive of a person Arthur is, but you’ll understand this recommendation when you get the chance to work with him."
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card testimonial plain>
                <CardAvatar testimonial plain>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={danny} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody plain>
                  <h4 className={classes.title}>Daniel McKinney</h4>
                  <Muted>
                    <h6>Full Stack Web Developer & Sound Designer</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    "Arthur is a fantastic programmer and his energy lights up the room when he shows up. I was fortunate enough to work with him on a couple of group projects while at General Assembly, his work was always well thought out and executed. And he is always looking to push himself and his skills to the next level.

His skills as a manager and helping a group stay on task are extremely effective. Arthur approaches this task not by micromanaging, but by being an open communicator, positive influence, and leading by example. His presence in the classroom at GA surely elevated my skills and attitude about the craft of programming, and my experience would not have been the same without him there."
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

          </GridContainer>
        </div>
      </div>
      {/* Testimonials 3 END */}
    </div>
    </div>
  );
}

export default withStyles(testimonialsStyle)(SectionTestimonials);
