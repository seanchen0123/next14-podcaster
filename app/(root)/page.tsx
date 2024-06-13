'use client'
import { PodcastCard } from '@/components/PodcastCard'
import { podcastData } from '@/constants'
import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'

export default function Home() {
  return (
    <div className=" mt-9 flex flex-col gap-9">
      <section className=" flex flex-col gap-5">
        <h1 className=" text-20 font-bold text-white-1">Trending Podcasts</h1>

        <div className=" podcast_grid">
          {podcastData.map(({ id, title, description, imgURL }) => (
            <PodcastCard
              key={id}
              podcastId={id}
              title={title}
              description={description}
              imgUrl={imgURL}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
