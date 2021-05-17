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
import type { FieldId, CreateField, Field } from './types/field';
import type { WebHook, WebHookId, CreateWebHook, UpdateWebHook } from './types/webhook';
import type { DomainId, Domain } from './types/domain';
import type { OrderId, Order } from './types/order';
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
  async getOrder(id: OrderId): TResultAsync<Order, Error> {
    const { data } = await this.instance.get(`/admin/orders/${id}.json`);
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
  async createDeliveryVariant(createDeliveryVariant: CreateDeliveryVariant): TResultAsync<DeliveryVariant, Error> {
    const payload = {
      delivery_variant: createDeliveryVariant
    };
    const { data } = await this.instance.post(`/admin/delivery_variants.json`, payload);
    return ok(data);
  }

  @tryCatchAsync
  async updateDeliveryVariant(
    id: DeliveryVariantId,
    updateDeliveryVariant: UpdateDeliveryVariant
  ): TResultAsync<DeliveryVariant, Error> {
    const payload = {
      delivery_variant: updateDeliveryVariant
    };
    const { data } = await this.instance.put(`/admin/delivery_variants/${id}.json`, payload);
    return ok(data);
  }

  @tryCatchAsync
  async destroyDeliveryVariant(id: DeliveryVariantId): TResultAsync<null, Error> {
    await this.instance.delete(`/admin/delivery_variants/${id}.json`);
    return ok(null);
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

  @tryCatchAsync
  async createPaymentGateway(createPaymentGateway: CreatePaymentGateway): TResultAsync<PaymentGateway, Error> {
    const payload = {
      payment_gateway: createPaymentGateway
    };
    const { data } = await this.instance.post('/admin/payment_gateways.json', payload);
    return ok(data);
  }

  @tryCatchAsync
  async updatePaymentGateway(
    id: PaymentGatewayId,
    updatePaymentGateway: UpdatePaymentGateway
  ): TResultAsync<PaymentGateway, Error> {
    const payload = {
      payment_gateway: updatePaymentGateway
    };
    const { data } = await this.instance.put(`/admin/payment_gateways/${id}.json`, payload);
    return ok(data);
  }

  @tryCatchAsync
  async destroyPaymentGateway(id: PaymentGatewayId): TResultAsync<null, Error> {
    await this.instance.delete(`/admin/payment_gateways/${id}.json`);
    return ok(null);
  }

  @tryCatchAsync
  async getWebHooks(): TResultAsync<WebHook[], Error> {
    const { data } = await this.instance.get('/admin/webhooks.json');
    return ok(data);
  }

  @tryCatchAsync
  async getWebHook(id: WebHookId): TResultAsync<WebHook, Error> {
    const { data } = await this.instance.get(`/admin/webhooks/${id}.json`);
    return ok(data);
  }

  @tryCatchAsync
  async createWebHook(createWebHook: CreateWebHook): TResultAsync<WebHook, Error> {
    const payload = {
      webhook: createWebHook
    };
    const { data } = await this.instance.post(`/admin/webhooks.json`, payload);
    return ok(data);
  }

  @tryCatchAsync
  async updateWebHook(id: WebHookId, updateWebHook: UpdateWebHook): TResultAsync<WebHook, Error> {
    const payload = {
      webhook: updateWebHook
    };
    const { data } = await this.instance.put(`/admin/webhooks/${id}.json`, payload);
    return ok(data);
  }

  @tryCatchAsync
  async destroyWebHook(id: WebHookId): TResultAsync<null, Error> {
    await this.instance.delete(`/admin/webhooks/${id}.json`);
    return ok(null);
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
  async createPickUpSource(createPickUpSource: CreatePickUpSource): TResultAsync<PickUpSource, Error> {
    const payload = {
      pick_up_source: createPickUpSource
    };
    const { data } = await this.instance.post('/admin/pick_up_sources.json', payload);
    return ok(data);
  }

  @tryCatchAsync
  async updatePickUpSource(
    id: PickUpSourceId,
    updatePickUpSource: UpdatePickUpSource
  ): TResultAsync<PickUpSource, Error> {
    const payload = {
      pick_up_source: updatePickUpSource
    };
    const { data } = await this.instance.put(`/admin/pick_up_sources/${id}.json`, payload);
    return ok(data);
  }

  @tryCatchAsync
  async destroyPickUpSource(id: PickUpSourceId): TResultAsync<null, Error> {
    await this.instance.delete(`/admin/pick_up_sources/${id}.json`);
    return ok(null);
  }

  @tryCatchAsync
  async getFields(): TResultAsync<Field[], Error> {
    const { data } = await this.instance.get('/admin/fields.json');
    return ok(data);
  }

  @tryCatchAsync
  async getField(id: FieldId): TResultAsync<Field, Error> {
    const { data } = await this.instance.get(`/admin/fields/${id}.json`);
    return ok(data);
  }

  @tryCatchAsync
  async createField(payload: CreateField): TResultAsync<Field, Error> {
    const { data } = await this.instance.post('/admin/fields.json', payload);
    return ok(data);
  }

  @tryCatchAsync
  async destroyField(id: FieldId): TResultAsync<null, Error> {
    await this.instance.delete(`/admin/fields/${id}.json`);
    return ok(null);
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
  async addPickUpSourcesToDeliveryVariant(
    deliveryVariantId: DeliveryVariantId,
    deliveryVariantPickUpSourceAttributeIds: DeliveryVariantPickUpSourceAttributeId[]
  ): TResultAsync<DeliveryVariant, Error> {
    const deliveryVariantPickUpSourceAttributes = deliveryVariantPickUpSourceAttributeIds.map(
      InSales.createAddDeliveryVariantPickUpSourceAttribute
    );
    const payload = {
      pick_up_source_delivery_variants_attributes: deliveryVariantPickUpSourceAttributes
    };
    return this.updateDeliveryVariant(deliveryVariantId, payload);
  }

  @tryCatchAsync
  async removePickUpSourcesFromDeliveryVariant(
    deliveryVariantId: DeliveryVariantId,
    deliveryVariantPickUpSourceAttributeIds: DeliveryVariantPickUpSourceAttributeId[]
  ): TResultAsync<DeliveryVariant, Error> {
    const deliveryVariantPickUpSourceAttributes = deliveryVariantPickUpSourceAttributeIds.map(
      InSales.createRemoveDeliveryVariantPickUpSourceAttribute
    );
    const payload = {
      pick_up_source_delivery_variants_attributes: deliveryVariantPickUpSourceAttributes
    };
    return this.updateDeliveryVariant(deliveryVariantId, payload);
  }

  @tryCatchAsync
  async addPaymentsToDeliveryVariant(
    deliveryVariantId: DeliveryVariantId,
    deliveryVariantPaymentAttributeIds: PaymentGatewayId[]
  ): TResultAsync<DeliveryVariant, Error> {
    const deliveryVariantPaymentAttributes = deliveryVariantPaymentAttributeIds.map(
      InSales.createAddDeliveryVariantPaymentAttribute
    );
    const payload = {
      payment_delivery_variants_attributes: deliveryVariantPaymentAttributes
    };
    return this.updateDeliveryVariant(deliveryVariantId, payload);
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
  }): TResultAsync<null, Error> {
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

  static createAddDeliveryVariantPaymentAttribute(
    paymentGatewayId: PaymentGatewayId
  ): AddDeliveryVariantPaymentAttribute {
    return {
      payment_gateway_id: paymentGatewayId
    };
  }

  static createAddDeliveryVariantPickUpSourceAttribute(
    pickUpSourceId: PickUpSourceId
  ): DeliveryVariantPickUpSourceAddAttribute {
    return {
      pick_up_source_id: pickUpSourceId
    };
  }

  static createRemoveDeliveryVariantPickUpSourceAttribute(
    deliveryVariantPickUpSourceAttributeId: DeliveryVariantPickUpSourceAttributeId
  ): DeliveryVariantPickUpSourceRemoveAttribute {
    return { _destroy: 1, id: deliveryVariantPickUpSourceAttributeId };
  }
}
