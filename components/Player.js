import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import useSpotify from '../hooks/useSpotify'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import { currentTrackUriState, isPlayingState } from '../atoms/songAtom'

export default function Player() {
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
    const [currentTrackUri, setCurrentTrackUri] = useRecoilState(currentTrackUriState)


    useEffect (() => setIsPlaying(true ), [currentTrackUri])

    const spotifyApi = useSpotify()

    if(!spotifyApi.getAccessToken()) return null
    return <SpotifyPlayer
        token={spotifyApi.getAccessToken()}
        callback={state => {
            if(!state.isPlaying) setIsPlaying(false)
        }}
        play={isPlaying}
        uris={currentTrackUri ? [currentTrackUri] : []}
    />

}
