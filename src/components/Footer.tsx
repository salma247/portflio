import React from 'react';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaTwitter 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/salma247',
      label: 'GitHub'
    },
    {
      icon: FaLinkedinIn,
      href: 'https://www.linkedin.com/in/salma-ahmed-mohammed',
      label: 'LinkedIn'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:salmaelhamshary1@gmail.com',
      label: 'Email'
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Salma Mohammed</h3>
            <p className="text-gray-400">Frontend Engineer | React & Next.js Specialist</p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-300 p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Salma Mohammed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;