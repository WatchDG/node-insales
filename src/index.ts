import Axios, { AxiosInstance } from 'axios';
import { ResultOK, ResultFAIL, ok, tryCatchAsync, TResultAsync } from 'node-result';
import { CreateJsTag, JsTag, JsTagId } from './types/js_tag';

/**
 * InSales
 */
export class InSales {
  private readonly instance: AxiosInstance;

  constructor(baseURL: string, timeout = 1000, headers: Record<string, string> = {}) {
    this.instance = Axios.create({ baseURL, timeout, headers });
  }

  /**
   * get account data
   * @return Promise<ResultOK<Account> | ResultFAIL<Error>>
   */
  @tryCatchAsync
  async getAccount(): Promise<ResultOK<Account> | ResultFAIL<Error>> {
    const { data } = await this.instance.get('/admin/account.json');
    return ok(data);
  }

  /**
   * get order data by order id
   * @param {OrderId} id - order id
   */
  @tryCatchAsync
  async getOrder(id: OrderId): TResultAsync<any, Error> {
    const { data } = await this.instance.get(`/admin/orders/${id}.json`);
    return ok(data);
  }

  /**
   * get all domains
   */
  @tryCatchAsync
  async getDomains(): TResultAsync<any, Error> {
    const { data } = await this.instance.get(`/admin/domains.json`);
    return ok(data);
  }

  /**
   * get domain by domain id
   * @param {DomainId} id - domain id
   */
  @tryCatchAsync
  async getDomain(id: DomainId): TResultAsync<any, Error> {
    const { data } = await this.instance.get(`/admin/domains/${id}.json`);
    return ok(data);
  }

  /**
   * get all delivery variants
   * @return Promise<ResultOK<DeliveryVariant[]> | ResultFAIL<Error>>
   */
  @tryCatchAsync
  async getDeliveryVariants(): TResultAsync<DeliveryVariant[], Error> {
    const { data } = await this.instance.get('/admin/delivery_variants.json');
    return ok(data);
  }

  /**
   * get delivery variant by delivery variant id
   * @param {DeliveryVariantId} id - delivery variant id
   * @return Promise<ResultOK<DeliveryVariant> | ResultFAIL<Error>>
   */
  @tryCatchAsync
  async getDeliveryVariant(id: DeliveryVariantId): TResultAsync<DeliveryVariant, Error> {
    const { data } = await this.instance.get(`/admin/delivery_variants/${id}.json`);
    return ok(data);
  }

  /**
   * create delivery variant
   * @param {CreateDeliveryVariant} payload - delivery valiant create object
   * @return Promise<ResultOK<DeliveryVariant> | ResultFAIL<Error>>
   */
  @tryCatchAsync
  async createDeliveryVariant(payload: CreateDeliveryVariant): Promise<ResultOK<DeliveryVariant> | ResultFAIL<Error>> {
    const { data } = await this.instance.post('/admin/delivery_variants.json', payload);
    return ok(data);
  }

  /**
   * Обновить вариант доставки.
   * @param {DeliveryVariantId} id - идентификатор варианта доставки
   * @param {UpdateDeliveryVariant} payload - объект обновления варианта доставки
   */
  @tryCatchAsync
  async updateDeliveryVariant(id: DeliveryVariantId, payload: UpdateDeliveryVariant): TResultAsync<any, Error> {
    const { data } = await this.instance.put(`/admin/delivery_variants/${id}.json`, payload);
    return ok(data);
  }

  /**
   * Удалить вариант доставки.
   * @param {DeliveryVariantId} id - идентификатор варианта доставки
   */
  @tryCatchAsync
  async destroyDeliveryVariant(id: DeliveryVariantId): TResultAsync<any, Error> {
    const { data } = await this.instance.delete(`/admin/delivery_variants/${id}.json`);
    return ok(data);
  }

  /**
   * Создать атрибут добавления платежного щлюза.
   * @param {PaymentGatewayId} paymentGatewayId - идентификатор платежного шлюза
   * @return AddDeliveryVariantPaymentAttribute
   */
  createAddDeliveryVariantPaymentAttribute(paymentGatewayId: PaymentGatewayId): AddDeliveryVariantPaymentAttribute {
    return {
      payment_gateway_id: paymentGatewayId
    };
  }

  /**
   * Создать атрибут удаления источника точек.
   * @param {DeliveryVariantPickUpSourceAttributeId} deliveryVariantPickUpSourceAttributeId - идентификатор атрибута источника точки
   */
  createRemoveDeliveryVariantPickUpSourceAttribute(
    deliveryVariantPickUpSourceAttributeId: DeliveryVariantPickUpSourceAttributeId
  ): DeliveryVariantPickUpSourceRemoveAttribute {
    return { _destroy: 1, id: deliveryVariantPickUpSourceAttributeId };
  }

  /**
   * Получить все платежные шлюзы.
   * @return Promise<ResultOK<PaymentGateway[]> | ResultFAIL<Error>>
   */
  @tryCatchAsync
  async getPaymentGateways(): Promise<ResultOK<PaymentGateway[]> | ResultFAIL<Error>> {
    const { data } = await this.instance.get('/admin/payment_gateways.json');
    return ok(data);
  }

