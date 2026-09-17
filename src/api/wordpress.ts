const BASE_URL = "https://www.bardhe.se/wp-json/wp/v2";

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
}

export interface WPMedia {
  id: number;
  slug: string;
  alt_text: string;
  source_url: string;
  media_details: {
    width: number;
    height: number;
    sizes: {
      thumbnail?: { source_url: string };
      medium?: { source_url: string };
      full?: { source_url: string };
    };
  };
}

export interface WPKnight {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  acf: {
    name: string;
    tagline: string;
    favorite_weapon: string;
  };
  featured_media: number;
}

export const fetchPosts = async (): Promise<WPPost[]> => {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export const fetchPostBySlug = async (slug: string): Promise<WPPost> => {
  const res = await fetch(`${BASE_URL}/posts?slug=${slug}`);
  if (!res.ok) throw new Error("Failed to fetch post: ${slug}");
  const posts = await res.json();
  if (!posts.length) throw new Error("Post not found: ${slug}");
  return posts[0];
};

export const fetchMedia = async (id: number): Promise<WPMedia> => {
  const res = await fetch(`${BASE_URL}/media/${id}`);
  if (!res.ok) throw new Error("Failed to fetch media: ${id}");
  return res.json();
};

export const fetchKnights = async (): Promise<WPKnight[]> => {
  const res = await fetch(`${BASE_URL}/knights`);
  if (!res.ok) throw new Error("Failed to fetch knights");
  return res.json();
};

export const fetchKnightBySlug = async (slug: string): Promise<WPKnight> => {
  const res = await fetch(`${BASE_URL}/knights?slug=${slug}`);
  if (!res.ok) throw new Error(`Failed to fetch knight: ${slug}`);
  const knights = await res.json();
  if (!knights.length) throw new Error(`Knight not found: ${slug}`);
  return knights[0];
};
