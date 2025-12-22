import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

const camera = <FontAwesomeIcon icon={faCameraRetro} />;

export const NotFound = () => {
  return (
    <div className="font-headerFont">
      <h3 className="my-6 text-3xl">Oops!</h3>
      <p className="text-xl">We didn't find anything here.</p>
      <p className="my-10 text-9xl">{camera}</p>
    </div>
  );
};
