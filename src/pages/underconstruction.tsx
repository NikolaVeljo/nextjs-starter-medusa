import React, { useState, useEffect, CSSProperties } from 'react';
import Image from 'next/image';

const UnderConstruction = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(true);
  };

  useEffect(() => {
    return () => {
      setShowMenu(false);
    };
  }, []);


  const containerStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100vh'
  };

  const backgroundStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const textStyle: CSSProperties = {
    color: '#ffffff',
    zIndex: 1
  };

  const buttonStyle: CSSProperties = {
    backgroundColor: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1,
    display: showMenu ? 'none' : 'block'
  };

  const menuOverlayStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle}>
        <Image src="/images/felix-vita-background.png" layout="fill" objectFit="cover" alt="Background Image" />
        <h1
          className={`text-4xl z-10 md:text-5xl text-white lg:text-6xl mb-5 tracking-wider text-center transform cursor-pointer transition-all ease-in-out ${showMenu ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          style={{ transition: 'all 1.2s ease-in-out' }}
        >
            THE FELIXVITA SITE IS UNDER CONSTRUCTION
        </h1>
        <button
          className={`z-10 absolute top-3/4 left-1/2 transform -translate-x-1/2 text-black cursor-pointer transition-all ease-in-out ${showMenu ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          onClick={handleMenuClick}
          style={{ transition: 'all 1.2s ease-in-out' }}
        >
          <h1
          className="text-3xl z-10 md:text-3xl text-white lg:text-3xl mb-5 tracking-wider text-center underline"
        >
          Check out our MENU
        </h1>
        </button>
      </div>
      {showMenu && (
        <div style={menuOverlayStyle}>
          <Image
            src="/images/1.svg"
            alt="Alt"
            layout="responsive"
            width={793}
            height={1122}
            className="object-cover bg-blac bg-opacity-70"
          />

          <Image
            src="/images/2.svg"
            alt="Alt"
            layout="responsive"
            width={793}
            height={1122}
            className="object-cover bg-blac bg-opacity-70"
          />
        </div>
      )}
    </div>
  );
};

export default UnderConstruction;
