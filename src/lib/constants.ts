// ─── Linear ───
export const LINEAR_AUTH_URL = 'https://linear.app/oauth/authorize';
export const LINEAR_TOKEN_URL = 'https://api.linear.app/oauth/token';
export const LINEAR_API_URL = 'https://api.linear.app/graphql';
export const LINEAR_SCOPES = 'read';

// ─── Todoist ───
export const TODOIST_AUTH_URL = 'https://todoist.com/oauth/authorize';
export const TODOIST_TOKEN_URL = 'https://todoist.com/oauth/access_token';
export const TODOIST_API_URL = 'https://api.todoist.com/api/v1';
export const TODOIST_SCOPES = 'data:read_write,task:add';

// ─── Anthropic ───
export const ANTHROPIC_AUTH_URL = 'https://console.anthropic.com/oauth/authorize';
export const ANTHROPIC_TOKEN_URL = 'https://console.anthropic.com/oauth/token';
export const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1';
export const ANTHROPIC_MODEL = 'claude-haiku-4-6-20260319';

// ─── Gemini ───
export const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

// ─── OpenAI ───
export const OPENAI_API_URL = 'https://api.openai.com/v1';
export const OPENAI_MODEL = 'gpt-4.1-nano';

// ─── OpenRouter ───
export const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1';
export const OPENROUTER_MODEL = 'google/gemini-2.5-flash';

// ─── Storage Keys ───
export const STORAGE_KEYS = {
  LINEAR_TOKEN: 'linear_token',
  TODOIST_TOKEN: 'todoist_token',
  ANTHROPIC_TOKEN: 'anthropic_token',
  SETTINGS: 'settings',
  CURRENT_TICKET: 'current_ticket',
} as const;

// ─── Default Settings ───
export const DEFAULT_SETTINGS = {
  defaultAiProvider: 'gemini' as const,
  defaultTodoistProjectId: null,
  geminiApiKey: null,
  anthropicApiKey: null,
  openaiApiKey: null,
  openrouterApiKey: null,
  linearClientId: null,
  linearClientSecret: null,
  todoistClientId: null,
  todoistClientSecret: null,
};
