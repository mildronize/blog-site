import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  // author: Author
}

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center ">
        {title}
      </h1>
      <div className="hidden md:block md:mb-12">
        {/* <Avatar name={author.name} picture={author.picture} /> */}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        {coverImage
          &&
          <CoverImage title={title} src={coverImage} />
        }

      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
