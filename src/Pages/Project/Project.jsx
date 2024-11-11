import CreatProjects from "./CreatProjects/CreatProjects";
import DeleteProjects from "./DeleteProjects/DeleteProjects";
import EditProjects from "./EditProjects/EditProjects";
import Projects from "./Projects/Projects";
import ProjectsAddMenber from "./ProjectsAddMenber/ProjectsAddMenber";

const Project = () => {
    return (
        <div>
            <Projects></Projects>
            <ProjectsAddMenber></ProjectsAddMenber>
            <CreatProjects></CreatProjects>
            <EditProjects></EditProjects>
            <DeleteProjects></DeleteProjects>
        </div>
    );
};

export default Project;