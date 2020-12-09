type PickUpSourceId = number;
type PickUpSourceTitle = string;
type PickUpSourceHttpMethod = 'GET' | 'POST';
type PickUpSourceUrl = string;
type PickUpSourcePointInfoUrl = string;
type PickUpSourcePointCreatedAt = string;
type PickUpSourcePointUpdatedAt = string;

type CreatePickUpSource = {
  pick_up_source: {
    title: PickUpSourceTitle;
    http_method: PickUpSourceHttpMethod;
    url: PickUpSourceUrl;
    point_info_url: PickUpSourcePointInfoUrl;
  };
};
type UpdatePickUpSource = {
  pick_up_source: {
    title: PickUpSourceTitle;
    http_method: PickUpSourceHttpMethod;
    url: PickUpSourceUrl;
    point_info_url: PickUpSourcePointInfoUrl;
  };
};

type PickUpSource = {
  id: PickUpSourceId;
  title: PickUpSourceTitle;
  url: PickUpSourceUrl;
  point_info_url: PickUpSourcePointInfoUrl;
  created_at: PickUpSourcePointCreatedAt;
  updated_at: PickUpSourcePointUpdatedAt;
};