  /**
   * Получить платежный шлюз.
   * @param {PaymentGatewayId} id - идентификатор платежного шлюза
   * @return Promise<ResultOK<PaymentGateway> | ResultFAIL<Error>>
   */
  @tryCatchAsync
  async getPaymentGateway(id: PaymentGatewayId): Promise<ResultOK<PaymentGateway> | ResultFAIL<Error>> {
    const { data } = await this.instance.get(`/admin/payment_gateways/${id}.json`);
    return ok(data);
  }

  /**
   * Создать платежный шлюз.
   * @param {createPaymentGateway} payload - объект создания платежного шлюза
   */
  @tryCatchAsync
  async createPaymentGateway(payload: CreatePaymentGateway): TResultAsync<any, Error> {
    const { data } = await this.instance.post('/admin/payment_gateways.json', payload);
    return ok(data);
  }

  /**
   * Обновить платежный шлюз.
   * @param {PaymentGatewayId} id - идентификатор платежного шлюза
   * @param {UpdatePaymentGateway} payload - объект обновления платежного шлюза
   */
  @tryCatchAsync
  async updatePaymentGateway(id: PaymentGatewayId, payload: UpdatePaymentGateway): TResultAsync<any, Error> {
    const { data } = await this.instance.put(`/admin/payment_gateways/${id}.json`, payload);
    return ok(data);
  }

  /**
   * Удалить платежный шлюз.
   * @param {PaymentGatewayId} id - идентификатор платежного шлюза
   */
  @tryCatchAsync
  async destroyPaymentGateway(id: PaymentGatewayId): TResultAsync<any, Error> {
    const { data } = await this.instance.delete(`/admin/payment_gateways/${id}.json`);
    return ok(data);
  }

  /**
   * Получить все веб хуки.
   */
  @tryCatchAsync
  async getWebHooks(): Promise<ResultOK<WebHook[]> | ResultFAIL<Error>> {
    const { data } = await this.instance.get('/admin/webhooks.json');
    return ok(data);
  }

  /**
   * Получить веб хук.
   * @param {WebHookId} id - идентификатор веб хука
   */
  @tryCatchAsync
  async getWebHook(id: WebHookId): Promise<ResultOK<WebHook> | ResultFAIL<Error>> {
    const { data } = await this.instance.get(`/admin/webhooks/${id}.json`);
    return ok(data);
  }

  /**
   * Создать веб хук.
   * @param {CreateWebHook} payload - объект создания веб хука
   */
  @tryCatchAsync
  async createWebHook(payload: CreateWebHook): Promise<ResultOK<WebHook> | ResultFAIL<Error>> {
    const { data } = await this.instance.post(`/admin/webhooks.json`, payload);
    return ok(data);
  }

  /**
   * Обновить веб хук
   * @param id -
   * @param payload -
   */
  @tryCatchAsync
  async updateWebHook(id: WebHookId, payload: UpdateWebHook): TResultAsync<any, Error> {
    const { data } = await this.instance.put(`/admin/webhooks/${id}.json`, payload);
    return ok(data);
  }

  /**
   * Удалить веб хук.
   * @param {WebHookId} id - идентификатор веб хука
   */
  @tryCatchAsync
  async destroyWebHook(id: WebHookId): TResultAsync<any, Error> {
    const { data } = await this.instance.delete(`/admin/webhooks/${id}.json`);
    return ok(data);
  }

  /**
   * Получить все источники пунктов выдачи.
   * @return Promise<ResultOK<PickUpSource[]> | ResultFAIL<Error>>
   */
  @tryCatchAsync
  async getPickUpSources(): Promise<ResultOK<PickUpSource[]> | ResultFAIL<Error>> {
    const { data } = await this.instance.get('/admin/pick_up_sources.json');
    return ok(data);
  }

  /**
   * Получить источник пунктов выдачи.
   * @param {PickUpSourceId} id - идентификатор источника пунктов выдачи
   * @return Promise<ResultOK<PickUpSource> | ResultFAIL<Error>>
   */
  @tryCatchAsync
  async getPickUpSource(id: PickUpSourceId): Promise<ResultOK<PickUpSource> | ResultFAIL<Error>> {
    const { data } = await this.instance.get(`/admin/pick_up_sources/${id}.json`);
    return ok(data);
  }

  /**
   * Создать источник пунктов выдачи.
   * @param {CreatePickUpSource} payload - объект создания источника пунктов выдачи
   * @return Promise<ResultOK<PickUpSource> | ResultFAIL<Error>>
   */
  @tryCatchAsync
  async createPickUpSource(payload: CreatePickUpSource): Promise<ResultOK<PickUpSource> | ResultFAIL<Error>> {
    const { data } = await this.instance.post('/admin/pick_up_sources.json', payload);
    return ok(data);
  }

