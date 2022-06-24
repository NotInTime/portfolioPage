import { FunctionComponent, JSXElementConstructor, ReactNode } from "react";
import clsx from "clsx";

export interface IContainerProps {
  fullscreen?: boolean;
  children: ReactNode;
}

const Container: FunctionComponent<IContainerProps> = ({
  children,
  fullscreen,
}) => {
  return (
    <>
      <div className="p-10">
        {fullscreen ? (
          <div className="flex flex-col gap-2">{children}</div>
        ) : (
          <div className="flex gap-2 max-w-[1440px] relative mx-auto flex-col">
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default Container;
