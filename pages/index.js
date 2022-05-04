import { getSession } from 'next-auth/react'
import Center from '../components/Center'
import Sidebar from '../components/Sidebar'
import Player from '../components/Player'
import Search from '../components/Search'
import { useRecoilState } from 'recoil'
import { displayComponentsState } from '../atoms/songAtom'

export default function Home() {

  const [displayComponents, setDisplayComponents] = useRecoilState(displayComponentsState)

  const center = displayComponents.center ? <Center /> : null
  const search = displayComponents.search ? <Search /> : null


  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className='flex'>
        <Sidebar />
        {center}
        {search}
      </main>

      <div className='sticky bottom-0'>
        <Player/>
      </div>
     
    </div>  
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}