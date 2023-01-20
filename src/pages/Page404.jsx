import { useRouteError } from "react-router-dom";

const Page404 = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Wow, you find a treasure</h1>
      <p>Nah, just kidding, go back to main page!</p>
    </div>
  );
};

export default Page404;
