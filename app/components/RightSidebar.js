"use client";

import styles from "./RightSidebar.module.css";

export default function RightSidebar() {
  const sessions = [
    {
      id: 1,
      title: "Build authentication system",
      status: "Finished",
      time: "2 hours ago",
      messages: 24,
    },
    {
      id: 2,
      title: "Create dashboard UI",
      status: "Background",
      time: "5 hours ago",
      messages: 18,
    },
    {
      id: 3,
      title: "Optimize database queries",
      status: "Local",
      time: "Yesterday",
      messages: 12,
    },
    {
      id: 4,
      title: "Implement payment gateway",
      status: "Finished",
      time: "2 days ago",
      messages: 31,
    },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.title}>All Sessions</h2>
        <button
          type="button"
          className={styles.newButton}
          aria-label="New session"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8 3V13M3 8H13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className={styles.sessionList}>
        {sessions.map((session) => (
          <div key={session.id} className={styles.sessionItem}>
            <div className={styles.sessionHeader}>
              <h3 className={styles.sessionTitle}>{session.title}</h3>
              <span
                className={`${styles.statusBadge} ${styles[session.status.toLowerCase()]}`}
              >
                {session.status}
              </span>
            </div>
            <div className={styles.sessionMeta}>
              <span className={styles.messageCount}>
                <svg
                  role="img"
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-label="Messages"
                >
                  <path
                    d="M2 5.5C2 4.67157 2.67157 4 3.5 4H12.5C13.3284 4 14 4.67157 14 5.5V10.5C14 11.3284 13.3284 12 12.5 12H5L2 14V5.5Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {session.messages}
              </span>
              <span className={styles.sessionTime}>{session.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
