import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const session = useSession()
  console.log('my session',session)
  if(session.data === null){
    return <button onClick={signIn}>Login</button>
  }
  return (
    <>
    <h1>Authentication page</h1>
    </>
  );
}
