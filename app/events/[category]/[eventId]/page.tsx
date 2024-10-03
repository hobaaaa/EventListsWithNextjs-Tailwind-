import { notFound } from "next/navigation";
import eventsData from "@/lib/data";
import Image from "next/image";

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    category: encodeURIComponent(event.category), // Kategori adını kodlayın
    eventId: event.id.toString(),
  }));
}

export default function EventDetailPage({
  params,
}: {
  params: { category: string; eventId: string };
}) {
  const decodedCategory = decodeURIComponent(params.category);
  const event = eventsData.find(
    (e) =>
      e.id === parseInt(params.eventId, 10) && e.category === decodedCategory
  );

  if (!event) {
    notFound();
  }

  return (
    <main className="container">
      {!event ? (
        <div>Etkinlik bulunamadı.</div>
      ) : (
        <div className="event-detail">
          <Image
            src={event.image}
            alt={event.title}
            width={1200}
            height={600}
            className="event-image"
          />
          <div className="event-info">
            <h1>{event.title}</h1>
            <p className="event-date">
              Tarih: {new Date(event.date).toLocaleDateString("tr-TR")}
            </p>
            <p className="event-category">Kategori: {event.category}</p>
            <p className="event-description">{event.description}</p>
          </div>
        </div>
      )}
    </main>
  );
}
