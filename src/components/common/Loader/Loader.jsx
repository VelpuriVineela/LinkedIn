import React from "react";
import { Flex, Spin } from "antd";
import "./index.scss";

export default function Loader() {
  return (
    <div className="loader">
      <p>Loading..Please Wait..</p>
      <Flex align="center" gap="middle">
        <Spin size="large" />
      </Flex>
    </div>
  );
}
