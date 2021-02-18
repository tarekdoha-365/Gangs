import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
const NotFound = () => {

    const router=useRouter();
    useEffect(() => {
        setTimeout(()=>{
            //router.go();
            router.push('/');
        }, 3000)
    }, [])
    return (<div>
        <h1>Not Found</h1>
        <h2>Ops......</h2>
        <p>Page Not found come back to <Link href="/"><a>HomePage</a></Link></p>
    </div>);
}

export default NotFound;