 import { Link } from "react-router-dom";
function IssueCard({ issue }) {
    

 return (

  <Link
    to={`/issue/${issue.id}`}
    className="issue-link"
  >

    <Link to={`/issue/${issue.id}`}>

      <img
        src={issue.image}
        alt="issue"
      />

      <div className="issue-content">

        <h3>{issue.title}</h3>

        <p>{issue.description}</p>

        <h4>{issue.category}</h4>

        <span
          className={`status ${issue.status.toLowerCase()}`}
        >
          {issue.status}
        </span>

      </div>

    </Link>

  </Link>
);
}


export default IssueCard;