'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ActivePage } from '@/lib/types';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const LMS_ROUTES = new Set(['/au', '/nz']);

function getPortalUrl(pathname: string): string {
  const base = '/' + pathname.split('/')[1].toLowerCase();
  if (LMS_ROUTES.has(base)) {
    return 'https://lms.mathmakesmart.com/';
  }
  return 'https://learn.mathmakesmart.com/';
}

interface HeaderProps {
  currentPage: ActivePage;
  currentSubject?: string;
  onNavigate: (page: ActivePage, subjectTitle?: string) => void;
}

export default function HeaderCA({ currentPage, currentSubject, onNavigate }: HeaderProps) {
  const pathname = usePathname();
  const portalUrl = getPortalUrl(pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [findTutorOpen, setFindTutorOpen] = useState(false);
  const [resourcesHubOpen, setResourcesHubOpen] = useState(false);
  const [subjectsOpen, setSubjectsOpen] = useState(false);
  const [testPrepOpen, setTestPrepOpen] = useState(false);

  const subjects = ['Maths', 'English', 'Science', 'Physics', 'Chemistry', 'Biology'];
  const testPreps = ['11 Plus', '13 Plus', 'GCSE', 'IGCSE', 'A Levels'];

  const handleSubjectClick = (sub: string) => {
    onNavigate('subject', sub);
    setFindTutorOpen(false);
    setSubjectsOpen(false);
    setMobileMenuOpen(false);
  };

  const handleTestPrepClick = (prep: string) => {
    if (prep === 'A Levels') {
      onNavigate('a-levels');
    } else {
      onNavigate('test-prep', prep);
    }
    setFindTutorOpen(false);
    setTestPrepOpen(false);
    setMobileMenuOpen(false);
  };

  const isFindTutorActive = ['curriculum', 'subject', 'test-prep', 'a-levels'].includes(currentPage);

  return (
    <header className="w-full top-0 sticky z-50 bg-surface shadow-sm border-b border-surface-container">
      <nav className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        {/* Logo */}
        <div 
          onClick={() => onNavigate('home')} 
          className="flex items-center h-12 cursor-pointer"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9RdoLE7BuP9ONuKYV0WZDIVdkalpHRpS0TSkWuawKWzHhyrI3Yr_DOGqxatHcGvl8jQrYrCiXmo6r7elFP8cGdr1ewa-aNxluv1L7_9LzSCRYk-jxdk8qw9ejf6Icb2mCWWKY8kk9_NrE0xYJGHP_cj59fT6qDuueVf40friCKb66kXtYRDc1sNiTdvBVAS3w7SpS7sUAElGC_7dKo02geG8bEXAnInXmdnGQDivXICHXVX5ec2hxZVZglmxuo2y-UvE" 
            alt="Math Make Smart Logo" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
          {/* Find a Tutor Dropdown */}
          <div className="relative group">
            <button 
              className={`font-label-md text-label-md flex items-center gap-1 transition-colors duration-200 cursor-pointer ${
                isFindTutorActive ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-charcoal hover:text-primary'
              }`}
            >
              Find a Tutor
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-dropdown border border-surface-container opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
              {/* Curriculum */}
              <button
                onClick={() => onNavigate('curriculum')}
                className="block w-full text-left px-4 py-2.5 text-sm text-charcoal hover:bg-soft-gray hover:text-primary transition-colors cursor-pointer"
              >
                Curriculum
              </button>

              {/* Subjects with Submenu */}
              <div className="relative group/sub">
                <div className="flex items-center justify-between w-full px-4 py-2.5 text-sm text-charcoal hover:bg-soft-gray hover:text-primary transition-colors cursor-pointer">
                  <span>Subjects</span>
                  <ChevronRight className="w-4 h-4 text-on-surface-variant group-hover/sub:text-primary" />
                </div>
                <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-dropdown border border-surface-container opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50 py-2">
                  {subjects.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => handleSubjectClick(sub)}
                      className="block w-full text-left px-4 py-2 text-sm text-charcoal hover:bg-soft-gray hover:text-primary transition-colors cursor-pointer"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </div>

              {/* Test Preparation with Submenu */}
              <div className="relative group/test">
                <div className="flex items-center justify-between w-full px-4 py-2.5 text-sm text-charcoal hover:bg-soft-gray hover:text-primary transition-colors cursor-pointer">
                  <span>Test Preparation</span>
                  <ChevronRight className="w-4 h-4 text-on-surface-variant group-hover/test:text-primary" />
                </div>
                <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-dropdown border border-surface-container opacity-0 invisible group-hover/test:opacity-100 group-hover/test:visible transition-all duration-200 z-50 py-2">
                  {testPreps.map((prep) => (
                    <button
                      key={prep}
                      onClick={() => handleTestPrepClick(prep)}
                      className="block w-full text-left px-4 py-2 text-sm text-charcoal hover:bg-soft-gray hover:text-primary transition-colors cursor-pointer"
                    >
                      {prep}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Resources Hub Dropdown */}
          <div className="relative group">
            <button 
              className={`font-label-md text-label-md flex items-center gap-1 transition-colors duration-200 cursor-pointer ${
                ['resources-hub', 'mock-papers', 'predicted-papers'].includes(currentPage) ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-charcoal hover:text-primary'
              }`}
            >
              Resources Hub
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-dropdown border border-surface-container opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
              <button
                onClick={() => onNavigate('mock-papers')}
                className="block w-full text-left px-4 py-2.5 text-sm text-charcoal hover:bg-soft-gray hover:text-primary transition-colors cursor-pointer"
              >
                Mock Papers
              </button>
              <button
                onClick={() => onNavigate('predicted-papers')}
                className="block w-full text-left px-4 py-2.5 text-sm text-charcoal hover:bg-soft-gray hover:text-primary transition-colors cursor-pointer"
              >
                Predicted Papers
              </button>
            </div>
          </div>

          {/* Pricing */}
          <button 
            onClick={() => onNavigate('pricing')} 
            className={`font-label-md text-label-md transition-colors duration-200 cursor-pointer ${
              currentPage === 'pricing' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-charcoal hover:text-primary'
            }`}
          >
            Pricing
          </button>

          {/* Blogs */}
          <button
            onClick={() => onNavigate('blogs')}
            className={`font-label-md text-label-md transition-colors duration-200 cursor-pointer ${
              ['blogs', 'blog'].includes(currentPage) ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-charcoal hover:text-primary'
            }`}
          >
            Blogs
          </button>

          {/* About Us */}
          <button 
            onClick={() => onNavigate('about')} 
            className={`font-label-md text-label-md transition-colors duration-200 cursor-pointer ${
              currentPage === 'about' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-charcoal hover:text-primary'
            }`}
          >
            About Us
          </button>
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <a
            href={portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-label-md font-label-md px-6 py-2.5 border-2 border-royal-purple text-royal-purple rounded-lg font-medium hover:bg-soft-gray active:scale-95 transition-all cursor-pointer"
          >
            Login
          </a>
          <button 
            onClick={() => onNavigate('trial')}
            className="text-label-md font-label-md px-6 py-2.5 bg-royal-purple text-on-primary rounded-lg font-medium active:scale-95 transition-all shadow-ambient cursor-pointer"
          >
            Get Free Trial
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-charcoal focus:outline-none p-2 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-surface-container bg-surface px-4 py-6 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {/* Mobile Find a Tutor Parent Collapse */}
          <div className="space-y-1">
            <button 
              onClick={() => setFindTutorOpen(!findTutorOpen)}
              className="flex justify-between items-center w-full font-label-md text-charcoal hover:text-primary py-2 cursor-pointer"
            >
              <span>Find a Tutor</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${findTutorOpen ? 'rotate-180' : ''}`} />
            </button>

            {findTutorOpen && (
              <div className="pl-4 border-l-2 border-surface-container space-y-3 py-2">
                {/* Curriculum */}
                <button 
                  onClick={() => { onNavigate('curriculum'); setMobileMenuOpen(false); }}
                  className="block w-full text-left font-label-md text-charcoal hover:text-primary py-1 cursor-pointer text-sm"
                >
                  Curriculum
                </button>

                {/* Mobile Subjects Nested Collapse */}
                <div className="space-y-1">
                  <button 
                    onClick={() => setSubjectsOpen(!subjectsOpen)}
                    className="flex justify-between items-center w-full font-label-md text-charcoal hover:text-primary py-1 cursor-pointer text-sm"
                  >
                    <span>Subjects</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${subjectsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {subjectsOpen && (
                    <div className="pl-4 border-l-2 border-surface-container space-y-2 py-1">
                      {subjects.map((sub) => (
                        <button
                          key={sub}
                          onClick={() => handleSubjectClick(sub)}
                          className="block w-full text-left py-1 text-sm text-on-surface-variant hover:text-primary cursor-pointer"
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Test Prep Nested Collapse */}
                <div className="space-y-1">
                  <button 
                    onClick={() => setTestPrepOpen(!testPrepOpen)}
                    className="flex justify-between items-center w-full font-label-md text-charcoal hover:text-primary py-1 cursor-pointer text-sm"
                  >
                    <span>Test Preparation</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${testPrepOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {testPrepOpen && (
                    <div className="pl-4 border-l-2 border-surface-container space-y-2 py-1">
                      {testPreps.map((prep) => (
                        <button
                          key={prep}
                          onClick={() => handleTestPrepClick(prep)}
                          className="block w-full text-left py-1 text-sm text-on-surface-variant hover:text-primary cursor-pointer"
                        >
                          {prep}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Resources Hub Parent Collapse */}
          <div className="space-y-1">
            <button 
              onClick={() => setResourcesHubOpen(!resourcesHubOpen)}
              className="flex justify-between items-center w-full font-label-md text-charcoal hover:text-primary py-2 cursor-pointer"
            >
              <span>Resources Hub</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesHubOpen ? 'rotate-180' : ''}`} />
            </button>

            {resourcesHubOpen && (
              <div className="pl-4 border-l-2 border-surface-container space-y-2 py-2">
                <button 
                  onClick={() => { onNavigate('mock-papers'); setMobileMenuOpen(false); }}
                  className="block w-full text-left font-label-md text-charcoal hover:text-primary py-1 cursor-pointer text-sm"
                >
                  Mock Papers
                </button>
                <button 
                  onClick={() => { onNavigate('predicted-papers'); setMobileMenuOpen(false); }}
                  className="block w-full text-left font-label-md text-charcoal hover:text-primary py-1 cursor-pointer text-sm"
                >
                  Predicted Papers
                </button>
              </div>
            )}
          </div>

          {/* Mobile Pricing */}
          <button 
            onClick={() => { onNavigate('pricing'); setMobileMenuOpen(false); }}
            className="block w-full text-left font-label-md text-charcoal hover:text-primary py-2 cursor-pointer"
          >
            Pricing
          </button>

          {/* Mobile Blogs */}
          <button
            onClick={() => { onNavigate('blogs'); setMobileMenuOpen(false); }}
            className="block w-full text-left font-label-md text-charcoal hover:text-primary py-2 cursor-pointer"
          >
            Blogs
          </button>

          {/* Mobile About Us */}
          <button 
            onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
            className="block w-full text-left font-label-md text-charcoal hover:text-primary py-2 cursor-pointer"
          >
            About Us
          </button>

          {/* Mobile Action Buttons */}
          <div className="pt-4 border-t border-surface-container flex flex-col gap-3">
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 border-2 border-royal-purple text-royal-purple rounded-lg font-medium cursor-pointer"
            >
              Login
            </a>
            <button 
              onClick={() => { onNavigate('trial'); setMobileMenuOpen(false); }}
              className="w-full text-center py-2.5 bg-royal-purple text-on-primary rounded-lg font-medium cursor-pointer"
            >
              Get Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
