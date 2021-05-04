import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import links from "../links.json";

const Footer = () => {
  return (
    <>
      <footer className="text-center">
        <div>
          Made by{" "}
          <a href="https://itastakers.com" target="_blank">
            🇮🇹 ITA Stakers
          </a>
        </div>
        <div>
          {links &&
            links.map((link, index) => (
              <Link
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                to={{ pathname: link.url }}
                color="primary"
                title={link.tooltip}
                style={{
                  marginInlineEnd: 10,
                  fontSize: "large",
                  verticalAlign: "middle",
                }}
              >
                {" "}
                <FontAwesomeIcon icon={[link.prefix, link.iconName]} />
              </Link>
            ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
