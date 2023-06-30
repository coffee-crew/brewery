import Image from 'next/image'

export const Logo = () => {
  return (
    <div className="flex w-32 m-2 ">
      <div className="flex-1 py-2.5 hover:animate-bounce">
        <Image src="/images/coffee-cup.svg" alt="logo" width={50} height={50}  /> 
      </div>
      <div className="flex items-center animate-pulse">
        <div>
          <p>Brewery</p>
        </div>
      </div>
    </div>
  )
};
