/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Build from "@material-ui/icons/Build";
import Subject from "@material-ui/icons/Subject";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Code from "@material-ui/icons/Code";
import Dashboard from "@material-ui/icons/Dashboard";
import Timeline from "@material-ui/icons/Timeline";
import Group from "@material-ui/icons/Group";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Muted from "components/Typography/Muted.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Badge from "components/Badge/Badge.jsx";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx";

import yourpublishedbook from "assets/img/portfolio/yourpublishedbook.jpeg";
import chakrawelness from "assets/img/portfolio/trudy.png";
import bellaprinting from "assets/img/portfolio/bellaprinting.jpeg";
import changingtheworld from "assets/img/portfolio/changingtheworld.png";
import datzdem from "assets/img/portfolio/datzdem.jpeg";
import eatsmac from "assets/img/portfolio/eatsmac.jpeg";
import kecia from "assets/img/portfolio/kecia.jpeg";
import osbn from "assets/img/portfolio/osbn.jpg";
import proroofing from "assets/img/portfolio/proroofing.PNG";
import rickandmorty from "assets/img/portfolio/rickandmorty.jpeg";
import taralees2cents from "assets/img/portfolio/taralees2cents.PNG";
import taraleesrecipes from "assets/img/portfolio/taraleesrecipes.png";
import office2 from "assets/img/examples/office2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardProject1 from "assets/img/examples/card-project1.jpg";
import cardProject2 from "assets/img/examples/card-project2.jpg";
import cardProject3 from "assets/img/examples/card-project3.jpg";
import cardProject4 from "assets/img/examples/card-project4.jpg";
import cardProject5 from "assets/img/examples/card-project5.jpg";
import cardProject6 from "assets/img/examples/card-project6.jpg";

