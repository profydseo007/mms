'use client';

import React from 'react';
import { ActivePage } from '@/lib/types';
import { Mail, Globe, Share2, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-soft-gray border-t border-outline-variant/20 w-full mt-12">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <div onClick={() => onNavigate('home')} className="flex items-center cursor-pointer">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2yGxrC4Kei9fXSf6ye1GNFumbjoh74eclxhyJXD0vhlpt-qjKZp73AfFIIibakj1gEbmNoJ6qQLdYSr95j_EUf5iaNd9Z0NMrkoWeMC8bxDz0o2lFwDBG3obFf_nj5AWi45pYBcZEKVEJ3deavLesEieFE89BhkaMlE6iQQ3FCSWysyXYrsEGu1ko8RAYQG4-iBKirBzyiTDVK0lKb__9V9dOHgreWgJzvYIo44hEWv5pC5Hw-_-shU7Arw_B1_0x0-U" 
              alt="Math Make Smart Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Professional mathematics tutoring for a global generation. Patient, structured, and effective.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-royal-purple hover:bg-royal-purple hover:text-white transition-all shadow-sm">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-royal-purple hover:bg-royal-purple hover:text-white transition-all shadow-sm">
              <Share2 className="w-5 h-5" />
            </a>
            <a href="mailto:info@mathmakesmart.com" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-royal-purple hover:bg-royal-purple hover:text-white transition-all shadow-sm">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-label-md text-label-md text-charcoal uppercase tracking-wider mb-6">Explore</h4>
          <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors cursor-pointer text-left">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('curriculum')} className="hover:text-primary transition-colors cursor-pointer text-left">
                Curriculum
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('mock-papers')} className="hover:text-primary transition-colors cursor-pointer text-left">
                Mock Papers
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('predicted-papers')} className="hover:text-primary transition-colors cursor-pointer text-left">
                Predicted Papers
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors cursor-pointer text-left">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('blogs')} className="hover:text-primary transition-colors cursor-pointer text-left">
                Blogs
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('a-levels')} className="hover:text-primary transition-colors cursor-pointer text-left">
                Test Preparation
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('trial')} className="hover:text-primary transition-colors cursor-pointer text-left">
                Free Trial Booking
              </button>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="font-label-md text-label-md text-charcoal uppercase tracking-wider mb-6">Legal</h4>
          <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
            <li>
              <button onClick={() => onNavigate('privacy')} className="hover:text-primary transition-colors cursor-pointer text-left">
                Privacy Policy
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('refund')} className="hover:text-primary transition-colors cursor-pointer text-left">
                Refund Policy
              </button>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors block text-left">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors block text-left">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h4 className="font-label-md text-label-md text-charcoal uppercase tracking-wider mb-6">Global Support</h4>
          <div className="space-y-3 font-body-md text-body-md text-on-surface-variant text-sm">
            <p className="flex items-center gap-2">
              <span className="font-semibold text-charcoal">USA:</span> +1 347 491 4870
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-charcoal">UK:</span> +44 740 001 8383
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-charcoal">AUS:</span> +61 48 089 0005
            </p>
            <p className="flex items-center gap-2 pt-2 text-royal-purple font-medium">
              <Mail className="w-4 h-4" />
              <span>info@mathmakesmart.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright & Times Bar */}
      <div className="border-t border-surface-container py-8 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant font-label-sm text-label-sm text-xs">
          <p>© 2026 Math Make Smart LLC. All rights reserved.</p>
          <div className="flex gap-6 flex-wrap justify-center">
            <span>US Times: 11 am - 8 pm EST</span>
            <span>UK Times: 4 pm - 12 am GMT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
