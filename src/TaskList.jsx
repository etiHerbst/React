// קומפוננטת רשימת המשימות (TaskList)
// קומפוננטה זו היא "בן" — היא מקבלת את רשימת המשימות מהאב (App)
// דרך props ומציגה כל משימה: שם + סטטוס.

function TaskList(props) {
  // props.tasks = מערך של אובייקטים, כל אובייקט הוא משימה:
  // { id: ..., name: ..., status: ... }
  // props.onToggle = פונקציה שמקבלת id ומחליפה את הסטטוס של אותה משימה.

  return (
    <section className="task-list">
      <h2>המשימות שלי</h2>

      {/* .map עובר על כל משימה במערך ומחזיר עבורה שורה ברשימה */}
      <ul>
        {props.tasks.map((task) => {
          // האם המשימה הושלמה — משפיע על העיצוב ועל הטקסט בכפתור
          const isDone = task.status === 'הושלם'

          return (
            <li key={task.id} className={isDone ? 'done' : ''}>
              {/* שם המשימה */}
              <span className="task-name">{task.name}</span>

              {/* כפתור לחיץ שמחליף את הסטטוס הלוך וחזור */}
              <button
                type="button"
                className="task-status-button"
                onClick={() => props.onToggle(task.id)}
                aria-pressed={isDone}
              >
                {task.status}
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

// מייצאים את הקומפוננטה כדי שנוכל להשתמש בה בקבצים אחרים
export default TaskList
