import React from "react";

interface IHeaders {
  text: string;
  tag: keyof JSX.IntrinsicElements;
  type: string;
}

const Headers = ({ text, tag = "h2", type }: IHeaders) => {
  const Tag = tag;
  return <Tag>{text}</Tag>;
};

export default Headers;
