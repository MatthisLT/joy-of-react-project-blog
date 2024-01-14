import React from 'react';

import { MDXRemote } from 'next-mdx-remote/rsc';

function BlogContent({ children }) {
  return <MDXRemote source={children} />;
}

export default BlogContent;
