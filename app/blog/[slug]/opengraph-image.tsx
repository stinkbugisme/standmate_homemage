import { articleOgImage, OG_SIZE } from "../../components/og";
import { getPost, posts } from "../posts";

export const alt = "スタンドメイト ブログ";
export const size = OG_SIZE;
export const contentType = "image/png";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return articleOgImage({ category: post?.category ?? "ブログ", title: post?.title ?? "スタンドメイト ブログ" });
}
