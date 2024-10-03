import { useState } from "react";
import { FilterChangeHandler } from "@/lib/data";
import eventsData from "@/lib/data";

interface CategoryFilterProps {
  onFilterChange: FilterChangeHandler;
}
export default function CategoryFilter({
  onFilterChange,
}: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  const uniqueCategories = Array.from(
    new Set(eventsData.map((event) => event.category))
  );
  return (
    <select
      value={selectedCategory}
      onChange={(e) => handleCategoryChange(e.target.value)}
    >
      <option value="all">Tüm Kategoriler</option>
      {uniqueCategories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
