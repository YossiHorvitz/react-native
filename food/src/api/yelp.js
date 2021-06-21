import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer VtJg0HhQWvlhyFTfJdMVAK07Wew0Vb4kcGERy_4Tt4sXYEAiQk22uO7y0yPgdiTmk9Tek6bhWxI-YgG5jIZJMUzpv39RApDdYeLIcS9JguPU8Hcg1LyWn1kdsCrQYHYx",
  },
});
