import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

const builder = imageUrlBuilder({ projectId, dataset });

export function urlFor(source: any) {
  return builder.image(source);
}

// Direct Sanity API fetch - no @sanity/client dependency
export async function sanityFetch<T>({
  query,
  params = {},
}: {
  query: string;
  params?: Record<string, any>;
}): Promise<T> {
  if (!projectId) {
    console.warn("Sanity project ID not configured");
    return [] as T;
  }

  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      console.error("Sanity fetch error:", response.status);
      return [] as T;
    }

    const data = await response.json();
    return data.result as T;
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return [] as T;
  }
}

// Types for Sanity documents
export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface SiteSettings extends SanityDocument {
  _type: "siteSettings";
  title: string;
  description: string;
  amazonWishlistUrl: string;
  zeffyDonationUrl: string;
  contactFormUrl: string;
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface NewsArticle extends SanityDocument {
  _type: "newsArticle";
  title: string;
  slug: { current: string };
  excerpt: string;
  content: any;
  mainImage?: any;
  categories?: string[];
  publishedAt: string;
}

export interface HomepageContent extends SanityDocument {
  _type: "homepage";
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: any;
  missionStatement: string;
  impactSection: {
    title: string;
    items: { icon: string; title: string; description: string }[];
  };
  waysToHelpSection: {
    title: string;
    items: { title: string; description: string; link: string; linkText: string }[];
  };
}

export interface AboutPage extends SanityDocument {
  _type: "aboutPage";
  title: string;
  ourStory: any;
  mission: any;
  vision: any;
  values: { title: string; description: string }[];
  whoWeServe?: any;
}

export interface MissionPage extends SanityDocument {
  _type: "missionPage";
  title: string;
  intro: any;
  programs: { title: string; description: string; icon: string }[];
}

export interface GetInvolvedPage extends SanityDocument {
  _type: "getInvolvedPage";
  title: string;
  intro: any;
  ways: { title: string; description: string; icon: string; link: string; linkText: string }[];
}
