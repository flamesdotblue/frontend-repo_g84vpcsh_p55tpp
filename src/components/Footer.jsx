import React from 'react';
import { Instagram, Mail, Twitter, Linkedin } from 'lucide-react';

const FooterLink = ({ href, children }) => (
  <a href={href} className="block text-sm text-white/70 hover:text-white py-1">{children}</a>
);

export default function Footer() {
  return (
    <footer className="ml-60 border-t border-white/10 bg-[#0b0b0f]">
      <div className="mx-auto max-w-6xl px-6 py-10 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500" />
            <div className="text-white font-semibold">Aame</div>
          </div>
          <p className="text-sm text-white/70">AI for Education — curiosity-fueled, outcome-driven.</p>
          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20"><Instagram size={18} /></a>
            <a href="mailto:connect@theaame.com" className="p-2 rounded-md bg-white/10 hover:bg-white/20"><Mail size={18} /></a>
            <a href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20"><Twitter size={18} /></a>
            <a href="https://www.linkedin.com/company/i-am-aame" target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/10 hover:bg-white/20"><Linkedin size={18} /></a>
          </div>
          <div className="mt-6 text-xs text-white/60">certifications</div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Use Cases</h4>
          <FooterLink href="#/use-cases">Overview</FooterLink>
          <FooterLink href="#/">Study prep</FooterLink>
          <FooterLink href="#/use-cases">Upskilling</FooterLink>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">About</h4>
          <FooterLink href="#/about">Aame for enterprise</FooterLink>
          <FooterLink href="#/about">Enterprise guide</FooterLink>
          <FooterLink href="#/about">Security</FooterLink>
          <FooterLink href="#/faqs">FAQ</FooterLink>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Resources</h4>
          <FooterLink href="#/resources">AIM Aame</FooterLink>
          <FooterLink href="#/pricing">Pricing</FooterLink>
          <FooterLink href="#/careers">Career</FooterLink>
          <FooterLink href="#/faqs">FAQ's</FooterLink>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Support</h4>
          <FooterLink href="#/support">Help center</FooterLink>
          <FooterLink href="#/support">Contact us</FooterLink>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Legal</h4>
          <FooterLink href="#/legal">Privacy Policy</FooterLink>
          <FooterLink href="#/legal">Terms of Service</FooterLink>
          <FooterLink href="#/legal">Data Processing Agreement</FooterLink>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-8 text-xs text-white/50">
        © {new Date().getFullYear()} Aame. All rights reserved.
      </div>
    </footer>
  );
}
