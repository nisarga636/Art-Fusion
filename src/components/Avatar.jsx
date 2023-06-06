import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

const AvatarWithImage = ({ imageSrc, altText }) => (
  <div className="flex gap-5 ml-4">
    <Avatar.Root className="bg-blackA3 inline-flex h-[30px] w-[30px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={imageSrc}
        alt={altText}
      />
      <Avatar.Fallback
        className="text-violet leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      />
    </Avatar.Root>
  </div>
);

export default AvatarWithImage;
