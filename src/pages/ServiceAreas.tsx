import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { serviceAreasVa } from "../data/serviceAreasVa";

export default function ServiceAreas() {
  const [query, setQuery] = useState("");

  const filteredAreas = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return serviceAreasVa;

    return serviceAreasVa.filter(area =>
      area.cityName.toLowerCase().includes(q) ||
      area.slugCity.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">
        Pest Control Service Areas
      </h1>

      <p className="mt-4 text-lg opacity-80 max-w-3xl">
        A2 Pest Pro provides professional pest control services across Richmond
        and surrounding Virginia communities. Search your city below to learn
        more about local coverage.
      </p>

      <div className="mt-8 max-w-md">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by city name..."
          className="w-full rounded-xl border px-4 py-3"
        />
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAreas.map(area => (
          <li
            key={area.slugCity}
            className="rounded-2xl border p-5 hover:shadow transition"
          >
            <Link
              to={`/service-areas/${area.slugCity}`}
              className="text-lg font-semibold underline"
            >
              {area.cityName}, VA
            </Link>

            <p className="mt-2 text-sm opacity-70">
              Nearby: {area.nearby.slice(0, 4).join(", ")}
              {area.nearby.length > 4 ? "…" : ""}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
