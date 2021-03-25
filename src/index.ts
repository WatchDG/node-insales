import Axios, { AxiosInstance } from 'axios';
import { ResultOK, ResultFAIL, ResultOk, tryCatchWrapperAsync, ReturningResultAsync } from 'node-result';
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
  @tryCatchWrapperAsync
  async getAccount(): Promise<ResultOK<Account> | ResultFAIL<Error>> {
    const { data } = await this.instance.get('/admin/account.json');
    return ResultOk(data);
  }

  /**
   * get order data by order id
   * @param {OrderId} id - order id
   */
  @tryCatchWrapperAsync
  async getOrder(id: OrderId) {
    const { data } = await this.instance.get(`/admin/orders/${id}.json`);
    return ResultOk(data);
  }

  /**
   * get all domains
   */
  @tryCatchWrapperAsync
  async getDomains() {
    const { data } = await this.instance.get(`/admin/domains.json`);
    return ResultOk(data);
  }

  /**
   * get domain by domain id
   * @param {DomainId} id - domain id
   */
  @tryCatchWrapperAsync
  async getDomain(id: DomainId) {
    const { data } = await this.instance.get(`/admin/domains/${id}.json`);
    return ResultOk(data);
  }

  /**
   * get all delivery variants
   * @return Promise<ResultOK<DeliveryVariant[]> | ResultFAIL<Error>>
   */
  @tryCatchWrapperAsync
  async getDeliveryVariants(): Promise<ResultOK<DeliveryVariant[]> | ResultFAIL<Error>> {
    const { data } = await this.instance.get('/admin/delivery_variants.json');
    return ResultOk(data);
  }

  /**
   * get delivery variant by delivery variant id
   * @param {DeliveryVariantId} id - delivery variant id
   * @return Promise<ResultOK<DeliveryVariant> | ResultFAIL<Error>>
   */
  @tryCatchWrapperAsync
  async getDeliveryVariant(id: DeliveryVariantId): Promise<ResultOK<DeliveryVariant> | ResultFAIL<Error>> {
    const { data } = await this.instance.get(`/admin/delivery_variants/${id}.json`);
    return ResultOk(data);
  }

  /**
   * create delivery variant
   * @param {CreateDeliveryVariant} payload - delivery valiant create object
   * @return Promise<ResultOK<DeliveryVariant> | ResultFAIL<Error>>
   */
  @tryCatchWrapperAsync
  async createDeliveryVariant(payload: CreateDeliveryVariant): Promise<ResultOK<DeliveryVariant> | ResultFAIL<Error>> {
    const { data } = await this.instance.post('/admin/delivery_variants.json', payload);
    return ResultOk(data);
  }

  /**
   * Обновить вариант доставки.
   * @param {DeliveryVariantId} id - идентификатор варианта доставки
   * @param {UpdateDeliveryVariant} payload - объект обновления варианта доставки
   */
  @tryCatchWrapperAsync
  async updateDeliveryVariant(id: DeliveryVariantId, payload: UpdateDeliveryVariant) {
    const { data } = await this.instance.put(`/admin/delivery_variants/${id}.json`, payload);
    return ResultOk(data);
  }

  /**
   * Удалить вариант доставки.
   * @param {DeliveryVariantId} id - идентификатор варианта доставки
   */
  @tryCatchWrapperAsync
  async destroyDeliveryVariant(id: DeliveryVariantId) {
    const { data } = await this.instance.delete(`/admin/delivery_variants/${id}.json`);
    return ResultOk(data);
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
  @tryCatchWrapperAsync
  async getPaymentGateways(): Promise<ResultOK<PaymentGateway[]> | ResultFAIL<Error>> {
    const { data } = await this.instance.get('/admin/payment_gateways.json');
    return ResultOk(data);
  }

  /**
   * Получить платежный шлюз.
   * @param {PaymentGatewayId} id - идентификатор платежного шлюза
   * @return Promise<ResultOK<PaymentGateway> | ResultFAIL<Error>>
   */
  @tryCatchWrapperAsync
  async getPaymentGateway(id: PaymentGatewayId): Promise<ResultOK<PaymentGateway> | ResultFAIL<Error>> {
    const { data } = await this.instance.get(`/admin/payment_gateways/${id}.json`);
    return ResultOk(data);
  }

  /**
   * Создать платежный шлюз.
   * @param {createPaymentGateway} payload - объект создания платежного шлюза
   */
  @tryCatchWrapperAsync
  async createPaymentGateway(payload: CreatePaymentGateway) {
    const { data } = await this.instance.post('/admin/payment_gateways.json', payload);
    return ResultOk(data);
  }

  /**
   * Обновить платежный шлюз.
   * @param {PaymentGatewayId} id - идентификатор платежного шлюза
   * @param {UpdatePaymentGateway} payload - объект обновления платежного шлюза
   */
  @tryCatchWrapperAsync
  async updatePaymentGateway(id: PaymentGatewayId, payload: UpdatePaymentGateway) {
    const { data } = await this.instance.put(`/admin/payment_gateways/${id}.json`, payload);
    return ResultOk(data);
  }

  /**
   * Удалить платежный шлюз.
   * @param {PaymentGatewayId} id - идентификатор платежного шлюза
   */
  @tryCatchWrapperAsync
  async destroyPaymentGateway(id: PaymentGatewayId) {
    const { data } = await this.instance.delete(`/admin/payment_gateways/${id}.json`);
    return ResultOk(data);
  }

  /**
   * Получить все веб хуки.
   */
  @tryCatchWrapperAsync
  async getWebHooks(): Promise<ResultOK<WebHook[]> | ResultFAIL<Error>> {
    const { data } = await this.instance.get('/admin/webhooks.json');
    return ResultOk(data);
  }

  /**
   * Получить веб хук.
   * @param {WebHookId} id - идентификатор веб хука
   */
  @tryCatchWrapperAsync
  async getWebHook(id: WebHookId): Promise<ResultOK<WebHook> | ResultFAIL<Error>> {
    const { data } = await this.instance.get(`/admin/webhooks/${id}.json`);
    return ResultOk(data);
  }

  /**
   * Создать веб хук.
   * @param {CreateWebHook} payload - объект создания веб хука
   */
  @tryCatchWrapperAsync
  async createWebHook(payload: CreateWebHook): Promise<ResultOK<WebHook> | ResultFAIL<Error>> {
    const { data } = await this.instance.post(`/admin/webhooks.json`, payload);
    return ResultOk(data);
  }

  /**
   * Обновить веб хук
   * @param id -
   * @param payload -
   */
  @tryCatchWrapperAsync
  async updateWebHook(id: WebHookId, payload: UpdateWebHook) {
    const { data } = await this.instance.put(`/admin/webhooks/${id}.json`, payload);
    return ResultOk(data);
  }

  /**
   * Удалить веб хук.
   * @param {WebHookId} id - идентификатор веб хука
   */
  @tryCatchWrapperAsync
  async destroyWebHook(id: WebHookId) {
    const { data } = await this.instance.delete(`/admin/webhooks/${id}.json`);
    return ResultOk(data);
  }

  /**
   * Получить все источники пунктов выдачи.
   * @return Promise<ResultOK<PickUpSource[]> | ResultFAIL<Error>>
   */
  @tryCatchWrapperAsync
  async getPickUpSources(): Promise<ResultOK<PickUpSource[]> | ResultFAIL<Error>> {
    const { data } = await this.instance.get('/admin/pick_up_sources.json');
    return ResultOk(data);
  }

  /**
   * Получить источник пунктов выдачи.
   * @param {PickUpSourceId} id - идентификатор источника пунктов выдачи
   * @return Promise<ResultOK<PickUpSource> | ResultFAIL<Error>>
   */
  @tryCatchWrapperAsync
  async getPickUpSource(id: PickUpSourceId): Promise<ResultOK<PickUpSource> | ResultFAIL<Error>> {
    const { data } = await this.instance.get(`/admin/pick_up_sources/${id}.json`);
    return ResultOk(data);
  }

  /**
   * Создать источник пунктов выдачи.
   * @param {CreatePickUpSource} payload - объект создания источника пунктов выдачи
   * @return Promise<ResultOK<PickUpSource> | ResultFAIL<Error>>
   */
  @tryCatchWrapperAsync
  async createPickUpSource(payload: CreatePickUpSource): Promise<ResultOK<PickUpSource> | ResultFAIL<Error>> {
    const { data } = await this.instance.post('/admin/pick_up_sources.json', payload);
    return ResultOk(data);
  }

  /**
   * Обновить источник пунктов выдачи.
   * @param {PickUpSourceId} id - идентификатор источника пунктов выдачи
   * @param {UpdatePickUpSource} payload - объект обновлления источника пунктов выдачи
   * @return Promise<ResultOK<PickUpSource> | ResultFAIL<Error>>
   */
  @tryCatchWrapperAsync
  async updatePickUpSource(
    id: PickUpSourceId,
    payload: UpdatePickUpSource
  ): Promise<ResultOK<PickUpSource> | ResultFAIL<Error>> {
    const { data } = await this.instance.put(`/admin/pick_up_sources/${id}.json`, payload);
    return ResultOk(data);
  }

  /**
   * Удалить источник пунктов выдачи.
   * @param {PickUpSourceId} id - идентификатор источника пунктов выдачи
   */
  @tryCatchWrapperAsync
  async destroyPickUpSource(id: PickUpSourceId) {
    const { data } = await this.instance.delete(`/admin/pick_up_sources/${id}.json`);
    return ResultOk(data);
  }

  /**
   * Получить все поля.
   */
  @tryCatchWrapperAsync
  async getFields() {
    const { data } = await this.instance.get('/admin/fields.json');
    return ResultOk(data);
  }

  /**
   * Получить поле.
   * @param {FieldId} id - идентификатор поля
   */
  @tryCatchWrapperAsync
  async getField(id: FieldId) {
    const { data } = await this.instance.get(`/admin/fields/${id}.json`);
    return ResultOk(data);
  }

  /**
   * Создать поле.
   * @param {CreateField} payload - объект создания поля
   */
  @tryCatchWrapperAsync
  async createField(payload: CreateField) {
    const { data } = await this.instance.post('/admin/fields.json', payload);
    return ResultOk(data);
  }

  /**
   * Удалить поле.
   * @param {FieldId} id - идентификатор поля
   */
  @tryCatchWrapperAsync
  async destroyField(id: FieldId) {
    const { data } = await this.instance.delete(`/admin/fields/${id}.json`);
    return ResultOk(data);
  }

  @tryCatchWrapperAsync
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

  @tryCatchWrapperAsync
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

  @tryCatchWrapperAsync
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

  @tryCatchWrapperAsync
  async getJsTags(): ReturningResultAsync<JsTag[], Error> {
    const { data } = await this.instance.get(`/admin/js_tags.json`);
    return ResultOk(data);
  }

  @tryCatchWrapperAsync
  async getJsTag(jsTagId: JsTagId): ReturningResultAsync<JsTag, Error> {
    const { data } = await this.instance.get(`/admin/js_tags/${jsTagId}.json`);
    return ResultOk(data);
  }

  @tryCatchWrapperAsync
  async createJsTag(createJsTag: CreateJsTag): ReturningResultAsync<JsTag, Error> {
    const payload = {
      js_tag: createJsTag
    };
    const { data } = await this.instance.post('/admin/js_tags.json', payload);
    return ResultOk(data);
  }

  @tryCatchWrapperAsync
  async destroyJsTag(jsTagId: JsTagId): ReturningResultAsync<null, Error> {
    await this.instance.delete(`/admin/js_tags/${jsTagId}.json`);
    return ResultOk(null);
  }
}
