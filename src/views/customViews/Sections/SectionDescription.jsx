import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import main from "assets/img/profile.jpg";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.jsx";

function SectionDescription(props) {
  const { classes } = props;
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
        <h1 className={classes.description}>About Me</h1>
          <h4 className={classes.description}>
            Looking for a creative and knowledgable Web Developer? Search no further, because I am ready for the job. With 8 years of total Web Development experience, nearly 2 years of experience as a full-time freelancer, a proven leader & self starter as a military vet, former Senior Sailor of the Year (highest individual navy award for enlisted service-member), Presidential Service Award recipient, and sought after trainer, I can make an immediate impact on any team anywhere.
            <br/>
            If you are seeking someone who is willing to learn multiple languages, is skilled at handling project deliveries, that is exactly what I am prepared to do and what I am known to excel at.
            <br/>
            I am well versed in Full Stack JavaScript with React, Vue, Express, Node, Sequelize, MongoDB, Gulp and Webpack. I am fammiliar with Ruby on Rails, PHP and Python. I have extensive experience in WordPress and have worked with headless CMS's like CosmicJS.
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer>
      <GridItem md={8}
      sm={8}
      className={classNames(classes.mrAuto, classes.mlAuto)}>
      <Card>

      <GridContainer>
      <GridItem xs={12} sm={5} md={5}>
      <CardHeader image plain>
      <img src={main} alt="Arthur Bernier Jr" />
      </CardHeader>
      </GridItem>
      <GridItem xs={12} sm={6} md={6}>
      <CardBody>
      <h1 className={classes.cardTitle}> Arthur Bernier Jr</h1>
      <h3 className={classes.description}>Navy Veteran <br/> Presidential Service Award Recipient <br/>
Full Stack Web Developer & Website Producer</h3>
</CardBody>
</GridItem>
</GridContainer>

      </Card>
      </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(descriptionStyle)(SectionDescription);
