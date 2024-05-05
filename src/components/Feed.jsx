import { useContext, useEffect } from 'react'
import { Context } from '../context/contextApi'
import LeftNav from './LeftNav'
import VideoCard from './VideoCard'

const Feed = () => {
  const { loading, searchResult } = useContext(Context)

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h")
  }, [])
  return (
    <>
      <div className="flex flex-row h-[calc(100%-56px)] ">
        <LeftNav />
        <div className=" grow w-[240px] h-full overflow-y-auto bg-black ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
            {!loading && searchResult.map((item) => {
              if (item?.type !== 'video') return false        // if type is not video then return false which means if video is not available then not display it. 
              return (
                <VideoCard
                  key={item?.video?.videoId}
                  video={item?.video}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Feed