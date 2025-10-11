import { LucideGithub, LucideExternalLink, LucideLinkedin, LucideUser2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/sagarDevHub',
      icon: <LucideGithub className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sagargulla/',
      icon: <LucideLinkedin className="w-5 h-5" />,
    },
    {
      name: 'Portfolio',
      href: 'https://sagar-og.netlify.app/',
      icon: <LucideUser2 className="w-5 h-5" />,
    },
  ];

  const footerLinks = [
    {
      name: 'Documentation',
      href: '/docs',
    },
    {
      name: 'Privacy',
      href: '/privacy',
    },
    {
      name: 'Terms',
      href: '/terms',
    },
  ];

  return (
    <footer className="border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-12">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            {/* Brand Section */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link href="/" className="flex items-center gap-2 group">
                <Image src={'/logo.svg'} alt="Logo" height={40} width={40} />
                <span className="text-lg font-semibold text-zinc-900 dark:text-white">
                  NeuraCode
                </span>
              </Link>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center md:text-left max-w-md">
                A modern code editor for vibe coders. Build, create, and innovate with style.
              </p>
            </div>

            {/* Links Section */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Footer Links */}
              <div className="flex items-center gap-6">
                {footerLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-all duration-200 group"
                    aria-label={`Visit our ${link.name}`}
                  >
                    {link.icon}
                    <LucideExternalLink className="w-3 h-3 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-zinc-500 dark:text-zinc-500 text-center sm:text-left">
                &copy; {currentYear} NeuraCode. All rights reserved.
              </p>

              <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-600">
                <span>Made with</span>
                <div className="animate-pulse">❤️</div>
                <span>for the developer community.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
