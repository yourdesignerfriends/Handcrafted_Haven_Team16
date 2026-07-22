import Link from "next/link";

interface ArtisanCardProps {
  artisan: {
    id: string;
    name: string | null;
    productCount: number;
  };
}

export default function ArtisanCard({ artisan }: ArtisanCardProps) {
  return (
    <div className="surface-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "1rem", padding: "1.25rem" }}>
      <div>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>
          {artisan.name || "Anonymous Artisan"}
        </h2>
        <p className="text-muted" style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
          {artisan.productCount} {artisan.productCount === 1 ? "Product" : "Products"} available
        </p>
      </div>

      <Link
        href={`/artisans/${artisan.id}/profile`}
        className="button button--primary"
        style={{ width: "100%" }}
      >
        View Profile & Story
      </Link>
    </div>
  );
}
