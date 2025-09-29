import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Calendar,
  Users,
  Zap,
  Globe,
  Facebook,
  Youtube,
  Instagram,
  Twitter,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    eventDate: '',
    budget: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting Liberty Media. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        eventDate: '',
        budget: '',
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+211 123 456 789', '+211 987 654 321'],
      description: 'Call us for immediate assistance',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@libertymedia.ss', 'info@libertymedia.ss'],
      description: 'Send us a message anytime',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Juba, South Sudan', 'East Africa'],
      description: 'Visit our office in the heart of Juba',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      description: 'We\'re here when you need us',
    },
  ];

  const services = [
    'Marketing Strategy',
    'Event Broadcasting',
    'Live Streaming',
    'Sponsorship Management',
    'Media Consultancy',
    'Technical Production',
    'Content Creation',
    'Other',
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: 'Book a Consultation',
      description: 'Schedule a free 30-minute consultation to discuss your project needs.',
      action: 'Schedule Now',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat Support',
      description: 'Get instant answers to your questions through our live chat.',
      action: 'Start Chat',
    },
    {
      icon: Phone,
      title: 'Emergency Hotline',
      description: '24/7 emergency support for ongoing events and urgent needs.',
      action: 'Call Now',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', label: 'Twitter/X', color: 'hover:text-blue-400' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-background via-surface-dark to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Let's Create Something{' '}
              <span className="text-gradient-gold">Extraordinary</span>
              {' '}Together
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to elevate your brand or broadcast your next event? 
              We're here to help you achieve exceptional results. Let's start the conversation.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl font-playfair font-bold text-primary">24hrs</div>
                <div className="text-muted-foreground text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-playfair font-bold text-primary">99%</div>
                <div className="text-muted-foreground text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-playfair font-bold text-primary">5+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-playfair font-bold text-primary">24/7</div>
                <div className="text-muted-foreground text-sm">Event Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair font-bold text-foreground">
                    Tell Us About Your Project
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours 
                    with a customized proposal for your needs.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company/Organization
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                          Service Needed *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full p-3 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary text-foreground"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-2">
                          Event Date (if applicable)
                        </label>
                        <Input
                          id="eventDate"
                          name="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                        Estimated Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-background border border-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary text-foreground"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-1000">Under $1,000</option>
                        <option value="1000-5000">$1,000 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000-25000">$10,000 - $25,000</option>
                        <option value="25000-plus">$25,000+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        className="bg-background border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-lift hover-glow"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2" />
                          Sending Message...
                        </div>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border bg-card hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-playfair font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          {info.description}
                        </p>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-foreground font-medium">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Links */}
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-playfair font-semibold text-foreground mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className={`p-3 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground ${social.color} transition-all duration-300 hover-lift`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Quick Actions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Need{' '}
              <span className="text-gradient-gold">Immediate</span>
              {' '}Assistance?
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the best way to connect with our team based on your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <Card key={index} className="border-border bg-card hover-lift text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <action.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-foreground mb-3">
                    {action.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {action.description}
                  </p>
                  <Button 
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 text-foreground"
                  >
                    {action.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
              Visit Our{' '}
              <span className="text-gradient-gold">Office</span>
            </h2>
            <p className="text-muted-foreground">
              Located in the heart of Juba, South Sudan. Come visit us for an in-person consultation.
            </p>
          </div>

          <Card className="border-border bg-card overflow-hidden">
            <div className="aspect-[16/9] bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                    Liberty Media Office
                  </h3>
                  <p className="text-muted-foreground">
                    Juba, South Sudan
                  </p>
                  <Button 
                    className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-primary/10 border-y border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Frequently Asked{' '}
              <span className="text-gradient-gold">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How far in advance should I book your services?",
                answer: "We recommend booking at least 2-4 weeks in advance for most events. However, we understand that some events are planned on shorter notice, and we'll do our best to accommodate urgent requests based on our availability."
              },
              {
                question: "Do you provide equipment for broadcasting?",
                answer: "Yes, we provide all necessary professional broadcasting equipment including cameras, audio systems, streaming technology, and backup equipment to ensure your event runs smoothly."
              },
              {
                question: "Can you handle events outside of Juba?",
                answer: "Absolutely! We provide services throughout South Sudan. Additional travel costs may apply for events outside of Juba, which we'll discuss during the planning phase."
              },
              {
                question: "What happens if there are technical issues during my event?",
                answer: "We always bring backup equipment and have experienced technicians on-site. Our 24/7 emergency support ensures any issues are resolved quickly to minimize disruption to your event."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-playfair font-semibold text-foreground mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;