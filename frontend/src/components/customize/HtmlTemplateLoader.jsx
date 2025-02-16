import { useEffect, useState } from "react";

function HtmlTemplateLoader({ htmlContent }) {
  return <div className="w-1/2 h-screen border border-black   bg-white" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default HtmlTemplateLoader;
