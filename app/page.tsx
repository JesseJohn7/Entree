import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="p-4">
      <Navbar />
        <Hero />
      {/* more components go here */}
    </main>
  );
}