import { useState } from "react";
import CharacterCard from "@/components/character-card";
import { GetServerSideProps } from "next";

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Resident[];
  url: string;
  created: string;
}

interface Resident {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Props {
  locations: Location[];
}

export default function Home({ locations }: Props) {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const filteredLocations = locations.filter((location) => {
    const locationNameIncludesSearch = location.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const characterNameIncludesSearch = location.residents.some((resident) =>
      resident.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    const episodeNameIncludesSearch = location.residents.some((resident) => {
      if (resident.episode) {
        return resident.episode.some((episode) =>
          episode.toLowerCase().includes(searchInput.toLowerCase())
        );
      }
      return false;
    });

    return (
      locationNameIncludesSearch ||
      characterNameIncludesSearch ||
      episodeNameIncludesSearch
    );
  });

  return (
    <>
      <section className="m-6">
        <div className="flex justify-center">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchInput}
              onChange={handleSearch}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        {filteredLocations.map((location) => (
          <div key={location.id}>
            <h2 className="text-2xl font-bold mt-8">{location.name}</h2>
            <h2 className="text-lg font-bold text-gray-400 mb-4">{location.type}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {location.residents.map((resident) => (
                <CharacterCard
                  key={resident.id}
                  name={resident.name}
                  status={resident.status}
                  avatarLink={resident.image}
                  characterId={resident.id}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/location");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    const locations: Location[] = data.results;

    const residentPromises: Promise<void>[] = [];

    for (let location of locations) {
      location.residents.forEach((residentUrl, index) => {
        residentPromises.push(
          fetch(residentUrl)
            .then((res) => {
              if (res.ok) {
                return res.json();
              } else {
                throw new Error("Failed to fetch resident data");
              }
            })
            .then((residentData) => {
              location.residents[index] = {
                id: residentData.id,
                name: residentData.name,
                status: residentData.status,
                image: residentData.image,
                episode: residentData.episode,
              };
            })
            .catch((error) => {
              console.error("Error fetching resident data:", error);
            })
        );
      });
    }

    await Promise.all(residentPromises);

    return {
      props: { locations },
    };
  } catch (error) {
    console.error("Error fetching locations:", error);
    return {
      props: { locations: [] },
    };
  }
};
