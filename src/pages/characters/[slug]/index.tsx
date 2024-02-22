import Image from "next/image";
import { useState } from "react";

interface ResidentDetailsProps {
  character: {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  };
}

const ResidentDetails: React.FC<ResidentDetailsProps> = ({ character }) => {
  const [notes, setNotes] = useState<string>("");

  const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(event.target.value);
  };

  const handleSaveNotes = () => {
    // Save notes to local storage
    localStorage.setItem(`notes-${character.id}`, notes);
  };

  return (
    <div className="mx-10 max-w-md my-10 md:mx-auto">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-semibold my-2">{character.name}</h1>
        <Image
          width={100}
          height={100}
          src={character.image}
          alt={character.name}
          className="w-full h-auto"
        />
        <div>
          <label className="label text-xs">Status</label>
          <p className="text-gray-400 ml-1">{character.status}</p>
        </div>
        <div>
          <label className="label text-xs">Species</label>
          <p className="text-gray-400 ml-1">{character.species}</p>
        </div>
        <div>
          <label className="label text-xs">Gender</label>
          <p className="text-gray-400 ml-1">{character.gender}</p>
        </div>
        <div>
          <label className="label text-xs">Origin</label>
          <p className="text-gray-400 ml-1">{character.origin.name}</p>
        </div>
        <div>
          <label className="label text-xs">Location</label>
          <p className="text-gray-400 ml-1">{character.location.name}</p>
        </div>
        <div className="flex flex-col mt-2">
          <textarea
            value={notes}
            onChange={handleNotesChange}
            placeholder="Add notes about the character..."
            className="textarea textarea-bordered h-24"
          />
          <button onClick={handleSaveNotes} className="btn btn-outline mt-2">
            Save Notes
          </button>
        </div>
      </div>
    </div>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getServerSideProps({ params }: Params) {
  const { slug } = params;
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${slug}`
    );

    if (!response.ok) {
      throw new Error(
        `Error fetching character details: ${response.statusText}`
      );
    }

    const characterDetails = await response.json();

    console.log(characterDetails);

    return {
      props: {
        character: characterDetails,
      },
    };
  } catch (error) {
    console.error("Error fetching character details:", error);
    return {
      props: {
        character: null,
      },
    };
  }
}

export default ResidentDetails;
