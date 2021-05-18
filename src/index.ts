import * as http from 'http';
import { ok, fail, tryCatchAsync, TResult } from 'node-result';
import { createHash } from 'crypto';
import { HttpInstance, HttpResponse } from 'http-instance';

import type { TResultAsync } from 'node-result';
import type { Account } from './types/account';
import type { CreateJsTag, JsTag, JsTagId } from './types/js_tag';
import type {
  DeliveryVariant,
  CreateDeliveryVariant,
  UpdateDeliveryVariant,
  DeliveryVariantId,
  DeliveryVariantAddPaymentAttribute,
  DeliveryVariantRemovePickUpSourceAttribute,
  DeliveryVariantPickUpSourceAttributeId,
  DeliveryVariantAddPickUpSourceAttribute
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
import { CreateDiscountCode, DiscountCode, DiscountCodeId, UpdateDiscountCode } from './types/discount_code';

/**
 * InSales
 */
export class InSales {
  private readonly instance: HttpInstance;

  constructor(baseUrl: string, timeout = 1000, headers: Record<string, string> = {}) {
    // this.instance = Axios.create({ baseURL, timeout, headers });
    this.instance = new HttpInstance({
      baseUrl,
      headers,
      timeout
    });
  }

  private static checkResponse<DataType>(
    response: HttpResponse<DataType>
  ): TResult<{ status: number; headers: http.IncomingHttpHeaders; data: DataType }, Error> {
    const { status, headers, data } = response;
    if (status !== 200) {
      return fail(new Error(`Response status code not 200. Status code: ${status}`));
    }
    if (!headers['content-type']?.includes('application/json')) {
      return fail(new Error(`Content type not application/json. Content type: ${headers['content-type']}`));
    }
    if (!data) {
      return fail(new Error(`Empty body`));
    }
    return ok({ status, headers, data });
  }

  @tryCatchAsync
  async getAccount(): TResultAsync<Account, Error> {
    const response = (await this.instance.get<Account>('/admin/account.json')).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async getDomains(): TResultAsync<Domain[], Error> {
    const response = (await this.instance.get<Domain[]>(`/admin/domains.json`)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async getDomain(id: DomainId): TResultAsync<Domain, Error> {
    const response = (await this.instance.get<Domain>(`/admin/domains/${id}.json`)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async getOrder(id: OrderId): TResultAsync<Order, Error> {
    const response = (await this.instance.get<Order>(`/admin/orders/${id}.json`)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async getDeliveryVariants(): TResultAsync<DeliveryVariant[], Error> {
    const response = (await this.instance.get<DeliveryVariant[]>('/admin/delivery_variants.json')).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async getDeliveryVariant(id: DeliveryVariantId): TResultAsync<DeliveryVariant, Error> {
    const response = (await this.instance.get<DeliveryVariant>(`/admin/delivery_variants/${id}.json`)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async createDeliveryVariant(createDeliveryVariant: CreateDeliveryVariant): TResultAsync<DeliveryVariant, Error> {
    const payload = {
      delivery_variant: createDeliveryVariant
    };
    const response = (await this.instance.post<DeliveryVariant>(`/admin/delivery_variants.json`, payload)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
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
    const response = (
      await this.instance.put<DeliveryVariant>(`/admin/delivery_variants/${id}.json`, payload)
    ).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async destroyDeliveryVariant(id: DeliveryVariantId): TResultAsync<null, Error> {
    (await this.instance.delete(`/admin/delivery_variants/${id}.json`)).unwrap();
    return ok(null);
  }

  @tryCatchAsync
  async getPaymentGateways(): TResultAsync<PaymentGateway[], Error> {
    const response = (await this.instance.get<PaymentGateway[]>('/admin/payment_gateways.json')).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async getPaymentGateway(id: PaymentGatewayId): TResultAsync<PaymentGateway, Error> {
    const response = (await this.instance.get<PaymentGateway>(`/admin/payment_gateways/${id}.json`)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async createPaymentGateway(createPaymentGateway: CreatePaymentGateway): TResultAsync<PaymentGateway, Error> {
    const payload = {
      payment_gateway: createPaymentGateway
    };
    const response = (await this.instance.post<PaymentGateway>('/admin/payment_gateways.json', payload)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
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
    const response = (await this.instance.put<PaymentGateway>(`/admin/payment_gateways/${id}.json`, payload)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async destroyPaymentGateway(id: PaymentGatewayId): TResultAsync<null, Error> {
    (await this.instance.delete(`/admin/payment_gateways/${id}.json`)).unwrap();
    return ok(null);
  }

  @tryCatchAsync
  async getWebHooks(): TResultAsync<WebHook[], Error> {
    const response = (await this.instance.get<WebHook[]>('/admin/webhooks.json')).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async getWebHook(id: WebHookId): TResultAsync<WebHook, Error> {
    const response = (await this.instance.get<WebHook>(`/admin/webhooks/${id}.json`)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async createWebHook(createWebHook: CreateWebHook): TResultAsync<WebHook, Error> {
    const payload = {
      webhook: createWebHook
    };
    const response = (await this.instance.post<WebHook>(`/admin/webhooks.json`, payload)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async updateWebHook(id: WebHookId, updateWebHook: UpdateWebHook): TResultAsync<WebHook, Error> {
    const payload = {
      webhook: updateWebHook
    };
    const response = (await this.instance.put<WebHook>(`/admin/webhooks/${id}.json`, payload)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async destroyWebHook(id: WebHookId): TResultAsync<null, Error> {
    (await this.instance.delete(`/admin/webhooks/${id}.json`)).unwrap();
    return ok(null);
  }

  @tryCatchAsync
  async getPickUpSources(): TResultAsync<PickUpSource[], Error> {
    const response = (await this.instance.get<PickUpSource[]>('/admin/pick_up_sources.json')).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async getPickUpSource(id: PickUpSourceId): TResultAsync<PickUpSource, Error> {
    const response = (await this.instance.get<PickUpSource>(`/admin/pick_up_sources/${id}.json`)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async createPickUpSource(createPickUpSource: CreatePickUpSource): TResultAsync<PickUpSource, Error> {
    const payload = {
      pick_up_source: createPickUpSource
    };
    const response = (await this.instance.post<PickUpSource>('/admin/pick_up_sources.json', payload)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
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
    const response = (await this.instance.put<PickUpSource>(`/admin/pick_up_sources/${id}.json`, payload)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async destroyPickUpSource(id: PickUpSourceId): TResultAsync<null, Error> {
    (await this.instance.delete(`/admin/pick_up_sources/${id}.json`)).unwrap();
    return ok(null);
  }

  @tryCatchAsync
  async getFields(): TResultAsync<Field[], Error> {
    const response = (await this.instance.get<Field[]>('/admin/fields.json')).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async getField(id: FieldId): TResultAsync<Field, Error> {
    const response = (await this.instance.get<Field>(`/admin/fields/${id}.json`)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async createField(payload: CreateField): TResultAsync<Field, Error> {
    const response = (await this.instance.post<Field>('/admin/fields.json', payload)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async destroyField(id: FieldId): TResultAsync<null, Error> {
    (await this.instance.delete(`/admin/fields/${id}.json`)).unwrap();
    return ok(null);
  }

  @tryCatchAsync
  async getJsTags(): TResultAsync<JsTag[], Error> {
    const response = (await this.instance.get<JsTag[]>(`/admin/js_tags.json`)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async getJsTag(jsTagId: JsTagId): TResultAsync<JsTag, Error> {
    const response = (await this.instance.get<JsTag>(`/admin/js_tags/${jsTagId}.json`)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async createJsTag(createJsTag: CreateJsTag): TResultAsync<JsTag, Error> {
    const payload = {
      js_tag: createJsTag
    };
    const response = (await this.instance.post<JsTag>('/admin/js_tags.json', payload)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async destroyJsTag(jsTagId: JsTagId): TResultAsync<null, Error> {
    (await this.instance.delete(`/admin/js_tags/${jsTagId}.json`)).unwrap();
    return ok(null);
  }

  @tryCatchAsync
  async getDiscountCodes(): TResultAsync<DiscountCode[], Error> {
    const response = (await this.instance.post<DiscountCode[]>('/admin/discount_codes.json')).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async getDiscountCode(discountCodeId: DiscountCodeId): TResultAsync<DiscountCode, Error> {
    const response = (await this.instance.post<DiscountCode>(`/admin/discount_codes/${discountCodeId}.json`)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async createDiscountCode(createDiscountCode: CreateDiscountCode): TResultAsync<DiscountCode, Error> {
    const payload = {
      discount_code: createDiscountCode
    };
    const response = (await this.instance.post<DiscountCode>('/admin/discount_codes.json', payload)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async updateDiscountCode(
    discountCodeId: DiscountCodeId,
    updateDiscountCode: UpdateDiscountCode
  ): TResultAsync<DiscountCode, Error> {
    const payload = {
      discount_code: updateDiscountCode
    };
    const response = (
      await this.instance.put<DiscountCode>(`/admin/discount_codes/${discountCodeId}.json`, payload)
    ).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
    return ok(data);
  }

  @tryCatchAsync
  async destroyDiscountCode(discountCodeId: DiscountCodeId): TResultAsync<null, Error> {
    (await this.instance.delete(`/admin/discount_codes/${discountCodeId}.json`)).unwrap();
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

    const httpInstance = new HttpInstance({
      baseUrl: server_url
    });
    const response = (await httpInstance.post<{ status: string; errors: string[] }>('/', payload)).unwrap();
    const { data } = InSales.checkResponse(response).unwrap();
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
  ): DeliveryVariantAddPaymentAttribute {
    return {
      payment_gateway_id: paymentGatewayId
    };
  }

  static createAddDeliveryVariantPickUpSourceAttribute(
    pickUpSourceId: PickUpSourceId
  ): DeliveryVariantAddPickUpSourceAttribute {
    return {
      pick_up_source_id: pickUpSourceId
    };
  }

  static createRemoveDeliveryVariantPickUpSourceAttribute(
    deliveryVariantPickUpSourceAttributeId: DeliveryVariantPickUpSourceAttributeId
  ): DeliveryVariantRemovePickUpSourceAttribute {
    return { _destroy: 1, id: deliveryVariantPickUpSourceAttributeId };
  }
}
