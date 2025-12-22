'use client';

import { useState } from 'react';
import styles from './AgentHQ.module.css';

export default function AgentHQ() {
  const [inputValue, setInputValue] = useState('');
  const [selectedAgent, setSelectedAgent] = useState('Claude Sonnet 4.5');

  const tasks = [
    { id: 1, title: 'Code Review', status: 'in_progress', time: '2m ago' },
    { id: 2, title: 'Refactor Components', status: 'completed', time: '15m ago' },
    { id: 3, title: 'Fix Bug #123', status: 'pending', time: '30m ago' },
  ];

  const sessions = [
    { id: 1, title: 'UI Improvements', status: 'Finished', messages: 24, time: '2h ago' },
    { id: 2, title: 'API Integration', status: 'Background', messages: 18, time: '4h ago' },
    { id: 3, title: 'Database Migration', status: 'Local', messages: 12, time: '1d ago' },
    { id: 4, title: 'Performance Optimization', status: 'Finished', messages: 31, time: '2d ago' },
  ];

  return (
    <div className={styles.agentHQ}>
      {/* Left Sidebar - Agent Tasks */}
      <aside className={styles.leftSidebar}>
        <div className={styles.sidebarHeader}>
          <h2>Agent Tasks</h2>
          <button className={styles.iconButton}>+</button>
        </div>
        <div className={styles.taskList}>
          {tasks.map(task => (
            <div key={task.id} className={`${styles.taskCard} ${styles[task.status]}`}>
              <div className={styles.taskHeader}>
                <span className={styles.statusDot}></span>
                <span className={styles.taskTime}>{task.time}</span>
              </div>
              <h3 className={styles.taskTitle}>{task.title}</h3>
              <p className={styles.taskStatus}>
                {task.status === 'in_progress' ? 'In Progress' :
                 task.status === 'completed' ? 'Completed' : 'Pending'}
              </p>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content - Build with Agent */}
      <main className={styles.mainContent}>
        <div className={styles.emptyState}>
          <div className={styles.emptyStateIcon}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="8" width="48" height="48" rx="8" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
              <path d="M32 20V44M20 32H44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
            </svg>
          </div>
          <h1 className={styles.emptyStateTitle}>Build with Agent</h1>
          <p className={styles.emptyStateDescription}>
            Start a conversation with your AI agent to build, refactor, or debug your code.
            The agent will help you accomplish tasks efficiently with intelligent suggestions.
          </p>
        </div>

        <div className={styles.chatInput}>
          <div className={styles.inputWrapper}>
            <button className={styles.contextButton}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <input
              type="text"
              placeholder="Add Context..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={styles.input}
            />
            <div className={styles.inputActions}>
              <select
                value={selectedAgent}
                onChange={(e) => setSelectedAgent(e.target.value)}
                className={styles.agentSelect}
              >
                <option>Claude Sonnet 4.5</option>
                <option>Claude Opus 4</option>
                <option>GPT-4</option>
              </select>
              <button className={styles.sendButton}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar - All Sessions */}
      <aside className={styles.rightSidebar}>
        <div className={styles.sidebarHeader}>
          <h2>ALL SESSIONS</h2>
          <button className={styles.iconButton}>⋯</button>
        </div>
        <div className={styles.sessionList}>
          {sessions.map(session => (
            <div key={session.id} className={styles.sessionCard}>
              <div className={styles.sessionHeader}>
                <h3 className={styles.sessionTitle}>{session.title}</h3>
                <span className={`${styles.sessionStatus} ${styles[session.status.toLowerCase()]}`}>
                  {session.status}
                </span>
              </div>
              <div className={styles.sessionMeta}>
                <span className={styles.messageCount}>{session.messages} messages</span>
                <span className={styles.sessionTime}>{session.time}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
