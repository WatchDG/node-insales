import Axios, { AxiosInstance } from 'axios';
import { ResultOK, ResultFAIL, ResultFail, ResultOk } from 'node-result';

/**
 * InSales
 */
export class InSales {
  private readonly instance: AxiosInstance;

  constructor(baseURL: string, timeout: number = 1000, headers: object = {}) {
    this.instance = Axios.create({ baseURL, timeout, headers });
  }

  /**
   * Получить аккаунт.
   * @return Promise<ResultOK<Account> | ResultFAIL<Error>>
   */
  async getAccount(): Promise<ResultOK<Account> | ResultFAIL<Error>> {
    try {
      const { data } = await this.instance.get('/admin/account.json');
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Получить заказ.
   * @param {OrderId} id - идентификатор заказа.
   */
  async getOrder(id: OrderId) {
    try {
      const { data } = await this.instance.get(`/admin/orders/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Получить все домены.
   */
  async getDomains() {
    try {
      const { data } = await this.instance.get(`/admin/domains.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Получить домен.
   * @param {DomainId} id - идентификатор домена.
   */
  async getDomain(id: DomainId) {
    try {
      const { data } = await this.instance.get(`/admin/domains/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Получить все варианты доставки.
   * @return Promise<ResultOK<DeliveryVariant[]> | ResultFAIL<Error>>
   */
  async getDeliveryVariants(): Promise<ResultOK<DeliveryVariant[]> | ResultFAIL<Error>> {
    try {
      const { data } = await this.instance.get('/admin/delivery_variants.json');
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Получить вариант доставки.
   * @param {DeliveryVariantId} id - идентификатор варианта доставки
   * @return Promise<ResultOK<DeliveryVariant> | ResultFAIL<Error>>
   */
  async getDeliveryVariant(id: DeliveryVariantId): Promise<ResultOK<DeliveryVariant> | ResultFAIL<Error>> {
    try {
      const { data } = await this.instance.get(`/admin/delivery_variants/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Создать вариант доставки.
   * @param {CreateDeliveryVariant} payload - объект создания варианта доставки
   * @return Promise<ResultOK<DeliveryVariant> | ResultFAIL<Error>>
   */
  async createDeliveryVariant(payload: CreateDeliveryVariant): Promise<ResultOK<DeliveryVariant> | ResultFAIL<Error>> {
    try {
      const { data } = await this.instance.post('/admin/delivery_variants.json', payload);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Обновить вариант доставки.
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
   * Удалить вариант доставки.
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
   * Создать атрибут добавления платежного щлюза.
   * @param {PaymentGatewayId} paymentGatewayId - идентификатор платежного шлюза
   * @return AddDeliveryVariantPaymentAttribute
   */
  createAddDeliveryVariantPaymentAttribute(paymentGatewayId: PaymentGatewayId): AddDeliveryVariantPaymentAttribute {
    return {
      payment_gateway_id: paymentGatewayId,
    };
  }

  /**
   * Создать атрибут удаления источника точек.
   * @param {DeliveryVariantPickUpSourceAttributeId} deliveryVariantPickUpSourceAttributeId - идентификатор атрибута источника точки
   */
  createRemoveDeliveryVariantPickUpSourceAttribute(
    deliveryVariantPickUpSourceAttributeId: DeliveryVariantPickUpSourceAttributeId,
  ): DeliveryVariantPickUpSourceRemoveAttribute {
    return { _destroy: 1, id: deliveryVariantPickUpSourceAttributeId };
  }

  /**
   * Получить все платежные шлюзы.
   * @return Promise<ResultOK<PaymentGateway[]> | ResultFAIL<Error>>
   */
  async getPaymentGateways(): Promise<ResultOK<PaymentGateway[]> | ResultFAIL<Error>> {
    try {
      const { data } = await this.instance.get('/admin/payment_gateways.json');
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Получить платежный шлюз.
   * @param {PaymentGatewayId} id - идентификатор платежного шлюза
   * @return Promise<ResultOK<PaymentGateway> | ResultFAIL<Error>>
   */
  async getPaymentGateway(id: PaymentGatewayId): Promise<ResultOK<PaymentGateway> | ResultFAIL<Error>> {
    try {
      const { data } = await this.instance.get(`/admin/payment_gateways/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Создать платежный шлюз.
   * @param {createPaymentGateway} payload - объект создания платежного шлюза
   */
  async createPaymentGateway(payload: CreatePaymentGateway) {
    try {
      const { data } = await this.instance.post('/admin/payment_gateways.json', payload);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Обновить платежный шлюз.
   * @param {PaymentGatewayId} id - идентификатор платежного шлюза
   * @param {UpdatePaymentGateway} payload - объект обновления платежного шлюза
   */
  async updatePaymentGateway(id: PaymentGatewayId, payload: UpdatePaymentGateway) {
    try {
      const { data } = await this.instance.put(`/admin/payment_gateways/${id}.json`, payload);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Удалить платежный шлюз.
   * @param {PaymentGatewayId} id - идентификатор платежного шлюза
   */
  async destroyPaymentGateway(id: PaymentGatewayId) {
    try {
      const { data } = await this.instance.delete(`/admin/payment_gateways/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Получить все веб хуки.
   */
  async getWebHooks(): Promise<ResultOK<WebHook[]> | ResultFAIL<Error>> {
    try {
      const { data } = await this.instance.get('/admin/webhooks.json');
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Получить веб хук.
   * @param {WebHookId} id - идентификатор веб хука
   */
  async getWebHook(id: WebHookId): Promise<ResultOK<WebHook> | ResultFAIL<Error>> {
    try {
      const { data } = await this.instance.get(`/admin/webhooks/${id}.json`);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Создать веб хук.
   * @param {CreateWebHook} payload - объект создания веб хука
   */
  async createWebHook(payload: CreateWebHook): Promise<ResultOK<WebHook> | ResultFAIL<Error>> {
    try {
      const { data } = await this.instance.post(`/admin/webhooks.json`, payload);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Удалить веб хук.
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
   * Получить источник пунктов выдачи.
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
   * Создать источник пунктов выдачи.
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
   * Обновить источник пунктов выдачи.
   * @param {PickUpSourceId} id - идентификатор источника пунктов выдачи
   * @param {UpdatePickUpSource} payload - объект обновлления источника пунктов выдачи
   */
  async updatePickUpSource(id: PickUpSourceId, payload: UpdatePickUpSource) {
    try {
      const { data } = await this.instance.put(`/admin/pick_up_sources/${id}.json`, payload);
      return ResultOk(data);
    } catch (error) {
      return ResultFail(error);
    }
  }

  /**
   * Удалить источник пунктов выдачи.
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
   * Получить поле.
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
   * Создать поле.
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
   * Удалить поле.
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
        this.createRemoveDeliveryVariantPickUpSourceAttribute,
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

  async addPaymentsToDeliveryVariant(
    deliveryVariantId: DeliveryVariantId,
    deliveryVariantPaymentAttributeIds: PaymentGatewayId[],
  ) {
    try {
      const deliveryVariantPaymentAttributes = deliveryVariantPaymentAttributeIds.map(
        this.createAddDeliveryVariantPaymentAttribute,
      );
      const payload = {
        delivery_variant: {
          payment_delivery_variants_attributes: deliveryVariantPaymentAttributes,
        },
      };
      return this.updateDeliveryVariant(deliveryVariantId, payload);
    } catch (error) {
      return ResultFail(error);
    }
  }
}
