import React from 'react'
import { useRecoilState } from 'recoil'
import { currentTrackUriState } from '../atoms/songAtom'
import useSpotify from '../hooks/useSpotify'

export default function TrackSearchResult({track}) {

    const spotifyApi = useSpotify()
    const [currentTrackUri, setCurrentTrackUri] = useRecoilState(currentTrackUriState)
    const playSong = () => {
        setCurrentTrackUri(track.uri)
    }

  return(
    <div className="flex m-2 align-items-center cursor-pointer"
            onClick={playSong}>
        <img src={track.albumUrl} style={{width: '64px' , height: "64px"}} alt=""/>
        <div className='ml-3'>
            <div>{track.title}</div>
            <div className='text-muted'>{track.artist}</div>
        </div>

    </div>
  ) 
}
