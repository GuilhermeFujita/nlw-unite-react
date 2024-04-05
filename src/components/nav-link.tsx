import { ComponentProps, ReactNode } from 'react';

interface NavLinkProps extends ComponentProps<'a'> {
  children: ReactNode;
}

export function NavLink(props: NavLinkProps) {
  return (
    <a {...props} className="font-medium text-sm">
      {props.children}
    </a>
  );
}
