
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
    function FrontMatter({fileData}: QuartzComponentProps) {
      return (
        <div>
          <h2>Front Matter</h2>
          <pre>{JSON.stringify(fileData.frontmatter, null, 2)}</pre>
        </div>
      );
    }
   
    FrontMatter.css = `
    p.red-text {
      color: red;
    }
    `
   
    return FrontMatter
  }) satisfies QuartzComponentConstructor