
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
    function FrontMatter({fileData}: QuartzComponentProps) {
        const tags = fileData.frontmatter?.tags;
        if (!tags) return null;
  
        return (
          <div>
            <h2>Tags</h2>
            <ul>
              {tags.map((tag: string, index: number) => (
                <li key={index}>
                  <strong>{tag}</strong>
                </li>
              ))}
            </ul>
          </div>
        );
    }
   
   
    return FrontMatter
  }) satisfies QuartzComponentConstructor