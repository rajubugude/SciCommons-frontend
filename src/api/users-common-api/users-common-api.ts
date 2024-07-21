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
  ArticleBasicOut,
  BookmarkSchema,
  BookmarkStatusResponseSchema,
  BookmarkToggleResponseSchema,
  BookmarkToggleSchema,
  Message,
  UsersCommonApiGetRelevantArticlesParams,
} from '.././schemas';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary Toggle Bookmark
 */
export const usersCommonApiToggleBookmark = (
  bookmarkToggleSchema: BodyType<BookmarkToggleSchema>,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<BookmarkToggleResponseSchema>(
    {
      url: `/api/users/toggle-bookmark`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: bookmarkToggleSchema,
    },
    options
  );
};

export const getUsersCommonApiToggleBookmarkMutationOptions = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersCommonApiToggleBookmark>>,
    TError,
    { data: BodyType<BookmarkToggleSchema> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof usersCommonApiToggleBookmark>>,
  TError,
  { data: BodyType<BookmarkToggleSchema> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersCommonApiToggleBookmark>>,
    { data: BodyType<BookmarkToggleSchema> }
  > = (props) => {
    const { data } = props ?? {};

    return usersCommonApiToggleBookmark(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UsersCommonApiToggleBookmarkMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersCommonApiToggleBookmark>>
>;
export type UsersCommonApiToggleBookmarkMutationBody = BodyType<BookmarkToggleSchema>;
export type UsersCommonApiToggleBookmarkMutationError = ErrorType<Message>;

/**
 * @summary Toggle Bookmark
 */
export const useUsersCommonApiToggleBookmark = <
  TError = ErrorType<Message>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof usersCommonApiToggleBookmark>>,
    TError,
    { data: BodyType<BookmarkToggleSchema> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof usersCommonApiToggleBookmark>>,
  TError,
  { data: BodyType<BookmarkToggleSchema> },
  TContext
> => {
  const mutationOptions = getUsersCommonApiToggleBookmarkMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Get Bookmark Status
 */
export const usersCommonApiGetBookmarkStatus = (
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
  return customInstance<BookmarkStatusResponseSchema>(
    { url: `/api/users/bookmark-status/${contentType}/${objectId}`, method: 'GET', signal },
    options
  );
};

export const getUsersCommonApiGetBookmarkStatusQueryKey = (
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
  return [`/api/users/bookmark-status/${contentType}/${objectId}`] as const;
};

export const getUsersCommonApiGetBookmarkStatusQueryOptions = <
  TData = Awaited<ReturnType<typeof usersCommonApiGetBookmarkStatus>>,
  TError = ErrorType<Message>,
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
      UseQueryOptions<Awaited<ReturnType<typeof usersCommonApiGetBookmarkStatus>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getUsersCommonApiGetBookmarkStatusQueryKey(contentType, objectId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersCommonApiGetBookmarkStatus>>> = ({
    signal,
  }) => usersCommonApiGetBookmarkStatus(contentType, objectId, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!(contentType && objectId),
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof usersCommonApiGetBookmarkStatus>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersCommonApiGetBookmarkStatusQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersCommonApiGetBookmarkStatus>>
>;
export type UsersCommonApiGetBookmarkStatusQueryError = ErrorType<Message>;

/**
 * @summary Get Bookmark Status
 */
export const useUsersCommonApiGetBookmarkStatus = <
  TData = Awaited<ReturnType<typeof usersCommonApiGetBookmarkStatus>>,
  TError = ErrorType<Message>,
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
      UseQueryOptions<Awaited<ReturnType<typeof usersCommonApiGetBookmarkStatus>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getUsersCommonApiGetBookmarkStatusQueryOptions(
    contentType,
    objectId,
    options
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Get Bookmarks
 */
export const usersCommonApiGetBookmarks = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<BookmarkSchema[]>(
    { url: `/api/users/bookmarks`, method: 'GET', signal },
    options
  );
};

export const getUsersCommonApiGetBookmarksQueryKey = () => {
  return [`/api/users/bookmarks`] as const;
};

export const getUsersCommonApiGetBookmarksQueryOptions = <
  TData = Awaited<ReturnType<typeof usersCommonApiGetBookmarks>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof usersCommonApiGetBookmarks>>, TError, TData>
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersCommonApiGetBookmarksQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersCommonApiGetBookmarks>>> = ({
    signal,
  }) => usersCommonApiGetBookmarks(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersCommonApiGetBookmarks>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersCommonApiGetBookmarksQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersCommonApiGetBookmarks>>
>;
export type UsersCommonApiGetBookmarksQueryError = ErrorType<unknown>;

/**
 * @summary Get Bookmarks
 */
export const useUsersCommonApiGetBookmarks = <
  TData = Awaited<ReturnType<typeof usersCommonApiGetBookmarks>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof usersCommonApiGetBookmarks>>, TError, TData>
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getUsersCommonApiGetBookmarksQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Get Relevant Articles
 */
export const usersCommonApiGetRelevantArticles = (
  params: UsersCommonApiGetRelevantArticlesParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<ArticleBasicOut[]>(
    { url: `/api/users/articles/relevant-articles`, method: 'GET', params, signal },
    options
  );
};

export const getUsersCommonApiGetRelevantArticlesQueryKey = (
  params: UsersCommonApiGetRelevantArticlesParams
) => {
  return [`/api/users/articles/relevant-articles`, ...(params ? [params] : [])] as const;
};

export const getUsersCommonApiGetRelevantArticlesQueryOptions = <
  TData = Awaited<ReturnType<typeof usersCommonApiGetRelevantArticles>>,
  TError = ErrorType<unknown>,
>(
  params: UsersCommonApiGetRelevantArticlesParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof usersCommonApiGetRelevantArticles>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersCommonApiGetRelevantArticlesQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersCommonApiGetRelevantArticles>>> = ({
    signal,
  }) => usersCommonApiGetRelevantArticles(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersCommonApiGetRelevantArticles>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersCommonApiGetRelevantArticlesQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersCommonApiGetRelevantArticles>>
>;
export type UsersCommonApiGetRelevantArticlesQueryError = ErrorType<unknown>;

/**
 * @summary Get Relevant Articles
 */
export const useUsersCommonApiGetRelevantArticles = <
  TData = Awaited<ReturnType<typeof usersCommonApiGetRelevantArticles>>,
  TError = ErrorType<unknown>,
>(
  params: UsersCommonApiGetRelevantArticlesParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof usersCommonApiGetRelevantArticles>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getUsersCommonApiGetRelevantArticlesQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};
