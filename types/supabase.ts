export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      users: {
        Row: {
          address: string
          age: number
          date_of_birth: string
          email: string
          expected_payment: boolean
          id: string
          id_proof: string
          name: string
          password: string
          phone_no: string
          physical_details: string
          pp_id: string
          role_type: Database["public"]["Enums"]["roles"]
          skill: string
        }
        Insert: {
          address: string
          age: number
          date_of_birth: string
          email: string
          expected_payment: boolean
          id?: string
          id_proof: string
          name: string
          password: string
          phone_no: string
          physical_details: string
          pp_id: string
          role_type: Database["public"]["Enums"]["roles"]
          skill: string
        }
        Update: {
          address?: string
          age?: number
          date_of_birth?: string
          email?: string
          expected_payment?: boolean
          id?: string
          id_proof?: string
          name?: string
          password?: string
          phone_no?: string
          physical_details?: string
          pp_id?: string
          role_type?: Database["public"]["Enums"]["roles"]
          skill?: string
        }
      }
      gener_on_prod: {
        Row: {
          genere: string
          id: string
          prod_id: string
        }
        Insert: {
          genere: string
          id?: string
          prod_id: string
        }
        Update: {
          genere?: string
          id?: string
          prod_id?: string
        }
      }
      genere_category: {
        Row: {
          genere_type: string
        }
        Insert: {
          genere_type: string
        }
        Update: {
          genere_type?: string
        }
      }
      prev_projects: {
        Row: {
          id: string
          link: string
          production_name: string
          project_name: string
          released_date: string
          technician_role: string
        }
        Insert: {
          id?: string
          link: string
          production_name: string
          project_name: string
          released_date: string
          technician_role: string
        }
        Update: {
          id?: string
          link?: string
          production_name?: string
          project_name?: string
          released_date?: string
          technician_role?: string
        }
      }
      productionProfiles: {
        Row: {
          address: string
          budget: number
          created_at: string
          duration: number
          id: string
          no_of_shooting_days: number
          p_owner_id: string
          payment_provided: boolean
          poster: string
          release_date: string
          restrictions: string
          title: string
          updated_at: string
        }
        Insert: {
          address: string
          budget: number
          created_at?: string
          duration: number
          id?: string
          no_of_shooting_days: number
          p_owner_id: string
          payment_provided: boolean
          poster: string
          release_date: string
          restrictions: string
          title: string
          updated_at: string
        }
        Update: {
          address?: string
          budget?: number
          created_at?: string
          duration?: number
          id?: string
          no_of_shooting_days?: number
          p_owner_id?: string
          payment_provided?: boolean
          poster?: string
          release_date?: string
          restrictions?: string
          title?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      roles: "ARTIST" | "PROD_OWNER"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

