import { useState } from "react";
import Blogs from "./Blogs";
import Bookmarks from "./Bookmarks";

const Main = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  function handleBookmarks(title) {
    if (bookmarks.find((bookmark) => bookmark === title)) {
      alert("You've Already Added The Bookmark");
    } else {
      setBookmarks([...bookmarks, title]);
    }
  }

  function handleReadTime(time, title) {
    const newList = bookmarks.filter((bookmark) => bookmark !== title);
    setBookmarks(newList);
    if (bookmarks.find((bookmark) => bookmark === title)) {
      setReadTime(readTime + time);
    } else {
      alert("Didn't bookmark yet.");
    }
  }
  return (
    <main className="px-4 md:px-10 lg:px-20 py-4 flex flex-col lg:flex-row gap-6">
      <Blogs
        handleBookmarks={handleBookmarks}
        handleReadTime={handleReadTime}
      ></Blogs>
      <Bookmarks bookmarks={bookmarks} time={readTime}></Bookmarks>
    </main>
  );
};

export default Main;
