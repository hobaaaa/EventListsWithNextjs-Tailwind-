// app/page.tsx
import Link from "next/link";
import EventCard from "@/components/EventCard";
import eventsData from "@/lib/data"; // eventsData'yı import edin

export default function HomePage() {
  const featuredEvents = eventsData.slice(0, 3); // Öne çıkan 3 etkinlik

  return (
    <div>
      <section className="container text-center my-5">
        <h1 className="text-4xl font-bold">Hoş Geldiniz!</h1>
        <p className="text-2xl mt-4">
          En yeni ve heyecan verici etkinlikleri keşfedin.
        </p>
      </section>
      <hr /> <hr /> <hr />
      <section className="featured-events text-center">
        <h2 className="text-3xl my-5">Öne Çıkan Etkinlikler</h2>
        <div className="event-grid">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <Link href="/events" className="my-5 inline-block">
          Tüm Etkinlikleri Görüntüle
        </Link>
      </section>
    </div>
  );
}
