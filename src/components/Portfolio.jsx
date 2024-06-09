import { useState } from 'react';
import ProjectForm from './ProjectForm';
import Project from './Project';

function Portfolio() {
  const [project, setProject] = useState([]);

  // Function to add a project to the portfolio
  const addProject = (item) => {
    console.log(
      'File: Portfolio.js',
      item
    );
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    }

    // Add the new bucket list item to the existing array of objects
    const newProject = [item, ...project];
    console.log(newProject);

    // Call setProject to update state with our new set of projects in portfolio
    setProject(newProject);
  };

//UPDATE TO ADD STARS

  // Function to mark project as starred
  const starProject = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as starred
    let updatedProject = project.map((item) => {
      if (item.id === id) {
        item.starred = !item.starred;
      }
      return item;
    });

    console.log(updatedProject);
    setProject(updatedProject);
  };

  // Function to remove project from portfolio and update state
  const removeProject = (id) => {
    const updatedProject = [...project].filter((item) => item.id !== id);

    setProject(updatedProject);
  };

  // Function to edit the bucket list item
  const editProject = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setProject((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

//UPDATE THIS RETURN

  return (
    <div>
      <h1>My Portfolio</h1>
      <ProjectForm onSubmit={addProject} />
      <Project
        project={project}
        starProject={starProject}
        removeProject={removeProject}
        editProject={editProject}
      ></Project>
    </div>
  );
}

export default Portfolio;
