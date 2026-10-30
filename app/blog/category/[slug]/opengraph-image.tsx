import { articleOgImage, OG_SIZE } from "../../../components/og";
import { categoryGroups, type CategoryGroupSlug } from "../../categories";

export const alt = "スタンドメイト ブログ";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return Object.keys(categoryGroups).map((slug) => ({ slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const group = categoryGroups[slug as CategoryGroupSlug];
  return articleOgImage({ category: "記事カテゴリー", title: group?.name ?? "スタンドメイト ブログ" });
}
