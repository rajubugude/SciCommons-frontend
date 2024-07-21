/**
 * Generated by orval v6.31.0 🍺
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
import type { BodyType, ErrorType } from '.././custom-instance';
import type {
  FavoriteItemSchema,
  Message,
  NotificationSchema,
  PaginatedArticlesResponse,
  PaginatedHashtagOut,
  PaginatedPostsResponse,
  ReactionCountOut,
  ReactionIn,
  UserArticleSchema,
  UserCommunitySchema,
  UserDetails,
  UserPostSchema,
  UserStats,
  UsersApiGetHashtagsParams,
  UsersApiGetMyArticlesParams,
  UsersApiListMyPostsParams,
  UsersApiUpdateUserBody,
} from '.././schemas';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary Get Me
 */
export const usersApiGetMe = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<UserDetails>({ url: `/api/users/me`, method: 'GET', signal }, options);
};

export const getUsersApiGetMeQueryKey = () => {
  return [`/api/users/me`] as const;
};

export const getUsersApiGetMeQueryOptions = <
  TData = Awaited<ReturnType<typeof usersApiGetMe>>,
  TError = ErrorType<Message>,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof usersApiGetMe>>, TError, TData>>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersApiGetMeQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersApiGetMe>>> = ({ signal }) =>
    usersApiGetMe(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersApiGetMe>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersApiGetMeQueryResult = NonNullable<Awaited<ReturnType<typeof usersApiGetMe>>>;
export type UsersApiGetMeQueryError = ErrorType<Message>;

/**
 * @summary Get Me
 */
export const useUsersApiGetMe = <
  TData = Awaited<ReturnType<typeof usersApiGetMe>>,
  TError = ErrorType<Message>,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof usersApiGetMe>>, TError, TData>>;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getUsersApiGetMeQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Update User
 */
export const usersApiUpdateUser = (
  usersApiUpdateUserBody: BodyType<UsersApiUpdateUserBody>,
  options?: SecondParameter<typeof customInstance>
) => {
  const formData = new FormData();
  if (usersApiUpdateUserBody.profile_image !== undefined) {
    formData.append('profile_image', usersApiUpdateUserBody.profile_image);
  }
  formData.append('payload', JSON.stringify(usersApiUpdateUserBody.payload));

  return customInstance<UserDetails>(
    {
      url: `/api/users/me`,
      method: 'PUT',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: formData,
    },
    options
  );
};

export const getUsersApiUpdateUserMutationOptions = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersApiUpdateUser>>,
    TError,
    { data: BodyType<UsersApiUpdateUserBody> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof usersApiUpdateUser>>,
  TError,
  { data: BodyType<UsersApiUpdateUserBody> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersApiUpdateUser>>,
    { data: BodyType<UsersApiUpdateUserBody> }
  > = (props) => {
    const { data } = props ?? {};

    return usersApiUpdateUser(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UsersApiUpdateUserMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersApiUpdateUser>>
>;
export type UsersApiUpdateUserMutationBody = BodyType<UsersApiUpdateUserBody>;
export type UsersApiUpdateUserMutationError = ErrorType<Message>;

/**
 * @summary Update User
 */
export const useUsersApiUpdateUser = <TError = ErrorType<Message>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersApiUpdateUser>>,
    TError,
    { data: BodyType<UsersApiUpdateUserBody> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof usersApiUpdateUser>>,
  TError,
  { data: BodyType<UsersApiUpdateUserBody> },
  TContext
> => {
  const mutationOptions = getUsersApiUpdateUserMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Get User Stats
 */
export const usersApiGetUserStats = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<UserStats>({ url: `/api/users/me/stats`, method: 'GET', signal }, options);
};

export const getUsersApiGetUserStatsQueryKey = () => {
  return [`/api/users/me/stats`] as const;
};

export const getUsersApiGetUserStatsQueryOptions = <
  TData = Awaited<ReturnType<typeof usersApiGetUserStats>>,
  TError = ErrorType<Message>,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof usersApiGetUserStats>>, TError, TData>>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersApiGetUserStatsQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersApiGetUserStats>>> = ({ signal }) =>
    usersApiGetUserStats(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersApiGetUserStats>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersApiGetUserStatsQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersApiGetUserStats>>
>;
export type UsersApiGetUserStatsQueryError = ErrorType<Message>;

/**
 * @summary Get User Stats
 */
export const useUsersApiGetUserStats = <
  TData = Awaited<ReturnType<typeof usersApiGetUserStats>>,
  TError = ErrorType<Message>,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof usersApiGetUserStats>>, TError, TData>>;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getUsersApiGetUserStatsQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Get Articles
 */
export const usersApiGetArticles = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<UserArticleSchema[]>(
    { url: `/api/users/contributed-articles`, method: 'GET', signal },
    options
  );
};

export const getUsersApiGetArticlesQueryKey = () => {
  return [`/api/users/contributed-articles`] as const;
};

export const getUsersApiGetArticlesQueryOptions = <
  TData = Awaited<ReturnType<typeof usersApiGetArticles>>,
  TError = ErrorType<Message>,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof usersApiGetArticles>>, TError, TData>>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersApiGetArticlesQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersApiGetArticles>>> = ({ signal }) =>
    usersApiGetArticles(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersApiGetArticles>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersApiGetArticlesQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersApiGetArticles>>
>;
export type UsersApiGetArticlesQueryError = ErrorType<Message>;

/**
 * @summary Get Articles
 */
export const useUsersApiGetArticles = <
  TData = Awaited<ReturnType<typeof usersApiGetArticles>>,
  TError = ErrorType<Message>,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof usersApiGetArticles>>, TError, TData>>;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getUsersApiGetArticlesQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Get My Communities
 */
export const usersApiGetMyCommunities = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<UserCommunitySchema[]>(
    { url: `/api/users/my-communities`, method: 'GET', signal },
    options
  );
};

export const getUsersApiGetMyCommunitiesQueryKey = () => {
  return [`/api/users/my-communities`] as const;
};

export const getUsersApiGetMyCommunitiesQueryOptions = <
  TData = Awaited<ReturnType<typeof usersApiGetMyCommunities>>,
  TError = ErrorType<Message>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof usersApiGetMyCommunities>>, TError, TData>
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersApiGetMyCommunitiesQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersApiGetMyCommunities>>> = ({
    signal,
  }) => usersApiGetMyCommunities(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersApiGetMyCommunities>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersApiGetMyCommunitiesQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersApiGetMyCommunities>>
>;
export type UsersApiGetMyCommunitiesQueryError = ErrorType<Message>;

/**
 * @summary Get My Communities
 */
export const useUsersApiGetMyCommunities = <
  TData = Awaited<ReturnType<typeof usersApiGetMyCommunities>>,
  TError = ErrorType<Message>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof usersApiGetMyCommunities>>, TError, TData>
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getUsersApiGetMyCommunitiesQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Get My Articles
 */
export const usersApiGetMyArticles = (
  params?: UsersApiGetMyArticlesParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<PaginatedArticlesResponse>(
    { url: `/api/users/my-articles`, method: 'GET', params, signal },
    options
  );
};

export const getUsersApiGetMyArticlesQueryKey = (params?: UsersApiGetMyArticlesParams) => {
  return [`/api/users/my-articles`, ...(params ? [params] : [])] as const;
};

export const getUsersApiGetMyArticlesQueryOptions = <
  TData = Awaited<ReturnType<typeof usersApiGetMyArticles>>,
  TError = ErrorType<Message>,
>(
  params?: UsersApiGetMyArticlesParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof usersApiGetMyArticles>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersApiGetMyArticlesQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersApiGetMyArticles>>> = ({ signal }) =>
    usersApiGetMyArticles(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersApiGetMyArticles>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersApiGetMyArticlesQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersApiGetMyArticles>>
>;
export type UsersApiGetMyArticlesQueryError = ErrorType<Message>;

/**
 * @summary Get My Articles
 */
export const useUsersApiGetMyArticles = <
  TData = Awaited<ReturnType<typeof usersApiGetMyArticles>>,
  TError = ErrorType<Message>,
>(
  params?: UsersApiGetMyArticlesParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof usersApiGetMyArticles>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getUsersApiGetMyArticlesQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Get My Posts
 */
export const usersApiGetMyPosts = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<UserPostSchema[]>(
    { url: `/api/users/contributed-posts`, method: 'GET', signal },
    options
  );
};

export const getUsersApiGetMyPostsQueryKey = () => {
  return [`/api/users/contributed-posts`] as const;
};

export const getUsersApiGetMyPostsQueryOptions = <
  TData = Awaited<ReturnType<typeof usersApiGetMyPosts>>,
  TError = ErrorType<Message>,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof usersApiGetMyPosts>>, TError, TData>>;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersApiGetMyPostsQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersApiGetMyPosts>>> = ({ signal }) =>
    usersApiGetMyPosts(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersApiGetMyPosts>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersApiGetMyPostsQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersApiGetMyPosts>>
>;
export type UsersApiGetMyPostsQueryError = ErrorType<Message>;

/**
 * @summary Get My Posts
 */
export const useUsersApiGetMyPosts = <
  TData = Awaited<ReturnType<typeof usersApiGetMyPosts>>,
  TError = ErrorType<Message>,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof usersApiGetMyPosts>>, TError, TData>>;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getUsersApiGetMyPostsQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Get My Favorites
 */
export const usersApiGetMyFavorites = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<FavoriteItemSchema[]>(
    { url: `/api/users/my-favorites`, method: 'GET', signal },
    options
  );
};

export const getUsersApiGetMyFavoritesQueryKey = () => {
  return [`/api/users/my-favorites`] as const;
};

export const getUsersApiGetMyFavoritesQueryOptions = <
  TData = Awaited<ReturnType<typeof usersApiGetMyFavorites>>,
  TError = ErrorType<Message>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof usersApiGetMyFavorites>>, TError, TData>
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersApiGetMyFavoritesQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersApiGetMyFavorites>>> = ({ signal }) =>
    usersApiGetMyFavorites(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersApiGetMyFavorites>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersApiGetMyFavoritesQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersApiGetMyFavorites>>
>;
export type UsersApiGetMyFavoritesQueryError = ErrorType<Message>;

/**
 * @summary Get My Favorites
 */
export const useUsersApiGetMyFavorites = <
  TData = Awaited<ReturnType<typeof usersApiGetMyFavorites>>,
  TError = ErrorType<Message>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof usersApiGetMyFavorites>>, TError, TData>
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getUsersApiGetMyFavoritesQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Get Notifications
 */
export const usersApiGetNotifications = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<NotificationSchema[]>(
    { url: `/api/users/notifications`, method: 'GET', signal },
    options
  );
};

export const getUsersApiGetNotificationsQueryKey = () => {
  return [`/api/users/notifications`] as const;
};

export const getUsersApiGetNotificationsQueryOptions = <
  TData = Awaited<ReturnType<typeof usersApiGetNotifications>>,
  TError = ErrorType<Message>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof usersApiGetNotifications>>, TError, TData>
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersApiGetNotificationsQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersApiGetNotifications>>> = ({
    signal,
  }) => usersApiGetNotifications(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersApiGetNotifications>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersApiGetNotificationsQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersApiGetNotifications>>
>;
export type UsersApiGetNotificationsQueryError = ErrorType<Message>;

/**
 * @summary Get Notifications
 */
export const useUsersApiGetNotifications = <
  TData = Awaited<ReturnType<typeof usersApiGetNotifications>>,
  TError = ErrorType<Message>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof usersApiGetNotifications>>, TError, TData>
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getUsersApiGetNotificationsQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Mark Notification As Read
 */
export const usersApiMarkNotificationAsRead = (
  notificationId: number,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<Message>(
    { url: `/api/users/notifications/${notificationId}/mark-as-read`, method: 'POST' },
    options
  );
};

export const getUsersApiMarkNotificationAsReadMutationOptions = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersApiMarkNotificationAsRead>>,
    TError,
    { notificationId: number },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof usersApiMarkNotificationAsRead>>,
  TError,
  { notificationId: number },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersApiMarkNotificationAsRead>>,
    { notificationId: number }
  > = (props) => {
    const { notificationId } = props ?? {};

    return usersApiMarkNotificationAsRead(notificationId, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UsersApiMarkNotificationAsReadMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersApiMarkNotificationAsRead>>
>;

export type UsersApiMarkNotificationAsReadMutationError = ErrorType<Message>;

/**
 * @summary Mark Notification As Read
 */
export const useUsersApiMarkNotificationAsRead = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersApiMarkNotificationAsRead>>,
    TError,
    { notificationId: number },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof usersApiMarkNotificationAsRead>>,
  TError,
  { notificationId: number },
  TContext
> => {
  const mutationOptions = getUsersApiMarkNotificationAsReadMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Post Reaction
 */
export const usersApiPostReaction = (
  reactionIn: BodyType<ReactionIn>,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<Message>(
    {
      url: `/api/users/reactions`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: reactionIn,
    },
    options
  );
};

export const getUsersApiPostReactionMutationOptions = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersApiPostReaction>>,
    TError,
    { data: BodyType<ReactionIn> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof usersApiPostReaction>>,
  TError,
  { data: BodyType<ReactionIn> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersApiPostReaction>>,
    { data: BodyType<ReactionIn> }
  > = (props) => {
    const { data } = props ?? {};

    return usersApiPostReaction(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UsersApiPostReactionMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersApiPostReaction>>
>;
export type UsersApiPostReactionMutationBody = BodyType<ReactionIn>;
export type UsersApiPostReactionMutationError = ErrorType<Message>;

/**
 * @summary Post Reaction
 */
export const useUsersApiPostReaction = <TError = ErrorType<Message>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersApiPostReaction>>,
    TError,
    { data: BodyType<ReactionIn> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof usersApiPostReaction>>,
  TError,
  { data: BodyType<ReactionIn> },
  TContext
> => {
  const mutationOptions = getUsersApiPostReactionMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Get Reaction Count
 */
export const usersApiGetReactionCount = (
  contentType:
    | 'articles.article'
    | 'posts.post'
    | 'posts.comment'
    | 'articles.reviewcomment'
    | 'articles.review'
    | 'articles.discussion'
    | 'articles.discussioncomment',
  objectId: number,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ReactionCountOut>(
    { url: `/api/users/reaction_count/${contentType}/${objectId}/`, method: 'GET', signal },
    options
  );
};

export const getUsersApiGetReactionCountQueryKey = (
  contentType:
    | 'articles.article'
    | 'posts.post'
    | 'posts.comment'
    | 'articles.reviewcomment'
    | 'articles.review'
    | 'articles.discussion'
    | 'articles.discussioncomment',
  objectId: number
) => {
  return [`/api/users/reaction_count/${contentType}/${objectId}/`] as const;
};

export const getUsersApiGetReactionCountQueryOptions = <
  TData = Awaited<ReturnType<typeof usersApiGetReactionCount>>,
  TError = ErrorType<unknown>,
>(
  contentType:
    | 'articles.article'
    | 'posts.post'
    | 'posts.comment'
    | 'articles.reviewcomment'
    | 'articles.review'
    | 'articles.discussion'
    | 'articles.discussioncomment',
  objectId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof usersApiGetReactionCount>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getUsersApiGetReactionCountQueryKey(contentType, objectId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersApiGetReactionCount>>> = ({
    signal,
  }) => usersApiGetReactionCount(contentType, objectId, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!(contentType && objectId),
    ...queryOptions,
  } as UseQueryOptions<Awaited<ReturnType<typeof usersApiGetReactionCount>>, TError, TData> & {
    queryKey: QueryKey;
  };
};

export type UsersApiGetReactionCountQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersApiGetReactionCount>>
>;
export type UsersApiGetReactionCountQueryError = ErrorType<unknown>;

/**
 * @summary Get Reaction Count
 */
export const useUsersApiGetReactionCount = <
  TData = Awaited<ReturnType<typeof usersApiGetReactionCount>>,
  TError = ErrorType<unknown>,
>(
  contentType:
    | 'articles.article'
    | 'posts.post'
    | 'posts.comment'
    | 'articles.reviewcomment'
    | 'articles.review'
    | 'articles.discussion'
    | 'articles.discussioncomment',
  objectId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof usersApiGetReactionCount>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getUsersApiGetReactionCountQueryOptions(contentType, objectId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Get a list of hashtags from the database.
 * @summary Get Hashtags
 */
export const usersApiGetHashtags = (
  params?: UsersApiGetHashtagsParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<PaginatedHashtagOut>(
    { url: `/api/users/hashtags/`, method: 'GET', params, signal },
    options
  );
};

export const getUsersApiGetHashtagsQueryKey = (params?: UsersApiGetHashtagsParams) => {
  return [`/api/users/hashtags/`, ...(params ? [params] : [])] as const;
};

export const getUsersApiGetHashtagsQueryOptions = <
  TData = Awaited<ReturnType<typeof usersApiGetHashtags>>,
  TError = ErrorType<unknown>,
>(
  params?: UsersApiGetHashtagsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof usersApiGetHashtags>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersApiGetHashtagsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersApiGetHashtags>>> = ({ signal }) =>
    usersApiGetHashtags(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersApiGetHashtags>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersApiGetHashtagsQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersApiGetHashtags>>
>;
export type UsersApiGetHashtagsQueryError = ErrorType<unknown>;

/**
 * @summary Get Hashtags
 */
export const useUsersApiGetHashtags = <
  TData = Awaited<ReturnType<typeof usersApiGetHashtags>>,
  TError = ErrorType<unknown>,
>(
  params?: UsersApiGetHashtagsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof usersApiGetHashtags>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getUsersApiGetHashtagsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary List My Posts
 */
export const usersApiListMyPosts = (
  params?: UsersApiListMyPostsParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<PaginatedPostsResponse>(
    { url: `/api/users/my-posts`, method: 'GET', params, signal },
    options
  );
};

export const getUsersApiListMyPostsQueryKey = (params?: UsersApiListMyPostsParams) => {
  return [`/api/users/my-posts`, ...(params ? [params] : [])] as const;
};

export const getUsersApiListMyPostsQueryOptions = <
  TData = Awaited<ReturnType<typeof usersApiListMyPosts>>,
  TError = ErrorType<unknown>,
>(
  params?: UsersApiListMyPostsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof usersApiListMyPosts>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersApiListMyPostsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersApiListMyPosts>>> = ({ signal }) =>
    usersApiListMyPosts(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersApiListMyPosts>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersApiListMyPostsQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersApiListMyPosts>>
>;
export type UsersApiListMyPostsQueryError = ErrorType<unknown>;

/**
 * @summary List My Posts
 */
export const useUsersApiListMyPosts = <
  TData = Awaited<ReturnType<typeof usersApiListMyPosts>>,
  TError = ErrorType<unknown>,
>(
  params?: UsersApiListMyPostsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof usersApiListMyPosts>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getUsersApiListMyPostsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};
