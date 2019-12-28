module.exports = {
  name: "ely dot io",
  shortDesc:
    "Just fucking around trying to write and create".
  url: "",
  authorEmail: "ely.kahn@gmail.com",
  authorHandle: "@creativ_ely",
  authorName: "Ely",
  postsPerPage: 8,

  theme: {
    background: "chsrcoal",
    text: "ivory"
  },

  keystone: {
    comments: true,
    bookmarks: true,
    claps: true,
    login: true
  },
  // Critical CSS results in much slower build times and uses a lot of system resources
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: true
};
