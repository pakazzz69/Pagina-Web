import React from 'react';
import { Skull } from 'lucide-react';

export default function FeatureCard({ title, text, icon }: { title: string; text: string; icon?: React.ReactNode }) {
  return (
    <div className="group bg-gradient-to-br from-neutral-900/60 to-neutral-950 p-8 rounded-2xl border border-neutral-800 shadow-xl hover:border-red-700/50 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-6">
        <div className="p-4 bg-gradient-to-br from-red-900/30 to-red-950/30 rounded-xl ring-1 ring-red-700/30 group-hover:ring-red-600/50 transition-all text-red-500">
          {icon ?? <Skull size={32} />}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-300 leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}
