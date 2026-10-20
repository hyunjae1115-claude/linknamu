import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative h-40 w-40 overflow-hidden rounded-full bg-emerald-200 ring-4 ring-emerald-50 sm:h-48 sm:w-48">
        {image ? (
          <Image src={image} alt={`${name} 프로필 사진`} fill className="object-cover" priority />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-4xl font-bold text-emerald-700">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-5 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-gray-600">{bio}</p>
    </header>
  );
}
