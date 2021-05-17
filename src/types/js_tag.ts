export type JsTagId = number;
export type JsTagType = 'JsTag::FileTag';
export type JsTagContent = string;
export type JsTagName = string;
export type JsTagCreatedAt = string;
export type JsTagUpdatedAt = string;
export type JsTag = {
  id: JsTagId;
  type: JsTagType;
  content: JsTagContent;
  name: JsTagName;
  created_at: JsTagCreatedAt;
  updated_at: JsTagUpdatedAt;
};
export type CreateJsTag = {
  type: JsTagType;
  content: JsTagContent;
  name?: JsTagName;
};
