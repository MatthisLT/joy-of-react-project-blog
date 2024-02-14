import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import { z } from 'zod';

const FrontmatterData = z.object({
  title: z.string(),
  abstract: z.string(),
  publishedOn: z.string(),
});

type FrontmatterData = z.infer<typeof FrontmatterData>;

const FrontmatterResult = z.object({
  data: FrontmatterData,
  content: z.string(),
});

type FrontmatterResult = z.infer<typeof FrontmatterResult>;

interface BlogPost extends FrontmatterData {
  slug: string;
}

export async function getBlogPostList(): Promise<BlogPost[]> {
  const fileNames = await readDirectory('/content');

  const blogPosts: BlogPost[] = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

    const { data: frontmatter } = FrontmatterResult.parse(
      matter(rawContent)
    );

    blogPosts.push({
      slug: fileName.replace('.mdx', ''),
      ...frontmatter,
    });
  }

  return blogPosts.sort((p1, p2) =>
    p1.publishedOn < p2.publishedOn ? 1 : -1
  );
}

export const loadBlogPost = React.cache(async function loadBlogPost(
  slug: string
) {
  let rawContent;

  try {
    rawContent = await readFile(`/content/${slug}.mdx`);
  } catch {
    return null;
  }

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
});

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8');
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
