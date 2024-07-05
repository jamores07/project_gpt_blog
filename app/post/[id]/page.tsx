import { prisma } from '@/app/api/client';
import { Post as PostType } from '@prisma/client';
import { FormattedPost } from '@/app/types';
import React from 'react'

import Sidebar from '@/components/Sidebar';
import Content from '@/components/Content'


type Props = {
    params: {id : string };
}

const getPost = async (id: string) => {
    const post: PostType | null = await  prisma.post.findUnique({
        where: { id },
    });

    if(!post) {
        console.log(`Post with id ${id} not found`);
        return null;
    }

    const formattedPost = {
        ...post,
        createdAt: post?.createdAt.toISOString(),
        updatedAt: post?.updatedAt.toISOString(),
    };

    return formattedPost;
}

const Post = async ({ params }: Props) => {
  const { id } = params;
  const post: FormattedPost | null = await getPost(id)


  return (
    <div>Post</div>
  )
}

export default Post;