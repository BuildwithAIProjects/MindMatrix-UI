import React, { useState } from 'react';

const GenerateForm = () => {
  const [text, setText] = useState('Create a humorous post about AI replacing jobs for a Twitter audience.');
  const [keywords, setKeywords] = useState('chatgpt, openai, facebook');

  // Handle textarea input change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Handle keywords input change
  const handleKeywordsChange = (e) => {
    setKeywords(e.target.value);
  };

  return (
    <form action="" className="">
      <div className="row gy-4 gx-4">
        <div className="col-12">
          <div className="form-group">
            <label className="form-label" ><b className='textlabel'>What do you want to generate?</b></label>
            <div className="form-control-wrap">
              <textarea
                cols="55"
                rows="3"
                className="form-control"
                value={text}
                onChange={handleTextChange}
              />
            </div>
            <div className="form-note d-flex justify-content-end">
              <span>{`${text.length}/500 Characters`}</span>
            </div>
          </div>
        </div>
        {/* <div className="col-12">
          <div className="form-group">
            <label htmlFor="PrimaryKeywords" className="form-label">Primary Keywords</label>
            <div className="form-control-wrap">
              <input
                id="PrimaryKeywords"
                type="text"
                className="form-control"
                value={keywords}
                onChange={handleKeywordsChange}
              />
            </div>
            <div className="form-note d-flex justify-content-between">
              <span>Separated with a comma</span>
              <span>{`${keywords.split(',').length}/10`}</span>
            </div>
          </div>
        </div> */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100 btnColor">Generate</button>
        </div>
      </div>
    </form>
  );
};

export default GenerateForm;
