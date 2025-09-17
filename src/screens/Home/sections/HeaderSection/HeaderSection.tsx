
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

const navigationItems = [
  { label: "Work", href: '' },
  { label: "About", href: '' },
  { label: "Contact", href: ' ' },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex w-full items-center justify-between px-[60px] py-6 relative">
      <div className="[font-family:'Bebas_Neue',Helvetica] text-neutraloffwhite text-[32px] tracking-[-0.32px] leading-[48px] relative w-fit mt-[-1.00px] font-normal whitespace-nowrap">
          Cleber Junior
      </div>

      <NavigationMenu>
        <NavigationMenuList className="flex items-center justify-center gap-8">
          {navigationItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={item.href}
                className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-neutraloffwhite text-base tracking-[-0.48px] leading-6 whitespace-nowrap hover:text-white transition-colors"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
