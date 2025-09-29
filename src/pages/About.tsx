import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Globe, 
  Zap,
  ArrowRight,
  Mail,
  Linkedin
} from 'lucide-react';
import heroBroadcast from '@/assets/hero-broadcast.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every broadcast and marketing campaign we deliver.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for storytelling and technology drives us to create memorable experiences.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology to deliver world-class broadcasting solutions.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Committed to elevating South Sudan\'s media landscape and supporting local talent.',
    },
  ];

  const team = [
    {
      name: 'James Mawut',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 10+ years in broadcasting and marketing across East Africa.',
      image: '/placeholder-team-1.jpg',
    },
    {
      name: 'Grace Nyankuer',
      role: 'Head of Broadcasting',
      bio: 'Technical expert specializing in live streaming and multi-camera production.',
      image: '/placeholder-team-2.jpg',
    },
    {
      name: 'Peter Gai',
      role: 'Marketing Director',
      bio: 'Strategic marketing professional with deep understanding of South Sudan market.',
      image: '/placeholder-team-3.jpg',
    },
    {
      name: 'Mary Achol',
      role: 'Creative Director',
      bio: 'Award-winning creative with expertise in brand storytelling and visual design.',
      image: '/placeholder-team-4.jpg',
    },
  ];

  const milestones = [
    { year: '2019', event: 'Liberty Media founded in Juba' },
    { year: '2020', event: 'First major live broadcast - Independence Day Celebration' },
    { year: '2021', event: 'Expanded to marketing services' },
    { year: '2022', event: 'Launched multi-camera broadcasting capabilities' },
    { year: '2023', event: 'Reached 50+ successful events' },
    { year: '2024', event: 'Became South Sudan\'s premier broadcasting agency' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBroadcast})` }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Pioneering{' '}
              <span className="text-gradient-gold">Broadcasting Excellence</span>
              {' '}in South Sudan
            </h1>
            <p className="text-xl text-muted-foreground">
              From humble beginnings to becoming South Sudan's most trusted marketing and 
              broadcasting partner, our journey is defined by innovation, quality, and 
              an unwavering commitment to our clients' success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Our Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
                Empowering Stories,{' '}
                <span className="text-gradient-gold">Connecting Communities</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                To provide exceptional marketing and broadcasting services that amplify voices, 
                celebrate achievements, and bring communities together across South Sudan. 
                We believe every story deserves to be told with excellence and reach its intended audience.
              </p>
              
              <div className="flex items-center space-x-4 p-6 bg-primary/10 rounded-lg border border-primary/20">
                <Eye className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-playfair font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the leading media and marketing agency in East Africa, known for 
                    innovation, quality, and transformative storytelling.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-border bg-card hover-lift">
                  <CardContent className="p-6 text-center">
                    <value.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-playfair font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Milestones of{' '}
              <span className="text-gradient-gold">Excellence</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-0.5" />
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center mb-8 last:mb-0">
                  <div className="flex items-center w-full">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                      <Award className="w-4 h-4 text-primary-foreground" />
                    </div>
                    
                    <div className="ml-6 md:ml-8 flex-grow">
                      <div className="bg-card border border-border rounded-lg p-6 hover-lift">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <span className="text-primary font-bold text-lg">{milestone.year}</span>
                            <p className="text-foreground mt-1">{milestone.event}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Meet Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              The Minds Behind{' '}
              <span className="text-gradient-gold">Liberty Media</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of creative professionals, technical experts, and strategic thinkers 
              work together to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-border bg-card hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-gold-light rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-3">
                    <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/10">
                      <Linkedin className="w-4 h-4" />
                    </Button>
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
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
            Ready to Work with{' '}
            <span className="text-gradient-gold">South Sudan's Best?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the growing list of satisfied clients who trust Liberty Media 
            with their most important events and marketing initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-lift hover-glow"
            >
              <Link to="/contact">
                <Zap className="w-5 h-5 mr-2" />
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
                View Our Services <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;