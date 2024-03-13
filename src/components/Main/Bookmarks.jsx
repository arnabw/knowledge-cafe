import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks, time }) => {
  return (
    <section className="lg:w-[411px] space-y-4">
      <div className="bg-[#1111110D] p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-[#6047EC]">
          Spent time on read : {time} min
        </h3>
      </div>
      <div className="bg-[#1111110D] p-8 rounded-lg space-y-4 max-h-96 overflow-y-auto">
        <h1 className="text-[#111] text-2xl font-bold">
          Bookmarked Blogs : {bookmarks.length}
        </h1>
        <ul className="*:bg-white *:rounded-lg *:p-5 space-y-4 text-[#111] text-lg font-semibold">
          {bookmarks.map((bookmark, idx) => (
            <li key={idx}>{bookmark}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  time: PropTypes.number.isRequired,
};

export default Bookmarks;
