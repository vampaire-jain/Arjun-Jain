export interface Product {
  id: string;
  name: string;
  category: 'Agarbatti' | 'Dhoop Batti' | string;
  image: string;
  description: string;
  link?: string;
  tagline?: string;
  idealFor?: string[];
  ritualRole?: string;
}

export interface ValuePoint {
  id: string;
  title: string;
  description: string;
  iconName: 'Sparkles' | 'HeartHandshake' | 'SunMedium' | 'Wind';
}

export type CategoryFilter =
  | 'All'
  | 'Agarbatti'
  | 'Dhoop Batti'
  | 'sambarani cup'
  | 'Wet dhoop'
  | 'thin stick in 4 inch'
  | '3 inch stick';
