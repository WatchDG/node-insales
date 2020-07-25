<a name="InSales"></a>

## InSales
InSales

**Kind**: global class  

* [InSales](#InSales)
    * [.getDeliveryVariants()](#InSales+getDeliveryVariants)
    * [.getDeliveryVariant(id)](#InSales+getDeliveryVariant)
    * [.createDeliveryVariant(payload)](#InSales+createDeliveryVariant)
    * [.updateDeliveryVariant(id, payload)](#InSales+updateDeliveryVariant)
    * [.destroyDeliveryVariant(id)](#InSales+destroyDeliveryVariant)
    * [.createDeliveryVariantPickUpSourceRemoveAttribute(deliveryVariantPickUpSourceAttributeId)](#InSales+createDeliveryVariantPickUpSourceRemoveAttribute)
    * [.getPaymentGateways()](#InSales+getPaymentGateways) ⇒
    * [.getPaymentGateway(id)](#InSales+getPaymentGateway) ⇒
    * [.getWebHooks()](#InSales+getWebHooks)
    * [.getWebHook(id)](#InSales+getWebHook)
    * [.createWebHook(payload)](#InSales+createWebHook)
    * [.destroyWebHook(id)](#InSales+destroyWebHook)
    * [.getPickUpSources()](#InSales+getPickUpSources)
    * [.getPickUpSource(id)](#InSales+getPickUpSource)
    * [.createPickUpSource(payload)](#InSales+createPickUpSource)
    * [.destroyPickUpSource(id)](#InSales+destroyPickUpSource)
    * [.getFields()](#InSales+getFields)
    * [.getField(id)](#InSales+getField)
    * [.createField(payload)](#InSales+createField)
    * [.destroyField(id)](#InSales+destroyField)

<a name="InSales+getDeliveryVariants"></a>

### inSales.getDeliveryVariants()
Получить все варианты доставки.

**Kind**: instance method of [<code>InSales</code>](#InSales)  
<a name="InSales+getDeliveryVariant"></a>

### inSales.getDeliveryVariant(id)
Получить вариант доставки по идентификатору.

**Kind**: instance method of [<code>InSales</code>](#InSales)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>DeliveryVariantId</code> | идентификатор варианта доставки |

<a name="InSales+createDeliveryVariant"></a>

### inSales.createDeliveryVariant(payload)
Создать новый вариант доставки.

**Kind**: instance method of [<code>InSales</code>](#InSales)  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>CreateDeliveryVariant</code> | объект создания варианта доставки |

<a name="InSales+updateDeliveryVariant"></a>

### inSales.updateDeliveryVariant(id, payload)
Обновить существующий вариант доставки.

**Kind**: instance method of [<code>InSales</code>](#InSales)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>DeliveryVariantId</code> | идентификатор варианта доставки |
| payload | <code>UpdateDeliveryVariant</code> | объект обновления варианта доставки |

<a name="InSales+destroyDeliveryVariant"></a>

### inSales.destroyDeliveryVariant(id)
Удалить существующий вариант доставки.

**Kind**: instance method of [<code>InSales</code>](#InSales)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>DeliveryVariantId</code> | идентификатор варианта доставки |

<a name="InSales+createDeliveryVariantPickUpSourceRemoveAttribute"></a>

### inSales.createDeliveryVariantPickUpSourceRemoveAttribute(deliveryVariantPickUpSourceAttributeId)
Создать атрибут удаления источника точек.

**Kind**: instance method of [<code>InSales</code>](#InSales)  

| Param | Type | Description |
| --- | --- | --- |
| deliveryVariantPickUpSourceAttributeId | <code>DeliveryVariantPickUpSourceAttributeId</code> | идентификатор атрибута источника точки |

<a name="InSales+getPaymentGateways"></a>

### inSales.getPaymentGateways() ⇒
Получить все платежные шлюзы.

**Kind**: instance method of [<code>InSales</code>](#InSales)  
**Returns**: Promise<ResultOk<PaymentGateway[]>|ResultFail<Error>>  
<a name="InSales+getPaymentGateway"></a>

### inSales.getPaymentGateway(id) ⇒
Получить платежный шлюз по идентификатору.

**Kind**: instance method of [<code>InSales</code>](#InSales)  
**Returns**: Promise<ResultOk<PaymentGateway>|ResultFail<Error>>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>PaymentGatewayId</code> | идентификатор платежного шлюза |

<a name="InSales+getWebHooks"></a>

### inSales.getWebHooks()
Получить все веб хуки.

**Kind**: instance method of [<code>InSales</code>](#InSales)  
<a name="InSales+getWebHook"></a>

### inSales.getWebHook(id)
Получить веб хук по идентификатору.

**Kind**: instance method of [<code>InSales</code>](#InSales)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>WebHookId</code> | идентификатор веб хука |

<a name="InSales+createWebHook"></a>

### inSales.createWebHook(payload)
Создать новый веб хук.

**Kind**: instance method of [<code>InSales</code>](#InSales)  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>CreateWebHook</code> | объект создания веб хука |

<a name="InSales+destroyWebHook"></a>

### inSales.destroyWebHook(id)
Удалить существующий веб хук.

**Kind**: instance method of [<code>InSales</code>](#InSales)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>WebHookId</code> | идентификатор веб хука |

<a name="InSales+getPickUpSources"></a>

### inSales.getPickUpSources()
Получить все источники пунктов выдачи.

**Kind**: instance method of [<code>InSales</code>](#InSales)  
<a name="InSales+getPickUpSource"></a>

### inSales.getPickUpSource(id)
Получить источник пунктов выдачи по идентификатору.

**Kind**: instance method of [<code>InSales</code>](#InSales)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>PickUpSourceId</code> | идентификатор источника пунктов выдачи |

<a name="InSales+createPickUpSource"></a>

### inSales.createPickUpSource(payload)
Создать новый источник пунктов выдачи.

**Kind**: instance method of [<code>InSales</code>](#InSales)  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>CreatePickUpSource</code> | объект создания источника пунктов выдачи |

<a name="InSales+destroyPickUpSource"></a>

### inSales.destroyPickUpSource(id)
Удалить существующий источник пунктов выдачи.

**Kind**: instance method of [<code>InSales</code>](#InSales)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>PickUpSourceId</code> | идентификатор источника пунктов выдачи |

<a name="InSales+getFields"></a>

### inSales.getFields()
Получить все поля.

**Kind**: instance method of [<code>InSales</code>](#InSales)  
<a name="InSales+getField"></a>

### inSales.getField(id)
Получить поле по идентификатору.

**Kind**: instance method of [<code>InSales</code>](#InSales)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>FieldId</code> | идентификатор поля |

<a name="InSales+createField"></a>

### inSales.createField(payload)
Создать новое поле.

**Kind**: instance method of [<code>InSales</code>](#InSales)  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>CreateField</code> | объект создания поля |

<a name="InSales+destroyField"></a>

### inSales.destroyField(id)
Удалить существуюшие поле.

**Kind**: instance method of [<code>InSales</code>](#InSales)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>FieldId</code> | идентификатор поля |

