import { useState } from "react";
import { toast } from "react-toastify";

function ReportIssue() {

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const handleSubmit = (e) => {

  e.preventDefault();

  if (!title || !description || !category) {
    toast.error("Please fill all fields");
    return;
  }

  const issue = {
    title,
    description,
    category,
    image,
    status: "Pending"
  };

  const existingIssues =
    JSON.parse(localStorage.getItem("issues"))
    || [];

  existingIssues.push(issue);

  localStorage.setItem(
    "issues",
    JSON.stringify(existingIssues)
  );

  toast.success("Issue Submitted");

  setTitle("");
  setDescription("");
  setCategory("");
  setImage(null);
};
  return (
    <div className="page">

      <h1>Report Issue</h1>

      <form className="form" onSubmit={handleSubmit}>

        <input type="text"placeholder="Issue Title"value={title}onChange={(e) => setTitle(e.target.value)}/>

        <textarea placeholder="Describe issue" value={description}onChange={(e) => setDescription(e.target.value)}></textarea>

        <select>
          <option>Road Damage</option>
          <option>Garbage</option>
          <option>Streetlight</option>
          
        </select>

        <input
          type="file"
          onChange={handleImage}
        />

        {
          image && (
            <img
              src={image}
              alt="preview"
              className="preview"
            />
          )
        }

        <button>Submit</button>

      </form>

    </div>
  );
}

export default ReportIssue;