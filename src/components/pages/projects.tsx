import { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    window.location.href = 'https://github.com/yorozoru';
  }, []);

  return null;
};

export default Projects;