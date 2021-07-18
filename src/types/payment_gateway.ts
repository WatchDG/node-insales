import type { DeliveryVariantId } from './delivery_variant';

export type PaymentGatewayId = number;
export type PaymentGatewayTitle = string;
export type PaymentGatewayDescription = string;
export type PaymentGatewayPosition = number;
export type PaymentGatewayType = 'PaymentGateway::Custom' | 'PaymentGateway::Cod' | 'PaymentGateway::External' | string;
export type PaymentGatewayCreatedAt = string;
export type PaymentGatewayUpdatedAt = string;
export type PaymentGatewayMargin = string;
export type PaymentGatewayDeliveryVariantId = number;
export type PaymentGatewayAddDeliveryVariants = boolean;
export type PaymentGatewayDeliveryVariant = {
  id: PaymentGatewayDeliveryVariantId;
  delivery_variant_id: DeliveryVariantId;
  created_at: string;
};
export type PaymentGatewayPaymentDeliveryVariantsAttributeId = number;
export type PaymentGatewayPaymentDeliveryVariantsAttributeDestroy = 1;
export type AddPaymentGatewayPaymentDeliveryVariantsAttribute = {
  delivery_variant_id: DeliveryVariantId;
};
export type RemovePaymentGatewayPaymentDeliveryVariantsAttribute = {
  _destroy: PaymentGatewayPaymentDeliveryVariantsAttributeDestroy;
  id: PaymentGatewayPaymentDeliveryVariantsAttributeId;
};
export type PaymentGatewayPaymentDeliveryVariantsAttribute =
  | AddPaymentGatewayPaymentDeliveryVariantsAttribute
  | RemovePaymentGatewayPaymentDeliveryVariantsAttribute;
export type PaymentGateway = {
  id: PaymentGatewayId;
  position: PaymentGatewayPosition;
  type: PaymentGatewayType;
  created_at: PaymentGatewayCreatedAt;
  updated_at: PaymentGatewayUpdatedAt;
  margin: PaymentGatewayMargin;
  available_for_individual_clients: boolean;
  available_for_juridical_clients: boolean;
  title: PaymentGatewayTitle;
  description: PaymentGatewayDescription;
  payment_delivery_variants: PaymentGatewayDeliveryVariant[];
};
export type CreatePaymentGateway = {
  title: PaymentGatewayTitle;
  type: PaymentGatewayType;
  margin?: PaymentGatewayMargin;
  position?: PaymentGatewayPosition;
  description?: PaymentGatewayDescription;
  add_delivery_variants?: PaymentGatewayAddDeliveryVariants;
};
export type UpdatePaymentGateway = {
  title?: PaymentGatewayTitle;
  margin?: PaymentGatewayMargin;
  position?: PaymentGatewayPosition;
  description?: PaymentGatewayDescription;
  payment_delivery_variants_attributes?: PaymentGatewayPaymentDeliveryVariantsAttribute[];
};
