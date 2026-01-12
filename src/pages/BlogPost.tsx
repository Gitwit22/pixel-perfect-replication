import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { PortableText } from "@portabletext/react";
import { sanityClient, SanityPostDetail } from "@/lib/sanityClient";
import { company } from "@/data/content";
import PostCTA from "@/components/sections/PostCTA";
import { StickyCallBar } from "@/components/sections/StickyCallBar";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { GoogleAd } from "@/components/GoogleAd";

const postQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  readTime,
  publishedAt,
  "categories": categories[]->title,
  "mainImage": mainImage.asset->url,
  "mainImageAlt": mainImage.alt,
  body
}`;

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data, isLoading, isError } = useQuery<SanityPostDetail | null>({
    queryKey: ["blog-post", slug],
    enabled: !!slug,
    queryFn: async () => {
      if (!slug) return null;
      const post = await sanityClient.fetch(postQuery, { slug });
      return post;
    },
  });

  if (isLoading) {
    return (
      <main className="section-padding bg-brand-gray-light min-h-screen">
        <div className="container-narrow">
          <p className="text-center text-[#4B5563]">Loading article…</p>
        </div>
      </main>
    );
  }

  if (isError || !data) {
    return (
      <main className="section-padding bg-brand-gray-light min-h-screen">
        <div className="container-narrow text-center">
          <p className="text-[#B91C1C] mb-4">We couldn&apos;t find that article.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-green-dark"
          >
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const post = data;
  const title = `${post.title} | A2 Pest Pros Blog`;
  const description = post.excerpt ||
    "Learn more about bed bug prevention, identification, and treatment options from A2 Pest Pros.";
  const url = `${company.website}/blog/${post.slug}`;

  const portableComponents = {
    types: {
      adBlock: ({ value }: { value: { slot?: string } }) => (
        <div className="my-8">
          <GoogleAd slot={value?.slot || "4144893944"} />
        </div>
      ),
      adsense: ({ value }: { value: { slot?: string } }) => (
        <div className="my-8">
          <GoogleAd slot={value?.slot || "4144893944"} />
        </div>
      ),
    },
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        {post.mainImage && (
          <meta property="og:image" content={post.mainImage} />
        )}
      </Helmet>

      <StickyCallBar />
      <Header />

      <main className="section-padding bg-brand-gray-light min-h-screen">
        <div className="container-narrow max-w-3xl">
        <div className="mb-6 text-sm">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-brand-green hover:text-brand-green-dark"
          >
            <span aria-hidden="true">←</span> Back to Blog
          </Link>
        </div>

        <header className="mb-8">
          {post.categories && post.categories.length > 0 && (
            <span className="inline-flex items-center rounded-full bg-brand-gray-light text-brand-black text-xs font-semibold px-3 py-1 mb-3 uppercase tracking-wide">
              {post.categories[0]}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-black mb-3">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-3 items-center text-xs text-[#6B7280] mb-4">
            {post.publishedAt && (
              <span>
                {new Date(post.publishedAt).toLocaleDateString(undefined, {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            )}
            {post.readTime && (
              <span>• {post.readTime} min read</span>
            )}
          </div>
          {post.excerpt && (
            <p className="text-[#4B5563] text-base mb-4">{post.excerpt}</p>
          )}
          {post.mainImage && (
            <img
              src={post.mainImage}
              alt={post.mainImageAlt || post.title}
              className="w-full h-64 sm:h-80 object-cover rounded-neu-lg shadow-neu-raised-lg border border-brand-green/20"
            />
          )}
        </header>

        {post.body && (
          <>
            <article className="prose prose-sm sm:prose-base max-w-none text-[#111827]">
              <PortableText value={post.body} components={portableComponents} />
            </article>

            <PostCTA
              phone={company.phone}
              quoteUrl={company.quoteUrl}
            />
          </>
        )}


          
        
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
