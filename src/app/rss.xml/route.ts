import RSS from 'rss';

import { BLOG_DESCRIPTION, BLOG_TITLE } from '@/constants';
import { getBlogPostList } from '@/helpers/file-helpers';

export async function GET() {
  const feed = new RSS({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    feed_url: `${/*env.PRODUCTION_HOST*/ ''}/rss.xml`,
    site_url: `${/*env.PRODUCTION_HOST*/ ''}`,
  });

  const posts = await getBlogPostList();

  posts.forEach(({ slug, title, abstract, publishedOn }) => {
    feed.item({
      title: title,
      description: abstract,
      url: `${/*env.PRODUCTION_HOST*/ ''}/${slug}`,
      date: publishedOn,
    });
  });

  const content = feed.xml({ indent: true });

  return new Response(content, {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  });
}
