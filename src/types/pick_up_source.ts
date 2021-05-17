export type PickUpSourceId = number;
export type PickUpSourceTitle = string;
export type PickUpSourceHttpMethod = 'GET' | 'POST';
export type PickUpSourceUrl = string;
export type PickUpSourcePointInfoUrl = string;
export type PickUpSourcePointCreatedAt = string;
export type PickUpSourcePointUpdatedAt = string;
export type CreatePickUpSource = {
  title: PickUpSourceTitle;
  http_method: PickUpSourceHttpMethod;
  url: PickUpSourceUrl;
  point_info_url: PickUpSourcePointInfoUrl;
};
export type UpdatePickUpSource = {
  title: PickUpSourceTitle;
  http_method: PickUpSourceHttpMethod;
  url: PickUpSourceUrl;
  point_info_url: PickUpSourcePointInfoUrl;
};
export type PickUpSource = {
  id: PickUpSourceId;
  title: PickUpSourceTitle;
  url: PickUpSourceUrl;
  point_info_url: PickUpSourcePointInfoUrl;
  created_at: PickUpSourcePointCreatedAt;
  updated_at: PickUpSourcePointUpdatedAt;
};
