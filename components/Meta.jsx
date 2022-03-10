import React from "react";
import Head from "next/head";

const Meta = () => {
  return (
    <React.Fragment>
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content="FreyHacks, named after the Norse God of Summer, is a summer hackathon designed to introduce students from diverse backgrounds to the hackathon culture. FreyHacks is for students of all skill levels, and strives to create an inclusive, collaborative and empowering environment for everyone."
      />
      <meta
        property="og:description"
        content="FreyHacks, named after the Norse God of Summer, is a summer hackathon designed to introduce students from diverse backgrounds to the hackathon culture. FreyHacks is for students of all skill levels, and strives to create an inclusive, collaborative and empowering environment for everyone."
      />
      <meta name="keywords" content="hackathon, students, technology, mlh,Freyhacks ,frey ,hacks" />
      <link rel="canonical" href="https://www.freyhacks.tech/" />
      <meta name="robots" content="all" />
      <meta property="og:site_name" content="FreyHacks" />
      <meta property="og:url" content="https://www.freyhacks.tech/" />
      <meta
        property="og:image"
        content="https://www.freyhacks.tech/logo.png"
      />
      <meta property="og:title" content="Freyhacks" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>FreyHacks | Hackathon </title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </React.Fragment>
  );
};

export default Meta;
