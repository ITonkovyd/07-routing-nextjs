import SidebarNotes from "./@sidebar/SidebarNotes";
import css from "./LayoutNotes.module.css"

type Props = {
  children: React.ReactNode;
}

const NotesLayout = ({ children }: Props) => {
  return (
    <section>
      <div className={css.container}>
      <aside className={css.sidebar}>
        <SidebarNotes />
      </aside>
      <div className={css.notesWrapper}>
        {children}
      </div>
      </div>
    </section>
  )
}

export default NotesLayout