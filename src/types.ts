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

export interface MoneyType {
  value: number;
  currency: string;
}

export interface Balance {
  amount: number;
  rating: number;
}

export interface I_Bill {
  _id: string;
  createdAt?: number;
  updatedAt?: number;
  usdVndRate: number;
  status?: string;
  shippingRateToVn: MoneyType;
  customTax?: number;
  moneyReceived?: number;
  totalBillUsd?: number;
  actBillCost?: number;
  actCharge?: number;
  commission?: number;
  paymentReceipt?: string;
  notes?: string;
  customer: string;
  items: string[];
  affiliate: string;
  afterDiscount?: number;
  totalEstimatedWeight?: number;
}

export interface I_Crypto {
  createdAt: number;
  updatedAt?: number;
  btcAmount: number;
  withdrawFee: number;
  moneySpent: MoneyType;
  usdVndRate: number;
  btcUsdRate: number;
  // remainingBalance?: Balance;
  notes?: string;
  transaction: string;
  buyer: string;
  fromAccount: string;
  toAccount: string;
  _id: string;
}

export interface I_Account {
  accountWebsite?: string;
  name: string;
  teamviewInfo?: string;
  balance: number;
  currency: string;
  createdAt: number;
  updatedAt: number;
  owned: boolean;
  notes?: string;
  status: string;
  _id: string;
  customId?: string;
}
interface SocialMedia {
  website: string;
  link: string;
}

interface BankAcct {
  bankName: string;
  acctNumber: string;
  bankLocation?: string;
}

interface CommissionRate {
  website: string;
  rate: number;
}

interface Address {
  streetAddr: string;
  city: string;
}

interface Profile {
  updatedAt?: number;
  socialMedias?: [SocialMedia];
  phoneNumbers?: [string];
  bankAccts?: [BankAcct];
  commissionRates?: [CommissionRate];
  dob?: number;
  customerType?: string;
  address?: [Address];
  discountRates?: [CommissionRate];
}

export interface I_User {
  firstName: string;
  lastName?: string;
  email: string;
  profilePicture: string;
  role: string;
  password?: string;
  passwordConfirm?: string;
  passwordChangedAt?: number;
  active?: boolean;
  customId?: string;
  createdAt: number;
  notes?: string;
  profile: Profile;
  _id: string;
}