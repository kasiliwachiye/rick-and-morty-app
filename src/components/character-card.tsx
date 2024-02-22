import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardDetails {
  name: string;
  status: string;
  avatarLink: string;
  characterId: number;
}

const CharacterCard = ({
  name,
  status,
  avatarLink,
  characterId,
}: CardDetails) => {
  return (
    <div className="card w-96 bg-white shadow-xl">
      <div className="">
        <div className="rounded-t-lg h-24 overflow-hidden">
          <Image
            width={50}
            height={50}
            className="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background"
          />
        </div>
        <div className="mx-auto w-24 h-24 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <Image
            width={50}
            height={50}
            className="object-cover object-center w-full h-full"
            src={avatarLink}
            alt="user-avatar"
          />
        </div>
        <div className="text-center mb-4">
          <Link href={`/characters/${characterId}`} className="font-semibold">
            {name}
          </Link>
          <p className="text-gray-500 text-sm">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
