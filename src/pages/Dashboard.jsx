function Dashboard() {

  const issues =
    JSON.parse(localStorage.getItem("issues"))
    || [];
   const handleDelete = (index) => {

  issues.splice(index, 1);

  localStorage.setItem(
    "issues",
    JSON.stringify(issues)
  );

  window.location.reload();
};

const handleResolve = (index) => {

  issues[index].status = "Resolved";

  localStorage.setItem(
    "issues",
    JSON.stringify(issues)
  );

  window.location.reload();

};

  return (
    <div className="dashboard">

      <h1>Admin Dashboard</h1>

      <div className="dashboard-cards">

        {
          issues.map((issue, index) => (

            <div
              className="dash-card"
              key={index}
            >

              <h2>{issue.title}</h2>

              <p>{issue.category}</p>
              <h4>Status: {issue.status}</h4>

              <small>
                {issue.description}
              </small>
             <button
              onClick={() => handleDelete(index)}>
               Delete
               <button onClick={() => handleResolve(index)}>
               Mark Resolved
                </button>
              </button>


            </div>
          ))
        }

      </div>

    </div>
  );
}

export default Dashboard;