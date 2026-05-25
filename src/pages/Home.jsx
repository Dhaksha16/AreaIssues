import { useState } from "react";
import IssueCard from "../components/IssueCard";
import Loader from "../components/Loader";
import issues from "../datas/issues";

function Home() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  const issues = [
    {
      id: 1,
      title: "Broken Streetlight",
      description: "Streetlight not working near main road.",
      category: "Streetlight",
      status: "Pending",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    },

    {
      id: 2,
      title: "Garbage Overflow",
      description: "Garbage not collected for 3 days.",
      category: "Garbage",
      status: "Resolved",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
    },

    {
      id: 3,
      title: "Road Damage",
      description: "Large potholes causing traffic issues.",
      category: "Road",
      status: "InProgress",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    }
  ];

  const filteredIssues = issues.filter((issue) => {

    const matchesSearch =
      issue.title.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || issue.category === category;

    return matchesSearch && matchesCategory;
  });
    if (loading) {
    return <Loader />;
}

  return (
    <div className="home">

      <div className="hero">

        <h1>Report Local Area Issues</h1>

        <p>
          Help improve your community by reporting problems.
        </p>

      </div>

      <div className="search-bar">

        <input
          type="text"
          placeholder="Search issues..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="filters">

        <button onClick={() => setCategory("All")}>
          All
        </button>

        <button onClick={() => setCategory("Road")}>
          Road
        </button>

        <button onClick={() => setCategory("Garbage")}>
          Garbage
        </button>

        <button onClick={() => setCategory("Streetlight")}>
          Streetlight
        </button>

      </div>

      <div className="issues-container">

        {
          filteredIssues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))
        }

      </div>
     <div className="hero">

  <h1>Report Local Area Issues</h1>

  <p>
    Help improve your community by reporting problems.
  </p>

</div>

{/* ADD THIS SECTION HERE */}

<div className="stats">

  <div className="stat-box">
    <h2>120+</h2>
    <p>Issues Reported</p>
  </div>

  <div className="stat-box">
    <h2>90+</h2>
    <p>Resolved</p>
  </div>

  <div className="stat-box">
    <h2>50+</h2>
    <p>Active Users</p>
  </div>

</div>

<div className="search-bar"></div>
    </div>
    
  );
}

export default Home;