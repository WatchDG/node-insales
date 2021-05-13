import type { PickUpSourceId } from './pick_up_source';
import type { PaymentGatewayId } from './payment_gateway';

export type DeliveryVariantId = number;
type DeliveryVariantTitle = string;
type DeliveryVariantType = 'DeliveryVariant::PickUp' | 'DeliveryVariant::External' | string;
type DeliveryVariantDescription = string;
type DeliveryVariantPosition = number;
type DeliveryVariantAddPaymentGateways = boolean;
type DeliveryVariantUrl = string;
export type DeliveryVariantPickUpSourceAttributeId = number;
type DeliveryVariantPickUpSourceAttributeDestroy = 1;
export type DeliveryVariantPickUpSourceRemoveAttribute = {
  _destroy: DeliveryVariantPickUpSourceAttributeDestroy;
  id: DeliveryVariantPickUpSourceAttributeId;
};
export type DeliveryVariantPickUpSourceAddAttribute = {
  pick_up_source_id: PickUpSourceId;
};
type DeliveryVariantPickUpSourceAttribute =
  | DeliveryVariantPickUpSourceRemoveAttribute
  | DeliveryVariantPickUpSourceAddAttribute;
type DeliveryVariantPaymentAttributeId = number;
type DeliveryVariantPaymentAttributeDestroy = 1;
export type AddDeliveryVariantPaymentAttribute = {
  payment_gateway_id: PaymentGatewayId;
};
export type RemoveDeliveryVariantPaymentAttribute = {
  _destroy: DeliveryVariantPaymentAttributeDestroy;
  id: DeliveryVariantPaymentAttributeId;
};
type DeliveryVariantPaymentAttribute = AddDeliveryVariantPaymentAttribute | RemoveDeliveryVariantPaymentAttribute;
export type DeliveryVariant = {
  title: DeliveryVariantTitle;
  type: DeliveryVariantType;
  description?: DeliveryVariantDescription;
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
  delivery_variant: {
    title?: DeliveryVariantTitle;
    description?: DeliveryVariantDescription;
    position?: DeliveryVariantPosition;
    add_payment_gateways?: DeliveryVariantAddPaymentGateways;
    pick_up_source_delivery_variants_attributes?: DeliveryVariantPickUpSourceAttribute[];
    payment_delivery_variants_attributes?: DeliveryVariantPaymentAttribute[];
  };
};
