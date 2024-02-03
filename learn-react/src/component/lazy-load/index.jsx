import { Suspense, lazy, useState } from "react";
import Detail2 from "./Detail2";

const Detail1 = lazy(() => import("./Detail1"));

const LazyLoad = () => {
  const [toggle, setToggle] = useState(null);

  const showLazyComponent = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <button onClick={showLazyComponent}>Show Detail</button>
      {toggle && (
        <Suspense fallback={<div>Loading...</div>}>
          <Detail1 />
        </Suspense>
      )}
      {toggle && <Detail2 />}
    </>
  );
};

export default LazyLoad;
