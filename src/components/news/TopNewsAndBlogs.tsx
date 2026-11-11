"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  imageAlt: string;
}

const FEATURED_POST: BlogPost = {
  id: "featured",
  title:
    "Best Gaming Platform in 2026, World #10 platform, Selling opportunities with Risk Management...",
  date: "28th Sept, 2030",
  readTime: "3 mins read",
  author: {
    name: "Olek Slavaka",
    avatar: "/images/blogs/author-avatar.jpg",
  },
  image: "/images/blogs/featured-controller.jpg",
  imageAlt: "Gaming Controller Hardware Banner",
};

const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title:
      "Best Gaming Platform in 2026, World #10 platform, Selling opportunities with Risk Management...",
    date: "28th Sept, 2030",
    readTime: "3 mins read",
    author: {
      name: "Olek Slavaka",
      avatar: "/images/blogs/author-avatar.jpg",
    },
    image: "/images/blogs/blog-1-cards.jpg",
    imageAlt: "Casino Playing Cards",
  },
  {
    id: "blog-2",
    title:
      "Best Gaming Platform in 2026, World #10 platform, Selling opportunities with Risk Management...",
    date: "28th Sept, 2030",
    readTime: "3 mins read",
    author: {
      name: "Olek Slavaka",
      avatar: "/images/blogs/author-avatar.jpg",
    },
    image: "/images/blogs/blog-2-dice.jpg",
    imageAlt: "Casino Dice Game Aggregator",
  },
  {
    id: "blog-3",
    title:
      "Best Gaming Platform in 2026, World #10 platform, Selling opportunities with Risk Management...",
    date: "28th Sept, 2030",
    readTime: "3 mins read",
    author: {
      name: "Olek Slavaka",
      avatar: "/images/blogs/author-avatar.jpg",
    },
    image: "/images/blogs/blog-3-novak.jpg",
    imageAlt: "Custom Playing Cards",
  },
  {
    id: "blog-4",
    title:
      "Best Gaming Platform in 2026, World #10 platform, Selling opportunities with Risk Management...",
    date: "28th Sept, 2030",
    readTime: "3 mins read",
    author: {
      name: "Olek Slavaka",
      avatar: "/images/blogs/author-avatar.jpg",
    },
    image: "/images/blogs/blog-4-chips.jpg",
    imageAlt: "Casino Poker Chips",
  },
];

export function TopNewsAndBlogs() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 select-none z-10 bg-[#07080c]">
      <div className="relative w-[92%] sm:w-[88%] lg:w-[82%] xl:w-[78%] max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
        {/* Featured Blog Highlight Banner (Reference Image 1) */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#0c0d12] border border-white/[0.08] p-6 sm:p-8 lg:p-12 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.85)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Date, Author & Read Time */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8 sm:space-y-10">
              <h3
                className="font-red-rose text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-bold text-white tracking-tight leading-[1.2]"
                style={{
                  fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                }}
              >
                {FEATURED_POST.title}
              </h3>

              <div className="space-y-4 pt-2">
                <div
                  className="font-poppins text-xs sm:text-sm text-zinc-400 font-normal"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  {FEATURED_POST.date}
                </div>

                <div className="flex items-center justify-between max-w-sm pt-1">
                  {/* Author avatar & name */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-white/20">
                      <Image
                        src={FEATURED_POST.author.avatar}
                        alt={FEATURED_POST.author.name}
                        width={44}
                        height={44}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span
                      className="font-poppins text-sm sm:text-base font-medium text-white"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      {FEATURED_POST.author.name}
                    </span>
                  </div>

                  {/* Read time */}
                  <span
                    className="font-poppins text-xs sm:text-sm text-zinc-400 font-normal"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    {FEATURED_POST.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Controller Image on Vibrant Orange Card */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={FEATURED_POST.image}
                  alt={FEATURED_POST.imageAlt}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section Header: Top News & Blogs + Explore More Link (Reference Image 2) */}
        <div className="flex items-center justify-between pt-4 sm:pt-6">
          {/* Left: Orange Brush Stroke Mark + Heading */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/images/why-choose-us-mark.png"
                alt="Accent Mark"
                width={64}
                height={60}
                className="w-full h-full object-contain filter drop-shadow-[0_0_14px_rgba(255,87,34,0.65)]"
              />
            </div>

            <h2
              className="font-red-rose text-2xl sm:text-3xl lg:text-[42px] xl:text-[46px] font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-red-rose), 'Red Rose', serif" }}
            >
              Top News &amp; Blogs
            </h2>
          </div>

          {/* Right: Explore More with Underline */}
          <a
            href="#blogs"
            className="group relative inline-flex items-center px-4 py-2 font-poppins text-sm sm:text-base font-semibold text-white transition-colors duration-200 hover:text-[#FF5722]"
            style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif" }}
          >
            <span>Explore More</span>
            <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white/45 group-hover:bg-[#FF5722] transition-colors duration-300" />
          </a>
        </div>

        {/* 4 Blog Cards Grid with Floating Next Button */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="group flex flex-col justify-between space-y-4"
              >
                {/* Thumbnail Image */}
                <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-900 border border-white/[0.08]">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Post Title */}
                <h4
                  className="font-red-rose text-sm sm:text-base font-bold text-white tracking-tight leading-snug line-clamp-3 group-hover:text-[#FF5722] transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-red-rose), 'Red Rose', serif",
                  }}
                >
                  {post.title}
                </h4>

                {/* Date */}
                <div
                  className="font-poppins text-xs text-zinc-400 font-normal"
                  style={{
                    fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                  }}
                >
                  {post.date}
                </div>

                {/* Bottom Row: Author + Read Time */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-white/20">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span
                      className="font-poppins text-xs sm:text-[13px] font-medium text-zinc-300"
                      style={{
                        fontFamily:
                          "var(--font-poppins), 'Poppins', sans-serif",
                      }}
                    >
                      {post.author.name}
                    </span>
                  </div>

                  <span
                    className="font-poppins text-[11px] sm:text-xs text-zinc-400 font-normal"
                    style={{
                      fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
                    }}
                  >
                    {post.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Right Navigation Arrow Button */}
          <button
            type="button"
            aria-label="Next blogs"
            className="hidden xl:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/85 border border-white/25 text-white items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.8)] hover:bg-[#FF5722] hover:border-[#FF5722] transition-all duration-300 hover:scale-105 cursor-pointer z-20"
          >
            <ArrowRight className="w-5 h-5 text-white" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
