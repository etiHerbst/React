// קומפוננטת הסיכום (TaskSummary)
// קומפוננטה זו היא "בן" — היא מקבלת את רשימת המשימות מהאב (App)
// דרך props, מחשבת כמה משימות יש וכמה הושלמו, ומציגה סיכום.

function TaskSummary(props) {
  // סך כל המשימות = מספר הפריטים במערך tasks
  const total = props.tasks.length

  // filter = מסנן את המערך כך שישארו רק משימות שהסטטוס שלהן "הושלם"
  const completedTasks = props.tasks.filter(
    (task) => task.status === 'הושלם'
  )

  // מספר המשימות שהושלמו = אורך המערך המסונן
  const completed = completedTasks.length

  return (
    <section className="task-summary">
      <h2>סיכום</h2>
      {/* מציגים את הסיכום עם שני המספרים המחושבים */}
      <p>
        יש {total} משימות, מתוכן {completed} הושלמו.
      </p>
    </section>
  )
}

// מייצאים את הקומפוננטה כדי שנוכל להשתמש בה בקבצים אחרים
export default TaskSummary
