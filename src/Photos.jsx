import "./Photos.css";
export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <span className="row">
          {props.photos.map(function (photo, index) {
            console.log(props.photos);
            return (
              <span className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.tiny}
                    className="img-fluid"
                    alt="Search"
                  />
                </a>
              </span>
            );
          })}
        </span>
      </section>
    );
  } else {
    return null;
  }
}
