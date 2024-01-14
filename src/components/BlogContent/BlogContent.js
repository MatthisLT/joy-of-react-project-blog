import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import CodeSnippet from '../CodeSnippet';

function BlogContent({ children }) {
  return (
    <MDXRemote source={children} components={{ pre: CodeSnippet }} />
  );
}

export default BlogContent;
