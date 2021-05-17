export type WebHookId = number;
export type WebHookAddress = string;
export type WebHookTopic = 'orders/create' | 'orders/update' | 'orders/destroy';
export type WebHookFormatType = 'json' | 'xml';
export type WebHookCreatedAt = string;
export type WebHook = {
  id: WebHookId;
  address: WebHookAddress;
  topic: WebHookTopic;
  format_type: WebHookFormatType;
  created_at: WebHookCreatedAt;
};
export type CreateWebHook = {
  address: WebHookAddress;
  topic: WebHookTopic;
  format_type: WebHookFormatType;
};
export type UpdateWebHook = {
  address?: WebHookAddress;
  topic?: WebHookTopic;
  format_type?: WebHookFormatType;
};
