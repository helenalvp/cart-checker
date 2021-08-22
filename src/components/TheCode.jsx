import { Fragment, Component } from "react";
import CodeDropdown from "./CodeDropdown";

class TheApp extends Component {
  render() {
    return (
      <Fragment>
        {/* justify and format */}
        <div className="fs-1">The Code for CartChecker</div>
        <div className="drop-height">
          <CodeDropdown
            componentName="ComponentName"
            code={`
        import React, { useState } from "react";

        function Example() {
        const [count, setCount] = useState(0);

        return (
            <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            </div>
        );
        }
        `}
            description={[
              { title: "title1", info: "info goes here", classes: "mb-0" },
              { title: "title2", info: "info goes here too", classes: "mx-5" },
            ]}
          />
          <CodeDropdown
            componentName="ComponentName"
            code={`
        import React, { useState } from "react";

        function Example() {
        const [count, setCount] = useState(0);

        return (
            <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            </div>
        );
        }
        `}
            description={[
              { title: "title1", info: "info goes here", classes: "mb-0" },
              { title: "title2", info: "info goes here too", classes: "mx-5" },
            ]}
          />
        </div>
      </Fragment>
    );
  }
}

export default TheApp;

//<CodeDropdown componentName="" code=`` description=[]/>
// EXAMPLE OF WHAT TO PASS FOR CODEDROPDOWN
// const exampleInfo = {
//   componentName: "ComponentName",
//   code: `
//         import React, { useState } from "react";

//         function Example() {
//         const [count, setCount] = useState(0);

//         return (
//             <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//             </div>
//         );
//         }
//         `,
//   description: [
//     { title: "title1", info: "info goes here", classes: "mb-0" },
//     { title: "title2", info: "info goes here too", classes: "mx-5" },
//   ],
// };
