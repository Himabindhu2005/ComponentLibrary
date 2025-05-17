import React, { useState } from "react";
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa";

export default function CodeBlock({ code }) {
const [copied, setCopied] = useState(false);

 const handleCopy = () => {
 navigator.clipboard.writeText(code);
 setCopied(true);
 setTimeout(() => setCopied(false), 2000);
 };

 return (
 <div className="code__container">
<button className="copy__btn" onClick={handleCopy}>
  {copied ? <FaClipboardCheck /> : <FaRegClipboard />}
</button>
<pre><code>{code}</code></pre>
</div>
);
}