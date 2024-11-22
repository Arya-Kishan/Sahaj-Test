'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import BlogPage from '@/components/Blog/BlogPage';
function UserDetails() {
  const { id } = useParams();
  return (
    <>
        <BlogPage />
    </>
  );
}

export default UserDetails;