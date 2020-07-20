const {ResultFail, ResultOk} = require('node-result');

import Axios, {AxiosInstance} from 'axios';

type DeliveryVariantId = number;

type DeliveryVariantTitle = string;
type DeliveryVariantType = 'DeliveryVariant::PickUp';
type DeliveryVariantDescription = string;

type DeliveryVariant = {
    delivery_variant: {
        title: DeliveryVariantTitle;
        type: DeliveryVariantType;
        description?: DeliveryVariantDescription;
    };
};

type PaymentDeliveryVariant = {
    id: number;
    delivery_variant_id: number;
    created_at: string;
};

type PaymentGatewayType = 'PaymentGateway::Custom';

type PaymentGateway = {
    id: number;
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

export default class InSales {
    private readonly instance: AxiosInstance;

    constructor(baseURL: string, timeout: number = 1000, headers: object = {}) {
        this.instance = Axios.create({baseURL, timeout, headers});
    }

    async getDeliveryVariants() {
        try {
            const {data} = await this.instance.get('/admin/delivery_variants.json');
            return ResultOk(data);
        } catch (error) {
            return ResultFail(error);
        }
    }

    async getDeliveryVariant(id: DeliveryVariantId) {
        try {
            const {data} = await this.instance.get(`/admin/delivery_variants/${id}.json`);
            return ResultOk(data);
        } catch (error) {
            return ResultFail(error);
        }
    }

    async destroyDeliveryVariant(id: DeliveryVariantId) {
        try {
            const {data} = await this.instance.delete(`/admin/delivery_variants/${id}.json`);
            return ResultOk(data);
        } catch (error) {
            return ResultFail(error);
        }
    }

    async getPaymentGateways() {
        try {
            const {data} = await this.instance.get('/admin/payment_gateways.json');
            return ResultOk(data);
        } catch (error) {
            return ResultFail(error);
        }
    }
}
