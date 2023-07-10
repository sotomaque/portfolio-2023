'use client';

import { useEffect } from 'react';

import { Post } from '@/.contentlayer/generated';
import { Mdx } from '@/app/components/Mdx';

type ArticleProps = {
  post: Post;
};

export const Article = ({ post }: ArticleProps) => {
  // scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="py-6 prose dark:prose-invert ">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  );
};
