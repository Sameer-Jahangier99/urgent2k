import Image from "next/image";

// Styles
import styles from "../../../../styles/public-pages/home/home.module.css";

// Define the interface for the props
interface BlogCardProps {
  autho_img: string;
  image: string;
  title: string;
  description: string;
  likes: string;
  date: string;
  author_first_name: string;
  author_last_name: string;
}

function BlogCard(props: BlogCardProps) {
  return (
    <div className="card mx-2">
      <div className="card-body p-0">
        <div className={styles?.blogContainerImg}>
          <Image
            src={props?.image}
            alt="Your Image Alt Text"
            layout="fill"
            objectFit="cover"
            className={styles?.aboutFoundationImg}
          />
        </div>
        <h4 className="weight-700 mt-3 px-3">{props?.title}</h4>
        <p className="caption weight-400  m-0 text-grey px-3">
          {props?.description}
        </p>
        <div className="d-flex gap-3 justify-content-between px-3 py-3">
          <div className="d-flex gap-2">
            <Image
              src={props?.autho_img}
              alt="Your Image Alt Text"
              height={50}
              width={50}
              className={styles?.blogAuthorImg}
            />
            <p className="m-0 caption weight-700">
              {" "}
              {props?.author_first_name} <br /> {props?.author_last_name}
            </p>
          </div>
          <div className="d-flex flex-grow-1 justify-content-between">
            <div>
              <p className="m-0 text-grey caption">{props?.likes}</p>
            </div>
            <div>
              <p className="m-0 text-grey caption">{props?.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
