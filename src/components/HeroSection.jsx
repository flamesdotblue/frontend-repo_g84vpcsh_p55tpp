import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-2xl bg-[#0b0b0f] border border-white/10">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-transparent pointer-events-none" />

      {/* Floating white capsule */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div
            className="mx-auto flex w-[320px] sm:w-[460px] items-center justify-between gap-4 rounded-full bg-white/90 px-6 py-4 shadow-xl backdrop-blur-md animate-[float_6s_ease-in-out_infinite]"
            style={{ boxShadow: '0 10px 40px rgba(255,255,255,0.15)' }}
          >
            <div>
              <p className="text-xs tracking-wide text-gray-500">Digital identity learning</p>
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Iridescent, modern, and built for outcomes</h1>
            </div>
            <a
              href="#/waitlist"
              className="shrink-0 rounded-full bg-gray-900 px-4 py-2 text-white text-sm font-medium hover:bg-black/90 transition-colors"
            >
              Join waitlist
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
          100% { transform: translate(-50%, -50%) translateY(0); }
        }
      `}</style>
    </section>
  );
}
