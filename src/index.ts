import { Result, ResultFail, ResultOk } from 'node-result';
import Axios, { AxiosInstance } from 'axios';

type DeliveryVariantId = number;
type DeliveryVariantTitle = string;
type DeliveryVariantType = 'DeliveryVariant::PickUp';
type DeliveryVariantDescription = string;
type DeliveryVariantPosition = number;
type DeliveryVariantAddPaymentGateways = true;
type DeliveryVariantUrl = string;

type WebHookId = number;
type WebHookAddress = string;
type WebHookTopic = 'orders/create' | 'orders/update';
type WebHookFormatType = 'json' | 'xml';
type WebHookCreatedAt = string;
type WebHook = {
  id: WebHookId;
  address: WebHookAddress;
  topic: WebHookTopic;
  format_type: WebHookFormatType;
  created_at: WebHookCreatedAt;
};
type CreateWebHook = {
  webhook: {
    address: WebHookAddress;
    topic: WebHookTopic;
    format_type: WebHookFormatType;
  };
};

type FieldId = number;
type FieldType =
  | 'Field::TextField'
  | 'Field::TextArea'
  | 'Field::Checkbox'
  | 'Field::FileField'
  | 'Field::Delivery'
  | 'Field::PickPoint';
type FieldOfficeTitle = string;
type FieldDestiny = string;
type CreateField = {
  field: {
    type: FieldType;
    office_title: FieldOfficeTitle;
    destiny: FieldDestiny;
  };
};

type PickUpSourceId = number;
type PickUpSourceTitle = string;
type PickUpSourceHttpMethod = 'GET' | 'POST';
type PickUpSourceUrl = string;
type PickUpSourcePointInfoUrl = string;
type CreatePickUpSource = {
  title: PickUpSourceTitle;
  http_method: PickUpSourceHttpMethod;
  url: PickUpSourceUrl;
  point_info_url: PickUpSourcePointInfoUrl;
};

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

type DeliveryVariantPickUpSourceAttributeId = number;
type DeliveryVariantPickUpSourceAttributeDestroy = 1;
type DeliveryVariantPickUpSourceRemoveAttribute = {
  _destroy: DeliveryVariantPickUpSourceAttributeDestroy;
  id: DeliveryVariantPickUpSourceAttributeId;
};
type DeliveryVariantPickUpSourceAttribute = DeliveryVariantPickUpSourceRemoveAttribute;

type DeliveryVariantPaymentAttributeId = number;
type DeliveryVariantPaymentAttributeDestroy = 1;
type DeliveryVariantPaymentAddAttribute = {
  payment_gateway_id: PaymentGatewayId;
};
type DeliveryVariantPaymentRemoveAttribute = {
  _destroy: DeliveryVariantPaymentAttributeDestroy;
  id: DeliveryVariantPaymentAttributeId;
};
type DeliveryVariantPaymentAttribute = DeliveryVariantPaymentAddAttribute | DeliveryVariantPaymentRemoveAttribute;

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

type PaymentDeliveryVariantId = number;
type PaymentDeliveryVariant = {
  id: PaymentDeliveryVariantId;
  delivery_variant_id: DeliveryVariantId;
  created_at: string;
};

type PaymentGatewayId = number;
type PaymentGatewayType = 'PaymentGateway::Custom';

type PaymentGateway = {
  id: PaymentGatewayId;
  position: number;
  type: PaymentGatewayType;
  created_at: string;
  updated_at: string;
  margin: string;
  available_for_individual_clients: boolean;
  available_for_juridical_clients: boolean;
  title: string;
  description: string;
  payment_delivery_variants: PaymentDeliveryVariant[];
};

export class InSales {
  private readonly instance: AxiosInstance;

  constructor(baseURL: string, timeout: number = 1000, headers: object = {}) {
    this.instance = Axios.create({ baseURL, timeout, headers });
  }

  async getDeliveryVariants(): Promise<Result<null, DeliveryVariant[]> | Result<Error, void>> {
    try {
      const { data } = await this.instance.get('/admin/delivery_variants.json');
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  async getDeliveryVariant(id: DeliveryVariantId): Promise<Result<null, DeliveryVariant> | Result<Error, void>> {
    try {
      const { data } = await this.instance.get(`/admin/delivery_variants/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  async createDeliveryVariant(payload: CreateDeliveryVariant) {
    try {
      const { data } = await this.instance.post('/admin/delivery_variants.json', payload);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  async updateDeliveryVariant(id: DeliveryVariantId, payload: UpdateDeliveryVariant) {
    try {
      const { data } = await this.instance.put(`/admin/delivery_variants/${id}.json`, payload);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  async destroyDeliveryVariant(id: DeliveryVariantId) {
    try {
      const { data } = await this.instance.delete(`/admin/delivery_variants/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  async getPaymentGateways() {
    try {
      const { data } = await this.instance.get('/admin/payment_gateways.json');
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  async getWebHooks(): Promise<Result<null, WebHook[]> | Result<Error, void>> {
    try {
      const { data } = await this.instance.get('/admin/webhooks.json');
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  async getWebHook(id: WebHookId): Promise<Result<null, WebHook> | Result<Error, void>> {
    try {
      const { data } = await this.instance.get(`/admin/webhooks/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  async createWebHook(payload: CreateWebHook): Promise<Result<null, WebHook> | Result<Error, void>> {
    try {
      const { data } = await this.instance.post(`/admin/webhooks.json`, payload);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  async destroyWebHook(id: WebHookId) {
    try {
      const { data } = await this.instance.delete(`/admin/webhooks/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  async getPickUpSources() {
    try {
      const { data } = await this.instance.get('/admin/pick_up_sources.json');
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  async getPickUpSource(id: PickUpSourceId) {
    try {
      const { data } = await this.instance.get(`/admin/pick_up_sources/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  async createPickUpSource(payload: CreatePickUpSource) {
    try {
      const { data } = await this.instance.post('/admin/pick_up_sources.json', payload);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  async destroyPickUpSource(id: PickUpSourceId) {
    try {
      const { data } = await this.instance.delete(`/admin/pick_up_sources/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  async getFields() {
    try {
      const { data } = await this.instance.get('/admin/fields.json');
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  async getField(id: FieldId) {
    try {
      const { data } = await this.instance.get(`/admin/fields/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  async createField(payload: CreateField) {
    try {
      const { data } = await this.instance.post('/admin/fields.json', payload);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  async destroyField(id: FieldId) {
    try {
      const { data } = await this.instance.delete(`/admin/fields/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  createDeliveryVariantPickUpSourceRemoveAttribute(
    deliveryVariantPickUpSourceAttributeId: DeliveryVariantPickUpSourceAttributeId,
  ): DeliveryVariantPickUpSourceRemoveAttribute {
    return { _destroy: 1, id: deliveryVariantPickUpSourceAttributeId };
  }

  async removePickUpSourcesFromDeliveryVariant(
    deliveryVariantId: DeliveryVariantId,
    deliveryVariantPickUpSourceAttributeIds: DeliveryVariantPickUpSourceAttributeId[],
  ) {
    try {
      const deliveryVariantPickUpSourceAttributes = deliveryVariantPickUpSourceAttributeIds.map(
        this.createDeliveryVariantPickUpSourceRemoveAttribute,
      );
      const payload = {
        delivery_variant: {
          pick_up_source_delivery_variants_attributes: deliveryVariantPickUpSourceAttributes,
        },
      };
      return this.updateDeliveryVariant(deliveryVariantId, payload);
    } catch (error) {
      return ResultFail(error);
    }
  }
}
