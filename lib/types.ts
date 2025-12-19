import { LucideIcon } from 'lucide-react';

export interface ServiceData {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: LucideIcon;
    features: string[];
    subServices: {
        title: string;
        description: string;
        icon: LucideIcon;
    }[];
    process: {
        title: string;
        description: string;
    }[];
    technologies: string[];
    projects: {
        title: string;
        description: string;
        image: string;
        tags: string[];
    }[];
    testimonials: {
        name: string;
        role: string;
        company: string;
        quote: string;
        avatar: string;
    }[];
}
