import Blogs from "./Blogs";
import Bookmarks from "./Bookmarks";

const Main = () => {
  return (
    <main className="px-4 md:px-10 lg:px-20 py-4 flex flex-col lg:flex-row gap-6">
      <Blogs />
      <Bookmarks />
    </main>
  );
};

export default Main;
