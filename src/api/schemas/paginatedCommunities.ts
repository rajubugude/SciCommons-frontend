/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import type { CommunityOut } from './communityOut';

export interface PaginatedCommunities {
  items: CommunityOut[];
  num_pages: number;
  page: number;
  per_page: number;
  total: number;
}