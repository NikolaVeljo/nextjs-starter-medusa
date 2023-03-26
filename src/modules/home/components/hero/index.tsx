import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-5 tracking-wider">
        Start your day <br />with
        </h1>
        <div className="text-base-regular min-w-[40vw] min-h-[20vh] small:min-w-[30vw] small:min-h-[30vh] drop-shadow-md shadow-black">
          <Image
            src="/FelixVita-logo-white.png"
            layout="fill"
            loading="eager"
            priority={true}
            quality={100}
            objectFit="scale-down"
            alt="Logo"
            draggable="false"
          />
        </div>
      </div>
      <div
        className="absolute inset-0 bg-black"
      >
        <Image
          style={{
            background: "#000000",
            opacity: 0.5
          }}
          src="/hero.jpg"
          layout="fill"
          loading="eager"
          priority={true}
          quality={90}
          objectFit="cover"
          alt="Salad"
          draggable="false"
        />
      </div>
    </div>
  )
}

export default Hero
