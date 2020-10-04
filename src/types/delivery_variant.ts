type DeliveryVariantId = number;
type DeliveryVariantTitle = string;
type DeliveryVariantType = 'DeliveryVariant::PickUp';
type DeliveryVariantDescription = string;
type DeliveryVariantPosition = number;
type DeliveryVariantAddPaymentGateways = true;
type DeliveryVariantUrl = string;
type DeliveryVariantPickUpSourceAttributeId = number;
type DeliveryVariantPickUpSourceAttributeDestroy = 1;
type DeliveryVariantPickUpSourceRemoveAttribute = {
  _destroy: DeliveryVariantPickUpSourceAttributeDestroy;
  id: DeliveryVariantPickUpSourceAttributeId;
};
type DeliveryVariantPickUpSourceAttribute = DeliveryVariantPickUpSourceRemoveAttribute;
type DeliveryVariantPaymentAttributeId = number;
type DeliveryVariantPaymentAttributeDestroy = 1;
type AddDeliveryVariantPaymentAttribute = {
  payment_gateway_id: PaymentGatewayId;
};
type RemoveDeliveryVariantPaymentAttribute = {
  _destroy: DeliveryVariantPaymentAttributeDestroy;
  id: DeliveryVariantPaymentAttributeId;
};
type DeliveryVariantPaymentAttribute = AddDeliveryVariantPaymentAttribute | RemoveDeliveryVariantPaymentAttribute;
type DeliveryVariant = {
  title: DeliveryVariantTitle;
  type: DeliveryVariantType;
  description?: DeliveryVariantDescription;
};
type CreateDeliveryVariant = {
  delivery_variant: {
    title: DeliveryVariantTitle;
    type: DeliveryVariantType;
    description?: DeliveryVariantDescription;
    position?: DeliveryVariantPosition;
    add_payment_gateways?: DeliveryVariantAddPaymentGateways;
    url?: DeliveryVariantUrl;
  };
};
type UpdateDeliveryVariant = {
  delivery_variant: {
    title?: DeliveryVariantTitle;
    description?: DeliveryVariantDescription;
    position?: DeliveryVariantPosition;
    add_payment_gateways?: DeliveryVariantAddPaymentGateways;
    pick_up_source_delivery_variants_attributes?: DeliveryVariantPickUpSourceAttribute[];
    payment_delivery_variants_attributes?: DeliveryVariantPaymentAttribute[];
  };
};
