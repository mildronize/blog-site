import { useState } from 'react';
import Container from '../components/layouts/container'
import Hero from '../components/layouts/Hero';
import Navbar from '../components/layouts/Navbar';

import PostList from '../components/PostList'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layouts/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'


type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  const [hideOnScroll, setHideOnScroll] = useState(true);
  useScrollPosition(({ prevPos, currPos }) => {
    // const isShow = currPos.y > prevPos.y
    // console.log(prevPos.y, currPos.y)
    const isShow = prevPos.y < -500;
    console.log(hideOnScroll);
    if (isShow !== hideOnScroll) setHideOnScroll(isShow)
  }, [hideOnScroll])

  return (
    <>

      <Navbar isShow={hideOnScroll} />
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>


          <Hero />
          <PostList posts={allPosts} />
        </Container>

      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
