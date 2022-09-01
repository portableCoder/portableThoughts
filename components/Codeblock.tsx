import React from "react"
import { CodeProps } from "react-markdown/lib/ast-to-react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import tomorrow from 'react-syntax-highlighter/dist/esm/styles/prism/tomorrow';
import langs from '../components/util/langs'
langs.forEach(([key, val]) => SyntaxHighlighter.registerLanguage(key, val))
const Codeblock = {
  code({ node, inline, className, children, ...props }: CodeProps) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        className={`${className || ""} not-prose h-1/2 rounded-md mx-0`}
        style={tomorrow as any}
        language={match[1]}

        PreTag="div" {...props}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>

    ) : (
      <code  {...props}>
        {children}
      </code>
    )
  },

}

export default Codeblock