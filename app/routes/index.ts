import HomeComponent from "~/route-containers/home/home.component";
import { loader } from "~/route-containers/home/home.server";
import { GenericCatchBoundary } from "~/route-containers/boundaries/generic-catch-boundary";
import { GenericErrorBoundary } from "~/route-containers/boundaries/generic-error-boundary";

export default HomeComponent;
export { loader };
export {
  GenericCatchBoundary as CatchBoundary,
  GenericErrorBoundary as ErrorBoundary,
};
