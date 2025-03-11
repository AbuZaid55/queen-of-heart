"use client";
import { usePathname } from "next/navigation";

export default function PathnameProvider({ children }) {
  const pathName = usePathname();
  return <>{children(pathName)}</>;
}
