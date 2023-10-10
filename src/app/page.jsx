import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1>Página Inicial</h1>
    
    <div>
      <ul>
        <li> <Link href="post/">Post</Link> </li>
        <li> <Link href="post/Post1">Post1</Link> </li>
        <li> <Link href="post/Post2">Post2</Link> </li>
        <li> <Link href="post/Post3">Post3</Link> </li>

      </ul>
    </div>
    
    </>
    

  )
  
}
