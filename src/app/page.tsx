import Image from 'next/image';

export default function Home() {
  return (
   <>
    <div id="banner" className="place-items-center h-screen  flex flex-col justify-evenly">
      <Image src="/images/night-raider-logo.png" alt="logo" width={600} height={180}/>
      <div className="w-20 h-1 bg-amber-500/60 mx-auto mt-1 rounded-t-full"></div>
    </div> 
    <div id="about-us" className=" flex text-center flex flex-col mt-[-4vh] h-screen justify-evenly">
      <div className="flex flex-col">
      <h1 className="text-4xl text-amber-500/70 font-bold p-4">About Us</h1>
      <div className="w-12 h-1 bg-amber-500/70 mx-auto mt-1"></div>
      </div>
      <div className="flex p-8 justify-around p-12">
        <div className="flex flex-col gap-8">
          <h1 className="text-amber-500/70 text-2xl w-[30vw] self-center">Our story...</h1>
          <p className="text-amber-500/70 text-xl w-[30vw] self-center">Night Raider was born in the suburbs of Dublin with the mission of reviving the essence of heavy metal’s golden era,
                delivering a powerful sound that blends the energy of NWOTHM with the tradition of NWOBHM
                while embracing a modern and melodic approach. With razor-sharp riffs, electrifying solos,
                and intense vocals, the band delivers captivating and high-energy performances, honouring the giants of the past while forging its own legacy in metal.</p>
        </div>
        <Image src="/images/integrantes-night-raider.jpeg" alt="crew" width={600} height={400}/>
      </div>
      <div className="w-20 h-1 bg-amber-500/60 mx-auto mt-1 rounded-t-full"></div>
    </div>    
    <div id="news-form" className=" flex text-center flex flex-col">
      <div className="flex flex-col">
        <h1 className="text-4xl text-amber-500/70 font-bold p-4">Receive our news</h1>
        <div className="w-12 h-1 bg-amber-500/70 mx-auto mt-1"></div>
      </div>
      <form action="#" className="flex flex-col p-16 w-[20vw] self-center">
        <input type="email" name="email-box" id="email-box" placeholder="Your Email here..." className="text-amber-500/60 p-1 border-amber-500/70 border-solid border-2 placeholder-amber-500/70" />
        <button type="submit" className="text-amber-500/70 border-amber-500/60 border-2 m-2">Submit</button>
      </form>
    </div>
    
   </>
  );
}
