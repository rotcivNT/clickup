import { Button } from "../ui/button";

function SignUpForm() {
  return (
    <div className="w-[95%] mx-auto px-5 py-9 bg-white shadow-[0_16px_78px_rgba(41,45,52,0.1)] rounded-xl relative z-10">
      <h2 className="text-[rgb(51,51,51)] text-[32px] font-extrabold">
        One app to replace them all.
      </h2>
      <p className="text-sm text-grey-0 mt-2 w-[230px] font-normal tracking-[-0.5px]">
        All of your work in one place: Tasks, Docs, Chat, Goals, & more.
      </p>
      <Button className="mt-5 px-8 h-[54px]">Free Forever</Button>
    </div>
  );
}

export default SignUpForm;
