import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Skills } from '../components/Skills';

export function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <Skills />
    </div>
  );
}