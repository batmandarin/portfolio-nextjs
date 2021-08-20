import React from "react";
import { Fragment } from "react";
import { BoxLoading } from "react-loadingg";

const Loading = () => {
  return (
    <Fragment>
      <BoxLoading />
      <div style={{ textAlign: "center", marginTop: "31rem" }}>
        now loading ...
      </div>
    </Fragment>
  );
};

export default Loading;
