import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Image from '../AppImage';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { path: '/', label: 'Inicio', icon: 'Home' },
    { path: '/about-us', label: 'Nosotros', icon: 'Users' },
    // { path: '/autoridades', label: 'Autoridades', icon: 'Shield' },
    { path: '/projects', label: 'Proyectos', icon: 'Briefcase' },
  ];

  const isActivePath = (path) => location?.pathname === path;

  return (
    <>
      <header className={`header-glass transition-all duration-500 py-0 ${isScrolled ? 'header-glass-scrolled' : 'shadow-none'}`}>
        <div className="header-container">
          <div className="header-content">
            <Link to="/" className="header-logo">
              <div className="header-logo-icon py-1">
                <Image
                  src="/assets/logo.jpg"
                  alt="COVIMUS Logo"
                  className="w-full h-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="header-nav hidden lg:flex" aria-label="Navegación principal">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-label={`Ir a ${item.label}`}
                  className={`header-nav-link ${isActivePath(item.path) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                aria-label="Ir a Atención al Ciudadano"
                className="ml-4 px-6 py-2 rounded-lg font-semibold transition-all duration-300 bg-accent text-accent-foreground hover:scale-105"
              >
                Atención al Ciudadano
              </Link>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="mobile-menu-button"
              aria-label="Abrir menú"
            >
              <Icon name="Menu" size={24} color="var(--color-foreground)" />
            </button>
          </div>
        </div>
      </header >
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
      />
    </>
  );
};

export default Header;