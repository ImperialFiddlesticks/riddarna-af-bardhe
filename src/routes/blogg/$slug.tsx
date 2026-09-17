import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { fetchPostBySlug, fetchMedia } from "@/api/wordpress";
import type { WPPost, WPMedia } from "@/api/wordpress";

export const Route = createFileRoute("/blogg/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  const [post, setPost] = useState<WPPost | null>(null);
  const [featuredMedia, setFeaturedMedia] = useState<WPMedia | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const fetchedPost = await fetchPostBySlug(slug);
        setPost(fetchedPost);

        if (fetchedPost.featured_media) {
          const media = await fetchMedia(fetchedPost.featured_media);
          setFeaturedMedia(media);
        }
      } catch (err) {
        setError("Kunde inte ladda inlägget.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  return (
    <div className="main-container">
      <div className="top-image">
        <h1>Blogg</h1>
      </div>

      <div className="relative bg-parchment -mt-15 z-0 flex flex-col items-center">
        <div className="page-content w-full py-20 max-w-5xl mx-auto">
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
          {post && (
            <article className="bg-parchment-light border-2 border-navy/35 shadow-lg">
              {featuredMedia && (
                <img
                  src={featuredMedia.source_url}
                  alt={featuredMedia.alt_text}
                  className="w-full aspect-video object-cover"
                />
              )}
              <div className="p-8 flex flex-col gap-6">
                <div className="flex flex-col gap-2 border-b border-navy/20 pb-4">
                  <h2
                    className="section-headline text-dark"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div className="flex items-center justify-between">
                    <p className="text-lg text-dark/60 font-['Cormorant_SC']">
                      {new Date(post.date).toLocaleDateString("sv-SE", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <Link
                      to="/blogg"
                      className="text-lg font-['Cormorant_SC'] text-navy hover:text-gold transition-colors"
                    >
                      ← Tillbaka till bloggen
                    </Link>
                  </div>
                </div>

                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />

                <div className="border-t border-navy/20 pt-4">
                  <Link
                    to="/blogg"
                    className="text-lg font-['Cormorant_SC'] text-navy hover:text-gold transition-colors"
                  >
                    ← Tillbaka till bloggen
                  </Link>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </div>
  );
}
