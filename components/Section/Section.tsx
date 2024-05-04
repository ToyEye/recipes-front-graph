import React from "react";
import Container from "../Container/Container";
import clsx from "clsx";

const Section = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type?: string;
}) => {
  const style = clsx("py-12 md:py-24", { "bg-gray-100": type === "hero" });
  return (
    <section className={style}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
