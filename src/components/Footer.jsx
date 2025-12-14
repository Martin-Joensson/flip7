import opLogo from "../assets/theop.png";
import raglanLogo from "../assets/raglanLogo.svg";

export const Footer = () => {
  return (
    <div className="absolute flex justify-between w-full bottom-0 p-2">
      <a href="https://raglancreation.com/">
        <img className="w-10" src={raglanLogo} />
      </a>

      <p className="font-headerFont h-10 m-auto text-center">
        {" "}
        Made with love!
      </p>
      {/* contact information */}

      <a href="https://theop.games/">
        <img className="w-10" src={opLogo} />
      </a>
    </div>
  );
};
