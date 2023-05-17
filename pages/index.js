import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contacts from '../components/Contacts'




export default function Home() {
  return (
    <div>
      <Head>
        <title>Ronik Parashar</title>
        <meta name="description" content="Web Developer" />
        <link rel="icon" href="/dev.jpg" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  )
}
