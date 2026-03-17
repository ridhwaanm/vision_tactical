import { g as getAllPosts } from "../../../chunks/blog.js";
async function load() {
  const posts = await getAllPosts();
  return {
    posts
  };
}
export {
  load
};
