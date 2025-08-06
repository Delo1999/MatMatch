
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SavedRecipe
 * 
 */
export type SavedRecipe = $Result.DefaultSelection<Prisma.$SavedRecipePayload>
/**
 * Model FavoriteRecipe
 * 
 */
export type FavoriteRecipe = $Result.DefaultSelection<Prisma.$FavoriteRecipePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedRecipe`: Exposes CRUD operations for the **SavedRecipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedRecipes
    * const savedRecipes = await prisma.savedRecipe.findMany()
    * ```
    */
  get savedRecipe(): Prisma.SavedRecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favoriteRecipe`: Exposes CRUD operations for the **FavoriteRecipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteRecipes
    * const favoriteRecipes = await prisma.favoriteRecipe.findMany()
    * ```
    */
  get favoriteRecipe(): Prisma.FavoriteRecipeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    SavedRecipe: 'SavedRecipe',
    FavoriteRecipe: 'FavoriteRecipe'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "savedRecipe" | "favoriteRecipe"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SavedRecipe: {
        payload: Prisma.$SavedRecipePayload<ExtArgs>
        fields: Prisma.SavedRecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedRecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedRecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRecipePayload>
          }
          findFirst: {
            args: Prisma.SavedRecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedRecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRecipePayload>
          }
          findMany: {
            args: Prisma.SavedRecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRecipePayload>[]
          }
          create: {
            args: Prisma.SavedRecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRecipePayload>
          }
          createMany: {
            args: Prisma.SavedRecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SavedRecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRecipePayload>
          }
          update: {
            args: Prisma.SavedRecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRecipePayload>
          }
          deleteMany: {
            args: Prisma.SavedRecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedRecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavedRecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRecipePayload>
          }
          aggregate: {
            args: Prisma.SavedRecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedRecipe>
          }
          groupBy: {
            args: Prisma.SavedRecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedRecipeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SavedRecipeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SavedRecipeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SavedRecipeCountArgs<ExtArgs>
            result: $Utils.Optional<SavedRecipeCountAggregateOutputType> | number
          }
        }
      }
      FavoriteRecipe: {
        payload: Prisma.$FavoriteRecipePayload<ExtArgs>
        fields: Prisma.FavoriteRecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteRecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteRecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipePayload>
          }
          findFirst: {
            args: Prisma.FavoriteRecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteRecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipePayload>
          }
          findMany: {
            args: Prisma.FavoriteRecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipePayload>[]
          }
          create: {
            args: Prisma.FavoriteRecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipePayload>
          }
          createMany: {
            args: Prisma.FavoriteRecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FavoriteRecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipePayload>
          }
          update: {
            args: Prisma.FavoriteRecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteRecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteRecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FavoriteRecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteRecipePayload>
          }
          aggregate: {
            args: Prisma.FavoriteRecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoriteRecipe>
          }
          groupBy: {
            args: Prisma.FavoriteRecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteRecipeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FavoriteRecipeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FavoriteRecipeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FavoriteRecipeCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteRecipeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    savedRecipe?: SavedRecipeOmit
    favoriteRecipe?: FavoriteRecipeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    savedRecipes: number
    favoriteRecipes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedRecipes?: boolean | UserCountOutputTypeCountSavedRecipesArgs
    favoriteRecipes?: boolean | UserCountOutputTypeCountFavoriteRecipesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedRecipeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteRecipeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    savedRecipes?: boolean | User$savedRecipesArgs<ExtArgs>
    favoriteRecipes?: boolean | User$favoriteRecipesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedRecipes?: boolean | User$savedRecipesArgs<ExtArgs>
    favoriteRecipes?: boolean | User$favoriteRecipesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      savedRecipes: Prisma.$SavedRecipePayload<ExtArgs>[]
      favoriteRecipes: Prisma.$FavoriteRecipePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savedRecipes<T extends User$savedRecipesArgs<ExtArgs> = {}>(args?: Subset<T, User$savedRecipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoriteRecipes<T extends User$favoriteRecipesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoriteRecipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.savedRecipes
   */
  export type User$savedRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRecipe
     */
    select?: SavedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRecipe
     */
    omit?: SavedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRecipeInclude<ExtArgs> | null
    where?: SavedRecipeWhereInput
    orderBy?: SavedRecipeOrderByWithRelationInput | SavedRecipeOrderByWithRelationInput[]
    cursor?: SavedRecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedRecipeScalarFieldEnum | SavedRecipeScalarFieldEnum[]
  }

  /**
   * User.favoriteRecipes
   */
  export type User$favoriteRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipe
     */
    omit?: FavoriteRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    where?: FavoriteRecipeWhereInput
    orderBy?: FavoriteRecipeOrderByWithRelationInput | FavoriteRecipeOrderByWithRelationInput[]
    cursor?: FavoriteRecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteRecipeScalarFieldEnum | FavoriteRecipeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SavedRecipe
   */

  export type AggregateSavedRecipe = {
    _count: SavedRecipeCountAggregateOutputType | null
    _min: SavedRecipeMinAggregateOutputType | null
    _max: SavedRecipeMaxAggregateOutputType | null
  }

  export type SavedRecipeMinAggregateOutputType = {
    id: string | null
    recipeName: string | null
    ingredientsYouHave: string | null
    missingIngredients: string | null
    fullIngredientsList: string | null
    instructions: string | null
    preparationTime: string | null
    cookingTime: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SavedRecipeMaxAggregateOutputType = {
    id: string | null
    recipeName: string | null
    ingredientsYouHave: string | null
    missingIngredients: string | null
    fullIngredientsList: string | null
    instructions: string | null
    preparationTime: string | null
    cookingTime: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SavedRecipeCountAggregateOutputType = {
    id: number
    recipeName: number
    ingredientsYouHave: number
    missingIngredients: number
    fullIngredientsList: number
    instructions: number
    preparationTime: number
    cookingTime: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SavedRecipeMinAggregateInputType = {
    id?: true
    recipeName?: true
    ingredientsYouHave?: true
    missingIngredients?: true
    fullIngredientsList?: true
    instructions?: true
    preparationTime?: true
    cookingTime?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SavedRecipeMaxAggregateInputType = {
    id?: true
    recipeName?: true
    ingredientsYouHave?: true
    missingIngredients?: true
    fullIngredientsList?: true
    instructions?: true
    preparationTime?: true
    cookingTime?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SavedRecipeCountAggregateInputType = {
    id?: true
    recipeName?: true
    ingredientsYouHave?: true
    missingIngredients?: true
    fullIngredientsList?: true
    instructions?: true
    preparationTime?: true
    cookingTime?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SavedRecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedRecipe to aggregate.
     */
    where?: SavedRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedRecipes to fetch.
     */
    orderBy?: SavedRecipeOrderByWithRelationInput | SavedRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedRecipes
    **/
    _count?: true | SavedRecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedRecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedRecipeMaxAggregateInputType
  }

  export type GetSavedRecipeAggregateType<T extends SavedRecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedRecipe[P]>
      : GetScalarType<T[P], AggregateSavedRecipe[P]>
  }




  export type SavedRecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedRecipeWhereInput
    orderBy?: SavedRecipeOrderByWithAggregationInput | SavedRecipeOrderByWithAggregationInput[]
    by: SavedRecipeScalarFieldEnum[] | SavedRecipeScalarFieldEnum
    having?: SavedRecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedRecipeCountAggregateInputType | true
    _min?: SavedRecipeMinAggregateInputType
    _max?: SavedRecipeMaxAggregateInputType
  }

  export type SavedRecipeGroupByOutputType = {
    id: string
    recipeName: string
    ingredientsYouHave: string
    missingIngredients: string
    fullIngredientsList: string
    instructions: string
    preparationTime: string
    cookingTime: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: SavedRecipeCountAggregateOutputType | null
    _min: SavedRecipeMinAggregateOutputType | null
    _max: SavedRecipeMaxAggregateOutputType | null
  }

  type GetSavedRecipeGroupByPayload<T extends SavedRecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedRecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedRecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedRecipeGroupByOutputType[P]>
            : GetScalarType<T[P], SavedRecipeGroupByOutputType[P]>
        }
      >
    >


  export type SavedRecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeName?: boolean
    ingredientsYouHave?: boolean
    missingIngredients?: boolean
    fullIngredientsList?: boolean
    instructions?: boolean
    preparationTime?: boolean
    cookingTime?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedRecipe"]>



  export type SavedRecipeSelectScalar = {
    id?: boolean
    recipeName?: boolean
    ingredientsYouHave?: boolean
    missingIngredients?: boolean
    fullIngredientsList?: boolean
    instructions?: boolean
    preparationTime?: boolean
    cookingTime?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SavedRecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipeName" | "ingredientsYouHave" | "missingIngredients" | "fullIngredientsList" | "instructions" | "preparationTime" | "cookingTime" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["savedRecipe"]>
  export type SavedRecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SavedRecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedRecipe"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipeName: string
      ingredientsYouHave: string
      missingIngredients: string
      fullIngredientsList: string
      instructions: string
      preparationTime: string
      cookingTime: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["savedRecipe"]>
    composites: {}
  }

  type SavedRecipeGetPayload<S extends boolean | null | undefined | SavedRecipeDefaultArgs> = $Result.GetResult<Prisma.$SavedRecipePayload, S>

  type SavedRecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedRecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedRecipeCountAggregateInputType | true
    }

  export interface SavedRecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedRecipe'], meta: { name: 'SavedRecipe' } }
    /**
     * Find zero or one SavedRecipe that matches the filter.
     * @param {SavedRecipeFindUniqueArgs} args - Arguments to find a SavedRecipe
     * @example
     * // Get one SavedRecipe
     * const savedRecipe = await prisma.savedRecipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedRecipeFindUniqueArgs>(args: SelectSubset<T, SavedRecipeFindUniqueArgs<ExtArgs>>): Prisma__SavedRecipeClient<$Result.GetResult<Prisma.$SavedRecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedRecipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedRecipeFindUniqueOrThrowArgs} args - Arguments to find a SavedRecipe
     * @example
     * // Get one SavedRecipe
     * const savedRecipe = await prisma.savedRecipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedRecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedRecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedRecipeClient<$Result.GetResult<Prisma.$SavedRecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedRecipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRecipeFindFirstArgs} args - Arguments to find a SavedRecipe
     * @example
     * // Get one SavedRecipe
     * const savedRecipe = await prisma.savedRecipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedRecipeFindFirstArgs>(args?: SelectSubset<T, SavedRecipeFindFirstArgs<ExtArgs>>): Prisma__SavedRecipeClient<$Result.GetResult<Prisma.$SavedRecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedRecipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRecipeFindFirstOrThrowArgs} args - Arguments to find a SavedRecipe
     * @example
     * // Get one SavedRecipe
     * const savedRecipe = await prisma.savedRecipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedRecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedRecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedRecipeClient<$Result.GetResult<Prisma.$SavedRecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedRecipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedRecipes
     * const savedRecipes = await prisma.savedRecipe.findMany()
     * 
     * // Get first 10 SavedRecipes
     * const savedRecipes = await prisma.savedRecipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedRecipeWithIdOnly = await prisma.savedRecipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedRecipeFindManyArgs>(args?: SelectSubset<T, SavedRecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedRecipe.
     * @param {SavedRecipeCreateArgs} args - Arguments to create a SavedRecipe.
     * @example
     * // Create one SavedRecipe
     * const SavedRecipe = await prisma.savedRecipe.create({
     *   data: {
     *     // ... data to create a SavedRecipe
     *   }
     * })
     * 
     */
    create<T extends SavedRecipeCreateArgs>(args: SelectSubset<T, SavedRecipeCreateArgs<ExtArgs>>): Prisma__SavedRecipeClient<$Result.GetResult<Prisma.$SavedRecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedRecipes.
     * @param {SavedRecipeCreateManyArgs} args - Arguments to create many SavedRecipes.
     * @example
     * // Create many SavedRecipes
     * const savedRecipe = await prisma.savedRecipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedRecipeCreateManyArgs>(args?: SelectSubset<T, SavedRecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SavedRecipe.
     * @param {SavedRecipeDeleteArgs} args - Arguments to delete one SavedRecipe.
     * @example
     * // Delete one SavedRecipe
     * const SavedRecipe = await prisma.savedRecipe.delete({
     *   where: {
     *     // ... filter to delete one SavedRecipe
     *   }
     * })
     * 
     */
    delete<T extends SavedRecipeDeleteArgs>(args: SelectSubset<T, SavedRecipeDeleteArgs<ExtArgs>>): Prisma__SavedRecipeClient<$Result.GetResult<Prisma.$SavedRecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedRecipe.
     * @param {SavedRecipeUpdateArgs} args - Arguments to update one SavedRecipe.
     * @example
     * // Update one SavedRecipe
     * const savedRecipe = await prisma.savedRecipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedRecipeUpdateArgs>(args: SelectSubset<T, SavedRecipeUpdateArgs<ExtArgs>>): Prisma__SavedRecipeClient<$Result.GetResult<Prisma.$SavedRecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedRecipes.
     * @param {SavedRecipeDeleteManyArgs} args - Arguments to filter SavedRecipes to delete.
     * @example
     * // Delete a few SavedRecipes
     * const { count } = await prisma.savedRecipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedRecipeDeleteManyArgs>(args?: SelectSubset<T, SavedRecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedRecipes
     * const savedRecipe = await prisma.savedRecipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedRecipeUpdateManyArgs>(args: SelectSubset<T, SavedRecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavedRecipe.
     * @param {SavedRecipeUpsertArgs} args - Arguments to update or create a SavedRecipe.
     * @example
     * // Update or create a SavedRecipe
     * const savedRecipe = await prisma.savedRecipe.upsert({
     *   create: {
     *     // ... data to create a SavedRecipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedRecipe we want to update
     *   }
     * })
     */
    upsert<T extends SavedRecipeUpsertArgs>(args: SelectSubset<T, SavedRecipeUpsertArgs<ExtArgs>>): Prisma__SavedRecipeClient<$Result.GetResult<Prisma.$SavedRecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedRecipes that matches the filter.
     * @param {SavedRecipeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const savedRecipe = await prisma.savedRecipe.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SavedRecipeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SavedRecipe.
     * @param {SavedRecipeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const savedRecipe = await prisma.savedRecipe.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SavedRecipeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SavedRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRecipeCountArgs} args - Arguments to filter SavedRecipes to count.
     * @example
     * // Count the number of SavedRecipes
     * const count = await prisma.savedRecipe.count({
     *   where: {
     *     // ... the filter for the SavedRecipes we want to count
     *   }
     * })
    **/
    count<T extends SavedRecipeCountArgs>(
      args?: Subset<T, SavedRecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedRecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedRecipeAggregateArgs>(args: Subset<T, SavedRecipeAggregateArgs>): Prisma.PrismaPromise<GetSavedRecipeAggregateType<T>>

    /**
     * Group by SavedRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedRecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedRecipeGroupByArgs['orderBy'] }
        : { orderBy?: SavedRecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedRecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedRecipe model
   */
  readonly fields: SavedRecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedRecipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedRecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedRecipe model
   */
  interface SavedRecipeFieldRefs {
    readonly id: FieldRef<"SavedRecipe", 'String'>
    readonly recipeName: FieldRef<"SavedRecipe", 'String'>
    readonly ingredientsYouHave: FieldRef<"SavedRecipe", 'String'>
    readonly missingIngredients: FieldRef<"SavedRecipe", 'String'>
    readonly fullIngredientsList: FieldRef<"SavedRecipe", 'String'>
    readonly instructions: FieldRef<"SavedRecipe", 'String'>
    readonly preparationTime: FieldRef<"SavedRecipe", 'String'>
    readonly cookingTime: FieldRef<"SavedRecipe", 'String'>
    readonly userId: FieldRef<"SavedRecipe", 'String'>
    readonly createdAt: FieldRef<"SavedRecipe", 'DateTime'>
    readonly updatedAt: FieldRef<"SavedRecipe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedRecipe findUnique
   */
  export type SavedRecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRecipe
     */
    select?: SavedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRecipe
     */
    omit?: SavedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRecipeInclude<ExtArgs> | null
    /**
     * Filter, which SavedRecipe to fetch.
     */
    where: SavedRecipeWhereUniqueInput
  }

  /**
   * SavedRecipe findUniqueOrThrow
   */
  export type SavedRecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRecipe
     */
    select?: SavedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRecipe
     */
    omit?: SavedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRecipeInclude<ExtArgs> | null
    /**
     * Filter, which SavedRecipe to fetch.
     */
    where: SavedRecipeWhereUniqueInput
  }

  /**
   * SavedRecipe findFirst
   */
  export type SavedRecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRecipe
     */
    select?: SavedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRecipe
     */
    omit?: SavedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRecipeInclude<ExtArgs> | null
    /**
     * Filter, which SavedRecipe to fetch.
     */
    where?: SavedRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedRecipes to fetch.
     */
    orderBy?: SavedRecipeOrderByWithRelationInput | SavedRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedRecipes.
     */
    cursor?: SavedRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedRecipes.
     */
    distinct?: SavedRecipeScalarFieldEnum | SavedRecipeScalarFieldEnum[]
  }

  /**
   * SavedRecipe findFirstOrThrow
   */
  export type SavedRecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRecipe
     */
    select?: SavedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRecipe
     */
    omit?: SavedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRecipeInclude<ExtArgs> | null
    /**
     * Filter, which SavedRecipe to fetch.
     */
    where?: SavedRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedRecipes to fetch.
     */
    orderBy?: SavedRecipeOrderByWithRelationInput | SavedRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedRecipes.
     */
    cursor?: SavedRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedRecipes.
     */
    distinct?: SavedRecipeScalarFieldEnum | SavedRecipeScalarFieldEnum[]
  }

  /**
   * SavedRecipe findMany
   */
  export type SavedRecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRecipe
     */
    select?: SavedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRecipe
     */
    omit?: SavedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRecipeInclude<ExtArgs> | null
    /**
     * Filter, which SavedRecipes to fetch.
     */
    where?: SavedRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedRecipes to fetch.
     */
    orderBy?: SavedRecipeOrderByWithRelationInput | SavedRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedRecipes.
     */
    cursor?: SavedRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedRecipes.
     */
    skip?: number
    distinct?: SavedRecipeScalarFieldEnum | SavedRecipeScalarFieldEnum[]
  }

  /**
   * SavedRecipe create
   */
  export type SavedRecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRecipe
     */
    select?: SavedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRecipe
     */
    omit?: SavedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedRecipe.
     */
    data: XOR<SavedRecipeCreateInput, SavedRecipeUncheckedCreateInput>
  }

  /**
   * SavedRecipe createMany
   */
  export type SavedRecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedRecipes.
     */
    data: SavedRecipeCreateManyInput | SavedRecipeCreateManyInput[]
  }

  /**
   * SavedRecipe update
   */
  export type SavedRecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRecipe
     */
    select?: SavedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRecipe
     */
    omit?: SavedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedRecipe.
     */
    data: XOR<SavedRecipeUpdateInput, SavedRecipeUncheckedUpdateInput>
    /**
     * Choose, which SavedRecipe to update.
     */
    where: SavedRecipeWhereUniqueInput
  }

  /**
   * SavedRecipe updateMany
   */
  export type SavedRecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedRecipes.
     */
    data: XOR<SavedRecipeUpdateManyMutationInput, SavedRecipeUncheckedUpdateManyInput>
    /**
     * Filter which SavedRecipes to update
     */
    where?: SavedRecipeWhereInput
    /**
     * Limit how many SavedRecipes to update.
     */
    limit?: number
  }

  /**
   * SavedRecipe upsert
   */
  export type SavedRecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRecipe
     */
    select?: SavedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRecipe
     */
    omit?: SavedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedRecipe to update in case it exists.
     */
    where: SavedRecipeWhereUniqueInput
    /**
     * In case the SavedRecipe found by the `where` argument doesn't exist, create a new SavedRecipe with this data.
     */
    create: XOR<SavedRecipeCreateInput, SavedRecipeUncheckedCreateInput>
    /**
     * In case the SavedRecipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedRecipeUpdateInput, SavedRecipeUncheckedUpdateInput>
  }

  /**
   * SavedRecipe delete
   */
  export type SavedRecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRecipe
     */
    select?: SavedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRecipe
     */
    omit?: SavedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRecipeInclude<ExtArgs> | null
    /**
     * Filter which SavedRecipe to delete.
     */
    where: SavedRecipeWhereUniqueInput
  }

  /**
   * SavedRecipe deleteMany
   */
  export type SavedRecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedRecipes to delete
     */
    where?: SavedRecipeWhereInput
    /**
     * Limit how many SavedRecipes to delete.
     */
    limit?: number
  }

  /**
   * SavedRecipe findRaw
   */
  export type SavedRecipeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SavedRecipe aggregateRaw
   */
  export type SavedRecipeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SavedRecipe without action
   */
  export type SavedRecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRecipe
     */
    select?: SavedRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRecipe
     */
    omit?: SavedRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRecipeInclude<ExtArgs> | null
  }


  /**
   * Model FavoriteRecipe
   */

  export type AggregateFavoriteRecipe = {
    _count: FavoriteRecipeCountAggregateOutputType | null
    _min: FavoriteRecipeMinAggregateOutputType | null
    _max: FavoriteRecipeMaxAggregateOutputType | null
  }

  export type FavoriteRecipeMinAggregateOutputType = {
    id: string | null
    recipeName: string | null
    ingredientsYouHave: string | null
    missingIngredients: string | null
    fullIngredientsList: string | null
    instructions: string | null
    preparationTime: string | null
    cookingTime: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FavoriteRecipeMaxAggregateOutputType = {
    id: string | null
    recipeName: string | null
    ingredientsYouHave: string | null
    missingIngredients: string | null
    fullIngredientsList: string | null
    instructions: string | null
    preparationTime: string | null
    cookingTime: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FavoriteRecipeCountAggregateOutputType = {
    id: number
    recipeName: number
    ingredientsYouHave: number
    missingIngredients: number
    fullIngredientsList: number
    instructions: number
    preparationTime: number
    cookingTime: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FavoriteRecipeMinAggregateInputType = {
    id?: true
    recipeName?: true
    ingredientsYouHave?: true
    missingIngredients?: true
    fullIngredientsList?: true
    instructions?: true
    preparationTime?: true
    cookingTime?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FavoriteRecipeMaxAggregateInputType = {
    id?: true
    recipeName?: true
    ingredientsYouHave?: true
    missingIngredients?: true
    fullIngredientsList?: true
    instructions?: true
    preparationTime?: true
    cookingTime?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FavoriteRecipeCountAggregateInputType = {
    id?: true
    recipeName?: true
    ingredientsYouHave?: true
    missingIngredients?: true
    fullIngredientsList?: true
    instructions?: true
    preparationTime?: true
    cookingTime?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FavoriteRecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteRecipe to aggregate.
     */
    where?: FavoriteRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteRecipes to fetch.
     */
    orderBy?: FavoriteRecipeOrderByWithRelationInput | FavoriteRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteRecipes
    **/
    _count?: true | FavoriteRecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteRecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteRecipeMaxAggregateInputType
  }

  export type GetFavoriteRecipeAggregateType<T extends FavoriteRecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteRecipe[P]>
      : GetScalarType<T[P], AggregateFavoriteRecipe[P]>
  }




  export type FavoriteRecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteRecipeWhereInput
    orderBy?: FavoriteRecipeOrderByWithAggregationInput | FavoriteRecipeOrderByWithAggregationInput[]
    by: FavoriteRecipeScalarFieldEnum[] | FavoriteRecipeScalarFieldEnum
    having?: FavoriteRecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteRecipeCountAggregateInputType | true
    _min?: FavoriteRecipeMinAggregateInputType
    _max?: FavoriteRecipeMaxAggregateInputType
  }

  export type FavoriteRecipeGroupByOutputType = {
    id: string
    recipeName: string
    ingredientsYouHave: string
    missingIngredients: string
    fullIngredientsList: string
    instructions: string
    preparationTime: string
    cookingTime: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: FavoriteRecipeCountAggregateOutputType | null
    _min: FavoriteRecipeMinAggregateOutputType | null
    _max: FavoriteRecipeMaxAggregateOutputType | null
  }

  type GetFavoriteRecipeGroupByPayload<T extends FavoriteRecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteRecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteRecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteRecipeGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteRecipeGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteRecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeName?: boolean
    ingredientsYouHave?: boolean
    missingIngredients?: boolean
    fullIngredientsList?: boolean
    instructions?: boolean
    preparationTime?: boolean
    cookingTime?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteRecipe"]>



  export type FavoriteRecipeSelectScalar = {
    id?: boolean
    recipeName?: boolean
    ingredientsYouHave?: boolean
    missingIngredients?: boolean
    fullIngredientsList?: boolean
    instructions?: boolean
    preparationTime?: boolean
    cookingTime?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FavoriteRecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipeName" | "ingredientsYouHave" | "missingIngredients" | "fullIngredientsList" | "instructions" | "preparationTime" | "cookingTime" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["favoriteRecipe"]>
  export type FavoriteRecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FavoriteRecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoriteRecipe"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipeName: string
      ingredientsYouHave: string
      missingIngredients: string
      fullIngredientsList: string
      instructions: string
      preparationTime: string
      cookingTime: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["favoriteRecipe"]>
    composites: {}
  }

  type FavoriteRecipeGetPayload<S extends boolean | null | undefined | FavoriteRecipeDefaultArgs> = $Result.GetResult<Prisma.$FavoriteRecipePayload, S>

  type FavoriteRecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteRecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteRecipeCountAggregateInputType | true
    }

  export interface FavoriteRecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteRecipe'], meta: { name: 'FavoriteRecipe' } }
    /**
     * Find zero or one FavoriteRecipe that matches the filter.
     * @param {FavoriteRecipeFindUniqueArgs} args - Arguments to find a FavoriteRecipe
     * @example
     * // Get one FavoriteRecipe
     * const favoriteRecipe = await prisma.favoriteRecipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteRecipeFindUniqueArgs>(args: SelectSubset<T, FavoriteRecipeFindUniqueArgs<ExtArgs>>): Prisma__FavoriteRecipeClient<$Result.GetResult<Prisma.$FavoriteRecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavoriteRecipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteRecipeFindUniqueOrThrowArgs} args - Arguments to find a FavoriteRecipe
     * @example
     * // Get one FavoriteRecipe
     * const favoriteRecipe = await prisma.favoriteRecipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteRecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteRecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteRecipeClient<$Result.GetResult<Prisma.$FavoriteRecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteRecipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipeFindFirstArgs} args - Arguments to find a FavoriteRecipe
     * @example
     * // Get one FavoriteRecipe
     * const favoriteRecipe = await prisma.favoriteRecipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteRecipeFindFirstArgs>(args?: SelectSubset<T, FavoriteRecipeFindFirstArgs<ExtArgs>>): Prisma__FavoriteRecipeClient<$Result.GetResult<Prisma.$FavoriteRecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteRecipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipeFindFirstOrThrowArgs} args - Arguments to find a FavoriteRecipe
     * @example
     * // Get one FavoriteRecipe
     * const favoriteRecipe = await prisma.favoriteRecipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteRecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteRecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteRecipeClient<$Result.GetResult<Prisma.$FavoriteRecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavoriteRecipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteRecipes
     * const favoriteRecipes = await prisma.favoriteRecipe.findMany()
     * 
     * // Get first 10 FavoriteRecipes
     * const favoriteRecipes = await prisma.favoriteRecipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteRecipeWithIdOnly = await prisma.favoriteRecipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteRecipeFindManyArgs>(args?: SelectSubset<T, FavoriteRecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteRecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavoriteRecipe.
     * @param {FavoriteRecipeCreateArgs} args - Arguments to create a FavoriteRecipe.
     * @example
     * // Create one FavoriteRecipe
     * const FavoriteRecipe = await prisma.favoriteRecipe.create({
     *   data: {
     *     // ... data to create a FavoriteRecipe
     *   }
     * })
     * 
     */
    create<T extends FavoriteRecipeCreateArgs>(args: SelectSubset<T, FavoriteRecipeCreateArgs<ExtArgs>>): Prisma__FavoriteRecipeClient<$Result.GetResult<Prisma.$FavoriteRecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavoriteRecipes.
     * @param {FavoriteRecipeCreateManyArgs} args - Arguments to create many FavoriteRecipes.
     * @example
     * // Create many FavoriteRecipes
     * const favoriteRecipe = await prisma.favoriteRecipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteRecipeCreateManyArgs>(args?: SelectSubset<T, FavoriteRecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FavoriteRecipe.
     * @param {FavoriteRecipeDeleteArgs} args - Arguments to delete one FavoriteRecipe.
     * @example
     * // Delete one FavoriteRecipe
     * const FavoriteRecipe = await prisma.favoriteRecipe.delete({
     *   where: {
     *     // ... filter to delete one FavoriteRecipe
     *   }
     * })
     * 
     */
    delete<T extends FavoriteRecipeDeleteArgs>(args: SelectSubset<T, FavoriteRecipeDeleteArgs<ExtArgs>>): Prisma__FavoriteRecipeClient<$Result.GetResult<Prisma.$FavoriteRecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavoriteRecipe.
     * @param {FavoriteRecipeUpdateArgs} args - Arguments to update one FavoriteRecipe.
     * @example
     * // Update one FavoriteRecipe
     * const favoriteRecipe = await prisma.favoriteRecipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteRecipeUpdateArgs>(args: SelectSubset<T, FavoriteRecipeUpdateArgs<ExtArgs>>): Prisma__FavoriteRecipeClient<$Result.GetResult<Prisma.$FavoriteRecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavoriteRecipes.
     * @param {FavoriteRecipeDeleteManyArgs} args - Arguments to filter FavoriteRecipes to delete.
     * @example
     * // Delete a few FavoriteRecipes
     * const { count } = await prisma.favoriteRecipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteRecipeDeleteManyArgs>(args?: SelectSubset<T, FavoriteRecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteRecipes
     * const favoriteRecipe = await prisma.favoriteRecipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteRecipeUpdateManyArgs>(args: SelectSubset<T, FavoriteRecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FavoriteRecipe.
     * @param {FavoriteRecipeUpsertArgs} args - Arguments to update or create a FavoriteRecipe.
     * @example
     * // Update or create a FavoriteRecipe
     * const favoriteRecipe = await prisma.favoriteRecipe.upsert({
     *   create: {
     *     // ... data to create a FavoriteRecipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteRecipe we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteRecipeUpsertArgs>(args: SelectSubset<T, FavoriteRecipeUpsertArgs<ExtArgs>>): Prisma__FavoriteRecipeClient<$Result.GetResult<Prisma.$FavoriteRecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavoriteRecipes that matches the filter.
     * @param {FavoriteRecipeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const favoriteRecipe = await prisma.favoriteRecipe.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FavoriteRecipeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FavoriteRecipe.
     * @param {FavoriteRecipeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const favoriteRecipe = await prisma.favoriteRecipe.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FavoriteRecipeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of FavoriteRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipeCountArgs} args - Arguments to filter FavoriteRecipes to count.
     * @example
     * // Count the number of FavoriteRecipes
     * const count = await prisma.favoriteRecipe.count({
     *   where: {
     *     // ... the filter for the FavoriteRecipes we want to count
     *   }
     * })
    **/
    count<T extends FavoriteRecipeCountArgs>(
      args?: Subset<T, FavoriteRecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteRecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteRecipeAggregateArgs>(args: Subset<T, FavoriteRecipeAggregateArgs>): Prisma.PrismaPromise<GetFavoriteRecipeAggregateType<T>>

    /**
     * Group by FavoriteRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteRecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteRecipeGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteRecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteRecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoriteRecipe model
   */
  readonly fields: FavoriteRecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteRecipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteRecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FavoriteRecipe model
   */
  interface FavoriteRecipeFieldRefs {
    readonly id: FieldRef<"FavoriteRecipe", 'String'>
    readonly recipeName: FieldRef<"FavoriteRecipe", 'String'>
    readonly ingredientsYouHave: FieldRef<"FavoriteRecipe", 'String'>
    readonly missingIngredients: FieldRef<"FavoriteRecipe", 'String'>
    readonly fullIngredientsList: FieldRef<"FavoriteRecipe", 'String'>
    readonly instructions: FieldRef<"FavoriteRecipe", 'String'>
    readonly preparationTime: FieldRef<"FavoriteRecipe", 'String'>
    readonly cookingTime: FieldRef<"FavoriteRecipe", 'String'>
    readonly userId: FieldRef<"FavoriteRecipe", 'String'>
    readonly createdAt: FieldRef<"FavoriteRecipe", 'DateTime'>
    readonly updatedAt: FieldRef<"FavoriteRecipe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FavoriteRecipe findUnique
   */
  export type FavoriteRecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipe
     */
    omit?: FavoriteRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRecipe to fetch.
     */
    where: FavoriteRecipeWhereUniqueInput
  }

  /**
   * FavoriteRecipe findUniqueOrThrow
   */
  export type FavoriteRecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipe
     */
    omit?: FavoriteRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRecipe to fetch.
     */
    where: FavoriteRecipeWhereUniqueInput
  }

  /**
   * FavoriteRecipe findFirst
   */
  export type FavoriteRecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipe
     */
    omit?: FavoriteRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRecipe to fetch.
     */
    where?: FavoriteRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteRecipes to fetch.
     */
    orderBy?: FavoriteRecipeOrderByWithRelationInput | FavoriteRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteRecipes.
     */
    cursor?: FavoriteRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteRecipes.
     */
    distinct?: FavoriteRecipeScalarFieldEnum | FavoriteRecipeScalarFieldEnum[]
  }

  /**
   * FavoriteRecipe findFirstOrThrow
   */
  export type FavoriteRecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipe
     */
    omit?: FavoriteRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRecipe to fetch.
     */
    where?: FavoriteRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteRecipes to fetch.
     */
    orderBy?: FavoriteRecipeOrderByWithRelationInput | FavoriteRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteRecipes.
     */
    cursor?: FavoriteRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteRecipes.
     */
    distinct?: FavoriteRecipeScalarFieldEnum | FavoriteRecipeScalarFieldEnum[]
  }

  /**
   * FavoriteRecipe findMany
   */
  export type FavoriteRecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipe
     */
    omit?: FavoriteRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRecipes to fetch.
     */
    where?: FavoriteRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteRecipes to fetch.
     */
    orderBy?: FavoriteRecipeOrderByWithRelationInput | FavoriteRecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteRecipes.
     */
    cursor?: FavoriteRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteRecipes.
     */
    skip?: number
    distinct?: FavoriteRecipeScalarFieldEnum | FavoriteRecipeScalarFieldEnum[]
  }

  /**
   * FavoriteRecipe create
   */
  export type FavoriteRecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipe
     */
    omit?: FavoriteRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoriteRecipe.
     */
    data: XOR<FavoriteRecipeCreateInput, FavoriteRecipeUncheckedCreateInput>
  }

  /**
   * FavoriteRecipe createMany
   */
  export type FavoriteRecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoriteRecipes.
     */
    data: FavoriteRecipeCreateManyInput | FavoriteRecipeCreateManyInput[]
  }

  /**
   * FavoriteRecipe update
   */
  export type FavoriteRecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipe
     */
    omit?: FavoriteRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoriteRecipe.
     */
    data: XOR<FavoriteRecipeUpdateInput, FavoriteRecipeUncheckedUpdateInput>
    /**
     * Choose, which FavoriteRecipe to update.
     */
    where: FavoriteRecipeWhereUniqueInput
  }

  /**
   * FavoriteRecipe updateMany
   */
  export type FavoriteRecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteRecipes.
     */
    data: XOR<FavoriteRecipeUpdateManyMutationInput, FavoriteRecipeUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteRecipes to update
     */
    where?: FavoriteRecipeWhereInput
    /**
     * Limit how many FavoriteRecipes to update.
     */
    limit?: number
  }

  /**
   * FavoriteRecipe upsert
   */
  export type FavoriteRecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipe
     */
    omit?: FavoriteRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoriteRecipe to update in case it exists.
     */
    where: FavoriteRecipeWhereUniqueInput
    /**
     * In case the FavoriteRecipe found by the `where` argument doesn't exist, create a new FavoriteRecipe with this data.
     */
    create: XOR<FavoriteRecipeCreateInput, FavoriteRecipeUncheckedCreateInput>
    /**
     * In case the FavoriteRecipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteRecipeUpdateInput, FavoriteRecipeUncheckedUpdateInput>
  }

  /**
   * FavoriteRecipe delete
   */
  export type FavoriteRecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipe
     */
    omit?: FavoriteRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * Filter which FavoriteRecipe to delete.
     */
    where: FavoriteRecipeWhereUniqueInput
  }

  /**
   * FavoriteRecipe deleteMany
   */
  export type FavoriteRecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteRecipes to delete
     */
    where?: FavoriteRecipeWhereInput
    /**
     * Limit how many FavoriteRecipes to delete.
     */
    limit?: number
  }

  /**
   * FavoriteRecipe findRaw
   */
  export type FavoriteRecipeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FavoriteRecipe aggregateRaw
   */
  export type FavoriteRecipeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FavoriteRecipe without action
   */
  export type FavoriteRecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteRecipe
     */
    omit?: FavoriteRecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SavedRecipeScalarFieldEnum: {
    id: 'id',
    recipeName: 'recipeName',
    ingredientsYouHave: 'ingredientsYouHave',
    missingIngredients: 'missingIngredients',
    fullIngredientsList: 'fullIngredientsList',
    instructions: 'instructions',
    preparationTime: 'preparationTime',
    cookingTime: 'cookingTime',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SavedRecipeScalarFieldEnum = (typeof SavedRecipeScalarFieldEnum)[keyof typeof SavedRecipeScalarFieldEnum]


  export const FavoriteRecipeScalarFieldEnum: {
    id: 'id',
    recipeName: 'recipeName',
    ingredientsYouHave: 'ingredientsYouHave',
    missingIngredients: 'missingIngredients',
    fullIngredientsList: 'fullIngredientsList',
    instructions: 'instructions',
    preparationTime: 'preparationTime',
    cookingTime: 'cookingTime',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FavoriteRecipeScalarFieldEnum = (typeof FavoriteRecipeScalarFieldEnum)[keyof typeof FavoriteRecipeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    savedRecipes?: SavedRecipeListRelationFilter
    favoriteRecipes?: FavoriteRecipeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    savedRecipes?: SavedRecipeOrderByRelationAggregateInput
    favoriteRecipes?: FavoriteRecipeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    savedRecipes?: SavedRecipeListRelationFilter
    favoriteRecipes?: FavoriteRecipeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SavedRecipeWhereInput = {
    AND?: SavedRecipeWhereInput | SavedRecipeWhereInput[]
    OR?: SavedRecipeWhereInput[]
    NOT?: SavedRecipeWhereInput | SavedRecipeWhereInput[]
    id?: StringFilter<"SavedRecipe"> | string
    recipeName?: StringFilter<"SavedRecipe"> | string
    ingredientsYouHave?: StringFilter<"SavedRecipe"> | string
    missingIngredients?: StringFilter<"SavedRecipe"> | string
    fullIngredientsList?: StringFilter<"SavedRecipe"> | string
    instructions?: StringFilter<"SavedRecipe"> | string
    preparationTime?: StringFilter<"SavedRecipe"> | string
    cookingTime?: StringFilter<"SavedRecipe"> | string
    userId?: StringFilter<"SavedRecipe"> | string
    createdAt?: DateTimeFilter<"SavedRecipe"> | Date | string
    updatedAt?: DateTimeFilter<"SavedRecipe"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SavedRecipeOrderByWithRelationInput = {
    id?: SortOrder
    recipeName?: SortOrder
    ingredientsYouHave?: SortOrder
    missingIngredients?: SortOrder
    fullIngredientsList?: SortOrder
    instructions?: SortOrder
    preparationTime?: SortOrder
    cookingTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SavedRecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    recipeName_userId?: SavedRecipeRecipeNameUserIdCompoundUniqueInput
    AND?: SavedRecipeWhereInput | SavedRecipeWhereInput[]
    OR?: SavedRecipeWhereInput[]
    NOT?: SavedRecipeWhereInput | SavedRecipeWhereInput[]
    recipeName?: StringFilter<"SavedRecipe"> | string
    ingredientsYouHave?: StringFilter<"SavedRecipe"> | string
    missingIngredients?: StringFilter<"SavedRecipe"> | string
    fullIngredientsList?: StringFilter<"SavedRecipe"> | string
    instructions?: StringFilter<"SavedRecipe"> | string
    preparationTime?: StringFilter<"SavedRecipe"> | string
    cookingTime?: StringFilter<"SavedRecipe"> | string
    userId?: StringFilter<"SavedRecipe"> | string
    createdAt?: DateTimeFilter<"SavedRecipe"> | Date | string
    updatedAt?: DateTimeFilter<"SavedRecipe"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "recipeName_userId">

  export type SavedRecipeOrderByWithAggregationInput = {
    id?: SortOrder
    recipeName?: SortOrder
    ingredientsYouHave?: SortOrder
    missingIngredients?: SortOrder
    fullIngredientsList?: SortOrder
    instructions?: SortOrder
    preparationTime?: SortOrder
    cookingTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SavedRecipeCountOrderByAggregateInput
    _max?: SavedRecipeMaxOrderByAggregateInput
    _min?: SavedRecipeMinOrderByAggregateInput
  }

  export type SavedRecipeScalarWhereWithAggregatesInput = {
    AND?: SavedRecipeScalarWhereWithAggregatesInput | SavedRecipeScalarWhereWithAggregatesInput[]
    OR?: SavedRecipeScalarWhereWithAggregatesInput[]
    NOT?: SavedRecipeScalarWhereWithAggregatesInput | SavedRecipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedRecipe"> | string
    recipeName?: StringWithAggregatesFilter<"SavedRecipe"> | string
    ingredientsYouHave?: StringWithAggregatesFilter<"SavedRecipe"> | string
    missingIngredients?: StringWithAggregatesFilter<"SavedRecipe"> | string
    fullIngredientsList?: StringWithAggregatesFilter<"SavedRecipe"> | string
    instructions?: StringWithAggregatesFilter<"SavedRecipe"> | string
    preparationTime?: StringWithAggregatesFilter<"SavedRecipe"> | string
    cookingTime?: StringWithAggregatesFilter<"SavedRecipe"> | string
    userId?: StringWithAggregatesFilter<"SavedRecipe"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedRecipe"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SavedRecipe"> | Date | string
  }

  export type FavoriteRecipeWhereInput = {
    AND?: FavoriteRecipeWhereInput | FavoriteRecipeWhereInput[]
    OR?: FavoriteRecipeWhereInput[]
    NOT?: FavoriteRecipeWhereInput | FavoriteRecipeWhereInput[]
    id?: StringFilter<"FavoriteRecipe"> | string
    recipeName?: StringFilter<"FavoriteRecipe"> | string
    ingredientsYouHave?: StringFilter<"FavoriteRecipe"> | string
    missingIngredients?: StringFilter<"FavoriteRecipe"> | string
    fullIngredientsList?: StringFilter<"FavoriteRecipe"> | string
    instructions?: StringFilter<"FavoriteRecipe"> | string
    preparationTime?: StringFilter<"FavoriteRecipe"> | string
    cookingTime?: StringFilter<"FavoriteRecipe"> | string
    userId?: StringFilter<"FavoriteRecipe"> | string
    createdAt?: DateTimeFilter<"FavoriteRecipe"> | Date | string
    updatedAt?: DateTimeFilter<"FavoriteRecipe"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FavoriteRecipeOrderByWithRelationInput = {
    id?: SortOrder
    recipeName?: SortOrder
    ingredientsYouHave?: SortOrder
    missingIngredients?: SortOrder
    fullIngredientsList?: SortOrder
    instructions?: SortOrder
    preparationTime?: SortOrder
    cookingTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FavoriteRecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    recipeName_userId?: FavoriteRecipeRecipeNameUserIdCompoundUniqueInput
    AND?: FavoriteRecipeWhereInput | FavoriteRecipeWhereInput[]
    OR?: FavoriteRecipeWhereInput[]
    NOT?: FavoriteRecipeWhereInput | FavoriteRecipeWhereInput[]
    recipeName?: StringFilter<"FavoriteRecipe"> | string
    ingredientsYouHave?: StringFilter<"FavoriteRecipe"> | string
    missingIngredients?: StringFilter<"FavoriteRecipe"> | string
    fullIngredientsList?: StringFilter<"FavoriteRecipe"> | string
    instructions?: StringFilter<"FavoriteRecipe"> | string
    preparationTime?: StringFilter<"FavoriteRecipe"> | string
    cookingTime?: StringFilter<"FavoriteRecipe"> | string
    userId?: StringFilter<"FavoriteRecipe"> | string
    createdAt?: DateTimeFilter<"FavoriteRecipe"> | Date | string
    updatedAt?: DateTimeFilter<"FavoriteRecipe"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "recipeName_userId">

  export type FavoriteRecipeOrderByWithAggregationInput = {
    id?: SortOrder
    recipeName?: SortOrder
    ingredientsYouHave?: SortOrder
    missingIngredients?: SortOrder
    fullIngredientsList?: SortOrder
    instructions?: SortOrder
    preparationTime?: SortOrder
    cookingTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FavoriteRecipeCountOrderByAggregateInput
    _max?: FavoriteRecipeMaxOrderByAggregateInput
    _min?: FavoriteRecipeMinOrderByAggregateInput
  }

  export type FavoriteRecipeScalarWhereWithAggregatesInput = {
    AND?: FavoriteRecipeScalarWhereWithAggregatesInput | FavoriteRecipeScalarWhereWithAggregatesInput[]
    OR?: FavoriteRecipeScalarWhereWithAggregatesInput[]
    NOT?: FavoriteRecipeScalarWhereWithAggregatesInput | FavoriteRecipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FavoriteRecipe"> | string
    recipeName?: StringWithAggregatesFilter<"FavoriteRecipe"> | string
    ingredientsYouHave?: StringWithAggregatesFilter<"FavoriteRecipe"> | string
    missingIngredients?: StringWithAggregatesFilter<"FavoriteRecipe"> | string
    fullIngredientsList?: StringWithAggregatesFilter<"FavoriteRecipe"> | string
    instructions?: StringWithAggregatesFilter<"FavoriteRecipe"> | string
    preparationTime?: StringWithAggregatesFilter<"FavoriteRecipe"> | string
    cookingTime?: StringWithAggregatesFilter<"FavoriteRecipe"> | string
    userId?: StringWithAggregatesFilter<"FavoriteRecipe"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FavoriteRecipe"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FavoriteRecipe"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    savedRecipes?: SavedRecipeCreateNestedManyWithoutUserInput
    favoriteRecipes?: FavoriteRecipeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    savedRecipes?: SavedRecipeUncheckedCreateNestedManyWithoutUserInput
    favoriteRecipes?: FavoriteRecipeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedRecipes?: SavedRecipeUpdateManyWithoutUserNestedInput
    favoriteRecipes?: FavoriteRecipeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedRecipes?: SavedRecipeUncheckedUpdateManyWithoutUserNestedInput
    favoriteRecipes?: FavoriteRecipeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedRecipeCreateInput = {
    id?: string
    recipeName: string
    ingredientsYouHave: string
    missingIngredients: string
    fullIngredientsList: string
    instructions: string
    preparationTime: string
    cookingTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSavedRecipesInput
  }

  export type SavedRecipeUncheckedCreateInput = {
    id?: string
    recipeName: string
    ingredientsYouHave: string
    missingIngredients: string
    fullIngredientsList: string
    instructions: string
    preparationTime: string
    cookingTime: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedRecipeUpdateInput = {
    recipeName?: StringFieldUpdateOperationsInput | string
    ingredientsYouHave?: StringFieldUpdateOperationsInput | string
    missingIngredients?: StringFieldUpdateOperationsInput | string
    fullIngredientsList?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    preparationTime?: StringFieldUpdateOperationsInput | string
    cookingTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedRecipesNestedInput
  }

  export type SavedRecipeUncheckedUpdateInput = {
    recipeName?: StringFieldUpdateOperationsInput | string
    ingredientsYouHave?: StringFieldUpdateOperationsInput | string
    missingIngredients?: StringFieldUpdateOperationsInput | string
    fullIngredientsList?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    preparationTime?: StringFieldUpdateOperationsInput | string
    cookingTime?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedRecipeCreateManyInput = {
    id?: string
    recipeName: string
    ingredientsYouHave: string
    missingIngredients: string
    fullIngredientsList: string
    instructions: string
    preparationTime: string
    cookingTime: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedRecipeUpdateManyMutationInput = {
    recipeName?: StringFieldUpdateOperationsInput | string
    ingredientsYouHave?: StringFieldUpdateOperationsInput | string
    missingIngredients?: StringFieldUpdateOperationsInput | string
    fullIngredientsList?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    preparationTime?: StringFieldUpdateOperationsInput | string
    cookingTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedRecipeUncheckedUpdateManyInput = {
    recipeName?: StringFieldUpdateOperationsInput | string
    ingredientsYouHave?: StringFieldUpdateOperationsInput | string
    missingIngredients?: StringFieldUpdateOperationsInput | string
    fullIngredientsList?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    preparationTime?: StringFieldUpdateOperationsInput | string
    cookingTime?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteRecipeCreateInput = {
    id?: string
    recipeName: string
    ingredientsYouHave: string
    missingIngredients: string
    fullIngredientsList: string
    instructions: string
    preparationTime: string
    cookingTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFavoriteRecipesInput
  }

  export type FavoriteRecipeUncheckedCreateInput = {
    id?: string
    recipeName: string
    ingredientsYouHave: string
    missingIngredients: string
    fullIngredientsList: string
    instructions: string
    preparationTime: string
    cookingTime: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteRecipeUpdateInput = {
    recipeName?: StringFieldUpdateOperationsInput | string
    ingredientsYouHave?: StringFieldUpdateOperationsInput | string
    missingIngredients?: StringFieldUpdateOperationsInput | string
    fullIngredientsList?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    preparationTime?: StringFieldUpdateOperationsInput | string
    cookingTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoriteRecipesNestedInput
  }

  export type FavoriteRecipeUncheckedUpdateInput = {
    recipeName?: StringFieldUpdateOperationsInput | string
    ingredientsYouHave?: StringFieldUpdateOperationsInput | string
    missingIngredients?: StringFieldUpdateOperationsInput | string
    fullIngredientsList?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    preparationTime?: StringFieldUpdateOperationsInput | string
    cookingTime?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteRecipeCreateManyInput = {
    id?: string
    recipeName: string
    ingredientsYouHave: string
    missingIngredients: string
    fullIngredientsList: string
    instructions: string
    preparationTime: string
    cookingTime: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteRecipeUpdateManyMutationInput = {
    recipeName?: StringFieldUpdateOperationsInput | string
    ingredientsYouHave?: StringFieldUpdateOperationsInput | string
    missingIngredients?: StringFieldUpdateOperationsInput | string
    fullIngredientsList?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    preparationTime?: StringFieldUpdateOperationsInput | string
    cookingTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteRecipeUncheckedUpdateManyInput = {
    recipeName?: StringFieldUpdateOperationsInput | string
    ingredientsYouHave?: StringFieldUpdateOperationsInput | string
    missingIngredients?: StringFieldUpdateOperationsInput | string
    fullIngredientsList?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    preparationTime?: StringFieldUpdateOperationsInput | string
    cookingTime?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SavedRecipeListRelationFilter = {
    every?: SavedRecipeWhereInput
    some?: SavedRecipeWhereInput
    none?: SavedRecipeWhereInput
  }

  export type FavoriteRecipeListRelationFilter = {
    every?: FavoriteRecipeWhereInput
    some?: FavoriteRecipeWhereInput
    none?: FavoriteRecipeWhereInput
  }

  export type SavedRecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteRecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SavedRecipeRecipeNameUserIdCompoundUniqueInput = {
    recipeName: string
    userId: string
  }

  export type SavedRecipeCountOrderByAggregateInput = {
    id?: SortOrder
    recipeName?: SortOrder
    ingredientsYouHave?: SortOrder
    missingIngredients?: SortOrder
    fullIngredientsList?: SortOrder
    instructions?: SortOrder
    preparationTime?: SortOrder
    cookingTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedRecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeName?: SortOrder
    ingredientsYouHave?: SortOrder
    missingIngredients?: SortOrder
    fullIngredientsList?: SortOrder
    instructions?: SortOrder
    preparationTime?: SortOrder
    cookingTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedRecipeMinOrderByAggregateInput = {
    id?: SortOrder
    recipeName?: SortOrder
    ingredientsYouHave?: SortOrder
    missingIngredients?: SortOrder
    fullIngredientsList?: SortOrder
    instructions?: SortOrder
    preparationTime?: SortOrder
    cookingTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FavoriteRecipeRecipeNameUserIdCompoundUniqueInput = {
    recipeName: string
    userId: string
  }

  export type FavoriteRecipeCountOrderByAggregateInput = {
    id?: SortOrder
    recipeName?: SortOrder
    ingredientsYouHave?: SortOrder
    missingIngredients?: SortOrder
    fullIngredientsList?: SortOrder
    instructions?: SortOrder
    preparationTime?: SortOrder
    cookingTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FavoriteRecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeName?: SortOrder
    ingredientsYouHave?: SortOrder
    missingIngredients?: SortOrder
    fullIngredientsList?: SortOrder
    instructions?: SortOrder
    preparationTime?: SortOrder
    cookingTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FavoriteRecipeMinOrderByAggregateInput = {
    id?: SortOrder
    recipeName?: SortOrder
    ingredientsYouHave?: SortOrder
    missingIngredients?: SortOrder
    fullIngredientsList?: SortOrder
    instructions?: SortOrder
    preparationTime?: SortOrder
    cookingTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SavedRecipeCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedRecipeCreateWithoutUserInput, SavedRecipeUncheckedCreateWithoutUserInput> | SavedRecipeCreateWithoutUserInput[] | SavedRecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedRecipeCreateOrConnectWithoutUserInput | SavedRecipeCreateOrConnectWithoutUserInput[]
    createMany?: SavedRecipeCreateManyUserInputEnvelope
    connect?: SavedRecipeWhereUniqueInput | SavedRecipeWhereUniqueInput[]
  }

  export type FavoriteRecipeCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteRecipeCreateWithoutUserInput, FavoriteRecipeUncheckedCreateWithoutUserInput> | FavoriteRecipeCreateWithoutUserInput[] | FavoriteRecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteRecipeCreateOrConnectWithoutUserInput | FavoriteRecipeCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteRecipeCreateManyUserInputEnvelope
    connect?: FavoriteRecipeWhereUniqueInput | FavoriteRecipeWhereUniqueInput[]
  }

  export type SavedRecipeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedRecipeCreateWithoutUserInput, SavedRecipeUncheckedCreateWithoutUserInput> | SavedRecipeCreateWithoutUserInput[] | SavedRecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedRecipeCreateOrConnectWithoutUserInput | SavedRecipeCreateOrConnectWithoutUserInput[]
    createMany?: SavedRecipeCreateManyUserInputEnvelope
    connect?: SavedRecipeWhereUniqueInput | SavedRecipeWhereUniqueInput[]
  }

  export type FavoriteRecipeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteRecipeCreateWithoutUserInput, FavoriteRecipeUncheckedCreateWithoutUserInput> | FavoriteRecipeCreateWithoutUserInput[] | FavoriteRecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteRecipeCreateOrConnectWithoutUserInput | FavoriteRecipeCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteRecipeCreateManyUserInputEnvelope
    connect?: FavoriteRecipeWhereUniqueInput | FavoriteRecipeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SavedRecipeUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedRecipeCreateWithoutUserInput, SavedRecipeUncheckedCreateWithoutUserInput> | SavedRecipeCreateWithoutUserInput[] | SavedRecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedRecipeCreateOrConnectWithoutUserInput | SavedRecipeCreateOrConnectWithoutUserInput[]
    upsert?: SavedRecipeUpsertWithWhereUniqueWithoutUserInput | SavedRecipeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedRecipeCreateManyUserInputEnvelope
    set?: SavedRecipeWhereUniqueInput | SavedRecipeWhereUniqueInput[]
    disconnect?: SavedRecipeWhereUniqueInput | SavedRecipeWhereUniqueInput[]
    delete?: SavedRecipeWhereUniqueInput | SavedRecipeWhereUniqueInput[]
    connect?: SavedRecipeWhereUniqueInput | SavedRecipeWhereUniqueInput[]
    update?: SavedRecipeUpdateWithWhereUniqueWithoutUserInput | SavedRecipeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedRecipeUpdateManyWithWhereWithoutUserInput | SavedRecipeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedRecipeScalarWhereInput | SavedRecipeScalarWhereInput[]
  }

  export type FavoriteRecipeUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteRecipeCreateWithoutUserInput, FavoriteRecipeUncheckedCreateWithoutUserInput> | FavoriteRecipeCreateWithoutUserInput[] | FavoriteRecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteRecipeCreateOrConnectWithoutUserInput | FavoriteRecipeCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteRecipeUpsertWithWhereUniqueWithoutUserInput | FavoriteRecipeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteRecipeCreateManyUserInputEnvelope
    set?: FavoriteRecipeWhereUniqueInput | FavoriteRecipeWhereUniqueInput[]
    disconnect?: FavoriteRecipeWhereUniqueInput | FavoriteRecipeWhereUniqueInput[]
    delete?: FavoriteRecipeWhereUniqueInput | FavoriteRecipeWhereUniqueInput[]
    connect?: FavoriteRecipeWhereUniqueInput | FavoriteRecipeWhereUniqueInput[]
    update?: FavoriteRecipeUpdateWithWhereUniqueWithoutUserInput | FavoriteRecipeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteRecipeUpdateManyWithWhereWithoutUserInput | FavoriteRecipeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteRecipeScalarWhereInput | FavoriteRecipeScalarWhereInput[]
  }

  export type SavedRecipeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedRecipeCreateWithoutUserInput, SavedRecipeUncheckedCreateWithoutUserInput> | SavedRecipeCreateWithoutUserInput[] | SavedRecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedRecipeCreateOrConnectWithoutUserInput | SavedRecipeCreateOrConnectWithoutUserInput[]
    upsert?: SavedRecipeUpsertWithWhereUniqueWithoutUserInput | SavedRecipeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedRecipeCreateManyUserInputEnvelope
    set?: SavedRecipeWhereUniqueInput | SavedRecipeWhereUniqueInput[]
    disconnect?: SavedRecipeWhereUniqueInput | SavedRecipeWhereUniqueInput[]
    delete?: SavedRecipeWhereUniqueInput | SavedRecipeWhereUniqueInput[]
    connect?: SavedRecipeWhereUniqueInput | SavedRecipeWhereUniqueInput[]
    update?: SavedRecipeUpdateWithWhereUniqueWithoutUserInput | SavedRecipeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedRecipeUpdateManyWithWhereWithoutUserInput | SavedRecipeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedRecipeScalarWhereInput | SavedRecipeScalarWhereInput[]
  }

  export type FavoriteRecipeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteRecipeCreateWithoutUserInput, FavoriteRecipeUncheckedCreateWithoutUserInput> | FavoriteRecipeCreateWithoutUserInput[] | FavoriteRecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteRecipeCreateOrConnectWithoutUserInput | FavoriteRecipeCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteRecipeUpsertWithWhereUniqueWithoutUserInput | FavoriteRecipeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteRecipeCreateManyUserInputEnvelope
    set?: FavoriteRecipeWhereUniqueInput | FavoriteRecipeWhereUniqueInput[]
    disconnect?: FavoriteRecipeWhereUniqueInput | FavoriteRecipeWhereUniqueInput[]
    delete?: FavoriteRecipeWhereUniqueInput | FavoriteRecipeWhereUniqueInput[]
    connect?: FavoriteRecipeWhereUniqueInput | FavoriteRecipeWhereUniqueInput[]
    update?: FavoriteRecipeUpdateWithWhereUniqueWithoutUserInput | FavoriteRecipeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteRecipeUpdateManyWithWhereWithoutUserInput | FavoriteRecipeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteRecipeScalarWhereInput | FavoriteRecipeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSavedRecipesInput = {
    create?: XOR<UserCreateWithoutSavedRecipesInput, UserUncheckedCreateWithoutSavedRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedRecipesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedRecipesNestedInput = {
    create?: XOR<UserCreateWithoutSavedRecipesInput, UserUncheckedCreateWithoutSavedRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedRecipesInput
    upsert?: UserUpsertWithoutSavedRecipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedRecipesInput, UserUpdateWithoutSavedRecipesInput>, UserUncheckedUpdateWithoutSavedRecipesInput>
  }

  export type UserCreateNestedOneWithoutFavoriteRecipesInput = {
    create?: XOR<UserCreateWithoutFavoriteRecipesInput, UserUncheckedCreateWithoutFavoriteRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteRecipesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoriteRecipesNestedInput = {
    create?: XOR<UserCreateWithoutFavoriteRecipesInput, UserUncheckedCreateWithoutFavoriteRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteRecipesInput
    upsert?: UserUpsertWithoutFavoriteRecipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoriteRecipesInput, UserUpdateWithoutFavoriteRecipesInput>, UserUncheckedUpdateWithoutFavoriteRecipesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SavedRecipeCreateWithoutUserInput = {
    id?: string
    recipeName: string
    ingredientsYouHave: string
    missingIngredients: string
    fullIngredientsList: string
    instructions: string
    preparationTime: string
    cookingTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedRecipeUncheckedCreateWithoutUserInput = {
    id?: string
    recipeName: string
    ingredientsYouHave: string
    missingIngredients: string
    fullIngredientsList: string
    instructions: string
    preparationTime: string
    cookingTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedRecipeCreateOrConnectWithoutUserInput = {
    where: SavedRecipeWhereUniqueInput
    create: XOR<SavedRecipeCreateWithoutUserInput, SavedRecipeUncheckedCreateWithoutUserInput>
  }

  export type SavedRecipeCreateManyUserInputEnvelope = {
    data: SavedRecipeCreateManyUserInput | SavedRecipeCreateManyUserInput[]
  }

  export type FavoriteRecipeCreateWithoutUserInput = {
    id?: string
    recipeName: string
    ingredientsYouHave: string
    missingIngredients: string
    fullIngredientsList: string
    instructions: string
    preparationTime: string
    cookingTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteRecipeUncheckedCreateWithoutUserInput = {
    id?: string
    recipeName: string
    ingredientsYouHave: string
    missingIngredients: string
    fullIngredientsList: string
    instructions: string
    preparationTime: string
    cookingTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteRecipeCreateOrConnectWithoutUserInput = {
    where: FavoriteRecipeWhereUniqueInput
    create: XOR<FavoriteRecipeCreateWithoutUserInput, FavoriteRecipeUncheckedCreateWithoutUserInput>
  }

  export type FavoriteRecipeCreateManyUserInputEnvelope = {
    data: FavoriteRecipeCreateManyUserInput | FavoriteRecipeCreateManyUserInput[]
  }

  export type SavedRecipeUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedRecipeWhereUniqueInput
    update: XOR<SavedRecipeUpdateWithoutUserInput, SavedRecipeUncheckedUpdateWithoutUserInput>
    create: XOR<SavedRecipeCreateWithoutUserInput, SavedRecipeUncheckedCreateWithoutUserInput>
  }

  export type SavedRecipeUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedRecipeWhereUniqueInput
    data: XOR<SavedRecipeUpdateWithoutUserInput, SavedRecipeUncheckedUpdateWithoutUserInput>
  }

  export type SavedRecipeUpdateManyWithWhereWithoutUserInput = {
    where: SavedRecipeScalarWhereInput
    data: XOR<SavedRecipeUpdateManyMutationInput, SavedRecipeUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedRecipeScalarWhereInput = {
    AND?: SavedRecipeScalarWhereInput | SavedRecipeScalarWhereInput[]
    OR?: SavedRecipeScalarWhereInput[]
    NOT?: SavedRecipeScalarWhereInput | SavedRecipeScalarWhereInput[]
    id?: StringFilter<"SavedRecipe"> | string
    recipeName?: StringFilter<"SavedRecipe"> | string
    ingredientsYouHave?: StringFilter<"SavedRecipe"> | string
    missingIngredients?: StringFilter<"SavedRecipe"> | string
    fullIngredientsList?: StringFilter<"SavedRecipe"> | string
    instructions?: StringFilter<"SavedRecipe"> | string
    preparationTime?: StringFilter<"SavedRecipe"> | string
    cookingTime?: StringFilter<"SavedRecipe"> | string
    userId?: StringFilter<"SavedRecipe"> | string
    createdAt?: DateTimeFilter<"SavedRecipe"> | Date | string
    updatedAt?: DateTimeFilter<"SavedRecipe"> | Date | string
  }

  export type FavoriteRecipeUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteRecipeWhereUniqueInput
    update: XOR<FavoriteRecipeUpdateWithoutUserInput, FavoriteRecipeUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteRecipeCreateWithoutUserInput, FavoriteRecipeUncheckedCreateWithoutUserInput>
  }

  export type FavoriteRecipeUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteRecipeWhereUniqueInput
    data: XOR<FavoriteRecipeUpdateWithoutUserInput, FavoriteRecipeUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteRecipeUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteRecipeScalarWhereInput
    data: XOR<FavoriteRecipeUpdateManyMutationInput, FavoriteRecipeUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteRecipeScalarWhereInput = {
    AND?: FavoriteRecipeScalarWhereInput | FavoriteRecipeScalarWhereInput[]
    OR?: FavoriteRecipeScalarWhereInput[]
    NOT?: FavoriteRecipeScalarWhereInput | FavoriteRecipeScalarWhereInput[]
    id?: StringFilter<"FavoriteRecipe"> | string
    recipeName?: StringFilter<"FavoriteRecipe"> | string
    ingredientsYouHave?: StringFilter<"FavoriteRecipe"> | string
    missingIngredients?: StringFilter<"FavoriteRecipe"> | string
    fullIngredientsList?: StringFilter<"FavoriteRecipe"> | string
    instructions?: StringFilter<"FavoriteRecipe"> | string
    preparationTime?: StringFilter<"FavoriteRecipe"> | string
    cookingTime?: StringFilter<"FavoriteRecipe"> | string
    userId?: StringFilter<"FavoriteRecipe"> | string
    createdAt?: DateTimeFilter<"FavoriteRecipe"> | Date | string
    updatedAt?: DateTimeFilter<"FavoriteRecipe"> | Date | string
  }

  export type UserCreateWithoutSavedRecipesInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteRecipes?: FavoriteRecipeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedRecipesInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    favoriteRecipes?: FavoriteRecipeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedRecipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedRecipesInput, UserUncheckedCreateWithoutSavedRecipesInput>
  }

  export type UserUpsertWithoutSavedRecipesInput = {
    update: XOR<UserUpdateWithoutSavedRecipesInput, UserUncheckedUpdateWithoutSavedRecipesInput>
    create: XOR<UserCreateWithoutSavedRecipesInput, UserUncheckedCreateWithoutSavedRecipesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedRecipesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedRecipesInput, UserUncheckedUpdateWithoutSavedRecipesInput>
  }

  export type UserUpdateWithoutSavedRecipesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteRecipes?: FavoriteRecipeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedRecipesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoriteRecipes?: FavoriteRecipeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFavoriteRecipesInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    savedRecipes?: SavedRecipeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoriteRecipesInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    savedRecipes?: SavedRecipeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoriteRecipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoriteRecipesInput, UserUncheckedCreateWithoutFavoriteRecipesInput>
  }

  export type UserUpsertWithoutFavoriteRecipesInput = {
    update: XOR<UserUpdateWithoutFavoriteRecipesInput, UserUncheckedUpdateWithoutFavoriteRecipesInput>
    create: XOR<UserCreateWithoutFavoriteRecipesInput, UserUncheckedCreateWithoutFavoriteRecipesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoriteRecipesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoriteRecipesInput, UserUncheckedUpdateWithoutFavoriteRecipesInput>
  }

  export type UserUpdateWithoutFavoriteRecipesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedRecipes?: SavedRecipeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoriteRecipesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    savedRecipes?: SavedRecipeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SavedRecipeCreateManyUserInput = {
    id?: string
    recipeName: string
    ingredientsYouHave: string
    missingIngredients: string
    fullIngredientsList: string
    instructions: string
    preparationTime: string
    cookingTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoriteRecipeCreateManyUserInput = {
    id?: string
    recipeName: string
    ingredientsYouHave: string
    missingIngredients: string
    fullIngredientsList: string
    instructions: string
    preparationTime: string
    cookingTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedRecipeUpdateWithoutUserInput = {
    recipeName?: StringFieldUpdateOperationsInput | string
    ingredientsYouHave?: StringFieldUpdateOperationsInput | string
    missingIngredients?: StringFieldUpdateOperationsInput | string
    fullIngredientsList?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    preparationTime?: StringFieldUpdateOperationsInput | string
    cookingTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedRecipeUncheckedUpdateWithoutUserInput = {
    recipeName?: StringFieldUpdateOperationsInput | string
    ingredientsYouHave?: StringFieldUpdateOperationsInput | string
    missingIngredients?: StringFieldUpdateOperationsInput | string
    fullIngredientsList?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    preparationTime?: StringFieldUpdateOperationsInput | string
    cookingTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedRecipeUncheckedUpdateManyWithoutUserInput = {
    recipeName?: StringFieldUpdateOperationsInput | string
    ingredientsYouHave?: StringFieldUpdateOperationsInput | string
    missingIngredients?: StringFieldUpdateOperationsInput | string
    fullIngredientsList?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    preparationTime?: StringFieldUpdateOperationsInput | string
    cookingTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteRecipeUpdateWithoutUserInput = {
    recipeName?: StringFieldUpdateOperationsInput | string
    ingredientsYouHave?: StringFieldUpdateOperationsInput | string
    missingIngredients?: StringFieldUpdateOperationsInput | string
    fullIngredientsList?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    preparationTime?: StringFieldUpdateOperationsInput | string
    cookingTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteRecipeUncheckedUpdateWithoutUserInput = {
    recipeName?: StringFieldUpdateOperationsInput | string
    ingredientsYouHave?: StringFieldUpdateOperationsInput | string
    missingIngredients?: StringFieldUpdateOperationsInput | string
    fullIngredientsList?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    preparationTime?: StringFieldUpdateOperationsInput | string
    cookingTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteRecipeUncheckedUpdateManyWithoutUserInput = {
    recipeName?: StringFieldUpdateOperationsInput | string
    ingredientsYouHave?: StringFieldUpdateOperationsInput | string
    missingIngredients?: StringFieldUpdateOperationsInput | string
    fullIngredientsList?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    preparationTime?: StringFieldUpdateOperationsInput | string
    cookingTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}