// קומפוננטת רשימת המשימות (TaskList)
// קומפוננטה זו היא "בן" — היא מקבלת את רשימת המשימות מהאב (App)
// דרך props ומציגה כל משימה: שם + סטטוס.

function TaskList(props) {
  // props.tasks = מערך של אובייקטים, כל אובייקט הוא משימה:
  // { id: ..., name: ..., status: ... }

  return (
    <section className="task-list">
      <h2>המשימות שלי</h2>

      {/* .map עובר על כל משימה במערך ומחזיר עבורה שורה ברשימה */}
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>
            {/* מציגים את שם המשימה */}
            <span className="task-name">{task.name}</span>
            {/* מציגים את הסטטוס של המשימה */}
            <span className="task-status">{task.status}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

// מייצאים את הקומפוננטה כדי שנוכל להשתמש בה בקבצים אחרים
export default TaskList
