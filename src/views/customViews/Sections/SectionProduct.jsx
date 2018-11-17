import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

class SectionProduct extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h2 className={classes.title}>Welcome... You Could Be Anywhere In The World But Your Here With Me</h2>
            <h3 className={classes.title}>I appreciate that.</h3>
            <h5 className={classes.description}>
            I am Arthur Bernier Jr. I work as freelance fullstack web developer and attraction marketing consultant specializing in supporting e-commerce brands, subscription box sites, social activists, religious/non-profit leaders and creative entrepreneurs(i.e. barbers, artists, musicians, stylists, models and photographers). I have a passion for helping entrepreneurs reach their perfect audience and helping you communicate to that audience in a way that makes them know, like and trust you.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="I'm A Website Producer"
                description="Web Producers are responsible for what you see when you open a website, meaning that they ensure that the content of a website is optimized for a user experience. Web Producers are in charge of arranging, editing, and many times even creating content for websites. But on top of being web producers we also develop, manage, design , host and customize websites."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="I Love to Code"
                description="I have spent 8 years learning web development first as a hobby and now as an occupation. I have a burning desire to be known for building the most iconic websites for small business owners who normally don't have access to the tools needed to succeed. I love to create websites and I offer custom services to meet any budget."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="I Love to Coach"
                description="I believe in ‘Attraction Marketing’ which is simply the most effective way to market any product, business opportunity, or service online. It helps you become the hunted instead of the hunter. The number one problem with developers today is that they forget the only thing that matters for the client is converting potential customers into clients. I specialize in helping you do just that with my development and coaching"
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(SectionProduct);
