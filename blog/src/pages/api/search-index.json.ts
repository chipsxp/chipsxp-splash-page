import { getCollection } from 'astro:content';

export async function GET() {
  try {
    // Get both collections
    const research = await getCollection('research');
    const advance = await getCollection('advance');
    
    // Combine and format the content for search
    const searchIndex = [...research, ...advance].map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      authorName: entry.data.author.name,
      authorNickname: entry.data.author.nickname,
      content: entry.body,
      url: `/${entry.collection}/${entry.slug}`,
      date: entry.data.pubDate,
      collection: entry.collection
    }));

    return new Response(JSON.stringify(searchIndex), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // Add cache headers to improve performance
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    console.error('Error generating search index:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate search index' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
