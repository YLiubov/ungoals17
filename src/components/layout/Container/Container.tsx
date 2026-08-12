import type { ReactNode } from "react";

type ContainerProps = {
  width: string;
  backgroundColor?: string;
  padding?: string;
  children?: ReactNode;
};

export const Container = ({
  width,
  backgroundColor,
  padding,
  children,
}: ContainerProps) => {
  return (
    <section
      style={{
        width,
        backgroundColor,
        padding,
        margin: "0 auto",
      }}
    >
      {children}
    </section>
  );
};