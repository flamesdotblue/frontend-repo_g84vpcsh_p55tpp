import React from 'react';
import { Home, Layers, Rocket, Star, BookOpen, LifeBuoy, ScrollText, Clock } from 'lucide-react';

const NavItem = ({ icon: Icon, label, href, active }) => (
  <a
    href={href}
    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-white/10 ${
      active ? 'bg-white/10 text-white' : 'text-white/80'
    }`}
  >
    <Icon size={18} />
    <span className="text-sm font-medium">{label}</span>
  </a>
);

export default function Sidebar({ currentRoute }) {
  return (
    <aside className="fixed left-0 top-0 h-full w-60 bg-gradient-to-b from-[#0a0a0a] to-[#111] border-r border-white/10 p-4 flex flex-col">
      <div className="flex items-center gap-2 px-2 py-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500" />
        <div className="text-white font-semibold tracking-wide">Aame</div>
      </div>
      <nav className="mt-4 grid gap-1">
        <NavItem icon={Home} label="Home" href="#/" active={currentRoute === '/'} />
        <NavItem icon={Layers} label="Use Cases" href="#/use-cases" active={currentRoute === '/use-cases'} />
        <NavItem icon={Star} label="Pricing" href="#/pricing" active={currentRoute === '/pricing'} />
        <NavItem icon={Rocket} label="About" href="#/about" active={currentRoute === '/about'} />
        <NavItem icon={BookOpen} label="Resources" href="#/resources" active={currentRoute === '/resources'} />
        <NavItem icon={LifeBuoy} label="Support" href="#/support" active={currentRoute === '/support'} />
        <NavItem icon={ScrollText} label="Legal" href="#/legal" active={currentRoute === '/legal'} />
        <NavItem icon={Clock} label="Waitlist" href="#/waitlist" active={currentRoute === '/waitlist'} />
      </nav>
      <div className="mt-auto pt-4">
        <div className="px-2 text-xs uppercase tracking-wide text-white/60 mb-2">Early access</div>
        <a
          href="#/waitlist"
          className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-white text-gray-900 hover:bg-white/90 transition-colors"
        >
          <Clock size={16} />
          <span className="text-sm">Join waitlist</span>
        </a>
        <p className="mt-2 px-2 text-[11px] text-white/50">Be first to try Aame when we open early access.</p>
      </div>
    </aside>
  );
}
