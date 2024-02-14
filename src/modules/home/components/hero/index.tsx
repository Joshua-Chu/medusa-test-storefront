const Hero = () => {
  return (
    <div className="  flex items-center justify-center h-screen mb-36 mt-20">
      <div className="relative flex items-center ">
        <img
          src="/img1.jpg"
          alt="Image 1"
          className="w-1/2 h-auto object-cover rounded-l-lg max-h-[1120px]"
        />
        <div className="absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center w-full">
          <div className="text-white text-center">
            <h1 className="text-5xl font-bold mb-4">Odyssey Supply Co. </h1>
            <p className="text-lg">
              Embrace liberation in style - where fashion meets freedom!
            </p>
          </div>
        </div>
        <img
          src="/img2.jpg"
          alt="Image 2"
          className="w-1/2 h-auto object-cover rounded-r-lg"
        />
      </div>
    </div>
  )
}

export default Hero
