import { useParams } from "react-router-dom";

function IssueDetails() {

  const { id } = useParams();

  return (
    <div className="page">

      <h1>Issue Details</h1>

      <p>Issue ID: {id}</p>

    </div>
  );
}

export default IssueDetails;