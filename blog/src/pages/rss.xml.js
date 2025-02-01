import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const researchPosts = await getCollection("research");
  const advancePosts = await getCollection("advance");

  // Combine and sort all posts by date
  const allPosts = [...researchPosts, ...advancePosts].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: allPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link:
        post.collection === "research"
          ? `/${post.slug}/`
          : `/advance/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
