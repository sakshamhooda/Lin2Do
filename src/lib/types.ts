// ─── Linear Types ───

export interface LinearTicket {
  id: string;
  identifier: string;
  title: string;
  description: string | null;
  priority: number;
  status: string;
  assignee: string | null;
  labels: string[];
  project: string | null;
  team: string | null;
  url: string;
}

// ─── Todoist Types ───

export interface TodoistProject {
  id: string;
  name: string;
  color: string;
  is_favorite: boolean;
  parent_id: string | null;
}

export interface TodoistTaskInput {
  content: string;
  description?: string;
  project_id?: string;
  parent_id?: string;
  priority?: number;
  labels?: string[];
}

export interface TodoistTask {
  id: string;
  content: string;
  description: string;
  project_id: string;
  parent_id: string | null;
  priority: number;
  url: string;
}

// ─── Subtask Types ───

export interface Subtask {
  id: string;
  title: string;
  description?: string;
}

// ─── AI Types ───

export type AiProvider = 'gemini' | 'anthropic' | 'openai' | 'openrouter';

export interface AiBreakdownRequest {
  ticketTitle: string;
  ticketDescription: string | null;
  ticketMetadata: {
    labels: string[];
    priority: number;
    status: string;
  };
  provider: AiProvider;
}

export interface AiBreakdownResponse {
  subtasks: Array<{ title: string; description?: string }>;
}

// ─── Auth Types ───

export type AuthService = 'linear' | 'todoist' | 'anthropic';

export interface TokenData {
  access_token: string;
  refresh_token?: string;
  expires_at?: number;
  token_type?: string;
}

export interface AuthStatus {
  linear: boolean;
  todoist: boolean;
  gemini: boolean;
  openai: boolean;
  openrouter: boolean;
  anthropic: boolean;
}

// ─── Settings Types ───

export interface Settings {
  defaultAiProvider: AiProvider;
  defaultTodoistProjectId: string | null;
  geminiApiKey: string | null;
  anthropicApiKey: string | null;
  openaiApiKey: string | null;
  openrouterApiKey: string | null;
  // OAuth credentials (user-provided)
  linearClientId: string | null;
  linearClientSecret: string | null;
  todoistClientId: string | null;
  todoistClientSecret: string | null;
}

// ─── Message Types ───

export type Message =
  | { type: 'OPEN_SIDE_PANEL'; ticketIdentifier: string }
  | { type: 'OPEN_SIDE_PANEL_ONLY' }
  | { type: 'FETCH_TICKET'; identifier: string }
  | { type: 'FETCH_TICKET_RESULT'; ticket: LinearTicket | null; error?: string }
  | { type: 'AI_BREAKDOWN'; request: AiBreakdownRequest }
  | { type: 'AI_BREAKDOWN_RESULT'; subtasks: Subtask[]; error?: string }
  | { type: 'CREATE_TODOIST_TASKS'; tasks: TodoistTaskInput[]; projectId: string }
  | { type: 'CREATE_TODOIST_TASKS_RESULT'; taskIds: string[]; error?: string }
  | { type: 'START_OAUTH'; service: AuthService }
  | { type: 'OAUTH_RESULT'; service: AuthService; success: boolean; error?: string }
  | { type: 'GET_AUTH_STATUS' }
  | { type: 'AUTH_STATUS_RESULT'; status: AuthStatus }
  | { type: 'GET_TODOIST_PROJECTS' }
  | { type: 'TODOIST_PROJECTS_RESULT'; projects: TodoistProject[]; error?: string }
  | { type: 'TICKET_DATA_UPDATED'; ticket: LinearTicket }
  | { type: 'SAVE_SETTINGS'; settings: Partial<Settings> }
  | { type: 'GET_SETTINGS' }
  | { type: 'SETTINGS_RESULT'; settings: Settings };
