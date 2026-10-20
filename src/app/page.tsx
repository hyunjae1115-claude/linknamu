import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8 sm:py-16">
      <section className="w-full max-w-md rounded-3xl bg-white px-6 py-10 shadow-lg sm:px-12 sm:py-12">
        <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
        <ul className="mt-10 flex flex-col gap-6">
          {profile.links.map((link) => (
            <li key={link.id}>
              <LinkCard title={link.title} url={link.url} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
