type Card = { id: string; title: string; platform: string };

async function fetchFeed(): Promise<{ items: Card[] }> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "/api/feed", { cache: "no-store" });
  return res.json();
}

export async function SocialWall() {
  const data = await fetchFeed();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.items.map((c) => (
        <article key={c.id} className="rounded-xl border border-neutral-800 p-4 bg-neutral-900">
          <div className="text-xs opacity-60 uppercase">{c.platform}</div>
          <h3 className="text-lg font-semibold">{c.title}</h3>
          <div className="mt-3 flex gap-2 text-sm">
            <button className="px-3 py-1 rounded bg-neutral-800">React</button>
            <button className="px-3 py-1 rounded bg-neutral-800">Vote</button>
            <button className="px-3 py-1 rounded bg-neutral-800">Share</button>
            <button className="px-3 py-1 rounded bg-neutral-800">Follow</button>
          </div>
        </article>
      ))}
    </div>
  );
}
