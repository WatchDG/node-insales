export type WebHookId = number;
type WebHookAddress = string;
type WebHookTopic = 'orders/create' | 'orders/update';
type WebHookFormatType = 'json' | 'xml';
type WebHookCreatedAt = string;
export type WebHook = {
  id: WebHookId;
  address: WebHookAddress;
  topic: WebHookTopic;
  format_type: WebHookFormatType;
  created_at: WebHookCreatedAt;
};
export type CreateWebHook = {
  webhook: {
    address: WebHookAddress;
    topic: WebHookTopic;
    format_type: WebHookFormatType;
  };
};

export type UpdateWebHook = {
  webhook: {
    address?: WebHookAddress;
    topic?: WebHookTopic;
    format_type?: WebHookFormatType;
  };
};
