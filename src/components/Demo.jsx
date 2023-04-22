import { useState } from "react";
import { linkIcon } from "../assets/index";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handlSubmit = async (e) => {
    e.preventDefault();
    alert("Please enter a valid URL");
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col gap-2 w-full">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handlSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icn"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />

          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ↵
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
