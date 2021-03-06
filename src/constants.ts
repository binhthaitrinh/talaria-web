const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.talaria-order.xyz/api/v1'
    : 'http://localhost:4444/api/v1';

const ITEM_FIELD_MAP_2 = {
  _id: {
    type: 'internalLink',
    full: 'id',
  },
  createdAt: {
    type: 'string',
    full: 'created at',
  },
  name: {
    type: 'string',
    full: 'name',
  },
  link: {
    type: 'externalLink',
    full: 'link',
  },
  pricePerItem: {
    type: 'string',
    full: 'price / item',
  },
  actPricePerItem: {
    type: 'string',
    full: 'actual price / item',
  },
  quantity: {
    type: 'number',
    full: 'quantity',
  },
  tax: {
    type: 'string',
    full: 'tax',
  },
  usShippingFee: {
    type: 'string',
    full: 'us shipping fee',
  },

  extraShippingCost: {
    type: 'string',
    full: 'extra shipping cost',
  },

  estWgtPerItem: {
    type: 'string',
    full: 'estimated weight / item',
  },
  actWgtPerItem: {
    type: 'string',
    full: 'actual weight / item',
  },
  actualCost: {
    type: 'string',
    full: 'actual cost',
  },
  trackingLink: {
    type: 'externalLink',
    full: 'tracking link',
  },
  invoiceLink: {
    type: 'string',
    full: 'invoice link',
  },

  orderDate: {
    type: 'string',
    full: 'order date',
  },
  arrvlAtWarehouseDate: {
    type: 'string',
    full: 'arrived at warehouse',
  },

  customerRcvDate: {
    type: 'string',
    full: 'customer received',
  },
  returnDate: {
    type: 'string',
    full: 'return date',
  },
  returnArrvlDate: {
    type: 'string',
    full: 'return arrival',
  },
  notes: {
    type: 'string',
    full: 'notes',
  },
  status: {
    type: 'string',
    full: 'status',
  },
  website: {
    type: 'string',
    full: 'website',
  },
  commissionRate: {
    type: 'string',
    full: 'commission rate',
  },
  itemType: {
    type: 'string',
    full: 'item type',
  },
  orderAccount: {
    type: 'internalLink',
    full: 'order account',
  },
  warehouse: {
    type: 'internalLink',
    full: 'warehouse',
  },
  transaction: {
    type: 'internalLink',
    full: 'transaction',
  },
  updatedAt: {
    type: 'string',
    full: 'updated at',
  },
};

const ITEM_FIELD_MAP = {
  _id: 'id',
  createdAt: 'created at',
  name: 'name',
  link: 'link',
  pricePerItem: 'price per item',
  actPricePerItem: 'actual price per item',
  quantity: 'quantity',
  tax: 'tax',
  usShippingFee: 'us shipping fee',
  extraShippingCost: 'extra shipping cost',
  estWgtPerItem: 'estimated weight/item',
  actWgtPerItem: 'actual weight/item',
  actualCost: 'actual cost',
  trackingLink: 'tracking link',
  invoiceLink: 'invoice link',
  orderDate: 'order date',
  arrvlAtWarehouseDate: 'arrived at warehouse',
  customerRcvDate: 'customer reception',
  returnDate: 'return date',
  returnArrvlDate: 'return arrival',
  notes: 'notes',
  status: 'status',
  website: 'website',
  commissionRate: 'comission rate',
  itemType: 'item type',
  orderAccount: 'order account',
  warehouse: 'warehouse',
  transaction: 'transaction',
  updatedAt: 'updated at',
};

const SELECT_STYLE = {
  border: '1px solid var(--chakra-colors-gray-200)',
  width: '100%',
  display: 'block',
  padding: '8px 8px',
  borderRadius: '6px',
  textTransform: 'capitalize',
};

export interface I_Item {
  _id: string;
  createdAt: string;
  name: string;
  link: string;
  pricePerItem: string;
  actPricePerItem: string;
  quantity: string;
  tax: string;
  usShippingFee: string;
  extraShippingCost: string;
  estWgtPerItem: string;
  actWgtPerItem: string;
  actualCost: string;
  trackingLink: string;
  invoiceLink: string;
  orderDate: string;
  arrvlAtWarehouseDate: string;
  customerRcvDate: string;
  returnDate: string;
  returnArrvlDate: string;
  notes: string;
  status: string;
  website: string;
  commissionRate: string;
  itemType: string;
  orderAccount: string;
  warehouse: string;
  transaction: string;
  updatedAt: string;
}

const ITEM_FIELDS = [
  'createdAt',
  'name',
  'link',
  'status',
  'pricePerItem',
  'actPricePerItem',
  'quantity',
  'tax',
  'usShippingFee',
  'extraShippingCost',
  'estWgtPerItem',
  'actWgtPerItem',
  'actualCost',
  'trackingLink',
  'invoiceLink',
  'orderDate',
  'arrvlAtWarehouseDate',
  'customerRcvDate',
  'returnDate',
  'returnArrvlDate',
  'notes',
  'website',
  'commissionRate',
  'itemType',
  'orderAccount',
  'warehouse',
  'transaction',
  'updatedAt',
];

const ITEM_SORTABLE = [
  '_id',
  'createdAt',
  'pricePerItem',
  'updatedAt',
  'orderDate',
];

const ITEM_DEFAULT = [
  'createdAt',
  'name',
  'link',
  'status',
  'pricePerItem',
  'quantity',
  'actualCost',
  'website',
];

const ACCOUNT_FIELDS = [
  'createdAt',
  'name',
  'website',
  'balance',
  'currency',
  'status',
  'notes',
];

