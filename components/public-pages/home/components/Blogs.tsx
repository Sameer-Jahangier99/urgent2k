// Styles
import styles from "@/styles/public-pages/home/home.module.css";

// Components
import BlogCard from "./BlogCard";

function Blogs() {
  return (
    <section className="container-wide py-5">
      <div className="row">
        <div className="d-flex justify-content-center">
          <div className="d-flex py-3">
            <span className={styles.aboutFoundationDividerLine}></span>
            <span
              className={`${styles.aboutUsCaption} caption weight-600 ms-1`}
            >
              OUR ARTICLE AND BLOG
            </span>
            <span
              className={`${styles.aboutFoundationDividerLine} ms-1`}
            ></span>
          </div>
        </div>
        <h2 className="weight-700 text-center">Check latest blog post</h2>
        <div className="col-md-4 mt-3 mt-md-5">
          <BlogCard
            title="Lorem ipsum dolor sit amet consectetur."
            description="Lorem ipsum dolor sit amet consectetur. Vestibulum luctus magna in aliquam sed id."
            autho_img="/team1.png"
            author_first_name="Rasalina"
            author_last_name="Halim"
            likes="356"
            date="12 January 2023"
            image="/blog-1.png"
          />
        </div>
        <div className="col-md-4 mt-3 mt-md-5">
          <BlogCard
            title="Lorem ipsum dolor sit amet consectetur."
            description="Lorem ipsum dolor sit amet consectetur. Vestibulum luctus magna in aliquam sed id."
            autho_img="/team1.png"
            author_first_name="Rasalina"
            author_last_name="Halim"
            likes="356"
            date="12 January 2023"
            image="/blog-2.png"
          />
        </div>
        <div className="col-md-4 mt-3 mt-md-5">
          <BlogCard
            title="Lorem ipsum dolor sit amet consectetur."
            description="Lorem ipsum dolor sit amet consectetur. Vestibulum luctus magna in aliquam sed id."
            autho_img="/team1.png"
            author_first_name="Rasalina"
            author_last_name="Halim"
            likes="356"
            date="12 January 2023"
            image="/blog-1.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Blogs;
