import React, { useState } from "react";
import { Artistdata } from "../../data/Artists/artists_data";
import RenderPageNumbers from "../RenderPageNumbers";
// import ArtistCard from '../Artists/ArtistCard'

const alphabetSet = new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const sortBy = ["ALL" ,...Array.from(alphabetSet)]
const Artists = () => {
  const [currPage, setCurrPage] = useState(1);
  const [selectedAlphabet, setSelectedAlphabet] = useState("ALL")

  const totalItems = Artistdata.length;
  const selectedQuantity = totalItems / 2;
  const totalPages = totalItems / selectedQuantity;

  const filteredArtists =
    selectedAlphabet === "ALL"
      ? Artistdata
      : Artistdata.filter((artist) =>
          artist.name.charAt(0).toUpperCase() === selectedAlphabet
        );
  const startIndex = (currPage - 1) * selectedQuantity;
  const endIndex = startIndex + selectedQuantity;
  const currItems = filteredArtists.slice(startIndex, endIndex);


  const handleAlphabetClick = (alphabet) => {
     setSelectedAlphabet(alphabet);
     setCurrPage(1);
  }
  const handlePageChange = (newPage) => {
    setCurrPage(newPage);
  };
  return (
    <div className="px-5 py-10">
      <h1 className="mb-16 text-5xl font-bold">All Artists</h1>
      <ul className="flex gap-6 text-gray-400">
        {sortBy.map((word, index)=>{
          return(<li key={index} className={`cursor-pointer text-sm ${
            selectedAlphabet === word
              ? "text-[#E7A0AE] border-b-2 border-[#E7A0AE]"
              : "border-b-2 border-transparent"
          }`} onClick={()=>handleAlphabetClick(word)}>{word}</li>)
        })}
      </ul>
      {currItems.length === 0 && <p className="flex justify-center m-10 text-2xl text-gray-4s00">No Artists Found</p>}
      {currItems.length > 0 && (
      <ul className=" my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {currItems.map((artist, index) => {
          return (
            <li
              key={index}
              className="p-5 border-2  hover:border-[#f3cfd6] hover:text-gray-950 border-[#e9e9e9] flex items-center justify-center flex-col gap-3"
            >
              <img
                src={artist.img}
                alt="artist"
                className="rounded-[25rem] w-24"
              />
              <h1 className="font-bold text-xl">{artist.name}</h1>
              <h2 className="text-gray-400 tracking-wider">
                {artist.posters.length} POSTER
              </h2>
              <ul className="flex items-center gap-1 my-3">
                {artist.posters.map((poster, posterIndex) => {
                  return (
                    <li key={posterIndex}>
                      <img
                        src={poster}
                        alt={`poster-${posterIndex}`}
                        className="w-16 "
                      />
                    </li>
                  );
                })}
              </ul>
              <button className="text-sm border-2 hover:border-[#E7A0AE] hover:bg-[#E7A0AE] text-white py-2 xl:px-12 md:px-10 px-16 tracking-wider rounded-3xl font-semibold border-[#285380] bg-[#285380]">
                VIEW PROFILE
              </button>
            </li>
          );
        })}
      </ul>
      )}
      {currItems.length > 0 && (
      <RenderPageNumbers
        totalPage={totalPages}
        handlePageChanges={handlePageChange}
        currentPage={currPage}
      />
      )}
    </div>
  );
};

export default Artists;
