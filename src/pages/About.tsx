
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div>
      <PageHeader 
        title={t('about')}
        subtitle="Nepal's First Sneaker-focused E-commerce"
        background="dark"
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Our Story Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <p className="text-gray-700 mb-4">
            SneakerSpot Nepal was born out of a passion for sneakers and a vision to bring authentic global brands to Nepali sneaker enthusiasts. Our journey began in 2020, when a group of friends noticed the lack of reliable sources for authentic sneakers in Nepal.
          </p>
          <p className="text-gray-700 mb-4">
            What started as a small Instagram page quickly grew into Nepal's first premium sneaker destination. We take pride in offering only authentic products, bringing the global sneaker culture to the streets of Kathmandu and beyond.
          </p>
          <p className="text-gray-700">
            Our mission is to provide Nepali customers with access to the world's best sneaker brands without the hassle of international shipping, customs fees, or concerns about authenticity. Whether you're a seasoned collector or buying your first pair of premium sneakers, we're here to help you find the perfect fit.
          </p>
        </div>
        
        {/* Cultural Connection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1569182324549-e5023dfbcc10?auto=format&fit=crop&w=800&q=80" 
              alt="Streets of Kathmandu" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Local Roots, Global Style</h2>
            <p className="text-gray-700 mb-4">
              We believe that fashion transcends borders while honoring local culture. Our company is proud to be Nepali-owned and operated, bringing global sneaker trends to our local community.
            </p>
            <p className="text-gray-700">
              Beyond just selling sneakers, we're building a community of sneaker enthusiasts in Nepal. From hosting local meetups to collaborating with Nepali artists for limited edition drops, we're fostering a vibrant sneaker culture that celebrates both global trends and our unique Nepali identity.
            </p>
            <div className="mt-4">
              <div className="flex items-center mb-2">
                <div className="np-flag h-4 w-4 mr-2"></div>
                <span className="font-medium">Proudly Nepali</span>
              </div>
              <div className="flex items-center">
                <span className="text-brand-blue mr-2">⟡</span>
                <span className="font-medium">Supporting Local Communities</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">Authenticity</h3>
              <p className="text-gray-700">
                We guarantee that every product we sell is 100% authentic. No fakes, no replicas, ever.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-700">
                We're committed to reducing our environmental footprint through eco-friendly packaging and sustainable practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-700">
                We support local artists, athletes, and entrepreneurs through collaborations and sponsorships.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=400&h=400&q=80" 
                alt="Team Member" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">Aditya Sharma</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80" 
                alt="Team Member" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">Priya Thapa</h3>
              <p className="text-gray-600">Creative Director</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80" 
                alt="Team Member" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">Rajesh Maharjan</h3>
              <p className="text-gray-600">Operations Manager</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80" 
                alt="Team Member" 
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">Sapana Gurung</h3>
              <p className="text-gray-600">Customer Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
