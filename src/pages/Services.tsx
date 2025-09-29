import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Megaphone, 
  Camera, 
  Users, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight,
  Monitor,
  Mic,
  BarChart,
  Target,
  Zap,
  Globe,
  Award,
  Clock
} from 'lucide-react';
import marketingStrategy from '@/assets/marketing-strategy.jpg';
import eventVenue from '@/assets/event-venue.jpg';
import heroBroadcast from '@/assets/hero-broadcast.jpg';

const Services = () => {
  const mainServices = [
    {
      icon: Megaphone,
      title: 'Marketing Strategy',
      subtitle: 'Comprehensive Marketing Solutions',
      description: 'Strategic marketing planning and execution tailored for South Sudan businesses and organizations.',
      image: marketingStrategy,
      features: [
        'Brand Development & Positioning',
        'Digital Marketing Campaigns',
        'Market Research & Analysis',
        'Content Strategy & Creation',
        'Social Media Management',
        'PR & Communications',
      ],
      deliverables: [
        'Marketing Strategy Document',
        'Brand Guidelines',
        'Campaign Assets',
        'Performance Reports',
      ],
    },
    {
      icon: Camera,
      title: 'Event Broadcasting',
      subtitle: 'Professional Live Streaming & Coverage',
      description: 'Multi-camera live streaming and broadcasting services for events of all sizes across South Sudan.',
      image: eventVenue,
      features: [
        'Multi-Camera Live Streaming',
        'Professional Audio/Video Equipment',
        'Real-time Social Media Integration',
        'Recording & Post-Production',
        'Technical Support Team',
        'Backup Systems & Redundancy',
      ],
      deliverables: [
        'Live Stream Setup',
        'High-Quality Recordings',
        'Edited Highlights',
        'Technical Support',
      ],
    },
    {
      icon: Users,
      title: 'Sponsorship Management',
      subtitle: 'Strategic Partnership Development',
      description: 'End-to-end sponsorship management connecting brands with meaningful opportunities.',
      image: heroBroadcast,
      features: [
        'Sponsor Identification & Outreach',
        'Partnership Negotiation',
        'Activation Strategy Planning',
        'ROI Measurement & Reporting',
        'Relationship Management',
        'Contract Management',
      ],
      deliverables: [
        'Sponsorship Packages',
        'Partnership Agreements',
        'Activation Plans',
        'Performance Analytics',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: MessageSquare,
      title: 'Media Consultancy',
      description: 'Expert guidance on media strategy, crisis communication, and brand positioning.',
    },
    {
      icon: Monitor,
      title: 'Technical Production',
      description: 'Full technical production services including equipment rental and crew.',
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and performance reporting for all campaigns.',
    },
    {
      icon: Globe,
      title: 'Digital Presence',
      description: 'Website development, social media setup, and digital infrastructure.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We understand your goals, audience, and requirements through detailed consultation.',
      icon: Target,
    },
    {
      step: '02', 
      title: 'Strategy Development',
      description: 'Our team creates a customized strategy tailored to your specific needs and objectives.',
      icon: Zap,
    },
    {
      step: '03',
      title: 'Execution & Management',
      description: 'Professional implementation with real-time monitoring and quality assurance.',
      icon: Award,
    },
    {
      step: '04',
      title: 'Analysis & Optimization',
      description: 'Post-event analysis with insights and recommendations for future improvements.',
      icon: BarChart,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-background via-surface-dark to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              Our Services  
            </Badge>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Comprehensive{' '}
              <span className="text-gradient-gold">Marketing & Broadcasting</span>
              {' '}Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From strategic marketing to professional event broadcasting, we provide 
              end-to-end solutions that elevate your brand and amplify your message 
              across South Sudan and beyond.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-lift hover-glow"
            >
              <Link to="/contact">
                <Clock className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-primary/20" />
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                    {service.subtitle}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4">What's Included:</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Key Deliverables:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable, delIndex) => (
                        <Badge key={delIndex} variant="outline" className="border-primary/30 text-muted-foreground">
                          {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift"
                  >
                    <Link to="/contact">
                      <Mic className="w-4 h-4 mr-2" />
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Additional Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Complete{' '}
              <span className="text-gradient-gold">Media Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support services to ensure your success across all aspects 
              of marketing and media production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-border bg-card hover-lift text-center">
                <CardContent className="p-6">
                  <service.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-playfair font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              How We{' '}
              <span className="text-gradient-gold">Deliver Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 4-step process ensures that every project is delivered with 
              precision, quality, and measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="border-border bg-card hover-lift text-center relative">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-playfair font-bold text-primary mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
                
                {/* Connecting Arrow */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/40" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10 border-y border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
            Ready to Elevate Your{' '}
            <span className="text-gradient-gold">Brand & Events?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our comprehensive marketing and broadcasting services 
            can help you achieve your goals and exceed your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-lift hover-glow"
            >
              <Link to="/contact">
                <Monitor className="w-5 h-5 mr-2" />
                Get Your Quote
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 font-semibold hover-lift"
            >
              <Link to="/portfolio">
                View Our Work <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;