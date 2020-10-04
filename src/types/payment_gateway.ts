type PaymentGatewayId = number;
type PaymentGatewayTitle = string;
type PaymentGatewayDescription = string;
type PaymentGatewayPosition = number;
type PaymentGatewayType = 'PaymentGateway::Custom' | 'PaymentGateway::Cod';
type PaymentGatewayCreatedAt = string;
type PaymentGatewayUpdatedAt = string;
type PaymentGatewayMargin = string;
type PaymentGatewayDeliveryVariantId = number;
type PaymentGatewayAddDeliveryVariants = boolean;
type PaymentGatewayDeliveryVariant = {
  id: PaymentGatewayDeliveryVariantId;
  delivery_variant_id: DeliveryVariantId;
  created_at: string;
};
type PaymentGatewayPaymentDeliveryVariantsAttributeId = number;
type PaymentGatewayPaymentDeliveryVariantsAttributeDestroy = 1;
type AddPaymentGatewayPaymentDeliveryVariantsAttribute = {
  delivery_variant_id: DeliveryVariantId;
};
type RemovePaymentGatewayPaymentDeliveryVariantsAttribute = {
  _destroy: PaymentGatewayPaymentDeliveryVariantsAttributeDestroy;
  id: PaymentGatewayPaymentDeliveryVariantsAttributeId;
};
type PaymentGatewayPaymentDeliveryVariantsAttribute =
  | AddPaymentGatewayPaymentDeliveryVariantsAttribute
  | RemovePaymentGatewayPaymentDeliveryVariantsAttribute;
type PaymentGateway = {
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
type CreatePaymentGateway = {
  payment_gateway: {
    title: PaymentGatewayTitle;
    type: PaymentGatewayType;
    margin?: PaymentGatewayMargin;
    position?: PaymentGatewayPosition;
    description?: PaymentGatewayDescription;
    add_delivery_variants?: PaymentGatewayAddDeliveryVariants;
  };
};
type UpdatePaymentGateway = {
  payment_gateway: {
    title?: PaymentGatewayTitle;
    margin?: PaymentGatewayMargin;
    position?: PaymentGatewayPosition;
    description?: PaymentGatewayDescription;
    payment_delivery_variants_attributes?: PaymentGatewayPaymentDeliveryVariantsAttribute[];
  };
};
