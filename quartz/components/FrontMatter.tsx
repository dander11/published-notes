
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
    function FrontMatter({fileData}: QuartzComponentProps) {
      return (
        <div>
          <h2>Front Matter</h2>
          <ul>
            {Object.entries(fileData).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>
      );
    }
   
   
    return FrontMatter
  }) satisfies QuartzComponentConstructor