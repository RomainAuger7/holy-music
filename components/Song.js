import { useRecoilState } from "recoil"
import { currentTrackIdState, currentTrackState, currentTrackUriState, isPlayingState } from "../atoms/songAtom"
import useSpotify from "../hooks/useSpotify"
import { millisToMinutesAndSeconds } from "../lib/time"

function Song({track, order}){

    const [currentTrackUri, setCurrentTrackUri] = useRecoilState(currentTrackUriState)

    const playSong = () => {
        setCurrentTrackUri(track.track.uri)
    }


    return (
        <div className="grid grid-cols-2 text-gray-400 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer"
            onClick={playSong}>
            <div className="flex items-center space-x-4">
                <p>{order + 1}</p>
                <img className="h-10 w-10" src={track.track.album.images[0].url} alt=""/>
                <div>
                    <p className="w-36 lg:w-64 text-white truncate">{track.track.name}</p>
                    <p>{track.track.artists[0].name}</p>
                </div>
            </div>

            <div className="flex items-center justify-between ml-auto md:ml-0">
                <p className="w-40 hidden md:inline">{track.track.album.name}</p>
                <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
            </div>
        </div>
    )
}

export default Song