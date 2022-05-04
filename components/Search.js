import React from 'react'
import useSpotify from '../hooks/useSpotify'
import { Form, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import TrackSearchResult from '../components/TrackSearchResult'


export default function Search() {

const spotifyApi = useSpotify()
const [search, setSearch] = useState('')
const [searchResults, setSearchResults] = useState([])

useEffect(() => {
    if(!search) return setSearchResults([])
    if (!spotifyApi.getAccessToken()) return
    let cancel = false

    spotifyApi.searchTracks(search).then((res) => {
        if(cancel) return
        setSearchResults(res.body.tracks.items.map((track) => {
            const smallestAlbumImage = track.album.images.reduce(
                (smallest, image) => {
                    if (image.height < smallest.height) {
                        return image
                    }
                    return smallest
                }, track.album.images[0])

            return {
                artist: track.artists[0].name,
                title: track.name,
                albumUrl: smallestAlbumImage.url,
                uri: track.uri,
            }           
        })
    )
})
return () =>  cancel = true
}, [search, spotifyApi.getAccessToken()])

return <Container className='d-flex flex-column py-2' style={{height: "100vh"}}>
      <Form.Control 
        type="Search" 
        placeholder="Search songs/ Artists" 
        value={search} 
        onChange={e => setSearch(e.target.value)}
        className='flex-grow' 
      />
      <div className='flex-grow-1 my-2' style ={{overflow: "auto"}}>
      <div className="px-8 flex flex-col space-y-1 pb-28 text-white">
            {searchResults.map((track, i) => (
                <TrackSearchResult key={track.uri} track={track}/>
            ))}
        </div>
      </div>
  </Container>
}
