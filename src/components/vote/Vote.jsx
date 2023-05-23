import Title from "../TitleComp/Title";
import Swal from "sweetalert2";

import monday from "../../assets/members/Monday.png";
import soojin from "../../assets/members/Soojin.png";
import jaehee from "../../assets/members/Jaehee.png";
import soeun from "../../assets/members/Soeun.png";
import Jihan from "../../assets/members/Jihan.png";
import zoa from "../../assets/members/Zoa.png";
import VoteCard from "../VoteCard/VoteCard";

import { useState } from "react";

const Vote = () => {
  const [MemberDatas, setMemberDatas] = useState([
    {
      src: soojin,
      name: "Lee Soo Jin",
      role: "Leader",
      vote: 10,
    },
    {
      src: monday,
      name: "Monday",
      role: "Vocal Leader",
      vote: 10,
    },
    {
      src: soeun,
      name: "Park Soeun",
      role: "Dance Leader",
      vote: 10,
    },
    {
      src: jaehee,
      name: "Lee Jae Hee",
      role: "Sub Vocalist",
      vote: 10,
    },
    {
      src: Jihan,
      name: "Jihan",
      role: "Visual",
      vote: 10,
    },
    {
      src: zoa,
      name: "Zoa",
      role: "Maknae",
      vote: 10,
    },
  ]);

  const handleClick = async (member) => {
    const result = await Swal.fire({
      title: `You chose  ${member.name}`,
      text: "Confirm your selection!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya!",
    });
    if (result.isConfirmed) {
      Swal.fire("Success!", "Thank you for voting!", "success");
      handleVote(member);
    }
  };

  const handleVote = (member) => {
    const updatedMembers = [...MemberDatas];
    const index = MemberDatas.findIndex((m) => m.name === member.name);
    updatedMembers[index].vote += 1;
    setMemberDatas(updatedMembers);
  };

  return (
    <section id="vote" className="container py-20 px-[1.5rem]">
      <Title title={"VOTE YOUR BIAS"} />
      <div className="cards mt-20 grid gap-y-20 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 ">
        <VoteCard memberdatas={MemberDatas} handleClick={handleClick} />;
      </div>
    </section>
  );
};

export default Vote;
