export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface productsType {
  public: {
    Tables: {
      product: {
        Row: {
          category: string | null;
          created_at: string | null;
          description: string | null;
          id: number;
          image: string | null;
          name: string | null;
          price: number | null;
          sale_price: number | null;
        };
        Insert: {
          category?: string | null;
          created_at?: string | null;
          description?: string | null;
          id?: number;
          image?: string | null;
          name?: string | null;
          price?: number | null;
          sale_price?: number | null;
        };
        Update: {
          category?: string | null;
          created_at?: string | null;
          description?: string | null;
          id?: number;
          image?: string | null;
          name?: string | null;
          price?: number | null;
          sale_price?: number | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
