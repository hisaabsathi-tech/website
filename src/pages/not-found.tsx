import { Link } from "react-router-dom";
import PageSeo from "@/components/shared/page-seo";

const NotFound = () => {
  return (
    <div className="mt-20 min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4 text-center bg-background">
      <PageSeo
        title="Page not found - Hisaab Sathi"
        description="The page you are looking for does not exist."
        noindex
      />
      <h1 className="font-instrument text-5xl">Page not found</h1>
      <p className="font-outfit font-light text-input">
        The page you are looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="font-outfit bg-primary rounded-md text-white px-6 py-2.5 text-sm lg:text-base"
      >
        Go to homepage
      </Link>
    </div>
  );
};

export default NotFound;
