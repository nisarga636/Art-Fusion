import React from "react";
import { faker } from "@faker-js/faker";

export default function GalleryPage() {
  return (
    <div
      className="h-full w-full flex flex-row flex-wrap gap-3 p-3"
    >
      <div>
        <img
          className="max-w-full h-auto relative rounded-lg "
          alt="Image"
          src={faker.image.animals(250, 250, true)}
        />
      </div>
      <div>
        <img
          className="max-w-full h-auto relative rounded-lg "
          alt="Image"
          src={faker.image.animals(250, 250, true)}
        />
      </div>
      <div>
        <img
          className="max-w-full h-auto relative rounded-lg "
          alt="Image"
          src={faker.image.animals(250, 250, true)}
        />
      </div>
      <div>
        <img
          className="max-w-full h-auto relative rounded-lg "
          alt="Image"
          src={faker.image.animals(250, 250, true)}
        />
      </div>
      <div>
        <img
          className="max-w-full h-auto relative rounded-lg "
          alt="Image"
          src={faker.image.animals(250, 250, true)}
        />
      </div>
      <div>
        <img
          className="max-w-full h-auto relative rounded-lg "
          alt="Image"
          src={faker.image.animals(250, 250, true)}
        />
      </div>
    </div>
  );
}