const ACCOUNT_FIELD_MAP = {
  _id: {
    type: 'internalLink',
    full: 'Id',
  },
  createdAt: {
    type: 'string',
    full: 'created at',
  },
  name: {
    type: 'string',
    full: 'name',
  },
  website: {
    type: 'string',
    full: 'website',
  },
  balance: {
    type: 'string',
    full: 'balance',
  },
  currency: {
    type: 'string',
    full: 'currency',
  },
  status: {
    type: 'string',
    full: 'status',
  },

  notes: {
    type: 'string',
    full: 'notes',
  },
};

const ACCOUNTS = [
  {
    _id: '604fdc268b219f0715099180',
    website: 'others',
    name: 'trinhthaibinh.ecom@gmail.com',
    currency: 'btc',
  },
  {
    _id: '604fd95ca213d706709c716a',
    website: 'amazon',
    name: 'trinhthaibinh.ecom@gmail.com',
    currency: 'usd',
  },
  {
    _id: '604fd95ca213d706709c716b',
    website: 'others',
    name: 'VND_ACCOUNT',
    currency: 'vnd',
  },
  {
    _id: '604fd95ca213d706709c716c',
    website: 'others',
    name: 'USD_ACCOUNT',
    currency: 'usd',
  },
  {
    _id: '604fd95ca213d706709c716d',
    website: 'amazon',
    name: 'thaibinh.trinh@student.csulb.edu',
    currency: 'usd',
  },
  {
    _id: '604fd95ca213d706709c716e',
    website: 'amazon',
    name: 'btrinh27@student.cccd.edu',
    currency: 'usd',
  },
  {
    _id: '604fd95ca213d706709c716f',
    website: 'walmart',
    name: 'trinhthaibinh.ecom@gmail.com',
    currency: 'usd',
  },
];

const CRYPTO_FIELDS = [
  'createdAt',
  'updatedAt',
  'btcAmount',
  'withdrawFee',
  'moneySpent',
  'usdVndRate',
  'btcUsdRate',
  'notes',
  'transaction',
  'buyer',
  'fromAccount',
  'toAccount',
];

const CRYPTO_DEFAULT = [
  'createdAt',
  'btcAmount',
  'withdrawFee',
  'moneySpent',
  'usdVndRate',
  'btcUsdRate',
  'notes',
];

const CRYPTO_FIELD_MAP = {
  _id: {
    type: 'internalLink',
    full: 'id',
  },
  createdAt: {
    type: 'string',
    full: 'created at',
  },
  updatedAt: {
    type: 'string',
    full: 'updated at',
  },
  btcAmount: {
    type: 'string',
    full: 'btc amount',
  },
  withdrawFee: {
    type: 'string',
    full: 'withdraw fee',
  },
  moneySpent: {
    type: 'string',
    full: 'money spent',
  },
  usdVndRate: {
    type: 'string',
    full: 'usd / vnd',
  },
  btcUsdRate: {
    type: 'string',
    full: 'btc / usd',
  },
  notes: {
    type: 'string',
    full: 'notes',
  },
  transaction: {
    type: 'internalLink',
    full: 'transaction',
  },
  buyer: {
    type: 'internalLink',
    full: 'buyer',
  },
  fromAccount: {
    type: 'internalLink',
    full: 'from account',
  },
  toAccount: {
    type: 'internalLink',
    full: 'to account',
  },
};

const GIFT_CARD_FIELDS = [
  'createdAt',
  'updatedAt',
  'price',
  'fee',
  'value',
  'website',
  'notes',
  'discountRate',
  'remainingBalance',
  'btcUsdRate',
  'usdVndRate',
  'transaction',
  'fromAccount',
  'toAccount',
];

const GIFT_CARD_DEFAULT = [
  'createdAt',
  'price',
  'fee',
  'value',
  'website',
  'notes',
  'discountRate',
];

const GIFT_CARD_MAP = {
  _id: {
    type: 'internalLink',
    full: 'id',
  },
  createdAt: {
    type: 'string',
    full: 'created at',
  },
  updatedAt: {
    type: 'string',
    full: 'updated at',
  },
  price: {
    type: 'string',
    full: 'price',
  },
  fee: {
    type: 'string',
    full: 'fee',
  },
  value: {
    type: 'string',
    full: 'value',
  },
  website: {
    type: 'string',
    full: 'website',
  },
  notes: {
    type: 'string',
    full: 'notes',
  },
  discountRate: {
    type: 'string',
    full: 'discount rate',
  },
  remainingBalance: {
    type: 'string',
    full: 'remaining balance',
  },
  btcUsdRate: {
    type: 'string',
    full: 'btc / usd',
  },
  usdVndRate: {
    type: 'string',
    full: 'usd / vnd',
  },

  transaction: {
    type: 'internalLink',
    full: 'transaction',
  },
  fromAccount: {
    type: 'internalLink',
    full: 'from account',
  },
  toAccount: {
    type: 'internalLink',
    full: 'to account',
  },
};

const USER_MAP = {
  _id: {
    full: 'id',
    type: 'internalLink',
  },
  createdAt: {
    full: 'created at',
    type: 'string',
  },
  role: {
    full: 'role',
    type: 'string',
  },
};

export {
  BASE_URL,
  ITEM_FIELD_MAP,
  SELECT_STYLE,
  ITEM_SORTABLE,
  ITEM_FIELD_MAP_2,
  ITEM_FIELDS,
  ITEM_DEFAULT,
  ACCOUNTS,
  ACCOUNT_FIELDS,
  ACCOUNT_FIELD_MAP,
  CRYPTO_DEFAULT,
  CRYPTO_FIELDS,
  CRYPTO_FIELD_MAP,
  GIFT_CARD_DEFAULT,
  GIFT_CARD_FIELDS,
  GIFT_CARD_MAP,
  USER_MAP,
};
