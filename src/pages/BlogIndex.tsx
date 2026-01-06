import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { sanityClient, SanityPostSummary } from "@/lib/sanityClient";
import { company } from "@/data/content";
import { StickyCallBar } from "@/components/sections/StickyCallBar";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const postsQuery = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  readTime,
  publishedAt,
  "categories": categories[]->title,
  "mainImage": mainImage.asset->url,
  "mainImageAlt": mainImage.alt
}`;

const BlogIndex = () => {
  const { data, isLoading, isError } = useQuery<SanityPostSummary[]>({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const posts = await sanityClient.fetch(postsQuery);
      return posts;
    },
  });

  const title = "Bed Bug Education Blog | A2 Pest Pros";
  const description =
    "Expert articles on bed bug prevention, treatment options, and what to do if you suspect an infestation in your Richmond home.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="bed bug blog, bed bug tips, prevention, treatment, Richmond VA, A2 Pest Pros"
        />
        <link rel="canonical" href={`${company.website}/blog`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${company.website}/blog`} />
      </Helmet>

      <StickyCallBar />
      <Header />

      <main className="section-padding bg-brand-gray-light min-h-screen">
        <div className="container-wide">
          <header className="mb-10 text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold tracking-[0.2em] text-brand-green mb-2 uppercase">
              A2 Pest Pros Blog
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-brand-black mb-3">
              Bed Bug Education & Home Protection Tips
            </h1>
            <p className="text-[#4B5563]">
              Expert guidance on prevention, treatment options, and what to do if
              you suspect bed bugs in your home.
            </p>
          </header>

          {isLoading && (
            <p className="text-center text-[#4B5563]">Loading articles…</p>
          )}
          {isError && (
            <p className="text-center text-[#B91C1C]">
              We couldn&apos;t load articles right now. Please try again later.
            </p>
          )}

          {data && data.length === 0 && !isLoading && !isError && (
            <p className="text-center text-[#4B5563]">
              No articles published yet. Check back soon.
            </p>
          )}

          {data && data.length > 0 && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {data.map((post) => (
                <article
                  key={post._id}
                  className="bg-white rounded-neu-lg shadow-neu-raised-lg border border-brand-green/20 overflow-hidden flex flex-col h-full"
                >
                  {post.mainImage && (
                    <img
                      src={post.mainImage}
                      alt={post.mainImageAlt || post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    {post.categories?.length ? (
                      <span className="inline-flex items-center rounded-full bg-brand-gray-light text-brand-black text-xs font-semibold px-3 py-1 mb-3 uppercase tracking-wide">
                        {post.categories[0]}
                      </span>
                    ) : null}

                    <h2 className="text-lg font-bold text-brand-black mb-2">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="hover:text-brand-green transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    {post.excerpt ? (
                      <p className="text-sm text-[#4B5563] mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    ) : null}
                    <div className="mt-auto flex items-center justify-between text-xs text-[#6B7280]">
                      <span>
                        {post.readTime
                          ? `${post.readTime} min read`
                          : "Bed bug tips"}
                      </span>
                      {post.publishedAt && (
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString(
                            undefined,
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="px-6 pb-5">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-green-dark"
                    >
                      Read Article
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogIndex;
