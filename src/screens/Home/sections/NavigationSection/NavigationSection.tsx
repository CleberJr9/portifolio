import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

const navigationItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <nav className="flex w-full items-center justify-between px-4 sm:px-8 lg:px-[60px] py-4 sm:py-6 relative">
      <div className="[font-family:'Bebas_Neue',Helvetica] text-neutraloffwhite text-xl sm:text-2xl lg:text-[32px] tracking-[-0.32px] leading-[48px] relative w-fit mt-[-1.00px] font-normal whitespace-nowrap">
       
      </div>

      <NavigationMenu className="hidden sm:block">
        <NavigationMenuList className="flex items-center justify-center gap-8">
          {navigationItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={item.href}
                className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-neutraloffwhite text-sm lg:text-base tracking-[-0.48px] leading-6 whitespace-nowrap hover:text-white transition-colors"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile menu button */}
      <button className="sm:hidden text-neutraloffwhite">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};
