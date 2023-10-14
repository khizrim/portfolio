import { component$ } from "@builder.io/qwik";
import { Title } from "~/components/title/title";

export const Footer = component$(() => {
  return (
    <footer>
      <Title
        fullName={"khizri makhmudov️"}
        occupation={"design && development"}
      />
    </footer>
  );
});
