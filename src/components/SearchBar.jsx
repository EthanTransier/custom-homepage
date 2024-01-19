import React from 'react';
import { CiSearch } from 'react-icons/ci';
import useSound from 'use-sound';
import Key from '../sounds/key.mp3';

const SearchBar = () => {
  // Destructure the play function from the useSound hook
  const [play] = useSound(Key);

  // Add keydown event listener
  const handleKeyDown = (event) => {
    // Check if the pressed key is the one you want to trigger the sound
    if (event.key === 'Enter') {
      // Play the sound when Enter key is pressed
      play();
    }
  };

  // Attach the keydown event listener to the document
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <>
      <form action="http://google.com/search" target="_blank" className="searchContainer">
        <input name="q" className="searchBar" placeholder="I love searching things on google.com" />
        <button type="submit" className="search">
          <CiSearch />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
