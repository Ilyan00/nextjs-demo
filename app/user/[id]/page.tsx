// On exécute ce code côté serveur pour le SEO
"use server";

export default async function findOneUser({
  // Récupération des paramètres d'URL
  params,
}: {
  // Typage des paramètres d'URL
  params: Promise<{ id: number }>;
}) {
  // Récupération de l'id parmi les paramètres d'URL
  const id = (await params).id;

  return <>{id}</>;
}
