import React, { PropsWithChildren } from "react";

export const PageContainer = (props: PropsWithChildren) => {
  return (
    <main>
      <div
        className="ui-relative ui-pt-12 ui-pb-32 ui-flex ui-content-center ui-justify-center"
        style={{ minHeight: "85vh" }}
      >
        <div className="ui-max-w-4xl">{props.children}</div>
      </div>
    </main>
  );
};
