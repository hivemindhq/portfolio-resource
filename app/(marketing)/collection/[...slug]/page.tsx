import { slugs, extraSlugs } from "@/lib/collections";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function CollectionSlug({ params }: Props) {
  const { slug } = await params;

  const mainCategory = slug[0]?.toLowerCase();
  const subCategory = slug[1]?.toLowerCase();

  if (!slugs.includes(mainCategory)) {
    notFound();
  }

  if (subCategory && !extraSlugs.includes(subCategory)) {
    notFound();
  }

  if (slug.length > 2) {
    notFound();
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold uppercase">{mainCategory}</h1>
      {subCategory && (
        <h2 className="text-xl text-gray-600">Section: {subCategory}</h2>
      )}

      <div className="mt-4">
        Viewing {subCategory || "the main dashboard"} for {mainCategory}
      </div>
    </div>
  );
}
