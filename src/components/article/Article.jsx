import { Link } from "react-router-dom";

function Article({ article }) {
  return (
    <Link className="col-md-6" to={`/articlePage/${article.id}`}>
      <div className="row shadow-sm g-0 border rounded-3 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
        <div className="col-md-9 p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">{article.category}</strong>
          <h3 className="mb-0" style={{ maxHeight: "40px", overflow: "hidden" }}>
            {article.title}
          </h3>
          <div className="mb-1 text-muted">Nov 12</div>
          <p className="card-text text-muted mb-auto" style={{ maxHeight: "40px", overflow: "hidden" }}>
            {article.description}
          </p>
          <Link className="stretched-link" to={`/articlePage/${article.id}`}>Continue reading</Link>
        </div>
        <div className="col-md-3 p-3 d-none d-lg-block">
          <img className="w-100" style={{ height: "170px" }} src={article.image} alt="" />
        </div>
      </div>
    </Link>
  );
}

export default Article;
