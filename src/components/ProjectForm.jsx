import { useState } from 'react';

function ProjectForm(props) {
  const [link, setLink] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      githubLink: link,
    });

    setInput('');
  };

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <form className="project-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to a project to your portfolio"
          value={link.githubLink}
          name="text"
          className="project-input"
          onChange={handleChange}
        ></input>
       {/*  <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
            <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
            <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
          </div>
        </div> */}
        <button className="project-button">Add project to portfolio</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="project-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="project-input"
          onChange={handleChange}
        ></input>
       {/*  <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
            <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
            <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
          </div>
        </div> */}
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default ProjectForm;
