export interface IProduct {
  id: number;
  sku: string;
  name: string;
  url_key: string;
  url_path: string;
  availability: number;
  seller_id: number;
  seller_name: string;
  brand_id: number;
  brand_name: string;
  price: number;
  original_price: number;
  discount: number;
  discount_rate: number;
  rating_average: number;
  review_count: number;
  category_ids: number[];
  primary_category_path: string;
  primary_category_name: string;
  thumbnail_url: string;
  thumbnail_width: number;
  thumbnail_height: number;
  productset_id: number;
  seller_product_id: number;
  seller_product_sku: string;
  master_product_sku: string;
  quantity_sold?: number;
  shippable: boolean;
  isGiftAvailable: boolean;
  earliest_delivery_estimate?: string;
  fastest_delivery_time?: string;
  order_route?: string;
  is_tikinow_delivery: boolean;
  is_nextday_delivery: boolean;
  is_from_official_store: boolean;
  is_authentic: number;
  tiki_verified: number;
  tiki_hero: number;
  origin: string;
  freeship_campaign: string;
  is_high_price_penalty: boolean;
  is_top_brand: boolean;
  imported?: string;
  layout_type?: string;
  is_normal_delivery?: boolean;
}

export interface ICart {
  product: IProduct;
  quantity: number;
}

export interface IAccount {
  name: string;
  token: string;
  email: string;
}
