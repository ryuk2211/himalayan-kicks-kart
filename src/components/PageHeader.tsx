
import { useLanguage } from '@/contexts/LanguageContext';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  background?: 'light' | 'dark';
}

const PageHeader = ({ title, subtitle, background = 'light' }: PageHeaderProps) => {
  const { t } = useLanguage();
  
  return (
    <div className={`py-12 ${background === 'dark' ? 'bg-brand-blue text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
        {subtitle && (
          <p className={`text-lg ${background === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
