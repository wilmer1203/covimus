import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const MobileMenu = ({ isOpen, onClose, navigationItems }) => {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    onClose();
  }, [location?.pathname]);

  const isActivePath = (path) => location?.pathname === path;

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay animate-slide-in">
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-card shadow-glass"
        aria-label="Cerrar menú"
      >
        <Icon name="X" size={24} color="var(--color-foreground)" />
      </button>
      <div className="mobile-menu-content">
        <div className="flex items-center space-x-3 mb-10">
          <div className="w-32">
            <img
              src="/assets/logo.jpg"
              alt="COVIMUS Logo"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <nav className="mobile-menu-nav">
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={`mobile-menu-link flex items-center space-x-3 ${
                isActivePath(item?.path) ? 'active' : ''
              }`}
            >
              <Icon name={item?.icon} size={20} />
              <span>{item?.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <Link
            to="/contact"
            className="block w-full px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300"
            style={{
              background: 'var(--color-accent)',
              color: 'var(--color-accent-foreground)',
            }}
          >
            Atención al Ciudadano
          </Link>
        </div>

        <div className="mt-auto pt-8 border-t border-border">
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Icon name="Twitter" size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Icon name="Facebook" size={20} />
            </a>
            <a
              href="https://www.instagram.com/covimusplc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Icon name="Instagram" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;