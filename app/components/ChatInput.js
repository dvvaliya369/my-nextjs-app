"use client";

import { useState } from "react";
import styles from "./ChatInput.module.css";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("gpt-4");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputWrapper}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <button type="button" className={styles.contextButton}>
              <svg
                role="img"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-label="Add context"
              >
                <path
                  d="M9 3V15M3 9H15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span>Add Context</span>
            </button>

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask anything or describe what you want to build..."
              className={styles.input}
              id="message-input"
            />

            <button
              type="submit"
              className={styles.sendButton}
              disabled={!message.trim()}
              aria-label="Send message"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className={styles.footer}>
            <div className={styles.agentSelector}>
              <label htmlFor="agent-select" className={styles.label}>
                Agent:
              </label>
              <select
                id="agent-select"
                value={selectedAgent}
                onChange={(e) => setSelectedAgent(e.target.value)}
                className={styles.select}
              >
                <option value="gpt-4">GPT-4 Turbo</option>
                <option value="gpt-3.5">GPT-3.5</option>
                <option value="claude">Claude 3</option>
                <option value="gemini">Gemini Pro</option>
              </select>
            </div>

            <div className={styles.shortcuts}>
              <span className={styles.shortcut}>
                <kbd>⌘</kbd> + <kbd>Enter</kbd> to send
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
