import PresentationPage from 'views/customViews/index.jsx';
import AboutPage from 'views/customViews/About.jsx';
import PortfolioPage from 'views/customViews/Portfolio.jsx';
import ContactPage from 'views/customViews/Contact.jsx';
import TestimonialsPage from 'views/customViews/Testimonials.jsx';


var indexRoutes = [
  { path: "/about", name: "AboutPage", component: AboutPage },
  { path: "/portfolio", name: "PortfolioPage", component: PortfolioPage },
  { path:"/contact", name: "ContactPage", component: ContactPage },
  { path: "/testimonials", name: "TestimonialsPage", component: TestimonialsPage },
  { path: "/", name: "PresentationPage", component: PresentationPage }
];

export default indexRoutes;