function SectionProjects({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      {/*DatzDem, GirdleSite, KeciaNeshelle, BellaPrinting, ProRoofing, EatSmac, ChakraWellnessCoach, YourPublishedBook, Taralee's Recipe App, ChangingTheWorld, Rick and Morty Game, ProgressandFortune */}
      <div className={classes.projects}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <Muted>
                <h6>My WORK</h6>
              </Muted>
              <h2 className={classes.title}>
                Some of My Awesome Projects
              </h2>
              <h5 className={classes.description}>
                These are projects that I worked on as the primary developer or school projects that I created on...
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="http://www.ChakraWellnessCoach.com"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src={
                        chakrawelness
                      }
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          `url('${chakrawelness}')`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="http://www.ChakraWellnessCoach.com"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Chakra Wellness Coach
                    </h4>
                  </a>
                  <h6 className={classes.description}>Author Website</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    Chakra Welness Coach is designed with React, Built on Material Design and deployed via Heroku and makes use of JSS and the GoogleMap Api, PayPal and PHP scripting for contact form.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="http://bellaprintingllc.com"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src={bellaprinting}
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          `url('${bellaprinting}')`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="http://bellaprintingllc.com"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Bella Printing
                    </h4>
                  </a>
                  <h6 className={classes.description}>Custom WordPress</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    Bella Printing is built on Wordpress utilizing a custom theme built with Bootstrap.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="http://www.changingthe.world"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src={changingtheworld}
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          `url('${changingtheworld}')`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="http://changingthe.world"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Changing The World
                    </h4>
                  </a>
                  <h6 className={classes.description}>School Project</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    It is built on top of Bulma, using Bloomer  and it is fully responsive and built with Tyler Gosla and Christian Von Lehe.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <Card plain className={classes.card2}>
              <a
                href="https://vast-refuge-11048.herokuapp.com/"
                target="_blank"
              >
                <CardHeader image plain>
                  <img
                    src={eatsmac}
                    alt="..."
                  />
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage:
                        `url('${eatsmac}')`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
              </a>
              <CardBody plain>
                <a
                  href="https://vast-refuge-11048.herokuapp.com/"
                  target="_blank"
                >
                  <h4 className={classes.cardTitle}>
                    Eat Smac
                  </h4>
                </a>
                <h6 className={classes.description}>School Project</h6>
                <p
                  className={`${classes.description} ${classes.marginTop20}`}
                >
                  Custom Group Project in school where I was tasked with the front end development. This is a Full Stack MERN Application. I used REACT and Material Design to design the UI. We integrated with UX Designers using Invision, Trello and Zeplin.
                </p>
              </CardBody>
            </Card>
          </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="http://datzdem.com"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src={
                        datzdem
                      }
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          `url('${datzdem}')`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="http://www.datzdem.com"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Datz Dem
                    </h4>
                  </a>
                  <h6 className={classes.description}>Music Artist Website</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                  Wordpress Theme built on top of storefront with Bootstrap and integrated with WooCommerce.
                  </p>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="http://kecianichelle.com"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src={kecia}
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          `url('${kecia}')`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="http://kecianichelle.com"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Kecia Nichelle
                    </h4>
                  </a>
                  <h6 className={classes.description}>Local Hair Stylist</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    Used Bootstrap and JQuery +Vanilla Javascript to create a simple but well designed professional website for a local hairstylist with a large following.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://pages.git.generalassemb.ly/arthurbernierjr/rickandmortyadv/"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src={
                        rickandmorty
                      }
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          `url('${rickandmorty}')`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://pages.git.generalassemb.ly/arthurbernierjr/rickandmortyadv/"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Rick and Morty Adventure Game
                    </h4>
                  </a>
                  <h6 className={classes.description}>Browser Game</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    Cool just for fun browser game. This one uses only vanilla Javascript. I have others as well like tic tac toe, matching games, card games, rpg games etc. but I didn't want to riddle my portfolio with games.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://web.archive.org/web/20140417055546/http://www.taraleestwocents.com:80/"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src={taralees2cents}
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          `url('${taralees2cents}')`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://web.archive.org/web/20140417055546/http://www.taraleestwocents.com:80/"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Taralees 2 Cents
                    </h4>
                  </a>
                  <h6 className={classes.description}>Custom WordPress</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    Taralees2cents is built on Wordpress utilizing a custom theme built on Optimize Press. I learned to do this from emulating WordpressMakeover and this was my first real full website built in 2013.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://taralees-recipes.herokuapp.com/#/"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src={taraleesrecipes}
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          `url('${taraleesrecipes}')`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://taralees-recipes.herokuapp.com/#/"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Taralees Recipes
                    </h4>
                  </a>
                  <h6 className={classes.description}>Vue Js Youtube App</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                  This is site is built using Vue, Vuejs, Vue Router and Cosmic js a headless CMS, and Express.js.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="http://yourpublishedbook.com"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src={
                        yourpublishedbook
                      }
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          `url('${yourpublishedbook}')`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="http://yourpublishedbook.com"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      YourPublishedBook.com
                    </h4>
                  </a>
                  <h6 className={classes.description}>Sales Funnel</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    A complete Sales Funnel built with HTML, CSS, Javascript and SASS with Bootstrap.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="http://proroofing.us"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src={proroofing}
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          `url('${proroofing}')`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="http://proroofing.us"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Pro Roofing
                    </h4>
                  </a>
                  <h6 className={classes.description}>Custom WordPress</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    Pro Roofing is built on Wordpress utilizing a custom theme built with Bootstrap.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain className={classes.card2}>
                <a
                  href="https://susanne-mockup.firebaseapp.com/#"
                  target="_blank"
                >
                  <CardHeader image plain>
                    <img
                      src={osbn}
                      alt="..."
                    />
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage:
                          `url('${osbn}')`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </a>
                <CardBody plain>
                  <a
                    href="https://susanne-mockup.firebaseapp.com/#"
                    target="_blank"
                  >
                    <h4 className={classes.cardTitle}>
                      Open Barter Network
                    </h4>
                  </a>
                  <h6 className={classes.description}>Complete Site</h6>
                  <p
                    className={`${classes.description} ${classes.marginTop20}`}
                  >
                    Very Complicated Site Utilizing Multiple lanaguages and technologies currently under development. CSS, SASS, GULP, REACT, Wordpress, BuddyPress, Forum Technology, Search Engine Optimization Best Practices all utilized.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Project 2 END */}

    </div>
  );
}

export default withStyles(projectsStyle)(SectionProjects);
