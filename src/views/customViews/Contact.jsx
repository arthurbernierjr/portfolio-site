import React from "react";
import {Link} from "react-router-dom";
import API from "config.js";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Footer from "components/Footer/Footer.jsx";
import Card from "components/Card/Card.jsx";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.jsx";

const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 33.4473, lng: -84.1469 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: 33.4473, lng: -84.1469 }} />
    </GoogleMap>
  ))
);

const formStyle = {
  textAlign:`center`,

}
const formGroup = {
  width: `100%`,

}
class ContactUsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          brand="Arthur Bernier Jr"
          links={<HeaderLinks dropdownHoverColor="dark" />}
          fixed
          color="info"
        />
        <div className={classes.bigMap}>
          <CustomSkinMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  height: `100%`,
                  borderRadius: "6px",
                  overflow: "hidden"
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.contactContent}>
            <div className={classes.container}>
              <h2 className={classes.title}>Send me a message</h2>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <p>
                    You can contact me with anything related to web development.
                    I'll get in touch with you as soon as possible.
                    <br />
                    <br />
                  </p>
                  <Card>
                  <form className="form-group" style={formStyle}role="form" id="contact-form" name="contactform" method="post" action="https://progressandfortune.com/assets/contact-form-handler.php">
                          <div className="form-group label-floating">
                              <label className="control-label">Your name</label>
                              <input style={formGroup} type="text" name="name" className="form-control" /> </div>
                          <div className="form-group label-floating">
                              <label className="control-label">Email address</label>
                              <input style={formGroup}type="email" name="email" className="form-control" /> </div>
                          <div className="form-group label-floating">
                              <label className="control-label">Phone</label>
                              <input type="text" style={formGroup} name="phone" className="form-control" /> </div>
                          <div className="form-group label-floating">
                              <label className="control-label">Your message</label>
                              <textarea name="message" className="form-control"style={formGroup} id="message" rows="6"></textarea>
                          </div>

                              <Button type="submit" color="primary"> Send Message</Button>
                      </form>
                      </Card>
                </GridItem>
                <GridItem md={4} sm={4} className={classes.mlAuto}>
                  <InfoArea
                    className={classes.info}
                    title="Find me at the office"
                    description={
                      <p>
                        1775 Parker Road Building C Suite 210<br /> Conyers, GA,{" "} 30094
                      </p>
                    }
                    icon={PinDrop}
                    iconColor="primary"
                  />
                  <InfoArea
                    className={classes.info}
                    title="Give me a ring"
                    description={
                      <p>
                        Arthur Bernier Jr <br /> (470) 778-1034 <br /> Mon - Fri,
                        10:30am-5:30pm EST
                      </p>
                    }
                    icon={Phone}
                    iconColor="primary"
                  />
                  <InfoArea
                    className={classes.info}
                    title="Email me at"
                    description={
                      <p>
                        <a href="mailto:arthurbernier@protonmail.com"> ArthurBernier@ProtonMail.com</a>
                      </p>
                    }
                    icon={BusinessCenter}
                    iconColor="primary"
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="/"
                      className={classes.block}
                    >
                      Arthur Bernier Jr
                    </Link>
                  </ListItem>

                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <Link to="/">Arthur Bernier Jr</Link> for a
                better web.
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(contactUsStyle)(ContactUsPage);
