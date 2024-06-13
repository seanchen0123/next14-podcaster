import React from 'react'

type Props = {
  params: {
    podcastId: string
  }
}

const PodcastDetail = ({params}: Props) => {
  return (
    <div className=' text-white-1'>PodcastDetail: {params.podcastId}</div>
  )
}

export default PodcastDetail