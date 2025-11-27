import React from 'react';
import { Skull } from 'lucide-react';
import Slider from './misc/CardSlider';

export default function FeatureCard({ title, text, icon, images }: { title: string; text: string; icon?: React.ReactNode; images?: string[] }) {
  return (
    <div className="bg-gradient-to-br from-[#0f0f0f] via-[#1b1b1b] to-[#131313] p-6 rounded-xl border border-neutral-800 shadow-xl hover:-translate-y-2 transition-transform">
      <div className="flex items-start justify-center gap-4">
        <div className="p-3 bg-black/30 rounded-lg ring-1 ring-white/5">
          {icon ?? <Skull />}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-300 mt-2">{text}</p>
          {images && images.length > 0 &&<Slider images={images}/>}
        </div>
      </div>
    </div>
  );
}
