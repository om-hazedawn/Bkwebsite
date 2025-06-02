"use client";

interface BoxMessageItem {
  type: string;
  children: {
    text: string;
    type: string;
  }[];
}

interface BoxMessageProps {
  items: BoxMessageItem[];
}

export default function BoxMessage({ items }: BoxMessageProps) {
  return (
    <div>
      {items.map((item, index) => (
        item.children.map((child, childIndex) => (
          child.text && <p key={`${index}-${childIndex}`}>{child.text}</p>
        ))
      ))}
    </div>
  );
};