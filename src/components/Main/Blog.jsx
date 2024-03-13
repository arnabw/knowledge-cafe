import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleBookmarks, handleReadTime }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="space-y-4">
      <img
        className="w-full object-cover max-h-[450px] rounded-md"
        src={cover}
        alt={title}
      />
      <div className="flex justify-between items-center">
        <ul className="grid grid-cols-2 items-center">
          <li className="row-span-2">
            <img className="size-16" src={author_img} alt={author} />
          </li>
          <li className="col-auto text-[#111] text-2xl font-bold">{author}</li>
          <li className="col-auto text-[#11111199] font-semibold text-base">
            {posted_date}
          </li>
        </ul>
        <ul className="flex items-center gap-2 text-[#11111199] text-xl font-medium">
          <li>{reading_time} min read</li>
          <li>
            <button onClick={() => handleBookmarks(title)}>
              <CiBookmark />
            </button>
          </li>
        </ul>
      </div>
      <article>
        <h1 className="text-[#111] text-4xl font-bold">{title}</h1>
        <ul className="flex items-center gap-2 text-[#11111199] text-lg font-medium">
          {hashtags.map((hashtag, idx) => (
            <li key={idx}>#{hashtag}</li>
          ))}
        </ul>
      </article>
      <button
        className="text-xl font-semibold text-[#6047EC] underline"
        onClick={() => handleReadTime(reading_time, title)}
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func.isRequired,
  handleReadTime: PropTypes.func.isRequired,
};

export default Blog;
