"use client";

import { useAppDispatch } from "@/lib/hooks";
import { addManyArtist } from "@/store/artists.slice";
import { faker } from "@faker-js/faker";

interface props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
  const dispatch = useAppDispatch();

  dispatch(
    addManyArtist(
      new Array(9)
        .fill({
          about: faker.lorem.sentences(),
          id: faker.random.numeric(42),
          age: faker.datatype.number({ min: 20, max: 60 }),
          field: "Actor",
          fullname: faker.name.fullName(),
          location: faker.address.city() + ", " + faker.address.country(),
          skills: new Array(faker.datatype.number({ min: 1, max: 7 })).fill(
            faker.random.word()
          ),
          avatar: faker.image.avatar(),
        })
        .map((artist) => artist)
    )
  );
  return (
    <main
      className="h-full w-full"
      style={{
        paddingRight: "240px",
        paddingLeft: "240px",
        paddingTop: "30px",
        paddingBottom: "30px",
        height: "100%",
      }}
    >
      {children}
    </main>
  );
}
