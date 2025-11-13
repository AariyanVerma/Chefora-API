export type Meal = { idMeal: string; strMeal: string; strMealThumb: string };

export async function byIngredient(q: string): Promise<Meal[]> {
  if (!q) return [];
  const r = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(q)}`);
  const j = await r.json();
  return j?.meals ?? [];
}

export async function randomMeal(): Promise<any | null> {
  const r = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  const j = await r.json();
  return j?.meals?.[0] ?? null;
}

export async function list(kind: "c" | "a") {
  const r = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?${kind}=list`);
  const j = await r.json();
  return j?.meals ?? [];
}

export async function by(kind: "c" | "a", v: string) {
  const r = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${kind}=${encodeURIComponent(v)}`);
  const j = await r.json();
  return j?.meals ?? [];
}

export async function byId(id: string) {
  const r = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const j = await r.json();
  return j?.meals?.[0] ?? null;
}
