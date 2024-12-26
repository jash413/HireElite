'use client';

import { Shield, Clock, Zap, Users, CheckCircle, Workflow } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { features } from './featureData';

export default function FeatureGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          {...feature}
          Icon={feature.icon}
          index={index}
        />
      ))}
    </div>
  );
}