import Axios, { AxiosInstance } from 'axios';
import { ok, fail, tryCatchAsync } from 'node-result';
import type { TResultAsync } from 'node-result';
import { createHash } from 'crypto';

import type { Account } from './types/account';
import type { CreateJsTag, JsTag, JsTagId } from './types/js_tag';
import type {
  DeliveryVariant,
  CreateDeliveryVariant,
  UpdateDeliveryVariant,
  DeliveryVariantId,
  AddDeliveryVariantPaymentAttribute,
  DeliveryVariantPickUpSourceRemoveAttribute,
  DeliveryVariantPickUpSourceAttributeId,
  DeliveryVariantPickUpSourceAddAttribute
} from './types/delivery_variant';
import type {
  PaymentGatewayId,
  PaymentGateway,
  CreatePaymentGateway,
  UpdatePaymentGateway
} from './types/payment_gateway';
import type { PickUpSourceId, PickUpSource, CreatePickUpSource, UpdatePickUpSource } from './types/pick_up_source';
import type { FieldId, CreateField } from './types/field';
import type { WebHook, WebHookId, CreateWebHook, UpdateWebHook } from './types/webhook';
import type { DomainId, Domain } from './types/domain';
import type { OrderId } from './types/order';
import axios from 'axios';

/**
 * InSales
 */
export class InSales {
  private readonly instance: AxiosInstance;

  constructor(baseURL: string, timeout = 1000, headers: Record<string, string> = {}) {
    this.instance = Axios.create({ baseURL, timeout, headers });
  }

  @tryCatchAsync
  async getAccount(): TResultAsync<Account, Error> {
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

  @tryCatchAsync
  async domains(): TResultAsync<Domain[], Error> {
    const { data } = await this.instance.get(`/admin/domains.json`);
    return ok(data);
  }

  @tryCatchAsync
  async domain(id: DomainId): TResultAsync<Domain, Error> {
    const { data } = await this.instance.get(`/admin/domains/${id}.json`);
    return ok(data);
  }

  @tryCatchAsync
  async getDeliveryVariants(): TResultAsync<DeliveryVariant[], Error> {
    const { data } = await this.instance.get('/admin/delivery_variants.json');
    return ok(data);
  }

  @tryCatchAsync
  async getDeliveryVariant(id: DeliveryVariantId): TResultAsync<DeliveryVariant, Error> {
    const { data } = await this.instance.get(`/admin/delivery_variants/${id}.json`);
    return ok(data);
  }

  @tryCatchAsync
  async createDeliveryVariant(payload: CreateDeliveryVariant): TResultAsync<DeliveryVariant, Error> {
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

  @tryCatchAsync
  async getPaymentGateways(): TResultAsync<PaymentGateway[], Error> {
    const { data } = await this.instance.get('/admin/payment_gateways.json');
    return ok(data);
  }

  @tryCatchAsync
  async getPaymentGateway(id: PaymentGatewayId): TResultAsync<PaymentGateway, Error> {
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
  async getWebHooks(): TResultAsync<WebHook[], Error> {
    const { data } = await this.instance.get('/admin/webhooks.json');
    return ok(data);
  }

  /**
   * Получить веб хук.
   * @param {WebHookId} id - идентификатор веб хука
   */
  @tryCatchAsync
  async getWebHook(id: WebHookId): TResultAsync<WebHook, Error> {
    const { data } = await this.instance.get(`/admin/webhooks/${id}.json`);
    return ok(data);
  }

  /**
   * Создать веб хук.
   * @param {CreateWebHook} payload - объект создания веб хука
   */
  @tryCatchAsync
  async createWebHook(payload: CreateWebHook): TResultAsync<WebHook, Error> {
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

  @tryCatchAsync
  async getPickUpSources(): TResultAsync<PickUpSource[], Error> {
    const { data } = await this.instance.get('/admin/pick_up_sources.json');
    return ok(data);
  }

  @tryCatchAsync
  async getPickUpSource(id: PickUpSourceId): TResultAsync<PickUpSource, Error> {
    const { data } = await this.instance.get(`/admin/pick_up_sources/${id}.json`);
    return ok(data);
  }

  @tryCatchAsync
  async createPickUpSource(payload: CreatePickUpSource): TResultAsync<PickUpSource, Error> {
    const { data } = await this.instance.post('/admin/pick_up_sources.json', payload);
    return ok(data);
  }

  @tryCatchAsync
  async updatePickUpSource(id: PickUpSourceId, payload: UpdatePickUpSource): TResultAsync<PickUpSource, Error> {
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

  @tryCatchAsync
  static async updateOrderPaymentStatus(options: {
    paid: '1' | '0';
    amount: string;
    key: string;
    transaction_id: string;
    shop_id: string;
    password: string;
    server_url: string;
  }): TResultAsync<any, Error> {
    const { paid, amount, key, transaction_id, shop_id, password, server_url } = options;
    const signature = createHash('md5')
      .update(`${shop_id};${amount};${transaction_id};${key};${paid};${password}`)
      .digest('hex');
    const payload = {
      paid,
      amount,
      key,
      transaction_id,
      signature,
      shop_id
    };
    const { data } = await axios.post(server_url, payload);
    if (data.status === 'ok') {
      return ok(null);
    }
    if (data.status === 'error') {
      return fail(new Error(data.errors[0]));
    }
    return fail(new Error('unknown'));
  }
}
