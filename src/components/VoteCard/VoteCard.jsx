import { useState, useEffect } from "react";

const VoteCard = ({ memberdatas, handleClick }) => {
  const [members, setMembers] = useState(memberdatas);

  const handleVote = (index) => {
    const updatedMembers = [...members];
    updatedMembers[index].vote += 65;
    setMembers(updatedMembers);
  };

  return (
    <>
      {memberdatas.map((memberData, index) => {
        return (
          <div className="card text-white" key={index}>
            <figure>
              <img src={memberData.src} alt="" className="block max-w-full bg-[#DC3D73]" />
            </figure>
            <div className="card-header mt-4 mb-8 text-white">
              <h2 className="text-3xl font-bold tracking-wider">{memberData.name}</h2>
              <p className="font-semibold tracking-wide">{memberData.role}</p>
            </div>
            <div className="card-footer flex justify-between items-center">
              <div className="flex -space-x-4">
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${memberData.name + 1}`} alt={`${memberData.name} + pict`} />
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${memberData.name + 2}`} alt={`${memberData.name} + pict`} />
                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${memberData.name + 3}`} alt={`${memberData.name} + pict`} />
                <button className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">
                  +{memberData.vote}
                </button>
              </div>
              <button onClick={() => handleClick(memberData)} className="text-white font-semibold border py-2 px-4">
                Vote!
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default VoteCard;
{
  /* <p>{memberData.name}</p>
<p>{memberData.role}</p>
<span>{memberData.vote}</span>
<button
  onClick={() => {
    handleClick(memberData);
  }}
  className="text-white font-semibold border py-2 px-4"
/>
<p>{memberData.vote}</p> */
}

// <div>
//
// </div>
