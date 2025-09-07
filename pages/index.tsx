import Head from 'next/head'

export default function Home() {
  return (
    <div>
     <Head>
     <title>Alx Listing App</title>
    </Head>
    <div className="flex  justify-center items-center text-6xl h-screen 
    
     bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/alx.png')"
      }}>
     <div className="bg-black  font-extrabold  bg-gradient-to-r via-yellow-500 from-green-700 to-red-700 text-transparent bg-clip-text p-8 bg-black-500"><h1 className="">ALX Listing App</h1></div> 
    </div>
    </div>
  );
}
