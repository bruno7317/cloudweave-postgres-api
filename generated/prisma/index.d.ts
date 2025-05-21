
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
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model Resource
 * 
 */
export type Resource = $Result.DefaultSelection<Prisma.$ResourcePayload>
/**
 * Model CountryResource
 * 
 */
export type CountryResource = $Result.DefaultSelection<Prisma.$CountryResourcePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Countries
 * const countries = await prisma.country.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Countries
   * const countries = await prisma.country.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resource.findMany()
    * ```
    */
  get resource(): Prisma.ResourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.countryResource`: Exposes CRUD operations for the **CountryResource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CountryResources
    * const countryResources = await prisma.countryResource.findMany()
    * ```
    */
  get countryResource(): Prisma.CountryResourceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Country: 'Country',
    Resource: 'Resource',
    CountryResource: 'CountryResource'
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
      modelProps: "country" | "resource" | "countryResource"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      Resource: {
        payload: Prisma.$ResourcePayload<ExtArgs>
        fields: Prisma.ResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findFirst: {
            args: Prisma.ResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findMany: {
            args: Prisma.ResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          create: {
            args: Prisma.ResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          createMany: {
            args: Prisma.ResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          delete: {
            args: Prisma.ResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          update: {
            args: Prisma.ResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          deleteMany: {
            args: Prisma.ResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          upsert: {
            args: Prisma.ResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          aggregate: {
            args: Prisma.ResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResource>
          }
          groupBy: {
            args: Prisma.ResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceCountAggregateOutputType> | number
          }
        }
      }
      CountryResource: {
        payload: Prisma.$CountryResourcePayload<ExtArgs>
        fields: Prisma.CountryResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryResourcePayload>
          }
          findFirst: {
            args: Prisma.CountryResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryResourcePayload>
          }
          findMany: {
            args: Prisma.CountryResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryResourcePayload>[]
          }
          create: {
            args: Prisma.CountryResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryResourcePayload>
          }
          createMany: {
            args: Prisma.CountryResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryResourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryResourcePayload>[]
          }
          delete: {
            args: Prisma.CountryResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryResourcePayload>
          }
          update: {
            args: Prisma.CountryResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryResourcePayload>
          }
          deleteMany: {
            args: Prisma.CountryResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryResourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryResourcePayload>[]
          }
          upsert: {
            args: Prisma.CountryResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryResourcePayload>
          }
          aggregate: {
            args: Prisma.CountryResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountryResource>
          }
          groupBy: {
            args: Prisma.CountryResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryResourceCountArgs<ExtArgs>
            result: $Utils.Optional<CountryResourceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    country?: CountryOmit
    resource?: ResourceOmit
    countryResource?: CountryResourceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    CountryResource: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CountryResource?: boolean | CountryCountOutputTypeCountCountryResourceArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountCountryResourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryResourceWhereInput
  }


  /**
   * Count Type ResourceCountOutputType
   */

  export type ResourceCountOutputType = {
    CountryResource: number
  }

  export type ResourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CountryResource?: boolean | ResourceCountOutputTypeCountCountryResourceArgs
  }

  // Custom InputTypes
  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCountOutputType
     */
    select?: ResourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeCountCountryResourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryResourceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    id: number | null
    money_reserves: number | null
  }

  export type CountrySumAggregateOutputType = {
    id: number | null
    money_reserves: number | null
  }

  export type CountryMinAggregateOutputType = {
    id: number | null
    name: string | null
    money_reserves: number | null
    flag: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    money_reserves: number | null
    flag: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    money_reserves: number
    flag: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    id?: true
    money_reserves?: true
  }

  export type CountrySumAggregateInputType = {
    id?: true
    money_reserves?: true
  }

  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
    money_reserves?: true
    flag?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
    money_reserves?: true
    flag?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    money_reserves?: true
    flag?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: number
    name: string
    money_reserves: number
    flag: string
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    money_reserves?: boolean
    flag?: boolean
    CountryResource?: boolean | Country$CountryResourceArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    money_reserves?: boolean
    flag?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    money_reserves?: boolean
    flag?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    name?: boolean
    money_reserves?: boolean
    flag?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "money_reserves" | "flag", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CountryResource?: boolean | Country$CountryResourceArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      CountryResource: Prisma.$CountryResourcePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      money_reserves: number
      flag: string
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CountryResource<T extends Country$CountryResourceArgs<ExtArgs> = {}>(args?: Subset<T, Country$CountryResourceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'Int'>
    readonly name: FieldRef<"Country", 'String'>
    readonly money_reserves: FieldRef<"Country", 'Float'>
    readonly flag: FieldRef<"Country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country updateManyAndReturn
   */
  export type CountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.CountryResource
   */
  export type Country$CountryResourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryResource
     */
    select?: CountryResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryResource
     */
    omit?: CountryResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryResourceInclude<ExtArgs> | null
    where?: CountryResourceWhereInput
    orderBy?: CountryResourceOrderByWithRelationInput | CountryResourceOrderByWithRelationInput[]
    cursor?: CountryResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CountryResourceScalarFieldEnum | CountryResourceScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model Resource
   */

  export type AggregateResource = {
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  export type ResourceAvgAggregateOutputType = {
    id: number | null
    base_price: number | null
  }

  export type ResourceSumAggregateOutputType = {
    id: number | null
    base_price: number | null
  }

  export type ResourceMinAggregateOutputType = {
    id: number | null
    name: string | null
    base_price: number | null
  }

  export type ResourceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    base_price: number | null
  }

  export type ResourceCountAggregateOutputType = {
    id: number
    name: number
    base_price: number
    _all: number
  }


  export type ResourceAvgAggregateInputType = {
    id?: true
    base_price?: true
  }

  export type ResourceSumAggregateInputType = {
    id?: true
    base_price?: true
  }

  export type ResourceMinAggregateInputType = {
    id?: true
    name?: true
    base_price?: true
  }

  export type ResourceMaxAggregateInputType = {
    id?: true
    name?: true
    base_price?: true
  }

  export type ResourceCountAggregateInputType = {
    id?: true
    name?: true
    base_price?: true
    _all?: true
  }

  export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resource to aggregate.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resources
    **/
    _count?: true | ResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceMaxAggregateInputType
  }

  export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResource[P]>
      : GetScalarType<T[P], AggregateResource[P]>
  }




  export type ResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithAggregationInput | ResourceOrderByWithAggregationInput[]
    by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
    having?: ResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCountAggregateInputType | true
    _avg?: ResourceAvgAggregateInputType
    _sum?: ResourceSumAggregateInputType
    _min?: ResourceMinAggregateInputType
    _max?: ResourceMaxAggregateInputType
  }

  export type ResourceGroupByOutputType = {
    id: number
    name: string
    base_price: number
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  type GetResourceGroupByPayload<T extends ResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceGroupByOutputType[P]>
        }
      >
    >


  export type ResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    base_price?: boolean
    CountryResource?: boolean | Resource$CountryResourceArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    base_price?: boolean
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    base_price?: boolean
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectScalar = {
    id?: boolean
    name?: boolean
    base_price?: boolean
  }

  export type ResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "base_price", ExtArgs["result"]["resource"]>
  export type ResourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CountryResource?: boolean | Resource$CountryResourceArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ResourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resource"
    objects: {
      CountryResource: Prisma.$CountryResourcePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      base_price: number
    }, ExtArgs["result"]["resource"]>
    composites: {}
  }

  type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = $Result.GetResult<Prisma.$ResourcePayload, S>

  type ResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceCountAggregateInputType | true
    }

  export interface ResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resource'], meta: { name: 'Resource' } }
    /**
     * Find zero or one Resource that matches the filter.
     * @param {ResourceFindUniqueArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceFindUniqueArgs>(args: SelectSubset<T, ResourceFindUniqueArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceFindFirstArgs>(args?: SelectSubset<T, ResourceFindFirstArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resources
     * const resources = await prisma.resource.findMany()
     * 
     * // Get first 10 Resources
     * const resources = await prisma.resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceWithIdOnly = await prisma.resource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceFindManyArgs>(args?: SelectSubset<T, ResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resource.
     * @param {ResourceCreateArgs} args - Arguments to create a Resource.
     * @example
     * // Create one Resource
     * const Resource = await prisma.resource.create({
     *   data: {
     *     // ... data to create a Resource
     *   }
     * })
     * 
     */
    create<T extends ResourceCreateArgs>(args: SelectSubset<T, ResourceCreateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resources.
     * @param {ResourceCreateManyArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceCreateManyArgs>(args?: SelectSubset<T, ResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resources and returns the data saved in the database.
     * @param {ResourceCreateManyAndReturnArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResourceCreateManyAndReturnArgs>(args?: SelectSubset<T, ResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resource.
     * @param {ResourceDeleteArgs} args - Arguments to delete one Resource.
     * @example
     * // Delete one Resource
     * const Resource = await prisma.resource.delete({
     *   where: {
     *     // ... filter to delete one Resource
     *   }
     * })
     * 
     */
    delete<T extends ResourceDeleteArgs>(args: SelectSubset<T, ResourceDeleteArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resource.
     * @param {ResourceUpdateArgs} args - Arguments to update one Resource.
     * @example
     * // Update one Resource
     * const resource = await prisma.resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceUpdateArgs>(args: SelectSubset<T, ResourceUpdateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resources.
     * @param {ResourceDeleteManyArgs} args - Arguments to filter Resources to delete.
     * @example
     * // Delete a few Resources
     * const { count } = await prisma.resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceDeleteManyArgs>(args?: SelectSubset<T, ResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceUpdateManyArgs>(args: SelectSubset<T, ResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources and returns the data updated in the database.
     * @param {ResourceUpdateManyAndReturnArgs} args - Arguments to update many Resources.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResourceUpdateManyAndReturnArgs>(args: SelectSubset<T, ResourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resource.
     * @param {ResourceUpsertArgs} args - Arguments to update or create a Resource.
     * @example
     * // Update or create a Resource
     * const resource = await prisma.resource.upsert({
     *   create: {
     *     // ... data to create a Resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resource we want to update
     *   }
     * })
     */
    upsert<T extends ResourceUpsertArgs>(args: SelectSubset<T, ResourceUpsertArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCountArgs} args - Arguments to filter Resources to count.
     * @example
     * // Count the number of Resources
     * const count = await prisma.resource.count({
     *   where: {
     *     // ... the filter for the Resources we want to count
     *   }
     * })
    **/
    count<T extends ResourceCountArgs>(
      args?: Subset<T, ResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

    /**
     * Group by Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupByArgs} args - Group by arguments.
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
      T extends ResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceGroupByArgs['orderBy'] }
        : { orderBy?: ResourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resource model
   */
  readonly fields: ResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CountryResource<T extends Resource$CountryResourceArgs<ExtArgs> = {}>(args?: Subset<T, Resource$CountryResourceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Resource model
   */
  interface ResourceFieldRefs {
    readonly id: FieldRef<"Resource", 'Int'>
    readonly name: FieldRef<"Resource", 'String'>
    readonly base_price: FieldRef<"Resource", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Resource findUnique
   */
  export type ResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findUniqueOrThrow
   */
  export type ResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findFirst
   */
  export type ResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findFirstOrThrow
   */
  export type ResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findMany
   */
  export type ResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resources to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource create
   */
  export type ResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Resource.
     */
    data: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
  }

  /**
   * Resource createMany
   */
  export type ResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource createManyAndReturn
   */
  export type ResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource update
   */
  export type ResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Resource.
     */
    data: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
    /**
     * Choose, which Resource to update.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource updateMany
   */
  export type ResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource updateManyAndReturn
   */
  export type ResourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource upsert
   */
  export type ResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Resource to update in case it exists.
     */
    where: ResourceWhereUniqueInput
    /**
     * In case the Resource found by the `where` argument doesn't exist, create a new Resource with this data.
     */
    create: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
    /**
     * In case the Resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
  }

  /**
   * Resource delete
   */
  export type ResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter which Resource to delete.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource deleteMany
   */
  export type ResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resources to delete
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to delete.
     */
    limit?: number
  }

  /**
   * Resource.CountryResource
   */
  export type Resource$CountryResourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryResource
     */
    select?: CountryResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryResource
     */
    omit?: CountryResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryResourceInclude<ExtArgs> | null
    where?: CountryResourceWhereInput
    orderBy?: CountryResourceOrderByWithRelationInput | CountryResourceOrderByWithRelationInput[]
    cursor?: CountryResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CountryResourceScalarFieldEnum | CountryResourceScalarFieldEnum[]
  }

  /**
   * Resource without action
   */
  export type ResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
  }


  /**
   * Model CountryResource
   */

  export type AggregateCountryResource = {
    _count: CountryResourceCountAggregateOutputType | null
    _avg: CountryResourceAvgAggregateOutputType | null
    _sum: CountryResourceSumAggregateOutputType | null
    _min: CountryResourceMinAggregateOutputType | null
    _max: CountryResourceMaxAggregateOutputType | null
  }

  export type CountryResourceAvgAggregateOutputType = {
    id: number | null
    production: number | null
    consumption: number | null
    stockpile: number | null
    country_id: number | null
    resource_id: number | null
  }

  export type CountryResourceSumAggregateOutputType = {
    id: number | null
    production: number | null
    consumption: number | null
    stockpile: number | null
    country_id: number | null
    resource_id: number | null
  }

  export type CountryResourceMinAggregateOutputType = {
    id: number | null
    production: number | null
    consumption: number | null
    stockpile: number | null
    country_id: number | null
    resource_id: number | null
  }

  export type CountryResourceMaxAggregateOutputType = {
    id: number | null
    production: number | null
    consumption: number | null
    stockpile: number | null
    country_id: number | null
    resource_id: number | null
  }

  export type CountryResourceCountAggregateOutputType = {
    id: number
    production: number
    consumption: number
    stockpile: number
    country_id: number
    resource_id: number
    _all: number
  }


  export type CountryResourceAvgAggregateInputType = {
    id?: true
    production?: true
    consumption?: true
    stockpile?: true
    country_id?: true
    resource_id?: true
  }

  export type CountryResourceSumAggregateInputType = {
    id?: true
    production?: true
    consumption?: true
    stockpile?: true
    country_id?: true
    resource_id?: true
  }

  export type CountryResourceMinAggregateInputType = {
    id?: true
    production?: true
    consumption?: true
    stockpile?: true
    country_id?: true
    resource_id?: true
  }

  export type CountryResourceMaxAggregateInputType = {
    id?: true
    production?: true
    consumption?: true
    stockpile?: true
    country_id?: true
    resource_id?: true
  }

  export type CountryResourceCountAggregateInputType = {
    id?: true
    production?: true
    consumption?: true
    stockpile?: true
    country_id?: true
    resource_id?: true
    _all?: true
  }

  export type CountryResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CountryResource to aggregate.
     */
    where?: CountryResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryResources to fetch.
     */
    orderBy?: CountryResourceOrderByWithRelationInput | CountryResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CountryResources
    **/
    _count?: true | CountryResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryResourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountryResourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryResourceMaxAggregateInputType
  }

  export type GetCountryResourceAggregateType<T extends CountryResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateCountryResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountryResource[P]>
      : GetScalarType<T[P], AggregateCountryResource[P]>
  }




  export type CountryResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryResourceWhereInput
    orderBy?: CountryResourceOrderByWithAggregationInput | CountryResourceOrderByWithAggregationInput[]
    by: CountryResourceScalarFieldEnum[] | CountryResourceScalarFieldEnum
    having?: CountryResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryResourceCountAggregateInputType | true
    _avg?: CountryResourceAvgAggregateInputType
    _sum?: CountryResourceSumAggregateInputType
    _min?: CountryResourceMinAggregateInputType
    _max?: CountryResourceMaxAggregateInputType
  }

  export type CountryResourceGroupByOutputType = {
    id: number
    production: number
    consumption: number
    stockpile: number
    country_id: number
    resource_id: number
    _count: CountryResourceCountAggregateOutputType | null
    _avg: CountryResourceAvgAggregateOutputType | null
    _sum: CountryResourceSumAggregateOutputType | null
    _min: CountryResourceMinAggregateOutputType | null
    _max: CountryResourceMaxAggregateOutputType | null
  }

  type GetCountryResourceGroupByPayload<T extends CountryResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryResourceGroupByOutputType[P]>
            : GetScalarType<T[P], CountryResourceGroupByOutputType[P]>
        }
      >
    >


  export type CountryResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    production?: boolean
    consumption?: boolean
    stockpile?: boolean
    country_id?: boolean
    resource_id?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["countryResource"]>

  export type CountryResourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    production?: boolean
    consumption?: boolean
    stockpile?: boolean
    country_id?: boolean
    resource_id?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["countryResource"]>

  export type CountryResourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    production?: boolean
    consumption?: boolean
    stockpile?: boolean
    country_id?: boolean
    resource_id?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["countryResource"]>

  export type CountryResourceSelectScalar = {
    id?: boolean
    production?: boolean
    consumption?: boolean
    stockpile?: boolean
    country_id?: boolean
    resource_id?: boolean
  }

  export type CountryResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "production" | "consumption" | "stockpile" | "country_id" | "resource_id", ExtArgs["result"]["countryResource"]>
  export type CountryResourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }
  export type CountryResourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }
  export type CountryResourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }

  export type $CountryResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CountryResource"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      resource: Prisma.$ResourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      production: number
      consumption: number
      stockpile: number
      country_id: number
      resource_id: number
    }, ExtArgs["result"]["countryResource"]>
    composites: {}
  }

  type CountryResourceGetPayload<S extends boolean | null | undefined | CountryResourceDefaultArgs> = $Result.GetResult<Prisma.$CountryResourcePayload, S>

  type CountryResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryResourceCountAggregateInputType | true
    }

  export interface CountryResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CountryResource'], meta: { name: 'CountryResource' } }
    /**
     * Find zero or one CountryResource that matches the filter.
     * @param {CountryResourceFindUniqueArgs} args - Arguments to find a CountryResource
     * @example
     * // Get one CountryResource
     * const countryResource = await prisma.countryResource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryResourceFindUniqueArgs>(args: SelectSubset<T, CountryResourceFindUniqueArgs<ExtArgs>>): Prisma__CountryResourceClient<$Result.GetResult<Prisma.$CountryResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CountryResource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryResourceFindUniqueOrThrowArgs} args - Arguments to find a CountryResource
     * @example
     * // Get one CountryResource
     * const countryResource = await prisma.countryResource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryResourceClient<$Result.GetResult<Prisma.$CountryResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CountryResource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryResourceFindFirstArgs} args - Arguments to find a CountryResource
     * @example
     * // Get one CountryResource
     * const countryResource = await prisma.countryResource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryResourceFindFirstArgs>(args?: SelectSubset<T, CountryResourceFindFirstArgs<ExtArgs>>): Prisma__CountryResourceClient<$Result.GetResult<Prisma.$CountryResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CountryResource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryResourceFindFirstOrThrowArgs} args - Arguments to find a CountryResource
     * @example
     * // Get one CountryResource
     * const countryResource = await prisma.countryResource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryResourceClient<$Result.GetResult<Prisma.$CountryResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CountryResources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CountryResources
     * const countryResources = await prisma.countryResource.findMany()
     * 
     * // Get first 10 CountryResources
     * const countryResources = await prisma.countryResource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryResourceWithIdOnly = await prisma.countryResource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryResourceFindManyArgs>(args?: SelectSubset<T, CountryResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CountryResource.
     * @param {CountryResourceCreateArgs} args - Arguments to create a CountryResource.
     * @example
     * // Create one CountryResource
     * const CountryResource = await prisma.countryResource.create({
     *   data: {
     *     // ... data to create a CountryResource
     *   }
     * })
     * 
     */
    create<T extends CountryResourceCreateArgs>(args: SelectSubset<T, CountryResourceCreateArgs<ExtArgs>>): Prisma__CountryResourceClient<$Result.GetResult<Prisma.$CountryResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CountryResources.
     * @param {CountryResourceCreateManyArgs} args - Arguments to create many CountryResources.
     * @example
     * // Create many CountryResources
     * const countryResource = await prisma.countryResource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryResourceCreateManyArgs>(args?: SelectSubset<T, CountryResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CountryResources and returns the data saved in the database.
     * @param {CountryResourceCreateManyAndReturnArgs} args - Arguments to create many CountryResources.
     * @example
     * // Create many CountryResources
     * const countryResource = await prisma.countryResource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CountryResources and only return the `id`
     * const countryResourceWithIdOnly = await prisma.countryResource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryResourceCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryResourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CountryResource.
     * @param {CountryResourceDeleteArgs} args - Arguments to delete one CountryResource.
     * @example
     * // Delete one CountryResource
     * const CountryResource = await prisma.countryResource.delete({
     *   where: {
     *     // ... filter to delete one CountryResource
     *   }
     * })
     * 
     */
    delete<T extends CountryResourceDeleteArgs>(args: SelectSubset<T, CountryResourceDeleteArgs<ExtArgs>>): Prisma__CountryResourceClient<$Result.GetResult<Prisma.$CountryResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CountryResource.
     * @param {CountryResourceUpdateArgs} args - Arguments to update one CountryResource.
     * @example
     * // Update one CountryResource
     * const countryResource = await prisma.countryResource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryResourceUpdateArgs>(args: SelectSubset<T, CountryResourceUpdateArgs<ExtArgs>>): Prisma__CountryResourceClient<$Result.GetResult<Prisma.$CountryResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CountryResources.
     * @param {CountryResourceDeleteManyArgs} args - Arguments to filter CountryResources to delete.
     * @example
     * // Delete a few CountryResources
     * const { count } = await prisma.countryResource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryResourceDeleteManyArgs>(args?: SelectSubset<T, CountryResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CountryResources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CountryResources
     * const countryResource = await prisma.countryResource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryResourceUpdateManyArgs>(args: SelectSubset<T, CountryResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CountryResources and returns the data updated in the database.
     * @param {CountryResourceUpdateManyAndReturnArgs} args - Arguments to update many CountryResources.
     * @example
     * // Update many CountryResources
     * const countryResource = await prisma.countryResource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CountryResources and only return the `id`
     * const countryResourceWithIdOnly = await prisma.countryResource.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CountryResourceUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryResourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryResourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CountryResource.
     * @param {CountryResourceUpsertArgs} args - Arguments to update or create a CountryResource.
     * @example
     * // Update or create a CountryResource
     * const countryResource = await prisma.countryResource.upsert({
     *   create: {
     *     // ... data to create a CountryResource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CountryResource we want to update
     *   }
     * })
     */
    upsert<T extends CountryResourceUpsertArgs>(args: SelectSubset<T, CountryResourceUpsertArgs<ExtArgs>>): Prisma__CountryResourceClient<$Result.GetResult<Prisma.$CountryResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CountryResources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryResourceCountArgs} args - Arguments to filter CountryResources to count.
     * @example
     * // Count the number of CountryResources
     * const count = await prisma.countryResource.count({
     *   where: {
     *     // ... the filter for the CountryResources we want to count
     *   }
     * })
    **/
    count<T extends CountryResourceCountArgs>(
      args?: Subset<T, CountryResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CountryResource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryResourceAggregateArgs>(args: Subset<T, CountryResourceAggregateArgs>): Prisma.PrismaPromise<GetCountryResourceAggregateType<T>>

    /**
     * Group by CountryResource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryResourceGroupByArgs} args - Group by arguments.
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
      T extends CountryResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryResourceGroupByArgs['orderBy'] }
        : { orderBy?: CountryResourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountryResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CountryResource model
   */
  readonly fields: CountryResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CountryResource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resource<T extends ResourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResourceDefaultArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CountryResource model
   */
  interface CountryResourceFieldRefs {
    readonly id: FieldRef<"CountryResource", 'Int'>
    readonly production: FieldRef<"CountryResource", 'Int'>
    readonly consumption: FieldRef<"CountryResource", 'Int'>
    readonly stockpile: FieldRef<"CountryResource", 'Int'>
    readonly country_id: FieldRef<"CountryResource", 'Int'>
    readonly resource_id: FieldRef<"CountryResource", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CountryResource findUnique
   */
  export type CountryResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryResource
     */
    select?: CountryResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryResource
     */
    omit?: CountryResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryResourceInclude<ExtArgs> | null
    /**
     * Filter, which CountryResource to fetch.
     */
    where: CountryResourceWhereUniqueInput
  }

  /**
   * CountryResource findUniqueOrThrow
   */
  export type CountryResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryResource
     */
    select?: CountryResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryResource
     */
    omit?: CountryResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryResourceInclude<ExtArgs> | null
    /**
     * Filter, which CountryResource to fetch.
     */
    where: CountryResourceWhereUniqueInput
  }

  /**
   * CountryResource findFirst
   */
  export type CountryResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryResource
     */
    select?: CountryResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryResource
     */
    omit?: CountryResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryResourceInclude<ExtArgs> | null
    /**
     * Filter, which CountryResource to fetch.
     */
    where?: CountryResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryResources to fetch.
     */
    orderBy?: CountryResourceOrderByWithRelationInput | CountryResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CountryResources.
     */
    cursor?: CountryResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CountryResources.
     */
    distinct?: CountryResourceScalarFieldEnum | CountryResourceScalarFieldEnum[]
  }

  /**
   * CountryResource findFirstOrThrow
   */
  export type CountryResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryResource
     */
    select?: CountryResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryResource
     */
    omit?: CountryResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryResourceInclude<ExtArgs> | null
    /**
     * Filter, which CountryResource to fetch.
     */
    where?: CountryResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryResources to fetch.
     */
    orderBy?: CountryResourceOrderByWithRelationInput | CountryResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CountryResources.
     */
    cursor?: CountryResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CountryResources.
     */
    distinct?: CountryResourceScalarFieldEnum | CountryResourceScalarFieldEnum[]
  }

  /**
   * CountryResource findMany
   */
  export type CountryResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryResource
     */
    select?: CountryResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryResource
     */
    omit?: CountryResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryResourceInclude<ExtArgs> | null
    /**
     * Filter, which CountryResources to fetch.
     */
    where?: CountryResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryResources to fetch.
     */
    orderBy?: CountryResourceOrderByWithRelationInput | CountryResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CountryResources.
     */
    cursor?: CountryResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryResources.
     */
    skip?: number
    distinct?: CountryResourceScalarFieldEnum | CountryResourceScalarFieldEnum[]
  }

  /**
   * CountryResource create
   */
  export type CountryResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryResource
     */
    select?: CountryResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryResource
     */
    omit?: CountryResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryResourceInclude<ExtArgs> | null
    /**
     * The data needed to create a CountryResource.
     */
    data: XOR<CountryResourceCreateInput, CountryResourceUncheckedCreateInput>
  }

  /**
   * CountryResource createMany
   */
  export type CountryResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CountryResources.
     */
    data: CountryResourceCreateManyInput | CountryResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CountryResource createManyAndReturn
   */
  export type CountryResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryResource
     */
    select?: CountryResourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CountryResource
     */
    omit?: CountryResourceOmit<ExtArgs> | null
    /**
     * The data used to create many CountryResources.
     */
    data: CountryResourceCreateManyInput | CountryResourceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryResourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CountryResource update
   */
  export type CountryResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryResource
     */
    select?: CountryResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryResource
     */
    omit?: CountryResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryResourceInclude<ExtArgs> | null
    /**
     * The data needed to update a CountryResource.
     */
    data: XOR<CountryResourceUpdateInput, CountryResourceUncheckedUpdateInput>
    /**
     * Choose, which CountryResource to update.
     */
    where: CountryResourceWhereUniqueInput
  }

  /**
   * CountryResource updateMany
   */
  export type CountryResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CountryResources.
     */
    data: XOR<CountryResourceUpdateManyMutationInput, CountryResourceUncheckedUpdateManyInput>
    /**
     * Filter which CountryResources to update
     */
    where?: CountryResourceWhereInput
    /**
     * Limit how many CountryResources to update.
     */
    limit?: number
  }

  /**
   * CountryResource updateManyAndReturn
   */
  export type CountryResourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryResource
     */
    select?: CountryResourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CountryResource
     */
    omit?: CountryResourceOmit<ExtArgs> | null
    /**
     * The data used to update CountryResources.
     */
    data: XOR<CountryResourceUpdateManyMutationInput, CountryResourceUncheckedUpdateManyInput>
    /**
     * Filter which CountryResources to update
     */
    where?: CountryResourceWhereInput
    /**
     * Limit how many CountryResources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryResourceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CountryResource upsert
   */
  export type CountryResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryResource
     */
    select?: CountryResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryResource
     */
    omit?: CountryResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryResourceInclude<ExtArgs> | null
    /**
     * The filter to search for the CountryResource to update in case it exists.
     */
    where: CountryResourceWhereUniqueInput
    /**
     * In case the CountryResource found by the `where` argument doesn't exist, create a new CountryResource with this data.
     */
    create: XOR<CountryResourceCreateInput, CountryResourceUncheckedCreateInput>
    /**
     * In case the CountryResource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryResourceUpdateInput, CountryResourceUncheckedUpdateInput>
  }

  /**
   * CountryResource delete
   */
  export type CountryResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryResource
     */
    select?: CountryResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryResource
     */
    omit?: CountryResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryResourceInclude<ExtArgs> | null
    /**
     * Filter which CountryResource to delete.
     */
    where: CountryResourceWhereUniqueInput
  }

  /**
   * CountryResource deleteMany
   */
  export type CountryResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CountryResources to delete
     */
    where?: CountryResourceWhereInput
    /**
     * Limit how many CountryResources to delete.
     */
    limit?: number
  }

  /**
   * CountryResource without action
   */
  export type CountryResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryResource
     */
    select?: CountryResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryResource
     */
    omit?: CountryResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryResourceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    money_reserves: 'money_reserves',
    flag: 'flag'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const ResourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    base_price: 'base_price'
  };

  export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


  export const CountryResourceScalarFieldEnum: {
    id: 'id',
    production: 'production',
    consumption: 'consumption',
    stockpile: 'stockpile',
    country_id: 'country_id',
    resource_id: 'resource_id'
  };

  export type CountryResourceScalarFieldEnum = (typeof CountryResourceScalarFieldEnum)[keyof typeof CountryResourceScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: IntFilter<"Country"> | number
    name?: StringFilter<"Country"> | string
    money_reserves?: FloatFilter<"Country"> | number
    flag?: StringFilter<"Country"> | string
    CountryResource?: CountryResourceListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    money_reserves?: SortOrder
    flag?: SortOrder
    CountryResource?: CountryResourceOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    money_reserves?: FloatFilter<"Country"> | number
    flag?: StringFilter<"Country"> | string
    CountryResource?: CountryResourceListRelationFilter
  }, "id" | "name">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    money_reserves?: SortOrder
    flag?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Country"> | number
    name?: StringWithAggregatesFilter<"Country"> | string
    money_reserves?: FloatWithAggregatesFilter<"Country"> | number
    flag?: StringWithAggregatesFilter<"Country"> | string
  }

  export type ResourceWhereInput = {
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    id?: IntFilter<"Resource"> | number
    name?: StringFilter<"Resource"> | string
    base_price?: FloatFilter<"Resource"> | number
    CountryResource?: CountryResourceListRelationFilter
  }

  export type ResourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    base_price?: SortOrder
    CountryResource?: CountryResourceOrderByRelationAggregateInput
  }

  export type ResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    base_price?: FloatFilter<"Resource"> | number
    CountryResource?: CountryResourceListRelationFilter
  }, "id" | "name">

  export type ResourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    base_price?: SortOrder
    _count?: ResourceCountOrderByAggregateInput
    _avg?: ResourceAvgOrderByAggregateInput
    _max?: ResourceMaxOrderByAggregateInput
    _min?: ResourceMinOrderByAggregateInput
    _sum?: ResourceSumOrderByAggregateInput
  }

  export type ResourceScalarWhereWithAggregatesInput = {
    AND?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    OR?: ResourceScalarWhereWithAggregatesInput[]
    NOT?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resource"> | number
    name?: StringWithAggregatesFilter<"Resource"> | string
    base_price?: FloatWithAggregatesFilter<"Resource"> | number
  }

  export type CountryResourceWhereInput = {
    AND?: CountryResourceWhereInput | CountryResourceWhereInput[]
    OR?: CountryResourceWhereInput[]
    NOT?: CountryResourceWhereInput | CountryResourceWhereInput[]
    id?: IntFilter<"CountryResource"> | number
    production?: IntFilter<"CountryResource"> | number
    consumption?: IntFilter<"CountryResource"> | number
    stockpile?: IntFilter<"CountryResource"> | number
    country_id?: IntFilter<"CountryResource"> | number
    resource_id?: IntFilter<"CountryResource"> | number
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    resource?: XOR<ResourceScalarRelationFilter, ResourceWhereInput>
  }

  export type CountryResourceOrderByWithRelationInput = {
    id?: SortOrder
    production?: SortOrder
    consumption?: SortOrder
    stockpile?: SortOrder
    country_id?: SortOrder
    resource_id?: SortOrder
    country?: CountryOrderByWithRelationInput
    resource?: ResourceOrderByWithRelationInput
  }

  export type CountryResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CountryResourceWhereInput | CountryResourceWhereInput[]
    OR?: CountryResourceWhereInput[]
    NOT?: CountryResourceWhereInput | CountryResourceWhereInput[]
    production?: IntFilter<"CountryResource"> | number
    consumption?: IntFilter<"CountryResource"> | number
    stockpile?: IntFilter<"CountryResource"> | number
    country_id?: IntFilter<"CountryResource"> | number
    resource_id?: IntFilter<"CountryResource"> | number
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    resource?: XOR<ResourceScalarRelationFilter, ResourceWhereInput>
  }, "id">

  export type CountryResourceOrderByWithAggregationInput = {
    id?: SortOrder
    production?: SortOrder
    consumption?: SortOrder
    stockpile?: SortOrder
    country_id?: SortOrder
    resource_id?: SortOrder
    _count?: CountryResourceCountOrderByAggregateInput
    _avg?: CountryResourceAvgOrderByAggregateInput
    _max?: CountryResourceMaxOrderByAggregateInput
    _min?: CountryResourceMinOrderByAggregateInput
    _sum?: CountryResourceSumOrderByAggregateInput
  }

  export type CountryResourceScalarWhereWithAggregatesInput = {
    AND?: CountryResourceScalarWhereWithAggregatesInput | CountryResourceScalarWhereWithAggregatesInput[]
    OR?: CountryResourceScalarWhereWithAggregatesInput[]
    NOT?: CountryResourceScalarWhereWithAggregatesInput | CountryResourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CountryResource"> | number
    production?: IntWithAggregatesFilter<"CountryResource"> | number
    consumption?: IntWithAggregatesFilter<"CountryResource"> | number
    stockpile?: IntWithAggregatesFilter<"CountryResource"> | number
    country_id?: IntWithAggregatesFilter<"CountryResource"> | number
    resource_id?: IntWithAggregatesFilter<"CountryResource"> | number
  }

  export type CountryCreateInput = {
    name: string
    money_reserves: number
    flag: string
    CountryResource?: CountryResourceCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: number
    name: string
    money_reserves: number
    flag: string
    CountryResource?: CountryResourceUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    money_reserves?: FloatFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    CountryResource?: CountryResourceUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    money_reserves?: FloatFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
    CountryResource?: CountryResourceUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: number
    name: string
    money_reserves: number
    flag: string
  }

  export type CountryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    money_reserves?: FloatFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    money_reserves?: FloatFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
  }

  export type ResourceCreateInput = {
    name: string
    base_price: number
    CountryResource?: CountryResourceCreateNestedManyWithoutResourceInput
  }

  export type ResourceUncheckedCreateInput = {
    id?: number
    name: string
    base_price: number
    CountryResource?: CountryResourceUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    base_price?: FloatFieldUpdateOperationsInput | number
    CountryResource?: CountryResourceUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    base_price?: FloatFieldUpdateOperationsInput | number
    CountryResource?: CountryResourceUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceCreateManyInput = {
    id?: number
    name: string
    base_price: number
  }

  export type ResourceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    base_price?: FloatFieldUpdateOperationsInput | number
  }

  export type ResourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    base_price?: FloatFieldUpdateOperationsInput | number
  }

  export type CountryResourceCreateInput = {
    production: number
    consumption: number
    stockpile: number
    country: CountryCreateNestedOneWithoutCountryResourceInput
    resource: ResourceCreateNestedOneWithoutCountryResourceInput
  }

  export type CountryResourceUncheckedCreateInput = {
    id?: number
    production: number
    consumption: number
    stockpile: number
    country_id: number
    resource_id: number
  }

  export type CountryResourceUpdateInput = {
    production?: IntFieldUpdateOperationsInput | number
    consumption?: IntFieldUpdateOperationsInput | number
    stockpile?: IntFieldUpdateOperationsInput | number
    country?: CountryUpdateOneRequiredWithoutCountryResourceNestedInput
    resource?: ResourceUpdateOneRequiredWithoutCountryResourceNestedInput
  }

  export type CountryResourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    production?: IntFieldUpdateOperationsInput | number
    consumption?: IntFieldUpdateOperationsInput | number
    stockpile?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    resource_id?: IntFieldUpdateOperationsInput | number
  }

  export type CountryResourceCreateManyInput = {
    id?: number
    production: number
    consumption: number
    stockpile: number
    country_id: number
    resource_id: number
  }

  export type CountryResourceUpdateManyMutationInput = {
    production?: IntFieldUpdateOperationsInput | number
    consumption?: IntFieldUpdateOperationsInput | number
    stockpile?: IntFieldUpdateOperationsInput | number
  }

  export type CountryResourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    production?: IntFieldUpdateOperationsInput | number
    consumption?: IntFieldUpdateOperationsInput | number
    stockpile?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    resource_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CountryResourceListRelationFilter = {
    every?: CountryResourceWhereInput
    some?: CountryResourceWhereInput
    none?: CountryResourceWhereInput
  }

  export type CountryResourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    money_reserves?: SortOrder
    flag?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    id?: SortOrder
    money_reserves?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    money_reserves?: SortOrder
    flag?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    money_reserves?: SortOrder
    flag?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    id?: SortOrder
    money_reserves?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ResourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    base_price?: SortOrder
  }

  export type ResourceAvgOrderByAggregateInput = {
    id?: SortOrder
    base_price?: SortOrder
  }

  export type ResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    base_price?: SortOrder
  }

  export type ResourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    base_price?: SortOrder
  }

  export type ResourceSumOrderByAggregateInput = {
    id?: SortOrder
    base_price?: SortOrder
  }

  export type CountryScalarRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type ResourceScalarRelationFilter = {
    is?: ResourceWhereInput
    isNot?: ResourceWhereInput
  }

  export type CountryResourceCountOrderByAggregateInput = {
    id?: SortOrder
    production?: SortOrder
    consumption?: SortOrder
    stockpile?: SortOrder
    country_id?: SortOrder
    resource_id?: SortOrder
  }

  export type CountryResourceAvgOrderByAggregateInput = {
    id?: SortOrder
    production?: SortOrder
    consumption?: SortOrder
    stockpile?: SortOrder
    country_id?: SortOrder
    resource_id?: SortOrder
  }

  export type CountryResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    production?: SortOrder
    consumption?: SortOrder
    stockpile?: SortOrder
    country_id?: SortOrder
    resource_id?: SortOrder
  }

  export type CountryResourceMinOrderByAggregateInput = {
    id?: SortOrder
    production?: SortOrder
    consumption?: SortOrder
    stockpile?: SortOrder
    country_id?: SortOrder
    resource_id?: SortOrder
  }

  export type CountryResourceSumOrderByAggregateInput = {
    id?: SortOrder
    production?: SortOrder
    consumption?: SortOrder
    stockpile?: SortOrder
    country_id?: SortOrder
    resource_id?: SortOrder
  }

  export type CountryResourceCreateNestedManyWithoutCountryInput = {
    create?: XOR<CountryResourceCreateWithoutCountryInput, CountryResourceUncheckedCreateWithoutCountryInput> | CountryResourceCreateWithoutCountryInput[] | CountryResourceUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CountryResourceCreateOrConnectWithoutCountryInput | CountryResourceCreateOrConnectWithoutCountryInput[]
    createMany?: CountryResourceCreateManyCountryInputEnvelope
    connect?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
  }

  export type CountryResourceUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<CountryResourceCreateWithoutCountryInput, CountryResourceUncheckedCreateWithoutCountryInput> | CountryResourceCreateWithoutCountryInput[] | CountryResourceUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CountryResourceCreateOrConnectWithoutCountryInput | CountryResourceCreateOrConnectWithoutCountryInput[]
    createMany?: CountryResourceCreateManyCountryInputEnvelope
    connect?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CountryResourceUpdateManyWithoutCountryNestedInput = {
    create?: XOR<CountryResourceCreateWithoutCountryInput, CountryResourceUncheckedCreateWithoutCountryInput> | CountryResourceCreateWithoutCountryInput[] | CountryResourceUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CountryResourceCreateOrConnectWithoutCountryInput | CountryResourceCreateOrConnectWithoutCountryInput[]
    upsert?: CountryResourceUpsertWithWhereUniqueWithoutCountryInput | CountryResourceUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: CountryResourceCreateManyCountryInputEnvelope
    set?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
    disconnect?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
    delete?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
    connect?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
    update?: CountryResourceUpdateWithWhereUniqueWithoutCountryInput | CountryResourceUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: CountryResourceUpdateManyWithWhereWithoutCountryInput | CountryResourceUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: CountryResourceScalarWhereInput | CountryResourceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CountryResourceUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<CountryResourceCreateWithoutCountryInput, CountryResourceUncheckedCreateWithoutCountryInput> | CountryResourceCreateWithoutCountryInput[] | CountryResourceUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CountryResourceCreateOrConnectWithoutCountryInput | CountryResourceCreateOrConnectWithoutCountryInput[]
    upsert?: CountryResourceUpsertWithWhereUniqueWithoutCountryInput | CountryResourceUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: CountryResourceCreateManyCountryInputEnvelope
    set?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
    disconnect?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
    delete?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
    connect?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
    update?: CountryResourceUpdateWithWhereUniqueWithoutCountryInput | CountryResourceUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: CountryResourceUpdateManyWithWhereWithoutCountryInput | CountryResourceUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: CountryResourceScalarWhereInput | CountryResourceScalarWhereInput[]
  }

  export type CountryResourceCreateNestedManyWithoutResourceInput = {
    create?: XOR<CountryResourceCreateWithoutResourceInput, CountryResourceUncheckedCreateWithoutResourceInput> | CountryResourceCreateWithoutResourceInput[] | CountryResourceUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: CountryResourceCreateOrConnectWithoutResourceInput | CountryResourceCreateOrConnectWithoutResourceInput[]
    createMany?: CountryResourceCreateManyResourceInputEnvelope
    connect?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
  }

  export type CountryResourceUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<CountryResourceCreateWithoutResourceInput, CountryResourceUncheckedCreateWithoutResourceInput> | CountryResourceCreateWithoutResourceInput[] | CountryResourceUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: CountryResourceCreateOrConnectWithoutResourceInput | CountryResourceCreateOrConnectWithoutResourceInput[]
    createMany?: CountryResourceCreateManyResourceInputEnvelope
    connect?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
  }

  export type CountryResourceUpdateManyWithoutResourceNestedInput = {
    create?: XOR<CountryResourceCreateWithoutResourceInput, CountryResourceUncheckedCreateWithoutResourceInput> | CountryResourceCreateWithoutResourceInput[] | CountryResourceUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: CountryResourceCreateOrConnectWithoutResourceInput | CountryResourceCreateOrConnectWithoutResourceInput[]
    upsert?: CountryResourceUpsertWithWhereUniqueWithoutResourceInput | CountryResourceUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: CountryResourceCreateManyResourceInputEnvelope
    set?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
    disconnect?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
    delete?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
    connect?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
    update?: CountryResourceUpdateWithWhereUniqueWithoutResourceInput | CountryResourceUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: CountryResourceUpdateManyWithWhereWithoutResourceInput | CountryResourceUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: CountryResourceScalarWhereInput | CountryResourceScalarWhereInput[]
  }

  export type CountryResourceUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<CountryResourceCreateWithoutResourceInput, CountryResourceUncheckedCreateWithoutResourceInput> | CountryResourceCreateWithoutResourceInput[] | CountryResourceUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: CountryResourceCreateOrConnectWithoutResourceInput | CountryResourceCreateOrConnectWithoutResourceInput[]
    upsert?: CountryResourceUpsertWithWhereUniqueWithoutResourceInput | CountryResourceUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: CountryResourceCreateManyResourceInputEnvelope
    set?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
    disconnect?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
    delete?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
    connect?: CountryResourceWhereUniqueInput | CountryResourceWhereUniqueInput[]
    update?: CountryResourceUpdateWithWhereUniqueWithoutResourceInput | CountryResourceUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: CountryResourceUpdateManyWithWhereWithoutResourceInput | CountryResourceUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: CountryResourceScalarWhereInput | CountryResourceScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutCountryResourceInput = {
    create?: XOR<CountryCreateWithoutCountryResourceInput, CountryUncheckedCreateWithoutCountryResourceInput>
    connectOrCreate?: CountryCreateOrConnectWithoutCountryResourceInput
    connect?: CountryWhereUniqueInput
  }

  export type ResourceCreateNestedOneWithoutCountryResourceInput = {
    create?: XOR<ResourceCreateWithoutCountryResourceInput, ResourceUncheckedCreateWithoutCountryResourceInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutCountryResourceInput
    connect?: ResourceWhereUniqueInput
  }

  export type CountryUpdateOneRequiredWithoutCountryResourceNestedInput = {
    create?: XOR<CountryCreateWithoutCountryResourceInput, CountryUncheckedCreateWithoutCountryResourceInput>
    connectOrCreate?: CountryCreateOrConnectWithoutCountryResourceInput
    upsert?: CountryUpsertWithoutCountryResourceInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutCountryResourceInput, CountryUpdateWithoutCountryResourceInput>, CountryUncheckedUpdateWithoutCountryResourceInput>
  }

  export type ResourceUpdateOneRequiredWithoutCountryResourceNestedInput = {
    create?: XOR<ResourceCreateWithoutCountryResourceInput, ResourceUncheckedCreateWithoutCountryResourceInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutCountryResourceInput
    upsert?: ResourceUpsertWithoutCountryResourceInput
    connect?: ResourceWhereUniqueInput
    update?: XOR<XOR<ResourceUpdateToOneWithWhereWithoutCountryResourceInput, ResourceUpdateWithoutCountryResourceInput>, ResourceUncheckedUpdateWithoutCountryResourceInput>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CountryResourceCreateWithoutCountryInput = {
    production: number
    consumption: number
    stockpile: number
    resource: ResourceCreateNestedOneWithoutCountryResourceInput
  }

  export type CountryResourceUncheckedCreateWithoutCountryInput = {
    id?: number
    production: number
    consumption: number
    stockpile: number
    resource_id: number
  }

  export type CountryResourceCreateOrConnectWithoutCountryInput = {
    where: CountryResourceWhereUniqueInput
    create: XOR<CountryResourceCreateWithoutCountryInput, CountryResourceUncheckedCreateWithoutCountryInput>
  }

  export type CountryResourceCreateManyCountryInputEnvelope = {
    data: CountryResourceCreateManyCountryInput | CountryResourceCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type CountryResourceUpsertWithWhereUniqueWithoutCountryInput = {
    where: CountryResourceWhereUniqueInput
    update: XOR<CountryResourceUpdateWithoutCountryInput, CountryResourceUncheckedUpdateWithoutCountryInput>
    create: XOR<CountryResourceCreateWithoutCountryInput, CountryResourceUncheckedCreateWithoutCountryInput>
  }

  export type CountryResourceUpdateWithWhereUniqueWithoutCountryInput = {
    where: CountryResourceWhereUniqueInput
    data: XOR<CountryResourceUpdateWithoutCountryInput, CountryResourceUncheckedUpdateWithoutCountryInput>
  }

  export type CountryResourceUpdateManyWithWhereWithoutCountryInput = {
    where: CountryResourceScalarWhereInput
    data: XOR<CountryResourceUpdateManyMutationInput, CountryResourceUncheckedUpdateManyWithoutCountryInput>
  }

  export type CountryResourceScalarWhereInput = {
    AND?: CountryResourceScalarWhereInput | CountryResourceScalarWhereInput[]
    OR?: CountryResourceScalarWhereInput[]
    NOT?: CountryResourceScalarWhereInput | CountryResourceScalarWhereInput[]
    id?: IntFilter<"CountryResource"> | number
    production?: IntFilter<"CountryResource"> | number
    consumption?: IntFilter<"CountryResource"> | number
    stockpile?: IntFilter<"CountryResource"> | number
    country_id?: IntFilter<"CountryResource"> | number
    resource_id?: IntFilter<"CountryResource"> | number
  }

  export type CountryResourceCreateWithoutResourceInput = {
    production: number
    consumption: number
    stockpile: number
    country: CountryCreateNestedOneWithoutCountryResourceInput
  }

  export type CountryResourceUncheckedCreateWithoutResourceInput = {
    id?: number
    production: number
    consumption: number
    stockpile: number
    country_id: number
  }

  export type CountryResourceCreateOrConnectWithoutResourceInput = {
    where: CountryResourceWhereUniqueInput
    create: XOR<CountryResourceCreateWithoutResourceInput, CountryResourceUncheckedCreateWithoutResourceInput>
  }

  export type CountryResourceCreateManyResourceInputEnvelope = {
    data: CountryResourceCreateManyResourceInput | CountryResourceCreateManyResourceInput[]
    skipDuplicates?: boolean
  }

  export type CountryResourceUpsertWithWhereUniqueWithoutResourceInput = {
    where: CountryResourceWhereUniqueInput
    update: XOR<CountryResourceUpdateWithoutResourceInput, CountryResourceUncheckedUpdateWithoutResourceInput>
    create: XOR<CountryResourceCreateWithoutResourceInput, CountryResourceUncheckedCreateWithoutResourceInput>
  }

  export type CountryResourceUpdateWithWhereUniqueWithoutResourceInput = {
    where: CountryResourceWhereUniqueInput
    data: XOR<CountryResourceUpdateWithoutResourceInput, CountryResourceUncheckedUpdateWithoutResourceInput>
  }

  export type CountryResourceUpdateManyWithWhereWithoutResourceInput = {
    where: CountryResourceScalarWhereInput
    data: XOR<CountryResourceUpdateManyMutationInput, CountryResourceUncheckedUpdateManyWithoutResourceInput>
  }

  export type CountryCreateWithoutCountryResourceInput = {
    name: string
    money_reserves: number
    flag: string
  }

  export type CountryUncheckedCreateWithoutCountryResourceInput = {
    id?: number
    name: string
    money_reserves: number
    flag: string
  }

  export type CountryCreateOrConnectWithoutCountryResourceInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutCountryResourceInput, CountryUncheckedCreateWithoutCountryResourceInput>
  }

  export type ResourceCreateWithoutCountryResourceInput = {
    name: string
    base_price: number
  }

  export type ResourceUncheckedCreateWithoutCountryResourceInput = {
    id?: number
    name: string
    base_price: number
  }

  export type ResourceCreateOrConnectWithoutCountryResourceInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutCountryResourceInput, ResourceUncheckedCreateWithoutCountryResourceInput>
  }

  export type CountryUpsertWithoutCountryResourceInput = {
    update: XOR<CountryUpdateWithoutCountryResourceInput, CountryUncheckedUpdateWithoutCountryResourceInput>
    create: XOR<CountryCreateWithoutCountryResourceInput, CountryUncheckedCreateWithoutCountryResourceInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutCountryResourceInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutCountryResourceInput, CountryUncheckedUpdateWithoutCountryResourceInput>
  }

  export type CountryUpdateWithoutCountryResourceInput = {
    name?: StringFieldUpdateOperationsInput | string
    money_reserves?: FloatFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateWithoutCountryResourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    money_reserves?: FloatFieldUpdateOperationsInput | number
    flag?: StringFieldUpdateOperationsInput | string
  }

  export type ResourceUpsertWithoutCountryResourceInput = {
    update: XOR<ResourceUpdateWithoutCountryResourceInput, ResourceUncheckedUpdateWithoutCountryResourceInput>
    create: XOR<ResourceCreateWithoutCountryResourceInput, ResourceUncheckedCreateWithoutCountryResourceInput>
    where?: ResourceWhereInput
  }

  export type ResourceUpdateToOneWithWhereWithoutCountryResourceInput = {
    where?: ResourceWhereInput
    data: XOR<ResourceUpdateWithoutCountryResourceInput, ResourceUncheckedUpdateWithoutCountryResourceInput>
  }

  export type ResourceUpdateWithoutCountryResourceInput = {
    name?: StringFieldUpdateOperationsInput | string
    base_price?: FloatFieldUpdateOperationsInput | number
  }

  export type ResourceUncheckedUpdateWithoutCountryResourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    base_price?: FloatFieldUpdateOperationsInput | number
  }

  export type CountryResourceCreateManyCountryInput = {
    id?: number
    production: number
    consumption: number
    stockpile: number
    resource_id: number
  }

  export type CountryResourceUpdateWithoutCountryInput = {
    production?: IntFieldUpdateOperationsInput | number
    consumption?: IntFieldUpdateOperationsInput | number
    stockpile?: IntFieldUpdateOperationsInput | number
    resource?: ResourceUpdateOneRequiredWithoutCountryResourceNestedInput
  }

  export type CountryResourceUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    production?: IntFieldUpdateOperationsInput | number
    consumption?: IntFieldUpdateOperationsInput | number
    stockpile?: IntFieldUpdateOperationsInput | number
    resource_id?: IntFieldUpdateOperationsInput | number
  }

  export type CountryResourceUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    production?: IntFieldUpdateOperationsInput | number
    consumption?: IntFieldUpdateOperationsInput | number
    stockpile?: IntFieldUpdateOperationsInput | number
    resource_id?: IntFieldUpdateOperationsInput | number
  }

  export type CountryResourceCreateManyResourceInput = {
    id?: number
    production: number
    consumption: number
    stockpile: number
    country_id: number
  }

  export type CountryResourceUpdateWithoutResourceInput = {
    production?: IntFieldUpdateOperationsInput | number
    consumption?: IntFieldUpdateOperationsInput | number
    stockpile?: IntFieldUpdateOperationsInput | number
    country?: CountryUpdateOneRequiredWithoutCountryResourceNestedInput
  }

  export type CountryResourceUncheckedUpdateWithoutResourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    production?: IntFieldUpdateOperationsInput | number
    consumption?: IntFieldUpdateOperationsInput | number
    stockpile?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
  }

  export type CountryResourceUncheckedUpdateManyWithoutResourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    production?: IntFieldUpdateOperationsInput | number
    consumption?: IntFieldUpdateOperationsInput | number
    stockpile?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
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