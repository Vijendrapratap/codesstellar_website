function inlineFormat(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}

export default function MarkdownArticle({ markdown }: { markdown: string }) {
  const blocks = markdown.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);

  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        if (block.startsWith('### ')) {
          return <h3 key={index} className="text-2xl font-display text-text-primary pt-4">{block.slice(4)}</h3>;
        }
        if (block.startsWith('## ')) {
          return <h2 key={index} className="text-3xl font-display text-text-primary pt-6">{block.slice(3)}</h2>;
        }
        if (block.startsWith('- ')) {
          return (
            <ul key={index} className="list-disc pl-6 space-y-2 text-text-secondary leading-relaxed">
              {block.split('\n').map((item, itemIndex) => (
                <li key={itemIndex} dangerouslySetInnerHTML={{ __html: inlineFormat(item.replace(/^- /, '')) }} />
              ))}
            </ul>
          );
        }
        return (
          <p
            key={index}
            className="text-lg text-text-secondary leading-relaxed"
            dangerouslySetInnerHTML={{ __html: inlineFormat(block) }}
          />
        );
      })}
    </div>
  );
}
