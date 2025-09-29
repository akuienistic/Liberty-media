import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  Search,
  TrendingUp,
  BookOpen,
  Share2,
  MessageCircle,
  Heart,
  Filter
} from 'lucide-react';
import heroBroadcast from '@/assets/hero-broadcast.jpg';
import marketingStrategy from '@/assets/marketing-strategy.jpg';
import eventVenue from '@/assets/event-venue.jpg';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [adminPosts, setAdminPosts] = useState([]);

  useEffect(() => {
    // Load admin posts from localStorage
    const savedPosts = localStorage.getItem('liberty-blog-posts');
    if (savedPosts) {
      setAdminPosts(JSON.parse(savedPosts));
    }
  }, []);

  const categories = [
    { id: 'all', label: 'All Posts', count: 12 + adminPosts.length },
    { id: 'broadcasting', label: 'Broadcasting', count: 5 },
    { id: 'marketing', label: 'Marketing', count: 4 },
    { id: 'industry', label: 'Industry News', count: 3 },
  ];

  const featuredPost = {
    id: 1,
    title: 'The Future of Live Broadcasting in South Sudan: Trends and Opportunities',
    excerpt: 'Exploring how emerging technologies and changing viewer habits are reshaping the broadcasting landscape in South Sudan and what it means for businesses and content creators.',
    category: 'broadcasting',
    author: 'James Mawut',
    date: 'March 15, 2024',
    readTime: '8 min read',
    image: heroBroadcast,
    featured: true,
    tags: ['Broadcasting', 'Technology', 'South Sudan', 'Future Trends'],
  };

  const blogPosts = [
    {
      id: 2,
      title: 'How to Create Compelling Marketing Content for South Sudan Audiences',
      excerpt: 'Learn the key strategies for developing marketing content that resonates with local audiences while maintaining international appeal.',
      category: 'marketing',
      author: 'Grace Nyankuer',
      date: 'March 10, 2024',
      readTime: '6 min read',
      image: marketingStrategy,
      tags: ['Marketing', 'Content Strategy', 'Local Audience'],
      likes: 24,
      comments: 8,
    },
    {
      id: 3,
      title: 'Event Planning 101: Essential Elements for Successful Broadcasting',
      excerpt: 'A comprehensive guide to planning events with broadcasting in mind, from technical requirements to audience engagement strategies.',
      category: 'broadcasting',
      author: 'Peter Gai',
      date: 'March 5, 2024',
      readTime: '10 min read',
      image: eventVenue,
      tags: ['Event Planning', 'Broadcasting', 'Best Practices'],
      likes: 18,
      comments: 12,
    },
    {
      id: 4,
      title: 'Building Brand Recognition in Emerging Markets: A South Sudan Case Study',
      excerpt: 'Discover how businesses can establish strong brand presence in developing markets through strategic marketing and community engagement.',
      category: 'marketing',
      author: 'Mary Achol',
      date: 'February 28, 2024',
      readTime: '7 min read',
      image: marketingStrategy,
      tags: ['Branding', 'Market Strategy', 'Case Study'],
      likes: 31,
      comments: 15,
    },
    {
      id: 5,
      title: 'The Rise of Digital Media Consumption in East Africa',
      excerpt: 'Analysis of digital media trends across East Africa and their implications for content creators and broadcasters.',
      category: 'industry',
      author: 'James Mawut',
      date: 'February 22, 2024',
      readTime: '9 min read',
      image: heroBroadcast,
      tags: ['Digital Media', 'East Africa', 'Trends', 'Analytics'],
      likes: 27,
      comments: 9,
    },
    {
      id: 6,
      title: 'Sponsorship Success: Maximizing ROI for Event Partners',
      excerpt: 'Best practices for managing sponsorship relationships and delivering measurable value to event partners and sponsors.',
      category: 'marketing',
      author: 'Grace Nyankuer',
      date: 'February 18, 2024',
      readTime: '5 min read',
      image: eventVenue,
      tags: ['Sponsorship', 'ROI', 'Partnership Management'],
      likes: 22,
      comments: 6,
    },
  ];

  // Combine admin posts with default posts
  const allPosts = [...adminPosts, ...blogPosts];
  
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularTags = [
    'Broadcasting', 'Marketing Strategy', 'South Sudan', 'Event Planning', 
    'Digital Media', 'Brand Development', 'Technology', 'Analytics'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-background via-surface-dark to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              Liberty Media Blog
            </Badge>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Insights & Stories from{' '}
              <span className="text-gradient-gold">South Sudan's</span>
              {' '}Media Leaders
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with the latest trends, insights, and success stories 
              from the world of marketing and broadcasting in South Sudan and beyond.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 bg-card border-border focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              <TrendingUp className="w-4 h-4 mr-2" />
              Featured Article
            </Badge>
          </div>
          
          <Card className="border-border bg-card hover-lift overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-[4/3] lg:aspect-auto relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/60" />
              </div>
              
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 w-fit">
                  {categories.find(cat => cat.id === featuredPost.category)?.label}
                </Badge>
                
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-primary/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit hover-lift"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read Full Article
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories & Articles */}
      <section className="py-16 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-playfair font-semibold text-foreground mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        activeCategory === category.id
                          ? 'bg-primary/20 text-primary border border-primary/30'
                          : 'bg-card text-muted-foreground hover:bg-muted border border-border'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category.label}</span>
                        <Badge variant="outline" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div>
                <h3 className="text-lg font-playfair font-semibold text-foreground mb-4">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-xs border-border hover:border-primary/30 hover:bg-primary/10 cursor-pointer transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-playfair font-bold text-foreground">
                  Latest Articles
                </h2>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Filter className="w-4 h-4 mr-2" />
                  {filteredPosts.length} articles
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="border-border bg-card hover-lift">
                    <div className="aspect-video relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground border-none">
                        {categories.find(cat => cat.id === post.category)?.label}
                      </Badge>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-lg font-playfair font-semibold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-primary/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                          <span className="flex items-center hover:text-primary transition-colors cursor-pointer">
                            <Heart className="w-4 h-4 mr-1" />
                            {post.likes}
                          </span>
                          <span className="flex items-center hover:text-primary transition-colors cursor-pointer">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.comments}
                          </span>
                          <button className="flex items-center hover:text-primary transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-primary/30 hover:bg-primary/10 text-foreground"
                        >
                          Read More <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary/30 hover:bg-primary/10 text-foreground"
                >
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary/10 border-y border-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
            Stay Updated with{' '}
            <span className="text-gradient-gold">Industry Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to our newsletter and get the latest articles, industry news, 
            and exclusive insights delivered directly to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-card border-border focus:border-primary"
            />
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
            Ready to Share Your{' '}
            <span className="text-gradient-gold">Story?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you need marketing strategy or event broadcasting, let's create 
            content worth sharing. Contact us to discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-lift hover-glow"
            >
              <Link to="/contact">
                <BookOpen className="w-5 h-5 mr-2" />
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

export default Blog;