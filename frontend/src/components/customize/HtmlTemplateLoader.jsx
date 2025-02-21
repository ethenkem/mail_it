import { useEffect, useState } from "react";

function HtmlTemplateLoader({ htmlContent }) {
  return <div className="w-1/2 h-screen overflow-y-scroll border border-black   bg-neutral-900" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default HtmlTemplateLoader;
