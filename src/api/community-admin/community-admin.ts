/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * MyApp API
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

import { customInstance } from '.././custom-instance';
import type { ErrorType } from '.././custom-instance';
import type { AdminArticlesResponse, MembersResponse, Message } from '.././schemas';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary Get Articles By Status
 */
export const communitiesApiAdminGetArticlesByStatus = (
  communityName: string,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<AdminArticlesResponse>(
    { url: `/api/communities/${communityName}/admin-articles`, method: 'GET', signal },
    options
  );
};

export const getCommunitiesApiAdminGetArticlesByStatusQueryKey = (communityName: string) => {
  return [`/api/communities/${communityName}/admin-articles`] as const;
};

export const getCommunitiesApiAdminGetArticlesByStatusQueryOptions = <
  TData = Awaited<ReturnType<typeof communitiesApiAdminGetArticlesByStatus>>,
  TError = ErrorType<Message>,
>(
  communityName: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof communitiesApiAdminGetArticlesByStatus>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getCommunitiesApiAdminGetArticlesByStatusQueryKey(communityName);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof communitiesApiAdminGetArticlesByStatus>>
  > = ({ signal }) => communitiesApiAdminGetArticlesByStatus(communityName, requestOptions, signal);

  return { queryKey, queryFn, enabled: !!communityName, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof communitiesApiAdminGetArticlesByStatus>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type CommunitiesApiAdminGetArticlesByStatusQueryResult = NonNullable<
  Awaited<ReturnType<typeof communitiesApiAdminGetArticlesByStatus>>
>;
export type CommunitiesApiAdminGetArticlesByStatusQueryError = ErrorType<Message>;

/**
 * @summary Get Articles By Status
 */
export const useCommunitiesApiAdminGetArticlesByStatus = <
  TData = Awaited<ReturnType<typeof communitiesApiAdminGetArticlesByStatus>>,
  TError = ErrorType<Message>,
>(
  communityName: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof communitiesApiAdminGetArticlesByStatus>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getCommunitiesApiAdminGetArticlesByStatusQueryOptions(
    communityName,
    options
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Manage an article
 */
export const communitiesApiAdminManageArticle = (
  communityId: number,
  articleId: number,
  action: 'approve' | 'publish' | 'reject' | 'unpublish' | 'remove',
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<Message>(
    {
      url: `/api/communities/${communityId}/manage-article/${articleId}/${action}`,
      method: 'POST',
    },
    options
  );
};

export const getCommunitiesApiAdminManageArticleMutationOptions = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof communitiesApiAdminManageArticle>>,
    TError,
    {
      communityId: number;
      articleId: number;
      action: 'approve' | 'publish' | 'reject' | 'unpublish' | 'remove';
    },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof communitiesApiAdminManageArticle>>,
  TError,
  {
    communityId: number;
    articleId: number;
    action: 'approve' | 'publish' | 'reject' | 'unpublish' | 'remove';
  },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof communitiesApiAdminManageArticle>>,
    {
      communityId: number;
      articleId: number;
      action: 'approve' | 'publish' | 'reject' | 'unpublish' | 'remove';
    }
  > = (props) => {
    const { communityId, articleId, action } = props ?? {};

    return communitiesApiAdminManageArticle(communityId, articleId, action, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type CommunitiesApiAdminManageArticleMutationResult = NonNullable<
  Awaited<ReturnType<typeof communitiesApiAdminManageArticle>>
>;

export type CommunitiesApiAdminManageArticleMutationError = ErrorType<Message>;

/**
 * @summary Manage an article
 */
export const useCommunitiesApiAdminManageArticle = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof communitiesApiAdminManageArticle>>,
    TError,
    {
      communityId: number;
      articleId: number;
      action: 'approve' | 'publish' | 'reject' | 'unpublish' | 'remove';
    },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof communitiesApiAdminManageArticle>>,
  TError,
  {
    communityId: number;
    articleId: number;
    action: 'approve' | 'publish' | 'reject' | 'unpublish' | 'remove';
  },
  TContext
> => {
  const mutationOptions = getCommunitiesApiAdminManageArticleMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Get Community Members
 */
export const communitiesApiAdminGetCommunityMembers = (
  communityName: string,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<MembersResponse>(
    { url: `/api/communities/${communityName}/members`, method: 'GET', signal },
    options
  );
};

export const getCommunitiesApiAdminGetCommunityMembersQueryKey = (communityName: string) => {
  return [`/api/communities/${communityName}/members`] as const;
};

export const getCommunitiesApiAdminGetCommunityMembersQueryOptions = <
  TData = Awaited<ReturnType<typeof communitiesApiAdminGetCommunityMembers>>,
  TError = ErrorType<Message>,
>(
  communityName: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof communitiesApiAdminGetCommunityMembers>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getCommunitiesApiAdminGetCommunityMembersQueryKey(communityName);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof communitiesApiAdminGetCommunityMembers>>
  > = ({ signal }) => communitiesApiAdminGetCommunityMembers(communityName, requestOptions, signal);

  return { queryKey, queryFn, enabled: !!communityName, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof communitiesApiAdminGetCommunityMembers>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type CommunitiesApiAdminGetCommunityMembersQueryResult = NonNullable<
  Awaited<ReturnType<typeof communitiesApiAdminGetCommunityMembers>>
>;
export type CommunitiesApiAdminGetCommunityMembersQueryError = ErrorType<Message>;

/**
 * @summary Get Community Members
 */
export const useCommunitiesApiAdminGetCommunityMembers = <
  TData = Awaited<ReturnType<typeof communitiesApiAdminGetCommunityMembers>>,
  TError = ErrorType<Message>,
>(
  communityName: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof communitiesApiAdminGetCommunityMembers>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getCommunitiesApiAdminGetCommunityMembersQueryOptions(
    communityName,
    options
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Manage Community Member
 */
export const communitiesApiAdminManageCommunityMember = (
  communityId: number,
  userId: number,
  action:
    | 'promote_admin'
    | 'promote_moderator'
    | 'promote_reviewer'
    | 'demote_admin'
    | 'demote_moderator'
    | 'demote_reviewer'
    | 'remove',
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<Message>(
    { url: `/api/communities/${communityId}/manage-member/${userId}/${action}`, method: 'POST' },
    options
  );
};

export const getCommunitiesApiAdminManageCommunityMemberMutationOptions = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof communitiesApiAdminManageCommunityMember>>,
    TError,
    {
      communityId: number;
      userId: number;
      action:
        | 'promote_admin'
        | 'promote_moderator'
        | 'promote_reviewer'
        | 'demote_admin'
        | 'demote_moderator'
        | 'demote_reviewer'
        | 'remove';
    },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof communitiesApiAdminManageCommunityMember>>,
  TError,
  {
    communityId: number;
    userId: number;
    action:
      | 'promote_admin'
      | 'promote_moderator'
      | 'promote_reviewer'
      | 'demote_admin'
      | 'demote_moderator'
      | 'demote_reviewer'
      | 'remove';
  },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof communitiesApiAdminManageCommunityMember>>,
    {
      communityId: number;
      userId: number;
      action:
        | 'promote_admin'
        | 'promote_moderator'
        | 'promote_reviewer'
        | 'demote_admin'
        | 'demote_moderator'
        | 'demote_reviewer'
        | 'remove';
    }
  > = (props) => {
    const { communityId, userId, action } = props ?? {};

    return communitiesApiAdminManageCommunityMember(communityId, userId, action, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type CommunitiesApiAdminManageCommunityMemberMutationResult = NonNullable<
  Awaited<ReturnType<typeof communitiesApiAdminManageCommunityMember>>
>;

export type CommunitiesApiAdminManageCommunityMemberMutationError = ErrorType<Message>;

/**
 * @summary Manage Community Member
 */
export const useCommunitiesApiAdminManageCommunityMember = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof communitiesApiAdminManageCommunityMember>>,
    TError,
    {
      communityId: number;
      userId: number;
      action:
        | 'promote_admin'
        | 'promote_moderator'
        | 'promote_reviewer'
        | 'demote_admin'
        | 'demote_moderator'
        | 'demote_reviewer'
        | 'remove';
    },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof communitiesApiAdminManageCommunityMember>>,
  TError,
  {
    communityId: number;
    userId: number;
    action:
      | 'promote_admin'
      | 'promote_moderator'
      | 'promote_reviewer'
      | 'demote_admin'
      | 'demote_moderator'
      | 'demote_reviewer'
      | 'remove';
  },
  TContext
> => {
  const mutationOptions = getCommunitiesApiAdminManageCommunityMemberMutationOptions(options);

  return useMutation(mutationOptions);
};