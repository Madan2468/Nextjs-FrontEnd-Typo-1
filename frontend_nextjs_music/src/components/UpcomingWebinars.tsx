'use client'

import Link from "next/link"
import { Button } from "./ui/moving-border"
import { HoverEffect } from "./ui/card-hover-effect"

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ]

  return (
    <section className="relative py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* 🔹 Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-sm md:text-base text-teal-400 font-semibold tracking-widest uppercase">
            Featured Webinars
          </h2>
          <p className="mt-3 text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            Enhance Your Musical Journey
          </p>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
            Explore our upcoming sessions to refine your skills and connect with professional artists.
          </p>
        </div>

        {/* 🔸 Hover Effect Cards */}
<div className="mt-10">
  <HoverEffect
    items={featuredWebinars.map((webinar, index) => ({
      key: `${webinar.slug}-${index}`,
      title: webinar.title,
      description: webinar.description,
      link: `/webinar/${webinar.slug}`,
    }))}
  />
</div>


        {/* 🔘 View All Button */}
        <div className="mt-16 flex justify-center">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border border-neutral-700 hover:border-teal-400 hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] transition duration-300"
            >
              View All Webinars
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default UpcomingWebinars
