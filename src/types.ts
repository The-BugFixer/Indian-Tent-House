/**
 * Data types and interfaces for Indian Tent House web application.
 * All interfaces are fully typed to support event setup configurations,
 * gallery portfolio items, interactive calculations, and customer reviews.
 */

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  capacity: string;
  idealFor: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'weddings' | 'parties' | 'functions';
  image: string;
  fallbackImage?: string;
  description: string;
  dimensions: string;
  guestCapacity: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  event: string;
  venue: string;
  year: string;
  rating: number;
  review: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface EventPlanRequest {
  eventType: string;
  guestCount: string;
  date: string;
  location: string;
  lawnDimensions: string;
  budget: string;
  theme: string;
  specialRequirements: string;
}

export interface EventPlanResponse {
  success: boolean;
  plan?: string;
  modelUsed?: string;
  error?: string;
}

