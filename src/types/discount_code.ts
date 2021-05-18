export type DiscountCodeId = number;
export type DiscountCodeCode = string;
export type DiscountCodeDiscount = number;
export type DiscountCodeMinPrice = number;
export type DiscountCodeDescription = number;
export type DiscountCodeDisabled = boolean;
export type DiscountCodeActOnce = boolean;
export type DiscountCodeActOnceForClient = boolean;
export type DiscountCodeExpiredAt = string;

export enum DiscountCodeTypeId {
  PERCENT = 1,
  ABSOLUTE = 2
}

export type CreateDiscountCode = {
  code: DiscountCodeCode;
  type_id: DiscountCodeTypeId;
  discount: DiscountCodeDiscount;
  min_price?: DiscountCodeMinPrice;
  description?: DiscountCodeDescription;
  disabled?: DiscountCodeDisabled;
  act_once?: DiscountCodeActOnce;
  act_once_for_client?: DiscountCodeActOnceForClient;
  expired_at?: DiscountCodeExpiredAt;
};

export type UpdateDiscountCode = {
  discount: DiscountCodeDiscount;
};

export type DiscountCode = {
  id: DiscountCodeId;
  code: DiscountCodeCode;
  type_id: DiscountCodeTypeId;
  discount: DiscountCodeDiscount;
  disabled: DiscountCodeDisabled;
  act_once: DiscountCodeActOnce;
  act_once_for_client: DiscountCodeActOnceForClient;
};
