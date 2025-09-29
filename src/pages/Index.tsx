import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Megaphone, 
  Users, 
  Trophy, 
  ArrowRight, 
  Camera, 
  Mic, 
  Monitor,
  Star,
  CheckCircle
} from 'lucide-react';
import heroBroadcast from '@/assets/hero-broadcast.jpg';
import marketingStrategy from '@/assets/marketing-strategy.jpg';
import eventVenue from '@/assets/event-venue.jpg';

const Index = () => {
  const services = [
    {
      icon: Megaphone,
      title: 'Marketing Strategy',
      description: 'Comprehensive marketing solutions tailored for South Sudan businesses',
      image: marketingStrategy,
    },
    {
      icon: Camera,
      title: 'Event Broadcasting',
      description: 'Professional live streaming with multi-camera coverage',
      image: eventVenue,
    },
    {
      icon: Users,
      title: 'Sponsorship Management',
      description: 'Strategic partnerships and sponsor relations management',
      image: heroBroadcast,
    },
  ];

  const stats = [
    { number: '200+', label: 'Events Broadcasted' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10M+', label: 'Live Viewers' },
    { number: '5+', label: 'Years Experience' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Event Director, Juba Conference Center',
      content: 'Liberty Media transformed our events with their professional broadcasting. Outstanding quality and service.',
      rating: 5,
    },
    {
      name: 'Michael Deng',
      role: 'Marketing Manager, South Sudan Chamber',
      content: 'Their marketing strategies helped us reach audiences we never thought possible. Truly professional team.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat hero-gradient"
        style={{ backgroundImage: `url(${heroBroadcast})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
            🎥 Premier Broadcasting in South Sudan
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-foreground mb-6 animate-fade-in">
            The Gateway to{' '}
            <span className="text-gradient-gold">Exceptional</span>
            <br />
            Marketing & Event Broadcasting
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            South Sudan's leading marketing agency and premier event broadcasting service. 
            We deliver world-class live streaming, marketing strategies, and unforgettable experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 hover-lift hover-glow"
            >
              <Link to="/contact">
                <Play className="w-5 h-5 mr-2" />
                Book Us for Your Next Event
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 font-semibold text-lg px-8 py-6 hover-lift"
            >
              <Link to="/portfolio">
                <Monitor className="w-5 h-5 mr-2" />
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Excellence in Every{' '}
              <span className="text-gradient-gold">Broadcast</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From marketing strategy to live event broadcasting, we deliver comprehensive solutions 
              that elevate your brand and captivate your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift border-border bg-card hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <Link 
                      to="/services"
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Client Stories
            </Badge>
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Trusted by{' '}
              <span className="text-gradient-gold">Leaders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border bg-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-foreground mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10 border-y border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Ready to Elevate Your{' '}
            <span className="text-gradient-gold">Next Event?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create an unforgettable experience that resonates with your audience 
            and amplifies your message across South Sudan and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 hover-lift hover-glow"
            >
              <Link to="/contact">
                <Mic className="w-5 h-5 mr-2" />
                Start Your Project
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 font-semibold text-lg px-8 py-6 hover-lift"
            >
              <Link to="/services">
                <CheckCircle className="w-5 h-5 mr-2" />
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
