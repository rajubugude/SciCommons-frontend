/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import type { PostOut } from './postOut';

export interface PaginatedPostsResponse {
  items: PostOut[];
  num_pages: number;
  page: number;
  per_page: number;
  total: number;
}