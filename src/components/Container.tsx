type ContainerProps = {
  width: string;
  backgroundColor?: string;
  padding?: string;
  children?: React.ReactNode;
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
        width: width,
        backgroundColor: backgroundColor,
        padding: padding,
        margin: "0 auto",
      }}
    >
      {children}
    </section>
  );
};