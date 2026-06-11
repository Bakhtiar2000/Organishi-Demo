export enum UserRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  STAFF = "STAFF",
  CUSTOMER = "CUSTOMER",
}

export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}

export enum ProductStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  OUT_OF_STOCK = "OUT_OF_STOCK",
}

export enum OrderStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
  RETURNED = "RETURNED",
}

export enum PaymentStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  FAILED = "FAILED",
  REFUNDED = "REFUNDED",
}

export enum PaymentMethod {
  CARD = "CARD",
  COD = "COD",
  BANK_TRANSFER = "BANK_TRANSFER",
}

export enum ProductCategory {
  FRUITS = "fruits",
  VEGETABLES = "vegetables",
  DAIRY_EGGS = "dairy-eggs",
  GRAINS = "grains",
  HERBS_SPICES = "herbs-spices",
  NUTS_SEEDS = "nuts-seeds",
  JUICES_DRINKS = "juices-drinks",
  SNACKS = "snacks",
}
