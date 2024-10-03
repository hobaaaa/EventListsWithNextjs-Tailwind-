"use client";
import EventCard from "@/components/EventCard";
import CategoryFilter from "@/components/CategoryFilter";
import eventsData from "@/lib/data";
import { useState } from "react";

export default function EventsPage() {
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  const handleFilterChange = (category: string) => {
    const newFilteredEvents =
      category === "all"
        ? eventsData
        : eventsData.filter((event) => event.category === category);
    setFilteredEvents(newFilteredEvents);
  };

  return (
    <div className="events-page">
      <h1>Etkinlikler</h1>
      <CategoryFilter onFilterChange={handleFilterChange} />
      <div className="event-grid">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
