import "./HomeCarousel.scss";
import { ActionKind, usePony } from "pony-props";
import { Link } from "react-router-dom";

function HomeCarousel(props) {
  const { allProjects } = props;
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
    <div className="carousel__section" {...getSectionProps()}>
      <div className="carousel__heading--wrap">
        <h2 className="carousel__heading" {...getHeadingProps()}>
          Peruse Previous Melders
        </h2>
        <h3 className="carousel__subheading">
          Get a Sense of the Possibilities
        </h3>
      </div>

      <div className="carousel__project" {...getCarouselWrapperProps()}>
        <ul className="carousel__list" {...getCarouselProps()}>
          {allProjects.map((project, idx) => (
            <li
              className="carousel__card"
              key={project.id}
              {...getCarouselItemProps(idx)}
            >
              
                <div className="carousel__border">
                <Link className="carousel__link" to={`/result/${project.id}`}>
                  <div className="card__projectName">
                    <span className="card__text">Project: </span>
                    {project.project_name}
                  </div>
                  <div className="card__creatorName">
                    <span className="card__text">Created By: </span>
                    {project.creator_name}
                  </div>
                  <div className="card__question">
                    <span className="card__text">Question: </span>
                    {project.question}
                  </div>
</Link>
                </div>
              
            </li>
          ))}
        </ul>
      </div>
      <div className="carousel__btn--container">
        <button
          className="carousel__btn carousel__btn--previous"
          {...getButtonProps(ActionKind.Previous)}
        >
          Previous
        </button>
        <button
          className="carousel__btn carousel__btn--next"
          {...getButtonProps(ActionKind.Next)}
        >
          Next
        </button>
      </div>

      <div {...getAnnouncerProps()}>
        <p>{`Item ${state.activeSlideIndex + 1} of ${allProjects.length}`}</p>
      </div>
    </div>
  );
}

export default HomeCarousel;
