export type CategoryGroupSlug = "game-stadium" | "community" | "fanclub-event" | "app-others";

export type CategoryGroup = {
  name: string;
  shortName: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  includes: string[];
};

export const categoryGroups: Record<CategoryGroupSlug, CategoryGroup> = {
  "game-stadium": {
    name: "観戦・球場ガイド",
    shortName: "観戦・球場",
    description: "プロ野球の観戦のコツ、球場アクセス・座席情報、応援の楽しみ方を解説する記事まとめです。",
    metaTitle: "観戦・球場ガイド | NPB12球団の観戦・応援情報",
    metaDescription: "プロ野球の観戦のコツ、NPB12球団の球場アクセス・座席ガイド、応援グッズの使い方など、観戦をより楽しむための情報をまとめています。",
    includes: ["観戦ガイド", "球場ガイド", "応援ガイド"],
  },
  community: {
    name: "コミュニティ・仲間探し",
    shortName: "コミュニティ",
    description: "野球ファン同士の交流、観戦仲間の探し方、ファン活動に関する記事まとめです。",
    metaTitle: "野球ファンのコミュニティ・仲間探し",
    metaDescription: "プロ野球ファン同士の交流方法、観戦仲間の探し方、SNS・コミュニティの活用法を紹介します。",
    includes: ["仲間探し", "コミュニティ", "ファン活動"],
  },
  "fanclub-event": {
    name: "ファンクラブ・イベント情報",
    shortName: "ファンクラブ",
    description: "NPB12球団のファンクラブ情報、イベント情報、入会特典の比較記事まとめです。",
    metaTitle: "NPB12球団 ファンクラブ・イベント情報まとめ",
    metaDescription: "NPB12球団のファンクラブ会員特典、入会方法、シーズンイベント、ファン感謝デーの情報をまとめています。",
    includes: ["ファンクラブ", "イベント情報"],
  },
  "app-others": {
    name: "アプリ・応援グッズ",
    shortName: "アプリ・グッズ",
    description: "野球観戦アプリの比較、応援グッズ、スタンドメイトの開発ストーリーをまとめています。",
    metaTitle: "野球観戦アプリ・応援グッズ",
    metaDescription: "プロ野球観戦に役立つアプリの比較、応援グッズの紹介、スタンドメイト開発の裏側など、ファンライフを充実させる情報。",
    includes: ["アプリ比較", "応援グッズ", "開発ストーリー"],
  },
};

export function getCategoryGroupForCategory(category: string): CategoryGroupSlug | null {
  for (const [slug, group] of Object.entries(categoryGroups)) {
    if (group.includes.includes(category)) return slug as CategoryGroupSlug;
  }
  return null;
}
