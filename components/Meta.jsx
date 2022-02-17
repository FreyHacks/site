import React from 'react'
import Head from "next/head";

const Meta = () => {
  return (
    <Head>
        <html lang='en' />
        <meta charSet="UTF-8" />
        <meta name="description" content="A student-led Hackathon held this summer where students from around the world can build impactful projects and level up on their skills and win exciting prizes." />
        <meta property="og:description" content="A student-led Hackathon held this summer where students from around the world can build impactful projects and level up on their skills and win exciting prizes." />
        <meta name="keywords" content="hackathon, students, technology, mlh" />
        <link rel="canonical" href="https://freyhacks.tech/" />
        <meta name='robots' content='all' />
        <meta property="og:site_name" content="FreyHacks" />
        <meta property="og:url" content="https://freyhacks.tech/" />
        <meta property="og:image" content="https://freyhacks1.netlify.app/logo.png" />
        <meta property="og:title" content="Freyhacks" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>FreyHacks</title>
        <link rel="shortcut icon" href="./a.ico" />
      </Head>
  )
}

export default Meta