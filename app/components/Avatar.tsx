"use client";

import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
}
const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={40}
      alt="user"
      src={src || '/image/Avatar.png'}
    />
  );
};

export default Avatar;
