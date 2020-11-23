import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <div>
      <div className="flex flex-row" >
        <div className="">
          <h3 className="text-3xl mb-3 leading-snug font-heading font-bold">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="text-lg mb-4">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
        <div className="m-5  w-5/6">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      </div>
    </div>
  )
}

export default PostPreview
