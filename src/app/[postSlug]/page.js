import React from 'react';

import { loadBlogPost } from '@/helpers/file-helpers';
import BlogHero from '@/components/BlogHero';
import BlogContent from '@/components/BlogContent';

import styles from './postSlug.module.css';

async function BlogPost({ params }) {
  const { frontmatter, content } = await loadBlogPost(
    params.postSlug
  );
  const { title, publishedOn } = frontmatter;

  return (
    <article className={styles.wrapper}>
      <BlogHero title={title} publishedOn={publishedOn} />
      <div className={styles.page}>
        <BlogContent>{content}</BlogContent>
      </div>
    </article>
  );
}

export default BlogPost;
