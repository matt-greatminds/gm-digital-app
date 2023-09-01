import Link from "next/link";
import * as React from "react";

interface ButtonProps extends React.PropsWithChildren {
  href: string;
  anchor?: boolean | undefined;
}
export const Button = (props: ButtonProps) => {
  const styles =
    "ui-inline-block ui-rounded ui-border ui-border-pr-170 ui-bg-pr-170 ui-px-12 ui-py-3 ui-text-sm ui-font-medium ui-text-n-white hover:ui-bg-transparent hover:ui-text-pr-170 focus:ui-outline-none focus:ui-ring active:ui-text-pr-120";
  if (props.anchor) {
    return (
      <a className={styles} href={props.href}>
        {props.children}
      </a>
    );
  }

  return (
    <Link className={styles} href={props.href}>
      {props.children}
    </Link>
  );
};
