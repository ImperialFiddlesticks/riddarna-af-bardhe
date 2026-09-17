import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { fetchPosts, fetchMedia } from "@/api/wordpress";
import type { WPPost, WPMedia } from "@/api/wordpress";

export const Route = createFileRoute("/blogg/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [media, setMedia] = useState<Record<number, WPMedia>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);

        const mediaEntries = await Promise.all(
          fetchedPosts
            .filter((post) => post.featured_media)
            .map(async (post) => {
              const mediaItem = await fetchMedia(post.featured_media);
              return [post.featured_media, mediaItem] as const;
            }),
        );
        setMedia(Object.fromEntries(mediaEntries));
      } catch (err) {
        setError("Kunde inte ladda inlägg.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="main-container">
      <div className="top-image">
        <h1>Blogg</h1>
      </div>

      <div className="relative bg-parchment -mt-15 z-0 flex flex-col items-center">
        <div className="page-content w-full py-24">
          {loading && (
            <p className="text-center text-text-body font-['Cormorant_SC']">
              Laddar...
            </p>
          )}
          {error && (
            <p className="text-center text-text-body font-['Cormorant_SC']">
              {error}
            </p>
          )}
          {!loading && !error && (
            <div className="flex flex-col gap-8 max-w-2xl mx-auto">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to="/blogg/$slug"
                  params={{ slug: post.slug }}
                  className="bg-parchment-light text-dark shadow-lg border-2 border-navy/35 flex flex-col hover:shadow-xl transition-shadow"
                >
                  {media[post.featured_media] && (
                    <img
                      src={media[post.featured_media].source_url}
                      alt={media[post.featured_media].alt_text}
                      className="w-full aspect-video object-cover"
                    />
                  )}
                  <div className="p-5 flex flex-col gap-2 flex-1">
                    <h2
                      className="section-headline text-dark leading-tight"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <p className="text-sm text-dark/60 font-['Cormorant_SC']">
                      {new Date(post.date).toLocaleDateString("sv-SE")}
                    </p>
                    <div
                      className="text-text-body leading-relaxed text-sm mt-1"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
