import type { Project, Service, Milestone } from '../types';

export const projects: Project[] = [
  {
    id: "p1",
    title: "Productivity & Lifestyle",
    category: "Short-Form Video",
    thumbnail: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=2000",
    youtubeId: "LXb3EKWsInQ",
    problem: "Low viewer retention on Instagram Reels and TikTok.",
    result: "Achieved a 60% increase in average view duration through dynamic pacing and kinetic typography.",
    roi: "60% ↑ Retention",
    techStack: ["Premiere Pro", "After Effects", "Motion Design"],
    longDescription: "A series of high-paced, retention-optimized short-form edits designed for creators in the productivity niche. Every cut is timed to a custom soundscape.",
  },
  {
    id: "p2",
    title: "The Marketian",
    category: "Visual Identity & Promo",
    thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=2000",
    youtubeId: "Y8Wp3dafaMQ",
    problem: "Brand lacked a cohesive, modern visual language for their marketing campaigns.",
    result: "Developed a bold visual identity and a flagship promotional video that set a new standard for their digital presence.",
    roi: "Brand Re-Launch",
    techStack: ["After Effects", "Illustrator", "Branding"],
    longDescription: "The Marketian needed a fresh, aggressive visual identity. I developed their core brand assets and brought them to life in a heavily animated promo video.",
  },
  {
    id: "p3",
    title: "Zero Result",
    category: "Logo & Branding",
    thumbnail: "https://images.unsplash.com/photo-1626785724573-4b799315345d?auto=format&fit=crop&q=80&w=2000",
    youtubeId: "W0LHTWG-UmQ",
    problem: "The client needed a minimalist yet striking logo for a high-end streetwear brand.",
    result: "Delivered a full logo suite and 3D mockups that captured their brutalist aesthetic.",
    roi: "10k+ Impressions",
    techStack: ["Photoshop", "Illustrator", "Cinema 4D"],
    longDescription: "Zero Result is a conceptual streetwear brand. The goal was to create a brutalist, typography-driven logo accompanied by high-quality apparel mockups.",
  },
  {
    id: "p4",
    title: "Chick Flick",
    category: "Packaging & Motion",
    thumbnail: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=2000",
    youtubeId: "qC0vDKVPCrw",
    problem: "A beverage startup required vibrant packaging and a social media motion campaign.",
    result: "Designed an eye-catching can wrap and a series of looping motion graphics for Instagram.",
    roi: "Sold Out Drop",
    techStack: ["After Effects", "Photoshop", "Packaging"],
    longDescription: "A vibrant, 80s-inspired beverage packaging project. The static designs were extended into fully animated 3D loops for their social media ad campaign.",
  }
];

export const services: Service[] = [
  {
    id: "s1",
    title: "Video Editing",
    description: "Cinematic, retention-driven editing for short-form content, YouTube, and high-end commercials. Every cut serves the story.",
    deliverables: [
      "Short-Form Edits (TikTok/Reels)",
      "Commercial & Promo Videos",
      "YouTube Vlogs & Documentaries",
      "Color Grading & Sound Design"
    ],
    estimatedTimeline: "1 - 3 Weeks"
  },
  {
    id: "s2",
    title: "Motion Graphics",
    description: "Custom visual transitions, kinetic typography, and 2D/3D animations that bring static brands to life.",
    deliverables: [
      "Custom Transitions",
      "Kinetic Typography",
      "Animated Logos",
      "Visual Effects (VFX)"
    ],
    estimatedTimeline: "2 - 4 Weeks"
  },
  {
    id: "s3",
    title: "Graphic Design",
    description: "Striking visual identities, logo design, and high-quality mockups tailored for modern, ambitious brands.",
    deliverables: [
      "Logo & Identity Systems",
      "Apparel & Product Mockups",
      "Social Media Kits",
      "Print & Digital Posters"
    ],
    estimatedTimeline: "2 - 6 Weeks"
  }
];

export const milestones: Milestone[] = [
  {
    id: "m1",
    step: "01",
    title: "Concept & Storyboard",
    description: "We align on the vision. I build out a visual storyboard, moodboard, and narrative structure to ensure we are hitting the exact tone for your brand."
  },
  {
    id: "m2",
    step: "02",
    title: "Editing & Motion",
    description: "The core production phase. I cut the footage, build the motion graphics, and integrate kinetic typography to create a dynamic, engaging flow."
  },
  {
    id: "m3",
    step: "03",
    title: "Color Grade & Delivery",
    description: "The cinematic polish. I apply professional color grading, mix the soundscape, and deliver the final assets in all requested formats."
  }
];
