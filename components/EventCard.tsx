import Image from "next/image";
import Link from "next/link";
import { Event } from "@/lib/data"; // Event arayüzünü import edin

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="event-card">
      <Link
        href={`/events/${encodeURIComponent(event.category)}/${event.id}`}
        className="event-card-link"
      >
        <Image
          src={event.image}
          alt={event.title}
          width={300}
          height={200}
          className="event-img"
        />
        <h3>{event.title}</h3>
        <p>{event.date}</p>
      </Link>
    </div>
  );
}
