"use client";
import Link from "next/link";
import { usePathname,useRouter } from 'next/navigation';
import {useEffect, useState} from "react";
 

export default function Page1() {
    const router = useRouter()
    const pathname = usePathname();
    const  [c, setC] = useState(0)
    const add = () => {
        setC(c+1)
    }
    useEffect(() => {
        console.log(999)
    },[])
    const toHome =() => {
        router.push('/', { scroll: false })
    }
    return <div style={{height:99999}}>
        <div>page1</div>
        {/* <Link href='/'  scroll={false}>home</Link> */}
        <div onClick={toHome}>home</div>
        <button onClick={add}>add</button>
        <span>{c}</span>
    </div>
}