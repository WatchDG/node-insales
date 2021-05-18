import type { PickUpSourceId } from './pick_up_source';
import type { PaymentGatewayId } from './payment_gateway';

export type DeliveryVariantId = number;
export type DeliveryVariantTitle = string;
export type DeliveryVariantType = 'DeliveryVariant::PickUp' | 'DeliveryVariant::External' | string;
export type DeliveryVariantDescription = string;
export type DeliveryVariantPosition = number;
export type DeliveryVariantAddPaymentGateways = boolean;
export type DeliveryVariantUrl = string;
export type DeliveryVariantPickUpSourceAttributeId = number;
export type DeliveryVariantPickUpSourceAttributeDestroy = 1;
export type DeliveryVariantRemovePickUpSourceAttribute = {
  _destroy: DeliveryVariantPickUpSourceAttributeDestroy;
  id: DeliveryVariantPickUpSourceAttributeId;
};
export type DeliveryVariantAddPickUpSourceAttribute = {
  pick_up_source_id: PickUpSourceId;
};
export type DeliveryVariantPickUpSourceAttribute =
  | DeliveryVariantRemovePickUpSourceAttribute
  | DeliveryVariantAddPickUpSourceAttribute;
export type DeliveryVariantPaymentAttributeId = number;
export type DeliveryVariantPaymentAttributeDestroy = 1;
export type DeliveryVariantAddPaymentAttribute = {
  payment_gateway_id: PaymentGatewayId;
};
export type DeliveryVariantRemovePaymentAttribute = {
  _destroy: DeliveryVariantPaymentAttributeDestroy;
  id: DeliveryVariantPaymentAttributeId;
};
export type DeliveryVariantPaymentAttribute =
  | DeliveryVariantAddPaymentAttribute
  | DeliveryVariantRemovePaymentAttribute;
export type DeliveryVariant = {
  id: DeliveryVariantId;
  title: DeliveryVariantTitle;
  type: DeliveryVariantType;
  description?: DeliveryVariantDescription;
  url?: DeliveryVariantUrl;
};
export type CreateDeliveryVariant = {
  title: DeliveryVariantTitle;
  type: DeliveryVariantType;
  description?: DeliveryVariantDescription;
  position?: DeliveryVariantPosition;
  add_payment_gateways?: DeliveryVariantAddPaymentGateways;
  url?: DeliveryVariantUrl;
  api_version?: 'v2';
};
export type UpdateDeliveryVariant = {
  title?: DeliveryVariantTitle;
  description?: DeliveryVariantDescription;
  position?: DeliveryVariantPosition;
  add_payment_gateways?: DeliveryVariantAddPaymentGateways;
  pick_up_source_delivery_variants_attributes?: DeliveryVariantPickUpSourceAttribute[];
  payment_delivery_variants_attributes?: DeliveryVariantPaymentAttribute[];
};
