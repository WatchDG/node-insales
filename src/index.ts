import { Result, ResultFail, ResultOk } from 'node-result';
import Axios, { AxiosInstance } from 'axios';

// DeliveryVariant
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
type DeliveryVariantPaymentAddAttribute = {
  payment_gateway_id: PaymentGatewayId;
};
type DeliveryVariantPaymentRemoveAttribute = {
  _destroy: DeliveryVariantPaymentAttributeDestroy;
  id: DeliveryVariantPaymentAttributeId;
};
type DeliveryVariantPaymentAttribute = DeliveryVariantPaymentAddAttribute | DeliveryVariantPaymentRemoveAttribute;
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

// WebHook
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

// Field
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

// PickUpSource
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

// PaymentGateway
type PaymentGatewayId = number;
type PaymentGatewayTitle = string;
type PaymentGatewayDescription = string;
type PaymentGatewayPosition = number;
type PaymentGatewayType = 'PaymentGateway::Custom';
type PaymentGatewayCreatedAt = string;
type PaymentGatewayUpdatedAt = string;
type PaymentGatewayMargin = string;
type PaymentGatewayDeliveryVariantId = number;
type PaymentGatewayDeliveryVariant = {
  id: PaymentGatewayDeliveryVariantId;
  delivery_variant_id: DeliveryVariantId;
  created_at: string;
};
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

/**
 * InSales
 */
export class InSales {
  private readonly instance: AxiosInstance;

  constructor(baseURL: string, timeout: number = 1000, headers: object = {}) {
    this.instance = Axios.create({ baseURL, timeout, headers });
  }

  /**
   * Получить все варианты доставки.
   */
  async getDeliveryVariants(): Promise<Result<null, DeliveryVariant[]> | Result<Error, void>> {
    try {
      const { data } = await this.instance.get('/admin/delivery_variants.json');
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Получить вариант доставки по идентификатору.
   * @param {DeliveryVariantId} id - идентификатор варианта доставки
   */
  async getDeliveryVariant(id: DeliveryVariantId): Promise<Result<null, DeliveryVariant> | Result<Error, void>> {
    try {
      const { data } = await this.instance.get(`/admin/delivery_variants/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Создать новый вариант доставки.
   * @param {CreateDeliveryVariant} payload - объект создания варианта доставки
   */
  async createDeliveryVariant(payload: CreateDeliveryVariant) {
    try {
      const { data } = await this.instance.post('/admin/delivery_variants.json', payload);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Обновить существующий вариант доставки.
   * @param {DeliveryVariantId} id - идентификатор варианта доставки
   * @param {UpdateDeliveryVariant} payload - объект обновления варианта доставки
   */
  async updateDeliveryVariant(id: DeliveryVariantId, payload: UpdateDeliveryVariant) {
    try {
      const { data } = await this.instance.put(`/admin/delivery_variants/${id}.json`, payload);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Удалить существующий вариант доставки.
   * @param {DeliveryVariantId} id - идентификатор варианта доставки
   */
  async destroyDeliveryVariant(id: DeliveryVariantId) {
    try {
      const { data } = await this.instance.delete(`/admin/delivery_variants/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Создать атрибут удаления источника точек.
   * @param {DeliveryVariantPickUpSourceAttributeId} deliveryVariantPickUpSourceAttributeId - идентификатор атрибута источника точки
   */
  createDeliveryVariantPickUpSourceRemoveAttribute(
    deliveryVariantPickUpSourceAttributeId: DeliveryVariantPickUpSourceAttributeId,
  ): DeliveryVariantPickUpSourceRemoveAttribute {
    return { _destroy: 1, id: deliveryVariantPickUpSourceAttributeId };
  }

  /**
   * Получить все платежные шлюзы.
   */
  async getPaymentGateways() {
    try {
      const { data } = await this.instance.get('/admin/payment_gateways.json');
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Получить все веб хуки.
   */
  async getWebHooks(): Promise<Result<null, WebHook[]> | Result<Error, void>> {
    try {
      const { data } = await this.instance.get('/admin/webhooks.json');
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Получить веб хук по идентификатору.
   * @param {WebHookId} id - идентификатор веб хука
   */
  async getWebHook(id: WebHookId): Promise<Result<null, WebHook> | Result<Error, void>> {
    try {
      const { data } = await this.instance.get(`/admin/webhooks/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Создать новый веб хук.
   * @param {CreateWebHook} payload - объект создания веб хука
   */
  async createWebHook(payload: CreateWebHook): Promise<Result<null, WebHook> | Result<Error, void>> {
    try {
      const { data } = await this.instance.post(`/admin/webhooks.json`, payload);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Удалить существующий веб хук.
   * @param {WebHookId} id - идентификатор веб хука
   */
  async destroyWebHook(id: WebHookId) {
    try {
      const { data } = await this.instance.delete(`/admin/webhooks/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Получить все источники пунктов выдачи.
   */
  async getPickUpSources() {
    try {
      const { data } = await this.instance.get('/admin/pick_up_sources.json');
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Получить источник пунктов выдачи по идентификатору.
   * @param {PickUpSourceId} id - идентификатор источника пунктов выдачи
   */
  async getPickUpSource(id: PickUpSourceId) {
    try {
      const { data } = await this.instance.get(`/admin/pick_up_sources/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Создать новый источник пунктов выдачи.
   * @param {CreatePickUpSource} payload - объект создания источника пунктов выдачи
   */
  async createPickUpSource(payload: CreatePickUpSource) {
    try {
      const { data } = await this.instance.post('/admin/pick_up_sources.json', payload);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Удалить существующий источник пунктов выдачи.
   * @param {PickUpSourceId} id - идентификатор источника пунктов выдачи
   */
  async destroyPickUpSource(id: PickUpSourceId) {
    try {
      const { data } = await this.instance.delete(`/admin/pick_up_sources/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Получить все поля.
   */
  async getFields() {
    try {
      const { data } = await this.instance.get('/admin/fields.json');
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Получить поле по идентификатору.
   * @param {FieldId} id - идентификатор поля
   */
  async getField(id: FieldId) {
    try {
      const { data } = await this.instance.get(`/admin/fields/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Создать новое поле.
   * @param {CreateField} payload - объект создания поля
   */
  async createField(payload: CreateField) {
    try {
      const { data } = await this.instance.post('/admin/fields.json', payload);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Удалить существуюшие поле.
   * @param {FieldId} id - идентификатор поля
   */
  async destroyField(id: FieldId) {
    try {
      const { data } = await this.instance.delete(`/admin/fields/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
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
