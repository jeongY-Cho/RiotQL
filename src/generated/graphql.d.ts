import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type MatchList = {
  __typename?: 'MatchList';
  startIndex: Scalars['Int'];
  totalGames: Scalars['Int'];
  endIndex: Scalars['Int'];
  matches: Array<MatchReference>;
};

export type MatchListInput = {
  champion?: Maybe<Array<Scalars['Int']>>;
  queue?: Maybe<Array<Scalars['Int']>>;
  season?: Maybe<Array<Scalars['Int']>>;
  endTime?: Maybe<Scalars['Int']>;
  beginTime?: Maybe<Scalars['Int']>;
  endIndex?: Maybe<Scalars['Int']>;
  beginIndex?: Maybe<Scalars['Int']>;
};

export type MatchReference = {
  __typename?: 'MatchReference';
  gameId: Scalars['Int'];
  role: Scalars['String'];
  season: Scalars['Int'];
  platformId: Scalars['String'];
  champion: Scalars['Int'];
  queue: Scalars['Int'];
  lane: Scalars['String'];
  timestamp: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  info: Scalars['String'];
  summoner?: Maybe<Summoner>;
};


export type QuerySummonerArgs = {
  region: Scalars['String'];
  encryptedAccountId?: Maybe<Scalars['String']>;
  summonerName?: Maybe<Scalars['String']>;
  encryptedPUUID?: Maybe<Scalars['String']>;
  encryptedSummonerId?: Maybe<Scalars['String']>;
};

export type Summoner = {
  __typename?: 'Summoner';
  accountId: Scalars['String'];
  profileIconId: Scalars['Int'];
  revisiondate: Scalars['Int'];
  name: Scalars['String'];
  id: Scalars['String'];
  summonerLevel: Scalars['Int'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  MatchList: ResolverTypeWrapper<MatchList>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  MatchListInput: MatchListInput;
  MatchReference: ResolverTypeWrapper<MatchReference>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Query: ResolverTypeWrapper<{}>;
  Summoner: ResolverTypeWrapper<Summoner>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  MatchList: MatchList;
  Int: Scalars['Int'];
  MatchListInput: MatchListInput;
  MatchReference: MatchReference;
  String: Scalars['String'];
  Query: {};
  Summoner: Summoner;
  Boolean: Scalars['Boolean'];
};

export type MatchListResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchList'] = ResolversParentTypes['MatchList']> = {
  startIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalGames?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  endIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matches?: Resolver<Array<ResolversTypes['MatchReference']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MatchReferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchReference'] = ResolversParentTypes['MatchReference']> = {
  gameId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  season?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  champion?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  queue?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lane?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  info?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summoner?: Resolver<Maybe<ResolversTypes['Summoner']>, ParentType, ContextType, RequireFields<QuerySummonerArgs, 'region'>>;
};

export type SummonerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Summoner'] = ResolversParentTypes['Summoner']> = {
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileIconId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  revisiondate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summonerLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  MatchList?: MatchListResolvers<ContextType>;
  MatchReference?: MatchReferenceResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Summoner?: SummonerResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
