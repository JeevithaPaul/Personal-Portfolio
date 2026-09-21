import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./common/Footer";
import auth from "../config/firebase";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [admin, setAdmin] = useState(false);

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    auth.onAuthStateChanged(function (user) {
      if (user) {
        if (user.uid === "kgeaEdrKfqe0tN021Cyh24Iqjh32") {
          setAdmin(true);
        } else {
          setAdmin(false);
        }
      } else {
        setAdmin(false);
      }
    });

    axios
      .get("https://personal-portfolio-backend-iota.vercel.app/api/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch(() => {
        console.log("Error fetching data");
      });
  }, []);

  // LIKE BLOG
  const handleLike = async (blog_id) => {
    try {
      const response = await axios.patch(
        `https://personal-portfolio-backend-iota.vercel.app/api/blogs/like/${blog_id}`
      );

      if (response.status === 200) {
        axios
          .get("https://personal-portfolio-backend-iota.vercel.app/api/blogs")
          .then((res) => {
            setBlogs(res.data);
          })
          .catch(() => {
            console.log("Error fetching data");
          });
      }
    } catch (error) {
      console.error("Error liking the blog post:", error);
    }
  };

  // ADD NEW BLOG
  const handleNewBlogSubmit = (event) => {
    event.preventDefault();

    const today = new Date();

    const date = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const likes = 0;

    axios
      .post("https://personal-portfolio-backend-iota.vercel.app/api/blogs", {
        newTitle,
        date,
        newContent,
        likes,
      })
      .then((res) => {
        console.log(res.data);

        axios
          .get("https://personal-portfolio-backend-iota.vercel.app/api/blogs")
          .then((res) => {
            setBlogs(res.data);
          })
          .catch(() => {
            console.log("Error fetching data");
          });
      })
      .catch((error) => {
        console.log("Error adding blog", error);
      });

    setNewTitle("");
    setNewContent("");
  };

  return (
    <div className="bg-gradient-to-br from-[#0f0b2e] via-[#24104f] to-[#7b1fa2] text-white min-h-screen">

      {/* ================= BLOG HEADER ================= */}

      <section className="py-16 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <p className="inline-block bg-fuchsia-500/10 text-fuchsia-400 px-5 py-2 rounded-full font-semibold text-sm">
            MY BLOG
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Latest{" "}
            <span className="text-fuchsia-400">
              Blogs
            </span>{" "}
            📚
          </h1>

          <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
            Thoughts, learning experiences, and insights from my journey
            in Full Stack Development.
          </p>

          <div className="w-20 h-1 bg-fuchsia-500 mx-auto mt-5 rounded-full"></div>

        </div>

      </section>


      {/* ================= ADMIN BLOG FORM ================= */}

      {admin && (
        <section className="px-6 pb-12">

          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-7">

            <h2 className="text-2xl font-bold mb-6 text-white">
              Add New Blog
            </h2>

            <form
              onSubmit={handleNewBlogSubmit}
              className="flex flex-col gap-5"
            >

              <div>

                <label className="block text-sm font-semibold mb-2 text-gray-200">
                  BLOG TITLE
                </label>

                <input
                  type="text"
                  placeholder="Enter blog title"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 outline-none focus:border-fuchsia-400"
                  required
                />

              </div>


              <div>

                <label className="block text-sm font-semibold mb-2 text-gray-200">
                  BLOG CONTENT
                </label>

                <textarea
                  placeholder="Write your blog content here..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 outline-none focus:border-fuchsia-400"
                  rows="6"
                  required
                />

              </div>


              <button
                type="submit"
                className="w-fit bg-fuchsia-500 text-white px-7 py-3 rounded-lg font-semibold hover:bg-fuchsia-600 transition"
              >
                Add Blog
              </button>

            </form>

          </div>

        </section>
      )}


      {/* ================= BLOG LIST ================= */}

      <section className="px-6 pb-16">

        <div className="max-w-6xl mx-auto">

          {blogs.length === 0 ? (

            <div className="text-center py-16">

              <p className="text-gray-300 text-lg">
                No blogs available yet.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

              {blogs.map((blog) => (

                <article
                  key={blog._id}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-7 hover:bg-white/15 transition"
                >

                  {/* BLOG CATEGORY */}

                  <span className="inline-block bg-fuchsia-500/10 text-fuchsia-400 px-3 py-1 rounded-full text-xs font-semibold">
                    FULL STACK DEVELOPMENT
                  </span>


                  {/* BLOG TITLE */}

                  <h2 className="text-2xl font-bold text-white mt-5 mb-3">
                    {blog.newTitle}
                  </h2>


                  {/* DATE */}

                  <p className="text-sm text-gray-400 mb-5">
                    {blog.date}
                  </p>


                  {/* CONTENT */}

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {blog.newContent}
                  </p>


                  {/* LIKE */}

                  <div className="flex items-center gap-3 border-t border-white/10 pt-5">

                    <button
                      onClick={() => handleLike(blog._id)}
                      className="text-fuchsia-400 font-semibold hover:text-fuchsia-300 transition"
                    >
                      ♥ Like
                    </button>

                    <span className="text-gray-400">
                      {blog.likes} Likes
                    </span>

                  </div>

                </article>

              ))}

            </div>

          )}

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default Blogs;