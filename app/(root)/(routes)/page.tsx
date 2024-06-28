import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default SetupPage;
