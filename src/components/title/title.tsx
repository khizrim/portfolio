import { component$ } from "@builder.io/qwik";

export interface TitleProps {
  fullName: string;
  occupation: string;
}

export const Title = component$<TitleProps>(({ fullName, occupation }) => {
  return (
    <div class={"flex flex-col"}>
      <h1 class={"text-5xl"}>{fullName}</h1>
      <p class={"text-2xl"}>{occupation}</p>
    </div>
  );
});
