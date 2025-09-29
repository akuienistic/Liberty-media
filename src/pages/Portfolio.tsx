import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Calendar, 
  Users, 
  Eye, 
  ArrowRight,
  ExternalLink,
  Quote,
  Star,
  Filter,
  Grid3X3,
  List
} from 'lucide-react';
import heroBroadcast from '@/assets/hero-broadcast.jpg';
import marketingStrategy from '@/assets/marketing-strategy.jpg';
import eventVenue from '@/assets/event-venue.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'broadcasting', label: 'Event Broadcasting' },
    { id: 'marketing', label: 'Marketing Campaigns' },
    { id: 'sponsorship', label: 'Sponsorship Management' },
  ];

  const projects = [
    {
      id: 1,
      title: 'South Sudan Independence Day Celebration 2024',
      category: 'broadcasting',
      client: 'Government of South Sudan',
      date: 'July 9, 2024',
      views: '500K+',
      attendees: '50,000+',
      image: heroBroadcast,
      description: 'Live multi-camera broadcast of the national independence day celebration, reaching audiences across East Africa.',
      services: ['Live Streaming', 'Multi-Camera Setup', 'Social Media Integration'],
      results: ['500K+ live viewers', 'Zero technical issues', '98% uptime'],
      testimonial: {
        text: 'Liberty Media delivered flawless broadcasting for our most important national event.',
        author: 'Ministry of Information',
      },
    },
    {
      id: 2,
      title: 'Juba Business Summit Marketing Campaign',
      category: 'marketing',
      client: 'Juba Chamber of Commerce',
      date: 'March 15, 2024',
      views: '200K+',
      attendees: '1,200',
      image: marketingStrategy,
      description: 'Comprehensive marketing strategy and execution for the largest business summit in South Sudan.',
      services: ['Digital Marketing', 'Brand Development', 'Content Creation'],
      results: ['200% increase in registrations', '50+ media mentions', '95% satisfaction rate'],
      testimonial: {
        text: 'The marketing campaign exceeded all our expectations and drove record attendance.',
        author: 'Juba Chamber of Commerce',
      },
    },
    {
      id: 3,
      title: 'Unity Sports Festival Partnership Management',
      category: 'sponsorship',
      client: 'South Sudan Sports Commission',
      date: 'December 10, 2023',
      views: '300K+',
      attendees: '25,000',
      image: eventVenue,
      description: 'End-to-end sponsorship management connecting local and international brands with South Sudan\'s premier sports festival.',
      services: ['Sponsor Acquisition', 'Partnership Management', 'Activation Strategy'],
      results: ['$200K+ in sponsorships', '15 major partners', '100% sponsor retention'],
      testimonial: {
        text: 'Their sponsorship management brought together partners we never thought possible.',
        author: 'South Sudan Sports Commission',
      },
    },
    {
      id: 4,
      title: 'Nile Conference Live Broadcast',
      category: 'broadcasting',
      client: 'Nile Basin Initiative',
      date: 'August 22, 2023',
      views: '150K+',
      attendees: '800',
      image: heroBroadcast,
      description: 'Professional broadcast coverage of the international Nile Basin conference with simultaneous translation.',
      services: ['Live Streaming', 'Recording', 'Technical Support'],
      results: ['Multi-language broadcast', 'International reach', 'Technical excellence'],
      testimonial: {
        text: 'Professional service that showcased South Sudan on the international stage.',
        author: 'Nile Basin Initiative',
      },
    },
    {
      id: 5,
      title: 'South Sudan Bank Digital Campaign',
      category: 'marketing',
      client: 'South Sudan Development Bank',
      date: 'June 5, 2023',
      views: '100K+',
      attendees: 'N/A',
      image: marketingStrategy,
      description: 'Digital transformation campaign highlighting the bank\'s modernization and new services.',
      services: ['Digital Strategy', 'Content Production', 'Social Media'],
      results: ['300% social engagement', '50K new followers', 'Brand recognition increase'],
      testimonial: {
        text: 'Liberty Media transformed our digital presence and brand perception.',
        author: 'South Sudan Development Bank',
      },
    },
    {
      id: 6,
      title: 'Cultural Heritage Festival Sponsorship',
      category: 'sponsorship',
      client: 'Ministry of Culture',
      date: 'September 15, 2023',
      views: '250K+',
      attendees: '30,000',
      image: eventVenue,
      description: 'Strategic sponsorship management for South Sudan\'s largest cultural celebration.',
      services: ['Partnership Development', 'Brand Activation', 'ROI Tracking'],
      results: ['12 major sponsors', 'Cultural preservation', 'Economic impact'],
      testimonial: {
        text: 'They helped us celebrate our culture while ensuring sustainable funding.',
        author: 'Ministry of Culture',
      },
    },
  ];

  const filteredProjects = projects.filter(
    project => activeFilter === 'all' || project.category === activeFilter
  );

  const clientLogos = [
    'Government of South Sudan',
    'Juba Chamber of Commerce', 
    'South Sudan Sports Commission',
    'Nile Basin Initiative',
    'Ministry of Information',
    'South Sudan Development Bank',
    'Ministry of Culture',
    'UN South Sudan',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-background via-surface-dark to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Showcasing{' '}
              <span className="text-gradient-gold">Excellence</span>
              {' '}in Every Project
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From national celebrations to international conferences, explore our portfolio 
              of successful marketing campaigns and broadcasting achievements across South Sudan.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-playfair font-bold text-primary">200+</div>
                <div className="text-muted-foreground">Events Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-playfair font-bold text-primary">10M+</div>
                <div className="text-muted-foreground">Total Viewers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-playfair font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-playfair font-bold text-primary">99.9%</div>
                <div className="text-muted-foreground">Uptime Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & View Controls */}
      <section className="py-8 bg-surface-dark border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category.id)}
                  className={activeFilter === category.id 
                    ? "bg-primary text-primary-foreground" 
                    : "border-border hover:bg-muted"
                  }
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' 
                  ? "bg-primary text-primary-foreground" 
                  : "border-border hover:bg-muted"
                }
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' 
                  ? "bg-primary text-primary-foreground" 
                  : "border-border hover:bg-muted"
                }
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={viewMode === 'grid' 
            ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "space-y-8"
          }>
            {filteredProjects.map((project) => (
              <Card key={project.id} className="border-border bg-card hover-lift overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground border-none">
                    {categories.find(cat => cat.id === project.category)?.label}
                  </Badge>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-background/20 backdrop-blur-sm">
                    <Button 
                      size="lg"
                      className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full w-16 h-16 p-0"
                    >
                      <Play className="w-6 h-6 fill-current" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {project.views}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span><strong>Client:</strong> {project.client}</span>
                    {project.attendees !== 'N/A' && (
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {project.attendees}
                      </span>
                    )}
                  </div>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.services.slice(0, 2).map((service, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-primary/30">
                        {service}
                      </Badge>
                    ))}
                    {project.services.length > 2 && (
                      <Badge variant="outline" className="text-xs border-muted">
                        +{project.services.length - 2} more
                      </Badge>
                    )}
                  </div>

                  {/* Results */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Results:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-muted/30 rounded-lg p-4 mb-4">
                    <Quote className="w-4 h-4 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground italic mb-2">
                      "{project.testimonial.text}"
                    </p>
                    <p className="text-xs text-primary font-medium">
                      — {project.testimonial.author}
                    </p>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 hover:bg-primary/10 text-foreground"
                  >
                    View Case Study <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-playfair font-bold text-foreground mb-4">
              Trusted by{' '}
              <span className="text-gradient-gold">Leading Organizations</span>
            </h2>
            <p className="text-muted-foreground">
              We're proud to work with South Sudan's most respected institutions and organizations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center p-4 bg-card/50 rounded-lg border border-border">
                <div className="text-muted-foreground font-medium text-sm">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10 border-y border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
            Ready to Create Your{' '}
            <span className="text-gradient-gold">Success Story?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our portfolio of successful projects. Let's discuss how we can 
            help you achieve exceptional results for your next event or campaign.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-lift hover-glow"
            >
              <Link to="/contact">
                <Star className="w-5 h-5 mr-2" />
                Start Your Project
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 font-semibold hover-lift"
            >
              <Link to="/services">
                View Services <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;