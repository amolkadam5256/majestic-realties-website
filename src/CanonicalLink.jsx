import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CanonicalLink = () => {
  const location = useLocation();

  useEffect(() => {
    // Map each route to its canonical URL
    const canonicalMap = {
      '/': 'https://www.majesticrealties.com/',
      '/projects': 'https://www.majesticrealties.com/projects',
      '/about': 'https://www.majesticrealties.com/about',
      '/our-team': 'https://www.majesticrealties.com/our-team',
      '/contact': 'https://www.majesticrealties.com/contact',
      '/privacy-policy': 'https://www.majesticrealties.com/privacy-policy',
      '/projects/royal_vista': 'https://www.majesticrealties.com/projects/royal_vista',
      '/projects/royal_casa': 'https://www.majesticrealties.com/projects/royal_casa',
      '/projects/mount_castle': 'https://www.majesticrealties.com/projects/mount_castle',
      '/legal-expert': 'https://www.majesticrealties.com/legal-expert',
      '/financial-expert': 'https://www.majesticrealties.com/financial-expert',
      '/architectural-expert': 'https://www.majesticrealties.com/architectural-expert',
      '/career': 'https://www.majesticrealties.com/career',
      '/real-estate-influence': 'https://www.majesticrealties.com/real-estate-influence',
      '/real-estate-influence/milind-nikam': 'https://www.majesticrealties.com/real-estate-influence/milind-nikam',
      '/real-estate-influence/zakki-khan': 'https://www.majesticrealties.com/real-estate-influence/zakki-khan',
      '/legal-experts/zakki-khan': 'https://www.majesticrealties.com/legal-experts/zakki-khan',
      '/financial-expert/zakki-khan': 'https://www.majesticrealties.com/financial-expert/zakki-khan',
      '/mount-castle-farmhouse-bungalow-plots-yevat': 'https://www.majesticrealties.com/mount-castle-farmhouse-bungalow-plots-yevat',
      '/royal-vista-na-residential-plots-yevat': 'https://www.majesticrealties.com/royal-vista-na-residential-plots-yevat',
      '/royal-casa-na-residential-plots-yavat': 'https://www.majesticrealties.com/royal-casa-na-residential-plots-yavat',
    };

    const canonicalUrl = canonicalMap[location.pathname] || `https://www.majesticrealties.com${location.pathname}`;

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }

    link.setAttribute('href', canonicalUrl);
  }, [location]);

  return null;
};

export default CanonicalLink;
