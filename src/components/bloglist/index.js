import { Link } from "react-router-dom";
import "./index.css";

const Bloglist = ({ list = [] }) => {
  return (
    <ul className="card-list">
      {list.map((item) => (
        <li key={item.id} className="card">
          <Link to={`/blogs/${item.id}`}>
            <p>{item.title}</p>
            <div className="author-div">
              <img
                src={item.avatar_url}
                alt={item.author}
                className="avatar-image"
              />
              <p>{item.author}</p>
            </div>
            <img src={item.image_url} alt={item.title} className="image" />
            <p>{item.topic}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Bloglist;
