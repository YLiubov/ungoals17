import type { ReactNode } from "react";

type ContainerProps = {
  width: string;
  backgroundColor: string;
  padding?: string;
  margin?: string;
  children: ReactNode;
};

export const Container = ({ width, backgroundColor, padding, margin, children,
}: ContainerProps) => {
  return (
    <section style={{ width: width, backgroundColor: backgroundColor, padding: padding, margin: margin, }}>
      {children}
    </section>
  );
};