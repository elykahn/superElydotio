module.exports = {
  name: "superelydotio",
  shortDesc:
    "Striving to bring together the complexities of modern life in a simple, readable blog",
  url: "",
  authorEmail: "ely.kahn@gmail.com",
  authorHandle: "@creativ_ely",
  authorName: "Ely",
  postsPerPage: 8,

  theme: {
    background: "black",
    text: "white"
  },

  keystone: {
    comments: true,
    bookmarks: true,
    claps: true,
    login: true
  },
  // Critical CSS results in much slower build times and uses a lot of system resources
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: false
};
