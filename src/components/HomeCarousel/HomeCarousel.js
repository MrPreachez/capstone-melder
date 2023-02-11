import "./HomeCarousel.scss";
import { ActionKind, usePony } from "pony-props";
import { Link } from "react-router-dom";

function HomeCarousel(props) {
  const { allProjects } = props;
  console.log(allProjects);
  const {
    getSectionProps,
    getHeadingProps,
    getCarouselWrapperProps,
    getCarouselProps,
    getCarouselItemProps,
    getButtonProps,
    getAnnouncerProps,
    state,
  } = usePony({ numItems: allProjects?.length ?? 0 });

  return (
    <div>
      {/* {allProjects && ( */}
      <div {...getSectionProps()}>
        <h1 {...getHeadingProps()}>Explore Some Examples</h1>
        <h3>learn how it works</h3>
        <div {...getCarouselWrapperProps()}>
          <ul {...getCarouselProps()}>
            {allProjects.map((project, idx) => (
              
                <li key={project.id}{...getCarouselItemProps(idx)}>
                    <Link to={`/result/${project.id}`}>
                  <div>Project Name:{project.project_name}</div>
                  <div>By{project.creator_name}</div>
                  <div>Question{project.question}</div>
                  </Link>
                </li>
              
            ))}
          </ul>
        </div>
        <button {...getButtonProps(ActionKind.Previous)}>Previous</button>
        <button {...getButtonProps(ActionKind.Next)}>Next</button>
        <div {...getAnnouncerProps()}>
          <p>{`Item ${state.activeSlideIndex + 1} of ${allProjects.length}`}</p>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default HomeCarousel;
