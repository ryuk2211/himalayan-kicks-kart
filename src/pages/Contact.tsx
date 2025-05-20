
import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would normally send the data to a backend
    // For now, we'll just show a success toast
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div>
      <PageHeader 
        title={t('contact')}
        subtitle="Get in touch with our team"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">{t('contactUs')}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Optional"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-field"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-brand-blue hover:bg-opacity-90"
              >
                {t('send')}
              </Button>
            </form>
          </div>
          
          {/* Right side - Contact Info & Map */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-brand-blue mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Physical Store & Office</p>
                    <p className="text-gray-600">
                      Thamel, Kathmandu, Nepal
                      <br />
                      Opposite to Thamel Marg, Second Floor
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-brand-blue mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Call or WhatsApp</p>
                    <p className="text-gray-600">
                      +977-9801234567
                      <br />
                      +977-9809876543
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-brand-blue mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-gray-600">
                      info@sneakerspotnepal.com
                      <br />
                      support@sneakerspotnepal.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold mb-3">{t('followUs')}</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-red">
                    <Instagram size={22} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-red">
                    <Facebook size={22} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-red">
                    <Twitter size={22} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Store Hours */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Store Hours</h3>
              
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-2 font-medium">Monday - Friday</td>
                    <td className="text-right">10:00 AM - 7:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Saturday</td>
                    <td className="text-right">11:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Sunday</td>
                    <td className="text-right">Closed</td>
                  </tr>
                </tbody>
              </table>
              
              <p className="mt-4 text-gray-600">
                * We are closed on public holidays
              </p>
            </div>
          </div>
        </div>
        
        {/* Map (this would be a Google Map in a real app) */}
        <div className="mt-12 bg-gray-200 rounded-lg overflow-hidden h-80">
          {/* This would be a Google Map in a real implementation */}
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <p className="text-gray-500">Map View of Store Location in Kathmandu</p>
            {/* In a real app, we'd embed a Google Map here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
