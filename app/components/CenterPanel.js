"use client";

import styles from "./CenterPanel.module.css";
import ChatInput from "./ChatInput";

export default function CenterPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.emptyState}>
        <div className={styles.iconWrapper}>
          <svg
            role="img"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            aria-label="Agent icon"
          >
            <rect
              x="8"
              y="8"
              width="48"
              height="48"
              rx="8"
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.3"
            />
            <path
              d="M20 28L32 36L44 28"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.5" />
          </svg>
        </div>

        <h1 className={styles.title}>Build with Agent</h1>

        <p className={styles.description}>
          Start a conversation with your AI agent. Ask questions, request code
          generation, or get help with your development tasks. The agent will
          respond with intelligent suggestions and can execute tasks
          autonomously.
        </p>

        <div className={styles.suggestions}>
          <button type="button" className={styles.suggestionCard}>
            <svg
              role="img"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-label="Create component"
            >
              <path
                d="M10 3V17M3 10H17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span>Create a new component</span>
          </button>

          <button type="button" className={styles.suggestionCard}>
            <svg
              role="img"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-label="Refactor code"
            >
              <path
                d="M7 13L10 10L13 13M7 7L10 10L13 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Refactor existing code</span>
          </button>

          <button type="button" className={styles.suggestionCard}>
            <svg
              role="img"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-label="Debug issue"
            >
              <circle
                cx="10"
                cy="10"
                r="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M10 6V10L13 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span>Debug an issue</span>
          </button>

          <button type="button" className={styles.suggestionCard}>
            <svg
              role="img"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-label="Optimize performance"
            >
              <path
                d="M3 7L10 3L17 7M3 7L10 11M3 7V13L10 17M17 7L10 11M17 7V13L10 17M10 11V17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Optimize performance</span>
          </button>
        </div>
      </div>

      <ChatInput />
    </div>
  );
}
