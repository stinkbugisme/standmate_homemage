import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";
import { categoryGroups, getCategoryGroupForCategory, type CategoryGroupSlug } from "./blog/categories";

// 固定ページの最終更新日。ページの中身を変えたらここも更新する
// (new Date() にすると、内容が同じでも毎回「今日更新」と伝えてしまう)
const PAGE_UPDATED = {
  home: "2026-10-30",
  howto: "2026-10-30",
  contact: "2026-10-30",
  support: "2026-10-30",
  terms: "2026-10-30",
  privacy: "2026-10-30",
  legal: "2026-10-30",
  childSafety: "2026-04-14",
};

const postUpdated = (post: (typeof posts)[number]) => post.updatedDate ?? post.date;
// 一覧ページは、載っている記事のうちいちばん新しい更新日
const latest = (list: typeof posts) => new Date(list.map(postUpdated).sort().at(-1) ?? PAGE_UPDATED.home);

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://standmate.jp";

  const blogEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(postUpdated(post)),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoryEntries = (Object.keys(categoryGroups) as CategoryGroupSlug[]).map((slug) => ({
    url: `${baseUrl}/blog/category/${slug}`,
    lastModified: latest(posts.filter((p) => getCategoryGroupForCategory(p.category) === slug)),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(PAGE_UPDATED.home),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/howto`,
      lastModified: new Date(PAGE_UPDATED.howto),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(PAGE_UPDATED.contact),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date(PAGE_UPDATED.support),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(PAGE_UPDATED.terms),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(PAGE_UPDATED.privacy),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date(PAGE_UPDATED.legal),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/child-safety`,
      lastModified: new Date(PAGE_UPDATED.childSafety),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: latest(posts),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...categoryEntries,
    ...blogEntries,
  ];
}
