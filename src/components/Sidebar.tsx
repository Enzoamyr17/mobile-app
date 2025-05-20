'use client';

import React from 'react';
import { User } from 'lucide-react';
import { Divider } from './Divider';

// Props for SidebarContent
interface SidebarContentProps {
  children: React.ReactNode;
}

// Reusable scrollable content area
const SidebarContent: React.FC<SidebarContentProps> = ({ children }) => {
  return <div className="p-4 h-full overflow-y-auto">{children}</div>;
};

// Props for Sidebar
interface SidebarProps {
  children?: React.ReactNode;
  isOpen: boolean;
  toggleSidebar: () => void;
  side?: 'left' | 'right';
}

const Sidebar: React.FC<SidebarProps> = ({
  children,
  isOpen,
  toggleSidebar,
  side = 'left',
}) => {
  const basePosition = side === 'left' ? 'left-0' : 'right-0';
  const slideIn = isOpen
    ? 'translate-x-0'
    : side === 'left'
    ? '-translate-x-full'
    : 'translate-x-full';

  return (
    <aside
      className={`fixed top-0 ${basePosition} w-[80%] max-w-[20rem] h-full bg-choco-sidebar transition-transform duration-300 shadow-sidebar ${slideIn} z-50`}
    >
      <SidebarContent>{children}</SidebarContent>
    </aside>
  );
};

export { Sidebar };
