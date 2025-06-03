"use client";

export interface BoxMessageItem {
  type: string;
  level?: number; // Add level for headings
  children: {
    text: string;
    type: string;
    bold?: boolean; // Add bold property
  }[];
}

interface BoxMessageProps {
  items: BoxMessageItem[];
}

export default function BoxMessage({ items }: BoxMessageProps) {

  return (
    <div className="max-w-5xl">
      {items.map((item, index) => {
        return (
          <div key={index}>
            {item.type === "heading" && item.level === 1 && (
              <h1 className="text-4xl mb-6 text-[#838182]">
                {item.children.map((child, childIndex) => (
                  child.text && child.text.trim() !== "" ? (
                    <span key={`${index}-${childIndex}`} className={child.bold ? "font-bold" : ""}>
                      {child.text}
                    </span>
                  ) : (
                    <br key={`${index}-${childIndex}`} />
                  )
                ))}
              </h1>
            )}
            {item.type === "heading" && item.level === 2 && (
              <h2 className="text-3xl mb-6 text-[#838182]">
                {item.children.map((child, childIndex) => (
                  child.text && child.text.trim() !== "" ? (
                    <span key={`${index}-${childIndex}`} className={child.bold ? "font-bold" : ""}>
                      {child.text}
                    </span>
                  ) : (
                    <br key={`${index}-${childIndex}`} />
                  )
                ))}
              </h2>
            )}
            {item.type === "heading" && item.level === 3 && (
              <h3 className="text-2xl mb-6 text-[#838182]">
                {item.children.map((child, childIndex) => (
                  child.text && child.text.trim() !== "" ? (
                    <span key={`${index}-${childIndex}`} className={child.bold ? "font-bold" : ""}>
                      {child.text}
                    </span>
                  ) : (
                    <br key={`${index}-${childIndex}`} />
                  )
                ))}
              </h3>
            )}
            {item.type === "heading" && item.level === 4 && (
              <h4 className="text-2xl mb-6 text-[#838182]">
                {item.children.map((child, childIndex) => (
                  child.text && child.text.trim() !== "" ? (
                    <span key={`${index}-${childIndex}`} className={child.bold ? "font-bold" : ""}>
                      {child.text}
                    </span>
                  ) : (
                    <br key={`${index}-${childIndex}`} />
                  )
                ))}
              </h4>
            )}
            {item.type === "heading" && item.level === 5 && (
              <h5 className="text-2xl mb-6 text-[#838182]">
                {item.children.map((child, childIndex) => (
                  child.text && child.text.trim() !== "" ? (
                    <span key={`${index}-${childIndex}`} className={child.bold ? "font-bold" : ""}>
                      {child.text}
                    </span>
                  ) : (
                    <br key={`${index}-${childIndex}`} />
                  )
                ))}
              </h5>
            )}
            {item.type === "heading" && item.level === 6 && (
              <h6 className="text-2xl mb-6 text-[#838182]">
                {item.children.map((child, childIndex) => (
                  child.text && child.text.trim() !== "" ? (
                    <span key={`${index}-${childIndex}`} className={child.bold ? "font-bold" : ""}>
                      {child.text}
                    </span>
                  ) : (
                    <br key={`${index}-${childIndex}`} />
                  )
                ))}
              </h6>
            )}
            {item.type === "paragraph" && (
              <p>
                {item.children.map((child, childIndex) => (
                  child.text && child.text.trim() !== "" ? (
                    <span key={`${index}-${childIndex}`} className={child.bold ? "font-bold" : ""}>
                      {child.text}
                    </span>
                  ) : (
                    <br key={`${index}-${childIndex}`} />
                  )
                ))}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};