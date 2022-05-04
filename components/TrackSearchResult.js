import React from 'react'
import { useRecoilState } from 'recoil'
import { currentTrackUriState } from '../atoms/songAtom'

export default function TrackSearchResult({track}) {

    const [currentTrackUri, setCurrentTrackUri] = useRecoilState(currentTrackUriState)
    const playSong = () => {
        setCurrentTrackUri(track.uri)
    }

  return(
    <div className="grid grid-cols-2 text-gray-400 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer"
            onClick={playSong}>
        <div className="flex items-center space-x-4">
          <img src={track.albumUrl} style={{width: '64px' , height: "64px"}} alt=""/>
          <div className='ml-3'>
            <p className="w-36 lg:w-64 text-white truncate">{track.title}</p>
            <div className='text-muted'>{track.artist}</div>
          </div>
        </div>
    </div>
  ) 
}
