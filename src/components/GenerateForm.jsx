import React, { useState } from "react";
import axios from "axios";
import { PacmanLoader } from "react-spinners";
import { FaMicrophone, FaUserPlus, FaUserMinus, FaFileAudio, FaInfoCircle, FaArrowUp } from "react-icons/fa";


const GenerateForm = () => {
  const [text, setText] = useState(""); // Store input text
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(""); // Track error state
  const [generatedContent, setGeneratedContent] = useState(""); // Store generated content

  // Function to handle the text input change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) return; // If no text input, prevent form submission

    setLoading(true); // Set loading state to true when request is sent
    setError(""); // Clear any previous error messages

    try {
      // Send POST request to backend to generate content
      const response = await axios.post("http://localhost:8000/fetchNews", { query: text });
      setGeneratedContent(response.data.articles);
    } catch (err) {
      console.error("Error fetching data from the backend:", err);
      setError("Failed to generate content. Please try again.");
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

  return (
    <form action="" className="generate-form" onSubmit={handleSubmit}>
      <div className="row gy-4 gx-4">
        {/* Textarea for user input */}
        <div className="col-12">
          <div className="form-group">
            <label className="form-label">
              <b className="textlabel">What do you want to generate?</b>
            </label>
            <div className="form-control-wrap">
              <textarea
                cols="55"
                rows="3"
                className="form-control"
                value={text}
                onChange={handleTextChange}
                maxLength="500"
                placeholder="Enter your query here..."
              />
            </div>
            <div className="form-note d-flex justify-content-end">
              <span>{`${text.length}/500 Characters`}</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100 btnColor">
          {loading ? (
                <>
                  <PacmanLoader size={18} color="#FFFFFF" />
                  <span className="ml-2"></span>
                </>
              ) : (
                <>
                  <FaArrowUp className="mr-2" />
                  Process Query
                </>
              )}
          </button>
        </div>
      </div>

      {/* Error handling */}
      {error && <p style={{ color: "#0066b2", textAlign: "center" }}>{error}</p>}

      {/* Display generated content */}
      {generatedContent && (
        <div>
          <h3>Generated Content:</h3>
          
          <ul>
            {generatedContent.length > 0 ? (
              generatedContent.map((article, index) => (
                <li key={index}>
                  <h4 className="gentitle">{article.title}</h4>
                  <p>{article.description}</p>
                  <button
                    type="button"
                    className="btn btn-transparent"
                  >Show Image
                    {/* {showImage ? "Hide Image" : "Show Image"} */}
                  </button>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    Read more
                  </a>
                </li>
              ))
            ) : (
              <p>No content generated. Please try again.</p>
            )}
          </ul>
        </div>
      )}
    </form>
    
  );
};

export default GenerateForm;
