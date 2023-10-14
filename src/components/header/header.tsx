import { component$ } from "@builder.io/qwik";
import { Navbar } from "~/components/navbar/navbar";
import type { ContentMenu } from "@builder.io/qwik-city";

export interface HeaderProps {
  menu?: ContentMenu;
}

export const Header = component$<HeaderProps>(({ menu }: HeaderProps) => {
  return (
    <header>
      <Navbar menu={menu} />
    </header>
  );
});
