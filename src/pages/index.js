import Head from "next/head";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Head>
        <title>ChatterBox - A Personal Chat Bot App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Chatbot />
      </main>
    </>
  );
}
