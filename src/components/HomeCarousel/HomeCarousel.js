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
    <div className="carousel__section" {...getSectionProps()}>
      <div className="carousel__heading--wrap">
        <h2 className="carousel__heading" {...getHeadingProps()}>
          Peruse Previous Melds
        </h2>
        <h3 className="carousel__subheading">Get a Feel For What's Possible by Looking at These Examples</h3>
      </div>

      <div className="carousel__project" {...getCarouselWrapperProps()}>
        <ul className="carousel__list" {...getCarouselProps()}>
          {allProjects.map((project, idx) => (
            <li
              className="carousel__card"
              key={project.id}
              {...getCarouselItemProps(idx)}
            >
              <Link className="carousel__link" to={`/result/${project.id}`}>
                <div className="carousel__border">
                  <div className="card__projectName">
                    Project Name: {project.project_name}
                  </div>
                  <div className="card__creatorName">
                    By: {project.creator_name}
                  </div>
                  <div className="card__question">
                    Question: {project.question}
                  </div>
                </div>
              </Link>
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
