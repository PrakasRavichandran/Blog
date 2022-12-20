import { FaWhatsapp } from "react-icons/fa";

function BlogShare({ data }) {
  return (
    <>
      <div className="text-center pb-4">
        <button className="bg-indigo-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <FaWhatsapp />
          <a
            className="twitter-share-button"
            rel="noopener noreferrer"
            target="_blank"
            href={`whatsapp://send?text=${
              data.Title
            } by @Prakash
            &url=prakasravichandran.github.io/Blog/${String(
              data.Title.split(" ").join("-").toLowerCase()
            )}
            &hashtags=${data.Tags.split(" ")}`}
          >
            Whats App
          </a>
        </button>
      </div>
    </>
  );
}

export default BlogShare;
