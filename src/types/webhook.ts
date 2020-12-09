type WebHookId = number;
type WebHookAddress = string;
type WebHookTopic = 'orders/create' | 'orders/update';
type WebHookFormatType = 'json' | 'xml';
type WebHookCreatedAt = string;
type WebHook = {
  id: WebHookId;
  address: WebHookAddress;
  topic: WebHookTopic;
  format_type: WebHookFormatType;
  created_at: WebHookCreatedAt;
};
type CreateWebHook = {
  webhook: {
    address: WebHookAddress;
    topic: WebHookTopic;
    format_type: WebHookFormatType;
  };
};

type UpdateWebHook = {
  webhook: {
    address?: WebHookAddress;
    topic?: WebHookTopic;
    format_type?: WebHookFormatType;
  };
};
