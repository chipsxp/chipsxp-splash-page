import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const researchPosts = await getCollection('research');
	const advancePosts = await getCollection('advance');
	
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: [
			...researchPosts.map((post) => ({
				...post.data,
				link: `/${post.id}/`,
			})),
			...advancePosts.map((post) => ({
				...post.data,
				link: `/advance/${post.id}/`,
			})),
		],
	});
}
