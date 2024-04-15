import PrimaryLinkButton from "./components/PrimaryLinkButton";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mx-auto h-svh">
      <h2 className="text-4xl lg:text-4xl font-bold">Page Not Found</h2>
      <p>Could not find requested resource</p>
      <PrimaryLinkButton linkTo="/" buttonText="Go home" />
    </div>
  );
}
