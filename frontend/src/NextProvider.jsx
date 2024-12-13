import * as React from "react";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/system";

/**
 * A higher-order component that provides the NextUIProvider at the root of the app.
 *
 * @param {Object} props - The props passed to the component.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the NextUIProvider.
 *
 * @returns {React.ReactElement} - The component wrapped by the NextUIProvider.
 *
 * @example
 * import * as React from "react";
 * import { NextUIProvider } from "@nextui-org/system";
 * import App from "./App";
 *
 * function Provider({ children }) {
 *   // Wrap NextUIProvider at the root of the app.
 *   return <NextUIProvider>{children}</NextUIProvider>;
 * }
 *
 * export default function AppWithProvider() {
 *   return (
 *     <Provider>
 *       <App />
 *     </Provider>
 *   );
 * }
 */
export default function NextProvider({ children }) {
  // Wrap NextUIProvider at the root of the app.
  return <NextUIProvider>{children}</NextUIProvider>;
}
