import { component$ } from "@builder.io/qwik";
import type { ContentMenu } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export interface NavbarProps {
  menu?: ContentMenu;
}

export const Navbar = component$<NavbarProps>(({ menu }) => {
  return (
    <nav class="flex flex-wrap gap-x-6 gap-y-2">
      {menu &&
        menu.items?.map((item) => (
          <Link key={item.text} href={item.href} target="_blank">
            {item.text}
          </Link>
        ))}
    </nav>
  );
});
