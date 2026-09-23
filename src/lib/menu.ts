import data from "@/data/menu.json";

export interface MenuItem {
  name: string;
  price: string;
  description: string;
  veg?: boolean;
}

export interface MenuSubcategory {
  name: string;
  items: MenuItem[];
}

export interface MenuCategory {
  name: string;
  description?: string;
  items?: MenuItem[];
  subcategories?: MenuSubcategory[];
}

export interface MenuData {
  categories: MenuCategory[];
}

export const menuData = data as MenuData;

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function formatPrice(price: string): string {
  return price
    .split("/")
    .map((p) => `₹${p.trim()}`)
    .join(" / ");
}