  /**
   * Обновить источник пунктов выдачи.
   * @param {PickUpSourceId} id - идентификатор источника пунктов выдачи
   * @param {UpdatePickUpSource} payload - объект обновлления источника пунктов выдачи
   * @return Promise<ResultOK<PickUpSource> | ResultFAIL<Error>>
   */
  @tryCatchAsync
  async updatePickUpSource(
    id: PickUpSourceId,
    payload: UpdatePickUpSource
  ): Promise<ResultOK<PickUpSource> | ResultFAIL<Error>> {
    const { data } = await this.instance.put(`/admin/pick_up_sources/${id}.json`, payload);
    return ok(data);
  }

  /**
   * Удалить источник пунктов выдачи.
   * @param {PickUpSourceId} id - идентификатор источника пунктов выдачи
   */
  @tryCatchAsync
  async destroyPickUpSource(id: PickUpSourceId): TResultAsync<any, Error> {
    const { data } = await this.instance.delete(`/admin/pick_up_sources/${id}.json`);
    return ok(data);
  }

  /**
   * Получить все поля.
   */
  @tryCatchAsync
  async getFields(): TResultAsync<any, Error> {
    const { data } = await this.instance.get('/admin/fields.json');
    return ok(data);
  }

  /**
   * Получить поле.
   * @param {FieldId} id - идентификатор поля
   */
  @tryCatchAsync
  async getField(id: FieldId): TResultAsync<any, Error> {
    const { data } = await this.instance.get(`/admin/fields/${id}.json`);
    return ok(data);
  }

  /**
   * Создать поле.
   * @param {CreateField} payload - объект создания поля
   */
  @tryCatchAsync
  async createField(payload: CreateField): TResultAsync<any, Error> {
    const { data } = await this.instance.post('/admin/fields.json', payload);
    return ok(data);
  }

  /**
   * Удалить поле.
   * @param {FieldId} id - идентификатор поля
   */
  @tryCatchAsync
  async destroyField(id: FieldId): TResultAsync<any, Error> {
    const { data } = await this.instance.delete(`/admin/fields/${id}.json`);
    return ok(data);
  }

  @tryCatchAsync
  async removePickUpSourcesFromDeliveryVariant(
    deliveryVariantId: DeliveryVariantId,
    deliveryVariantPickUpSourceAttributeIds: DeliveryVariantPickUpSourceAttributeId[]
  ) {
    const deliveryVariantPickUpSourceAttributes = deliveryVariantPickUpSourceAttributeIds.map(
      this.createRemoveDeliveryVariantPickUpSourceAttribute
    );
    const payload = {
      delivery_variant: {
        pick_up_source_delivery_variants_attributes: deliveryVariantPickUpSourceAttributes
      }
    };
    return this.updateDeliveryVariant(deliveryVariantId, payload);
  }

  createAddDeliveryVariantPickUpSourceAttribute(
    pickUpSourceId: PickUpSourceId
  ): DeliveryVariantPickUpSourceAddAttribute {
    return {
      pick_up_source_id: pickUpSourceId
    };
  }

  @tryCatchAsync
  async addPickUpSourcesToDeliveryVariant(
    deliveryVariantId: DeliveryVariantId,
    deliveryVariantPickUpSourceAttributeIds: DeliveryVariantPickUpSourceAttributeId[]
  ) {
    const deliveryVariantPickUpSourceAttributes = deliveryVariantPickUpSourceAttributeIds.map(
      this.createAddDeliveryVariantPickUpSourceAttribute
    );
    const payload = {
      delivery_variant: {
        pick_up_source_delivery_variants_attributes: deliveryVariantPickUpSourceAttributes
      }
    };
    return this.updateDeliveryVariant(deliveryVariantId, payload);
  }

  @tryCatchAsync
  async addPaymentsToDeliveryVariant(
    deliveryVariantId: DeliveryVariantId,
    deliveryVariantPaymentAttributeIds: PaymentGatewayId[]
  ) {
    const deliveryVariantPaymentAttributes = deliveryVariantPaymentAttributeIds.map(
      this.createAddDeliveryVariantPaymentAttribute
    );
    const payload = {
      delivery_variant: {
        payment_delivery_variants_attributes: deliveryVariantPaymentAttributes
      }
    };
    return this.updateDeliveryVariant(deliveryVariantId, payload);
  }

  @tryCatchAsync
  async getJsTags(): TResultAsync<JsTag[], Error> {
    const { data } = await this.instance.get(`/admin/js_tags.json`);
    return ok(data);
  }

  @tryCatchAsync
  async getJsTag(jsTagId: JsTagId): TResultAsync<JsTag, Error> {
    const { data } = await this.instance.get(`/admin/js_tags/${jsTagId}.json`);
    return ok(data);
  }

  @tryCatchAsync
  async createJsTag(createJsTag: CreateJsTag): TResultAsync<JsTag, Error> {
    const payload = {
      js_tag: createJsTag
    };
    const { data } = await this.instance.post('/admin/js_tags.json', payload);
    return ok(data);
  }

  @tryCatchAsync
  async destroyJsTag(jsTagId: JsTagId): TResultAsync<null, Error> {
    await this.instance.delete(`/admin/js_tags/${jsTagId}.json`);
    return ok(null);
  }
}
