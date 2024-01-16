import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

import { loadBlogPost } from '@/helpers/file-helpers';
import COMPONENTS_MAP from '@/helpers/mdx-components';
import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';

export async function generateMetadata({ params }) {
  const post = await loadBlogPost(params.postSlug);

  if (!post) {
    return;
  }

  const { frontmatter } = post;

  if (frontmatter) {
    const { title, abstract: description } = frontmatter;

    return {
      title,
      description,
    };
  }
}

async function BlogPost({ params }) {
  const post = await loadBlogPost(params.postSlug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;
  const { title, publishedOn } = frontmatter;

  return (
    <article className={styles.wrapper}>
      <BlogHero title={title} publishedOn={publishedOn} />
      <div className={styles.page}>
        <MDXRemote source={content} components={COMPONENTS_MAP} />
      </div>
    </article>
  );
}

export default BlogPost;
