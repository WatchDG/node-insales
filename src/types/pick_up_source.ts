type PickUpSourceId = number;
type PickUpSourceTitle = string;
type PickUpSourceHttpMethod = 'GET' | 'POST';
type PickUpSourceUrl = string;
type PickUpSourcePointInfoUrl = string;
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
