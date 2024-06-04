// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <link
      key="pickaxe-styles"
      rel="stylesheet"
      href="https://embed.pickaxeproject.com/axe/scripts/fab/styles.css"
    />,
  ]);

  setPostBodyComponents([
    <script
      key="pickaxe-script"
      src="https://embed.pickaxeproject.com/axe/scripts/fab/bundle.js"
      async
    />,
  ]);
};
