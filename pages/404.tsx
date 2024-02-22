import * as React from "react";
import dynamic from "next/dynamic";

const NotFoundComponent = dynamic(
  () => import("../components/NotFoundComponent"),
  {
    suspense: false,
    ssr: false,
  }
);

import isBrowser from "../util/isBrowser";
import Head from "next/head";
import Icons from "../components/Icons";
const NotFoundPage = () => {
  return (
    <>
      <Head>
        <Icons />
        <title>NOT FOUND</title>
      </Head>
      {isBrowser() && <NotFoundComponent />}
    </>
  );
};
export default NotFoundPage;
