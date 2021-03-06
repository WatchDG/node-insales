type AccountId = number;
type AccountSubdomain = string;
type AccountOrganization = string;
type AccountContactPhone = string;
type AccountNotificationEmail = string;
type AccountBlocked = boolean;
type AccountCreatedAt = string;
type AccountEmail = string;
type AccountCountry = string;
type AccountCity = string;
type AccountState = string;
type AccountHideItemsOutOfStock = boolean;
type AccountEnableOrderDiscounts = boolean;
type AccountEnableClientDiscounts = boolean;
type AccountEnableGroupDiscounts = boolean;
type AccountEnableCartDiscounts = boolean;
type AccountRegistrationTypeId = number;
type AccountPaidTill = string;
type AccountSmsNotificationPhone = string;
type AccountIcq = string;
type AccountPhone = string;
type AccountTitle = string;
type AccountMainHost = string;
type AccountMainHostProtocol = string;
type AccountNextOrderNumber = number;
type AccountClientCookiesWhitelist = string;
type AccountStockCurrencyExchangeRate = number;

type AccountOwnerId = number;
type AccountOwnerName = string;
type AccountOwnerEmail = string;
type AccountOwnerCreatedAt = string;
type AccountOwner = {
  id: AccountOwnerId;
  name: AccountOwnerName;
  email: AccountOwnerEmail;
  created_at: AccountOwnerCreatedAt;
};
export type Account = {
  id: AccountId;
  subdomain: AccountSubdomain;
  organization: AccountOrganization | null;
  contact_phone: AccountContactPhone | null;
  notification_email: AccountNotificationEmail | null;
  blocked: AccountBlocked;
  created_at: AccountCreatedAt;
  email: AccountEmail | null;
  owner: AccountOwner;
  country: AccountCountry;
  city: AccountCity;
  state: AccountState;
  hide_items_out_of_stock: AccountHideItemsOutOfStock;
  enable_order_discounts: AccountEnableOrderDiscounts;
  enable_client_discounts: AccountEnableClientDiscounts;
  enable_group_discounts: AccountEnableGroupDiscounts;
  enable_cart_discounts: AccountEnableCartDiscounts;
  registration_type_id: AccountRegistrationTypeId;
  paid_till: AccountPaidTill;
  sms_notification_phone: AccountSmsNotificationPhone | null;
  icq: AccountIcq | null;
  phone: AccountPhone | null;
  title: AccountTitle;
  main_host: AccountMainHost;
  main_host_protocol: AccountMainHostProtocol;
  next_order_number: AccountNextOrderNumber;
  client_cookies_whitelist: AccountClientCookiesWhitelist;
  stock_currency_exchange_rate: AccountStockCurrencyExchangeRate;
};
