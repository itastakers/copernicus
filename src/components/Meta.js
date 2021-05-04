import { Helmet } from "react-helmet";

const Meta = ({ title }) => {
  return (
    <Helmet>
      <title>Copernicus - {title}</title>
    </Helmet>
  );
};

export default Meta;
