import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="my-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        Latest Posts
      </h2>
      <hr className="border-accent-2 mb-16" />
      <div className="grid grid-cols-1 gap-10">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default PostList
