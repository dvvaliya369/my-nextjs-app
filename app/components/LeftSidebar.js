"use client";

import styles from "./LeftSidebar.module.css";

export default function LeftSidebar() {
  const tasks = [
    {
      id: 1,
      title: "Analyze user requirements",
      status: "completed",
      time: "2m ago",
    },
    {
      id: 2,
      title: "Design database schema",
      status: "in-progress",
      time: "now",
    },
    { id: 3, title: "Implement API endpoints", status: "pending", time: "" },
    { id: 4, title: "Write unit tests", status: "pending", time: "" },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.title}>Agent Tasks</h2>
        <span className={styles.badge}>{tasks.length}</span>
      </div>

      <div className={styles.taskList}>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`${styles.taskItem} ${styles[task.status]}`}
          >
            <div className={styles.taskHeader}>
              <div className={styles.statusIndicator}>
                {task.status === "completed" && (
                  <svg
                    role="img"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-label="Completed"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M5 8L7 10L11 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {task.status === "in-progress" && (
                  <svg
                    role="img"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-label="In progress"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="8" cy="8" r="3" fill="currentColor" />
                  </svg>
                )}
                {task.status === "pending" && (
                  <svg
                    role="img"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-label="Pending"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      opacity="0.3"
                    />
                  </svg>
                )}
              </div>
              <span className={styles.taskTitle}>{task.title}</span>
            </div>
            {task.time && <span className={styles.taskTime}>{task.time}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
