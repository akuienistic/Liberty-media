import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram, Twitter, Phone, Mail, MapPin, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
    { icon: Twitter, href: "#", label: "Twitter/X", color: "hover:text-blue-400" },
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Marketing Strategy",
    "Event Broadcasting",
    "Live Streaming",
    "Sponsorship Management",
    "Media Consultancy",
  ];

  return (
    <footer className="bg-surface-dark border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-gold-light rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-background fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-playfair font-bold text-foreground">Liberty Media</span>
                <span className="text-xs text-muted-foreground -mt-1">Broadcasting Excellence</span>
              </div>
            </Link>

            <p className="text-muted-foreground mb-6 max-w-md">
              The Gateway to Exceptional Marketing & Event Broadcasting in South Sudan. We deliver premium live
              streaming, marketing strategies, and sponsorship management services.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+211 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@libertymedia.ss</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Juba, South Sudan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground ${social.color} transition-all duration-300 hover-lift`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-playfair font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
              Ready to Broadcast Your Next Event?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's create an unforgettable experience together. Contact us today.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-lift"
            >
              <Link to="/contact">Let's Collaborate</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Liberty Media. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm">
                Designed & built by{" "}
                <a
                  href="https://web.facebook.com/profile.php?id=61572703111798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Simon Akuien Atem
                </a>
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
