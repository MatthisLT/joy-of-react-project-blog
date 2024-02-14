import type { MDXComponents } from 'mdx/types.js';

import CodeSnippet from '@/components/CodeSnippet';
import DivisionGroupsDemo from '@/components/DivisionGroupsDemo';
import CircularColorsDemo from '@/components/CircularColorsDemo';

const COMPONENTS_MAP: MDXComponents = {
  pre: CodeSnippet,
  DivisionGroupsDemo,
  CircularColorsDemo,
};

export default COMPONENTS_MAP;
