import React from "react";

declare module "react" {
  /**
   * An augment of the FC type with Children and default className optional props
   */
  export type FCwC<T = {}> = React.FunctionComponent<
    React.PropsWithChildren<
      {
        className?: string;
      } & T
    >
  >;
  export type FC = FCwC;
}
