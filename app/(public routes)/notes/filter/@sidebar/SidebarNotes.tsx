"use client"

import css from "./SidebarNotes.module.css";
import { noteTag } from "@/types/note";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ValidTags = noteTag | "All notes";

const TAGS: ValidTags[] = [
  "All notes",
  "Todo",
  "Work",
  "Personal",
  "Meeting",
  "Shopping",
];

const SidebarNotes = () => {
  const pathname = usePathname();
  const currentTag = pathname.split("/").pop();

  const isActive = (tag: ValidTags) => {
    return currentTag === tag || (currentTag === "all" && tag === "All notes");
  };

  return (
    <ul className={css.menuList}>
      {TAGS.map((tag) => (
        <li className={`${css.menuItem} ${isActive(tag) ? css.active : ""}`} key={tag}>
          <Link
            href={`/notes/filter/${tag === "All notes" ? "all" : tag}`}
            className={css.menuLink}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SidebarNotes;