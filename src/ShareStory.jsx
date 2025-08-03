import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ShareStory.css";

export default function ShareStory() {
  const [stories, setStories] = useState([]);
  const [name, setName] = useState("");
  const [story, setStory] = useState("");
  const navigate = useNavigate();

  // Load stories from localStorage
  useEffect(() => {
    const savedStories = localStorage.getItem("stories");
    if (savedStories) {
      setStories(JSON.parse(savedStories));
    }
  }, []);

  // Save to localStorage whenever stories change
  useEffect(() => {
    localStorage.setItem("stories", JSON.stringify(stories));
  }, [stories]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !story) return;
    setStories([{ name, story }, ...stories]); // newest first
    setName("");
    setStory("");
  };

  // Delete story by index
  const handleDelete = (index) => {
    const updatedStories = stories.filter((_, i) => i !== index);
    setStories(updatedStories);
  };

  return (
    <div className="share-container">
      {/* Back to Home Button */}
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      <div className="share-card">
        <h2>Share Your Story</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Share your story..."
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Stories Section */}
      <div className="stories-section">
        <h3>Stories</h3>
        {stories.length === 0 ? (
          <p>No stories yet. Be the first to share!</p>
        ) : (
          stories.map((s, index) => (
            <div key={index} className="story-card">
              <strong>{s.name}</strong>
              <p>{s.story}</p>
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
