import type { Message } from './types';

/**
 * Send a message to the background service worker and get a typed response.
 */
export function sendMessage<T = unknown>(message: Message): Promise<T> {
  return chrome.runtime.sendMessage(message);
}

/**
 * Send a message to a specific tab's content script.
 */
export function sendTabMessage<T = unknown>(tabId: number, message: Message): Promise<T> {
  return chrome.tabs.sendMessage(tabId, message);
}

/**
 * Listen for messages with a typed handler.
 */
export function onMessage(
  handler: (
    message: Message,
    sender: chrome.runtime.MessageSender,
    sendResponse: (response: unknown) => void,
  ) => boolean | void,
): void {
  chrome.runtime.onMessage.addListener(handler);
}

/**
 * Generate a unique ID for subtasks.
 */
export function generateId(): string {
  return crypto.randomUUID();
}
