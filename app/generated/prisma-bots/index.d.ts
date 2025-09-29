
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
 * Model actions_logs
 * 
 */
export type actions_logs = $Result.DefaultSelection<Prisma.$actions_logsPayload>
/**
 * Model reminders
 * 
 */
export type reminders = $Result.DefaultSelection<Prisma.$remindersPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model accounts
 * 
 */
export type accounts = $Result.DefaultSelection<Prisma.$accountsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserPlan: {
  Free: 'Free',
  Premium: 'Premium'
};

export type UserPlan = (typeof UserPlan)[keyof typeof UserPlan]

}

export type UserPlan = $Enums.UserPlan

export const UserPlan: typeof $Enums.UserPlan

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Actions_logs
 * const actions_logs = await prisma.actions_logs.findMany()
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
   * // Fetch zero or more Actions_logs
   * const actions_logs = await prisma.actions_logs.findMany()
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
   * `prisma.actions_logs`: Exposes CRUD operations for the **actions_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actions_logs
    * const actions_logs = await prisma.actions_logs.findMany()
    * ```
    */
  get actions_logs(): Prisma.actions_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reminders`: Exposes CRUD operations for the **reminders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reminders
    * const reminders = await prisma.reminders.findMany()
    * ```
    */
  get reminders(): Prisma.remindersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accounts`: Exposes CRUD operations for the **accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.accountsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    actions_logs: 'actions_logs',
    reminders: 'reminders',
    users: 'users',
    accounts: 'accounts'
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
      modelProps: "actions_logs" | "reminders" | "users" | "accounts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      actions_logs: {
        payload: Prisma.$actions_logsPayload<ExtArgs>
        fields: Prisma.actions_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.actions_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actions_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.actions_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actions_logsPayload>
          }
          findFirst: {
            args: Prisma.actions_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actions_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.actions_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actions_logsPayload>
          }
          findMany: {
            args: Prisma.actions_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actions_logsPayload>[]
          }
          create: {
            args: Prisma.actions_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actions_logsPayload>
          }
          createMany: {
            args: Prisma.actions_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.actions_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actions_logsPayload>[]
          }
          delete: {
            args: Prisma.actions_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actions_logsPayload>
          }
          update: {
            args: Prisma.actions_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actions_logsPayload>
          }
          deleteMany: {
            args: Prisma.actions_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.actions_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.actions_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actions_logsPayload>[]
          }
          upsert: {
            args: Prisma.actions_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actions_logsPayload>
          }
          aggregate: {
            args: Prisma.Actions_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActions_logs>
          }
          groupBy: {
            args: Prisma.actions_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Actions_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.actions_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Actions_logsCountAggregateOutputType> | number
          }
        }
      }
      reminders: {
        payload: Prisma.$remindersPayload<ExtArgs>
        fields: Prisma.remindersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.remindersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.remindersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          findFirst: {
            args: Prisma.remindersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.remindersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          findMany: {
            args: Prisma.remindersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>[]
          }
          create: {
            args: Prisma.remindersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          createMany: {
            args: Prisma.remindersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.remindersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>[]
          }
          delete: {
            args: Prisma.remindersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          update: {
            args: Prisma.remindersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          deleteMany: {
            args: Prisma.remindersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.remindersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.remindersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>[]
          }
          upsert: {
            args: Prisma.remindersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$remindersPayload>
          }
          aggregate: {
            args: Prisma.RemindersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminders>
          }
          groupBy: {
            args: Prisma.remindersGroupByArgs<ExtArgs>
            result: $Utils.Optional<RemindersGroupByOutputType>[]
          }
          count: {
            args: Prisma.remindersCountArgs<ExtArgs>
            result: $Utils.Optional<RemindersCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      accounts: {
        payload: Prisma.$accountsPayload<ExtArgs>
        fields: Prisma.accountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findFirst: {
            args: Prisma.accountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findMany: {
            args: Prisma.accountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          create: {
            args: Prisma.accountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          createMany: {
            args: Prisma.accountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          delete: {
            args: Prisma.accountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          update: {
            args: Prisma.accountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          deleteMany: {
            args: Prisma.accountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.accountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          upsert: {
            args: Prisma.accountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.accountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    actions_logs?: actions_logsOmit
    reminders?: remindersOmit
    users?: usersOmit
    accounts?: accountsOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    actions_logs: number
    reminders: number
    accounts: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions_logs?: boolean | UsersCountOutputTypeCountActions_logsArgs
    reminders?: boolean | UsersCountOutputTypeCountRemindersArgs
    accounts?: boolean | UsersCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountActions_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: actions_logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: remindersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model actions_logs
   */

  export type AggregateActions_logs = {
    _count: Actions_logsCountAggregateOutputType | null
    _avg: Actions_logsAvgAggregateOutputType | null
    _sum: Actions_logsSumAggregateOutputType | null
    _min: Actions_logsMinAggregateOutputType | null
    _max: Actions_logsMaxAggregateOutputType | null
  }

  export type Actions_logsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Actions_logsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Actions_logsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    action_type: string | null
    mood_at_action: string | null
    created_at: Date | null
  }

  export type Actions_logsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    action_type: string | null
    mood_at_action: string | null
    created_at: Date | null
  }

  export type Actions_logsCountAggregateOutputType = {
    id: number
    user_id: number
    action_type: number
    mood_at_action: number
    created_at: number
    _all: number
  }


  export type Actions_logsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Actions_logsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Actions_logsMinAggregateInputType = {
    id?: true
    user_id?: true
    action_type?: true
    mood_at_action?: true
    created_at?: true
  }

  export type Actions_logsMaxAggregateInputType = {
    id?: true
    user_id?: true
    action_type?: true
    mood_at_action?: true
    created_at?: true
  }

  export type Actions_logsCountAggregateInputType = {
    id?: true
    user_id?: true
    action_type?: true
    mood_at_action?: true
    created_at?: true
    _all?: true
  }

  export type Actions_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which actions_logs to aggregate.
     */
    where?: actions_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actions_logs to fetch.
     */
    orderBy?: actions_logsOrderByWithRelationInput | actions_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: actions_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actions_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actions_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned actions_logs
    **/
    _count?: true | Actions_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Actions_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Actions_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Actions_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Actions_logsMaxAggregateInputType
  }

  export type GetActions_logsAggregateType<T extends Actions_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateActions_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActions_logs[P]>
      : GetScalarType<T[P], AggregateActions_logs[P]>
  }




  export type actions_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: actions_logsWhereInput
    orderBy?: actions_logsOrderByWithAggregationInput | actions_logsOrderByWithAggregationInput[]
    by: Actions_logsScalarFieldEnum[] | Actions_logsScalarFieldEnum
    having?: actions_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Actions_logsCountAggregateInputType | true
    _avg?: Actions_logsAvgAggregateInputType
    _sum?: Actions_logsSumAggregateInputType
    _min?: Actions_logsMinAggregateInputType
    _max?: Actions_logsMaxAggregateInputType
  }

  export type Actions_logsGroupByOutputType = {
    id: number
    user_id: number
    action_type: string | null
    mood_at_action: string | null
    created_at: Date | null
    _count: Actions_logsCountAggregateOutputType | null
    _avg: Actions_logsAvgAggregateOutputType | null
    _sum: Actions_logsSumAggregateOutputType | null
    _min: Actions_logsMinAggregateOutputType | null
    _max: Actions_logsMaxAggregateOutputType | null
  }

  type GetActions_logsGroupByPayload<T extends actions_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Actions_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Actions_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Actions_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Actions_logsGroupByOutputType[P]>
        }
      >
    >


  export type actions_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action_type?: boolean
    mood_at_action?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actions_logs"]>

  export type actions_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action_type?: boolean
    mood_at_action?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actions_logs"]>

  export type actions_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action_type?: boolean
    mood_at_action?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actions_logs"]>

  export type actions_logsSelectScalar = {
    id?: boolean
    user_id?: boolean
    action_type?: boolean
    mood_at_action?: boolean
    created_at?: boolean
  }

  export type actions_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "action_type" | "mood_at_action" | "created_at", ExtArgs["result"]["actions_logs"]>
  export type actions_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type actions_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type actions_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $actions_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "actions_logs"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      action_type: string | null
      mood_at_action: string | null
      created_at: Date | null
    }, ExtArgs["result"]["actions_logs"]>
    composites: {}
  }

  type actions_logsGetPayload<S extends boolean | null | undefined | actions_logsDefaultArgs> = $Result.GetResult<Prisma.$actions_logsPayload, S>

  type actions_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<actions_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Actions_logsCountAggregateInputType | true
    }

  export interface actions_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['actions_logs'], meta: { name: 'actions_logs' } }
    /**
     * Find zero or one Actions_logs that matches the filter.
     * @param {actions_logsFindUniqueArgs} args - Arguments to find a Actions_logs
     * @example
     * // Get one Actions_logs
     * const actions_logs = await prisma.actions_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends actions_logsFindUniqueArgs>(args: SelectSubset<T, actions_logsFindUniqueArgs<ExtArgs>>): Prisma__actions_logsClient<$Result.GetResult<Prisma.$actions_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actions_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {actions_logsFindUniqueOrThrowArgs} args - Arguments to find a Actions_logs
     * @example
     * // Get one Actions_logs
     * const actions_logs = await prisma.actions_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends actions_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, actions_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__actions_logsClient<$Result.GetResult<Prisma.$actions_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actions_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actions_logsFindFirstArgs} args - Arguments to find a Actions_logs
     * @example
     * // Get one Actions_logs
     * const actions_logs = await prisma.actions_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends actions_logsFindFirstArgs>(args?: SelectSubset<T, actions_logsFindFirstArgs<ExtArgs>>): Prisma__actions_logsClient<$Result.GetResult<Prisma.$actions_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actions_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actions_logsFindFirstOrThrowArgs} args - Arguments to find a Actions_logs
     * @example
     * // Get one Actions_logs
     * const actions_logs = await prisma.actions_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends actions_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, actions_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__actions_logsClient<$Result.GetResult<Prisma.$actions_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actions_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actions_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions_logs
     * const actions_logs = await prisma.actions_logs.findMany()
     * 
     * // Get first 10 Actions_logs
     * const actions_logs = await prisma.actions_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actions_logsWithIdOnly = await prisma.actions_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends actions_logsFindManyArgs>(args?: SelectSubset<T, actions_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actions_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actions_logs.
     * @param {actions_logsCreateArgs} args - Arguments to create a Actions_logs.
     * @example
     * // Create one Actions_logs
     * const Actions_logs = await prisma.actions_logs.create({
     *   data: {
     *     // ... data to create a Actions_logs
     *   }
     * })
     * 
     */
    create<T extends actions_logsCreateArgs>(args: SelectSubset<T, actions_logsCreateArgs<ExtArgs>>): Prisma__actions_logsClient<$Result.GetResult<Prisma.$actions_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actions_logs.
     * @param {actions_logsCreateManyArgs} args - Arguments to create many Actions_logs.
     * @example
     * // Create many Actions_logs
     * const actions_logs = await prisma.actions_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends actions_logsCreateManyArgs>(args?: SelectSubset<T, actions_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actions_logs and returns the data saved in the database.
     * @param {actions_logsCreateManyAndReturnArgs} args - Arguments to create many Actions_logs.
     * @example
     * // Create many Actions_logs
     * const actions_logs = await prisma.actions_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actions_logs and only return the `id`
     * const actions_logsWithIdOnly = await prisma.actions_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends actions_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, actions_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actions_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Actions_logs.
     * @param {actions_logsDeleteArgs} args - Arguments to delete one Actions_logs.
     * @example
     * // Delete one Actions_logs
     * const Actions_logs = await prisma.actions_logs.delete({
     *   where: {
     *     // ... filter to delete one Actions_logs
     *   }
     * })
     * 
     */
    delete<T extends actions_logsDeleteArgs>(args: SelectSubset<T, actions_logsDeleteArgs<ExtArgs>>): Prisma__actions_logsClient<$Result.GetResult<Prisma.$actions_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actions_logs.
     * @param {actions_logsUpdateArgs} args - Arguments to update one Actions_logs.
     * @example
     * // Update one Actions_logs
     * const actions_logs = await prisma.actions_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends actions_logsUpdateArgs>(args: SelectSubset<T, actions_logsUpdateArgs<ExtArgs>>): Prisma__actions_logsClient<$Result.GetResult<Prisma.$actions_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actions_logs.
     * @param {actions_logsDeleteManyArgs} args - Arguments to filter Actions_logs to delete.
     * @example
     * // Delete a few Actions_logs
     * const { count } = await prisma.actions_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends actions_logsDeleteManyArgs>(args?: SelectSubset<T, actions_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actions_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions_logs
     * const actions_logs = await prisma.actions_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends actions_logsUpdateManyArgs>(args: SelectSubset<T, actions_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions_logs and returns the data updated in the database.
     * @param {actions_logsUpdateManyAndReturnArgs} args - Arguments to update many Actions_logs.
     * @example
     * // Update many Actions_logs
     * const actions_logs = await prisma.actions_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actions_logs and only return the `id`
     * const actions_logsWithIdOnly = await prisma.actions_logs.updateManyAndReturn({
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
    updateManyAndReturn<T extends actions_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, actions_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actions_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Actions_logs.
     * @param {actions_logsUpsertArgs} args - Arguments to update or create a Actions_logs.
     * @example
     * // Update or create a Actions_logs
     * const actions_logs = await prisma.actions_logs.upsert({
     *   create: {
     *     // ... data to create a Actions_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actions_logs we want to update
     *   }
     * })
     */
    upsert<T extends actions_logsUpsertArgs>(args: SelectSubset<T, actions_logsUpsertArgs<ExtArgs>>): Prisma__actions_logsClient<$Result.GetResult<Prisma.$actions_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actions_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actions_logsCountArgs} args - Arguments to filter Actions_logs to count.
     * @example
     * // Count the number of Actions_logs
     * const count = await prisma.actions_logs.count({
     *   where: {
     *     // ... the filter for the Actions_logs we want to count
     *   }
     * })
    **/
    count<T extends actions_logsCountArgs>(
      args?: Subset<T, actions_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Actions_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actions_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Actions_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Actions_logsAggregateArgs>(args: Subset<T, Actions_logsAggregateArgs>): Prisma.PrismaPromise<GetActions_logsAggregateType<T>>

    /**
     * Group by Actions_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actions_logsGroupByArgs} args - Group by arguments.
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
      T extends actions_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: actions_logsGroupByArgs['orderBy'] }
        : { orderBy?: actions_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, actions_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActions_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the actions_logs model
   */
  readonly fields: actions_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for actions_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__actions_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the actions_logs model
   */
  interface actions_logsFieldRefs {
    readonly id: FieldRef<"actions_logs", 'Int'>
    readonly user_id: FieldRef<"actions_logs", 'Int'>
    readonly action_type: FieldRef<"actions_logs", 'String'>
    readonly mood_at_action: FieldRef<"actions_logs", 'String'>
    readonly created_at: FieldRef<"actions_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * actions_logs findUnique
   */
  export type actions_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions_logs
     */
    select?: actions_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions_logs
     */
    omit?: actions_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actions_logsInclude<ExtArgs> | null
    /**
     * Filter, which actions_logs to fetch.
     */
    where: actions_logsWhereUniqueInput
  }

  /**
   * actions_logs findUniqueOrThrow
   */
  export type actions_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions_logs
     */
    select?: actions_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions_logs
     */
    omit?: actions_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actions_logsInclude<ExtArgs> | null
    /**
     * Filter, which actions_logs to fetch.
     */
    where: actions_logsWhereUniqueInput
  }

  /**
   * actions_logs findFirst
   */
  export type actions_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions_logs
     */
    select?: actions_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions_logs
     */
    omit?: actions_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actions_logsInclude<ExtArgs> | null
    /**
     * Filter, which actions_logs to fetch.
     */
    where?: actions_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actions_logs to fetch.
     */
    orderBy?: actions_logsOrderByWithRelationInput | actions_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for actions_logs.
     */
    cursor?: actions_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actions_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actions_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actions_logs.
     */
    distinct?: Actions_logsScalarFieldEnum | Actions_logsScalarFieldEnum[]
  }

  /**
   * actions_logs findFirstOrThrow
   */
  export type actions_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions_logs
     */
    select?: actions_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions_logs
     */
    omit?: actions_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actions_logsInclude<ExtArgs> | null
    /**
     * Filter, which actions_logs to fetch.
     */
    where?: actions_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actions_logs to fetch.
     */
    orderBy?: actions_logsOrderByWithRelationInput | actions_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for actions_logs.
     */
    cursor?: actions_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actions_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actions_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actions_logs.
     */
    distinct?: Actions_logsScalarFieldEnum | Actions_logsScalarFieldEnum[]
  }

  /**
   * actions_logs findMany
   */
  export type actions_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions_logs
     */
    select?: actions_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions_logs
     */
    omit?: actions_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actions_logsInclude<ExtArgs> | null
    /**
     * Filter, which actions_logs to fetch.
     */
    where?: actions_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actions_logs to fetch.
     */
    orderBy?: actions_logsOrderByWithRelationInput | actions_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing actions_logs.
     */
    cursor?: actions_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actions_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actions_logs.
     */
    skip?: number
    distinct?: Actions_logsScalarFieldEnum | Actions_logsScalarFieldEnum[]
  }

  /**
   * actions_logs create
   */
  export type actions_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions_logs
     */
    select?: actions_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions_logs
     */
    omit?: actions_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actions_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a actions_logs.
     */
    data: XOR<actions_logsCreateInput, actions_logsUncheckedCreateInput>
  }

  /**
   * actions_logs createMany
   */
  export type actions_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many actions_logs.
     */
    data: actions_logsCreateManyInput | actions_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * actions_logs createManyAndReturn
   */
  export type actions_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions_logs
     */
    select?: actions_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the actions_logs
     */
    omit?: actions_logsOmit<ExtArgs> | null
    /**
     * The data used to create many actions_logs.
     */
    data: actions_logsCreateManyInput | actions_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actions_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * actions_logs update
   */
  export type actions_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions_logs
     */
    select?: actions_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions_logs
     */
    omit?: actions_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actions_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a actions_logs.
     */
    data: XOR<actions_logsUpdateInput, actions_logsUncheckedUpdateInput>
    /**
     * Choose, which actions_logs to update.
     */
    where: actions_logsWhereUniqueInput
  }

  /**
   * actions_logs updateMany
   */
  export type actions_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update actions_logs.
     */
    data: XOR<actions_logsUpdateManyMutationInput, actions_logsUncheckedUpdateManyInput>
    /**
     * Filter which actions_logs to update
     */
    where?: actions_logsWhereInput
    /**
     * Limit how many actions_logs to update.
     */
    limit?: number
  }

  /**
   * actions_logs updateManyAndReturn
   */
  export type actions_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions_logs
     */
    select?: actions_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the actions_logs
     */
    omit?: actions_logsOmit<ExtArgs> | null
    /**
     * The data used to update actions_logs.
     */
    data: XOR<actions_logsUpdateManyMutationInput, actions_logsUncheckedUpdateManyInput>
    /**
     * Filter which actions_logs to update
     */
    where?: actions_logsWhereInput
    /**
     * Limit how many actions_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actions_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * actions_logs upsert
   */
  export type actions_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions_logs
     */
    select?: actions_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions_logs
     */
    omit?: actions_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actions_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the actions_logs to update in case it exists.
     */
    where: actions_logsWhereUniqueInput
    /**
     * In case the actions_logs found by the `where` argument doesn't exist, create a new actions_logs with this data.
     */
    create: XOR<actions_logsCreateInput, actions_logsUncheckedCreateInput>
    /**
     * In case the actions_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<actions_logsUpdateInput, actions_logsUncheckedUpdateInput>
  }

  /**
   * actions_logs delete
   */
  export type actions_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions_logs
     */
    select?: actions_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions_logs
     */
    omit?: actions_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actions_logsInclude<ExtArgs> | null
    /**
     * Filter which actions_logs to delete.
     */
    where: actions_logsWhereUniqueInput
  }

  /**
   * actions_logs deleteMany
   */
  export type actions_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which actions_logs to delete
     */
    where?: actions_logsWhereInput
    /**
     * Limit how many actions_logs to delete.
     */
    limit?: number
  }

  /**
   * actions_logs without action
   */
  export type actions_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions_logs
     */
    select?: actions_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions_logs
     */
    omit?: actions_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actions_logsInclude<ExtArgs> | null
  }


  /**
   * Model reminders
   */

  export type AggregateReminders = {
    _count: RemindersCountAggregateOutputType | null
    _avg: RemindersAvgAggregateOutputType | null
    _sum: RemindersSumAggregateOutputType | null
    _min: RemindersMinAggregateOutputType | null
    _max: RemindersMaxAggregateOutputType | null
  }

  export type RemindersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    duration_minutes: number | null
  }

  export type RemindersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    duration_minutes: number | null
  }

  export type RemindersMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    description: string | null
    datetime_event: Date | null
    duration_minutes: number | null
    notified: boolean | null
    created_at: Date | null
  }

  export type RemindersMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    description: string | null
    datetime_event: Date | null
    duration_minutes: number | null
    notified: boolean | null
    created_at: Date | null
  }

  export type RemindersCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    description: number
    datetime_event: number
    duration_minutes: number
    notified: number
    created_at: number
    _all: number
  }


  export type RemindersAvgAggregateInputType = {
    id?: true
    user_id?: true
    duration_minutes?: true
  }

  export type RemindersSumAggregateInputType = {
    id?: true
    user_id?: true
    duration_minutes?: true
  }

  export type RemindersMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    datetime_event?: true
    duration_minutes?: true
    notified?: true
    created_at?: true
  }

  export type RemindersMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    datetime_event?: true
    duration_minutes?: true
    notified?: true
    created_at?: true
  }

  export type RemindersCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    datetime_event?: true
    duration_minutes?: true
    notified?: true
    created_at?: true
    _all?: true
  }

  export type RemindersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reminders to aggregate.
     */
    where?: remindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reminders to fetch.
     */
    orderBy?: remindersOrderByWithRelationInput | remindersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: remindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reminders
    **/
    _count?: true | RemindersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RemindersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RemindersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RemindersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RemindersMaxAggregateInputType
  }

  export type GetRemindersAggregateType<T extends RemindersAggregateArgs> = {
        [P in keyof T & keyof AggregateReminders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminders[P]>
      : GetScalarType<T[P], AggregateReminders[P]>
  }




  export type remindersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: remindersWhereInput
    orderBy?: remindersOrderByWithAggregationInput | remindersOrderByWithAggregationInput[]
    by: RemindersScalarFieldEnum[] | RemindersScalarFieldEnum
    having?: remindersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RemindersCountAggregateInputType | true
    _avg?: RemindersAvgAggregateInputType
    _sum?: RemindersSumAggregateInputType
    _min?: RemindersMinAggregateInputType
    _max?: RemindersMaxAggregateInputType
  }

  export type RemindersGroupByOutputType = {
    id: number
    user_id: number
    title: string
    description: string | null
    datetime_event: Date
    duration_minutes: number | null
    notified: boolean | null
    created_at: Date | null
    _count: RemindersCountAggregateOutputType | null
    _avg: RemindersAvgAggregateOutputType | null
    _sum: RemindersSumAggregateOutputType | null
    _min: RemindersMinAggregateOutputType | null
    _max: RemindersMaxAggregateOutputType | null
  }

  type GetRemindersGroupByPayload<T extends remindersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RemindersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RemindersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RemindersGroupByOutputType[P]>
            : GetScalarType<T[P], RemindersGroupByOutputType[P]>
        }
      >
    >


  export type remindersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    datetime_event?: boolean
    duration_minutes?: boolean
    notified?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminders"]>

  export type remindersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    datetime_event?: boolean
    duration_minutes?: boolean
    notified?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminders"]>

  export type remindersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    datetime_event?: boolean
    duration_minutes?: boolean
    notified?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminders"]>

  export type remindersSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    datetime_event?: boolean
    duration_minutes?: boolean
    notified?: boolean
    created_at?: boolean
  }

  export type remindersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "description" | "datetime_event" | "duration_minutes" | "notified" | "created_at", ExtArgs["result"]["reminders"]>
  export type remindersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type remindersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type remindersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $remindersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reminders"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      title: string
      description: string | null
      datetime_event: Date
      duration_minutes: number | null
      notified: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["reminders"]>
    composites: {}
  }

  type remindersGetPayload<S extends boolean | null | undefined | remindersDefaultArgs> = $Result.GetResult<Prisma.$remindersPayload, S>

  type remindersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<remindersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RemindersCountAggregateInputType | true
    }

  export interface remindersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reminders'], meta: { name: 'reminders' } }
    /**
     * Find zero or one Reminders that matches the filter.
     * @param {remindersFindUniqueArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends remindersFindUniqueArgs>(args: SelectSubset<T, remindersFindUniqueArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reminders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {remindersFindUniqueOrThrowArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends remindersFindUniqueOrThrowArgs>(args: SelectSubset<T, remindersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersFindFirstArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends remindersFindFirstArgs>(args?: SelectSubset<T, remindersFindFirstArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersFindFirstOrThrowArgs} args - Arguments to find a Reminders
     * @example
     * // Get one Reminders
     * const reminders = await prisma.reminders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends remindersFindFirstOrThrowArgs>(args?: SelectSubset<T, remindersFindFirstOrThrowArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminders.findMany()
     * 
     * // Get first 10 Reminders
     * const reminders = await prisma.reminders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const remindersWithIdOnly = await prisma.reminders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends remindersFindManyArgs>(args?: SelectSubset<T, remindersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reminders.
     * @param {remindersCreateArgs} args - Arguments to create a Reminders.
     * @example
     * // Create one Reminders
     * const Reminders = await prisma.reminders.create({
     *   data: {
     *     // ... data to create a Reminders
     *   }
     * })
     * 
     */
    create<T extends remindersCreateArgs>(args: SelectSubset<T, remindersCreateArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reminders.
     * @param {remindersCreateManyArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminders = await prisma.reminders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends remindersCreateManyArgs>(args?: SelectSubset<T, remindersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reminders and returns the data saved in the database.
     * @param {remindersCreateManyAndReturnArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminders = await prisma.reminders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reminders and only return the `id`
     * const remindersWithIdOnly = await prisma.reminders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends remindersCreateManyAndReturnArgs>(args?: SelectSubset<T, remindersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reminders.
     * @param {remindersDeleteArgs} args - Arguments to delete one Reminders.
     * @example
     * // Delete one Reminders
     * const Reminders = await prisma.reminders.delete({
     *   where: {
     *     // ... filter to delete one Reminders
     *   }
     * })
     * 
     */
    delete<T extends remindersDeleteArgs>(args: SelectSubset<T, remindersDeleteArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reminders.
     * @param {remindersUpdateArgs} args - Arguments to update one Reminders.
     * @example
     * // Update one Reminders
     * const reminders = await prisma.reminders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends remindersUpdateArgs>(args: SelectSubset<T, remindersUpdateArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reminders.
     * @param {remindersDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends remindersDeleteManyArgs>(args?: SelectSubset<T, remindersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminders = await prisma.reminders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends remindersUpdateManyArgs>(args: SelectSubset<T, remindersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders and returns the data updated in the database.
     * @param {remindersUpdateManyAndReturnArgs} args - Arguments to update many Reminders.
     * @example
     * // Update many Reminders
     * const reminders = await prisma.reminders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reminders and only return the `id`
     * const remindersWithIdOnly = await prisma.reminders.updateManyAndReturn({
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
    updateManyAndReturn<T extends remindersUpdateManyAndReturnArgs>(args: SelectSubset<T, remindersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reminders.
     * @param {remindersUpsertArgs} args - Arguments to update or create a Reminders.
     * @example
     * // Update or create a Reminders
     * const reminders = await prisma.reminders.upsert({
     *   create: {
     *     // ... data to create a Reminders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminders we want to update
     *   }
     * })
     */
    upsert<T extends remindersUpsertArgs>(args: SelectSubset<T, remindersUpsertArgs<ExtArgs>>): Prisma__remindersClient<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminders.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
    **/
    count<T extends remindersCountArgs>(
      args?: Subset<T, remindersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RemindersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemindersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RemindersAggregateArgs>(args: Subset<T, RemindersAggregateArgs>): Prisma.PrismaPromise<GetRemindersAggregateType<T>>

    /**
     * Group by Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remindersGroupByArgs} args - Group by arguments.
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
      T extends remindersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: remindersGroupByArgs['orderBy'] }
        : { orderBy?: remindersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, remindersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRemindersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reminders model
   */
  readonly fields: remindersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reminders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__remindersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the reminders model
   */
  interface remindersFieldRefs {
    readonly id: FieldRef<"reminders", 'Int'>
    readonly user_id: FieldRef<"reminders", 'Int'>
    readonly title: FieldRef<"reminders", 'String'>
    readonly description: FieldRef<"reminders", 'String'>
    readonly datetime_event: FieldRef<"reminders", 'DateTime'>
    readonly duration_minutes: FieldRef<"reminders", 'Int'>
    readonly notified: FieldRef<"reminders", 'Boolean'>
    readonly created_at: FieldRef<"reminders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reminders findUnique
   */
  export type remindersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * Filter, which reminders to fetch.
     */
    where: remindersWhereUniqueInput
  }

  /**
   * reminders findUniqueOrThrow
   */
  export type remindersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * Filter, which reminders to fetch.
     */
    where: remindersWhereUniqueInput
  }

  /**
   * reminders findFirst
   */
  export type remindersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * Filter, which reminders to fetch.
     */
    where?: remindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reminders to fetch.
     */
    orderBy?: remindersOrderByWithRelationInput | remindersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reminders.
     */
    cursor?: remindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reminders.
     */
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[]
  }

  /**
   * reminders findFirstOrThrow
   */
  export type remindersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * Filter, which reminders to fetch.
     */
    where?: remindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reminders to fetch.
     */
    orderBy?: remindersOrderByWithRelationInput | remindersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reminders.
     */
    cursor?: remindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reminders.
     */
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[]
  }

  /**
   * reminders findMany
   */
  export type remindersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * Filter, which reminders to fetch.
     */
    where?: remindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reminders to fetch.
     */
    orderBy?: remindersOrderByWithRelationInput | remindersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reminders.
     */
    cursor?: remindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reminders.
     */
    skip?: number
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[]
  }

  /**
   * reminders create
   */
  export type remindersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * The data needed to create a reminders.
     */
    data: XOR<remindersCreateInput, remindersUncheckedCreateInput>
  }

  /**
   * reminders createMany
   */
  export type remindersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reminders.
     */
    data: remindersCreateManyInput | remindersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reminders createManyAndReturn
   */
  export type remindersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * The data used to create many reminders.
     */
    data: remindersCreateManyInput | remindersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reminders update
   */
  export type remindersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * The data needed to update a reminders.
     */
    data: XOR<remindersUpdateInput, remindersUncheckedUpdateInput>
    /**
     * Choose, which reminders to update.
     */
    where: remindersWhereUniqueInput
  }

  /**
   * reminders updateMany
   */
  export type remindersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reminders.
     */
    data: XOR<remindersUpdateManyMutationInput, remindersUncheckedUpdateManyInput>
    /**
     * Filter which reminders to update
     */
    where?: remindersWhereInput
    /**
     * Limit how many reminders to update.
     */
    limit?: number
  }

  /**
   * reminders updateManyAndReturn
   */
  export type remindersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * The data used to update reminders.
     */
    data: XOR<remindersUpdateManyMutationInput, remindersUncheckedUpdateManyInput>
    /**
     * Filter which reminders to update
     */
    where?: remindersWhereInput
    /**
     * Limit how many reminders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reminders upsert
   */
  export type remindersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * The filter to search for the reminders to update in case it exists.
     */
    where: remindersWhereUniqueInput
    /**
     * In case the reminders found by the `where` argument doesn't exist, create a new reminders with this data.
     */
    create: XOR<remindersCreateInput, remindersUncheckedCreateInput>
    /**
     * In case the reminders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<remindersUpdateInput, remindersUncheckedUpdateInput>
  }

  /**
   * reminders delete
   */
  export type remindersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    /**
     * Filter which reminders to delete.
     */
    where: remindersWhereUniqueInput
  }

  /**
   * reminders deleteMany
   */
  export type remindersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reminders to delete
     */
    where?: remindersWhereInput
    /**
     * Limit how many reminders to delete.
     */
    limit?: number
  }

  /**
   * reminders without action
   */
  export type remindersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    age: number | null
    semester: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    age: number | null
    semester: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    phone_number: string | null
    name: string | null
    age: number | null
    mood: string | null
    has_seen_psychologist: boolean | null
    created_at: Date | null
    updated_at: Date | null
    plan: $Enums.UserPlan | null
    college: string | null
    semester: number | null
    gender: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    phone_number: string | null
    name: string | null
    age: number | null
    mood: string | null
    has_seen_psychologist: boolean | null
    created_at: Date | null
    updated_at: Date | null
    plan: $Enums.UserPlan | null
    college: string | null
    semester: number | null
    gender: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    phone_number: number
    name: number
    age: number
    mood: number
    has_seen_psychologist: number
    created_at: number
    updated_at: number
    plan: number
    college: number
    semester: number
    gender: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    age?: true
    semester?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    age?: true
    semester?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    phone_number?: true
    name?: true
    age?: true
    mood?: true
    has_seen_psychologist?: true
    created_at?: true
    updated_at?: true
    plan?: true
    college?: true
    semester?: true
    gender?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    phone_number?: true
    name?: true
    age?: true
    mood?: true
    has_seen_psychologist?: true
    created_at?: true
    updated_at?: true
    plan?: true
    college?: true
    semester?: true
    gender?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    phone_number?: true
    name?: true
    age?: true
    mood?: true
    has_seen_psychologist?: true
    created_at?: true
    updated_at?: true
    plan?: true
    college?: true
    semester?: true
    gender?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    phone_number: string
    name: string
    age: number
    mood: string | null
    has_seen_psychologist: boolean | null
    created_at: Date | null
    updated_at: Date | null
    plan: $Enums.UserPlan | null
    college: string | null
    semester: number | null
    gender: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone_number?: boolean
    name?: boolean
    age?: boolean
    mood?: boolean
    has_seen_psychologist?: boolean
    created_at?: boolean
    updated_at?: boolean
    plan?: boolean
    college?: boolean
    semester?: boolean
    gender?: boolean
    actions_logs?: boolean | users$actions_logsArgs<ExtArgs>
    reminders?: boolean | users$remindersArgs<ExtArgs>
    accounts?: boolean | users$accountsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone_number?: boolean
    name?: boolean
    age?: boolean
    mood?: boolean
    has_seen_psychologist?: boolean
    created_at?: boolean
    updated_at?: boolean
    plan?: boolean
    college?: boolean
    semester?: boolean
    gender?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone_number?: boolean
    name?: boolean
    age?: boolean
    mood?: boolean
    has_seen_psychologist?: boolean
    created_at?: boolean
    updated_at?: boolean
    plan?: boolean
    college?: boolean
    semester?: boolean
    gender?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    phone_number?: boolean
    name?: boolean
    age?: boolean
    mood?: boolean
    has_seen_psychologist?: boolean
    created_at?: boolean
    updated_at?: boolean
    plan?: boolean
    college?: boolean
    semester?: boolean
    gender?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone_number" | "name" | "age" | "mood" | "has_seen_psychologist" | "created_at" | "updated_at" | "plan" | "college" | "semester" | "gender", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions_logs?: boolean | users$actions_logsArgs<ExtArgs>
    reminders?: boolean | users$remindersArgs<ExtArgs>
    accounts?: boolean | users$accountsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      actions_logs: Prisma.$actions_logsPayload<ExtArgs>[]
      reminders: Prisma.$remindersPayload<ExtArgs>[]
      accounts: Prisma.$accountsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      phone_number: string
      name: string
      age: number
      mood: string | null
      has_seen_psychologist: boolean | null
      created_at: Date | null
      updated_at: Date | null
      plan: $Enums.UserPlan | null
      college: string | null
      semester: number | null
      gender: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actions_logs<T extends users$actions_logsArgs<ExtArgs> = {}>(args?: Subset<T, users$actions_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actions_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reminders<T extends users$remindersArgs<ExtArgs> = {}>(args?: Subset<T, users$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$remindersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends users$accountsArgs<ExtArgs> = {}>(args?: Subset<T, users$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly phone_number: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly age: FieldRef<"users", 'Int'>
    readonly mood: FieldRef<"users", 'String'>
    readonly has_seen_psychologist: FieldRef<"users", 'Boolean'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly plan: FieldRef<"users", 'UserPlan'>
    readonly college: FieldRef<"users", 'String'>
    readonly semester: FieldRef<"users", 'Int'>
    readonly gender: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.actions_logs
   */
  export type users$actions_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actions_logs
     */
    select?: actions_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actions_logs
     */
    omit?: actions_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actions_logsInclude<ExtArgs> | null
    where?: actions_logsWhereInput
    orderBy?: actions_logsOrderByWithRelationInput | actions_logsOrderByWithRelationInput[]
    cursor?: actions_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Actions_logsScalarFieldEnum | Actions_logsScalarFieldEnum[]
  }

  /**
   * users.reminders
   */
  export type users$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reminders
     */
    select?: remindersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reminders
     */
    omit?: remindersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: remindersInclude<ExtArgs> | null
    where?: remindersWhereInput
    orderBy?: remindersOrderByWithRelationInput | remindersOrderByWithRelationInput[]
    cursor?: remindersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RemindersScalarFieldEnum | RemindersScalarFieldEnum[]
  }

  /**
   * users.accounts
   */
  export type users$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    where?: accountsWhereInput
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    cursor?: accountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AccountsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AccountsMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AccountsMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AccountsCountAggregateOutputType = {
    id: number
    email: number
    password: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AccountsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AccountsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AccountsMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type AccountsMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type AccountsCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to aggregate.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type accountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountsWhereInput
    orderBy?: accountsOrderByWithAggregationInput | accountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _avg?: AccountsAvgAggregateInputType
    _sum?: AccountsSumAggregateInputType
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    id: number
    email: string
    password: string
    user_id: number
    created_at: Date
    updated_at: Date
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends accountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type accountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type accountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["accounts"]>
  export type accountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type accountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type accountsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $accountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accounts"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      user_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }

  type accountsGetPayload<S extends boolean | null | undefined | accountsDefaultArgs> = $Result.GetResult<Prisma.$accountsPayload, S>

  type accountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface accountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accounts'], meta: { name: 'accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {accountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountsFindUniqueArgs>(args: SelectSubset<T, accountsFindUniqueArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountsFindUniqueOrThrowArgs>(args: SelectSubset<T, accountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountsFindFirstArgs>(args?: SelectSubset<T, accountsFindFirstArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountsFindFirstOrThrowArgs>(args?: SelectSubset<T, accountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsWithIdOnly = await prisma.accounts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accountsFindManyArgs>(args?: SelectSubset<T, accountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accounts.
     * @param {accountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
     */
    create<T extends accountsCreateArgs>(args: SelectSubset<T, accountsCreateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {accountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountsCreateManyArgs>(args?: SelectSubset<T, accountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {accountsCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountsWithIdOnly = await prisma.accounts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accountsCreateManyAndReturnArgs>(args?: SelectSubset<T, accountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accounts.
     * @param {accountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
     */
    delete<T extends accountsDeleteArgs>(args: SelectSubset<T, accountsDeleteArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accounts.
     * @param {accountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountsUpdateArgs>(args: SelectSubset<T, accountsUpdateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {accountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountsDeleteManyArgs>(args?: SelectSubset<T, accountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountsUpdateManyArgs>(args: SelectSubset<T, accountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {accountsUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountsWithIdOnly = await prisma.accounts.updateManyAndReturn({
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
    updateManyAndReturn<T extends accountsUpdateManyAndReturnArgs>(args: SelectSubset<T, accountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accounts.
     * @param {accountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends accountsUpsertArgs>(args: SelectSubset<T, accountsUpsertArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountsCountArgs>(
      args?: Subset<T, accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsGroupByArgs} args - Group by arguments.
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
      T extends accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountsGroupByArgs['orderBy'] }
        : { orderBy?: accountsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accounts model
   */
  readonly fields: accountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the accounts model
   */
  interface accountsFieldRefs {
    readonly id: FieldRef<"accounts", 'Int'>
    readonly email: FieldRef<"accounts", 'String'>
    readonly password: FieldRef<"accounts", 'String'>
    readonly user_id: FieldRef<"accounts", 'Int'>
    readonly created_at: FieldRef<"accounts", 'DateTime'>
    readonly updated_at: FieldRef<"accounts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * accounts findUnique
   */
  export type accountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findUniqueOrThrow
   */
  export type accountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findFirst
   */
  export type accountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findFirstOrThrow
   */
  export type accountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findMany
   */
  export type accountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts create
   */
  export type accountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to create a accounts.
     */
    data: XOR<accountsCreateInput, accountsUncheckedCreateInput>
  }

  /**
   * accounts createMany
   */
  export type accountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accounts createManyAndReturn
   */
  export type accountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * accounts update
   */
  export type accountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to update a accounts.
     */
    data: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
    /**
     * Choose, which accounts to update.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts updateMany
   */
  export type accountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
  }

  /**
   * accounts updateManyAndReturn
   */
  export type accountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * accounts upsert
   */
  export type accountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The filter to search for the accounts to update in case it exists.
     */
    where: accountsWhereUniqueInput
    /**
     * In case the accounts found by the `where` argument doesn't exist, create a new accounts with this data.
     */
    create: XOR<accountsCreateInput, accountsUncheckedCreateInput>
    /**
     * In case the accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
  }

  /**
   * accounts delete
   */
  export type accountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter which accounts to delete.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts deleteMany
   */
  export type accountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to delete.
     */
    limit?: number
  }

  /**
   * accounts without action
   */
  export type accountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
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


  export const Actions_logsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    action_type: 'action_type',
    mood_at_action: 'mood_at_action',
    created_at: 'created_at'
  };

  export type Actions_logsScalarFieldEnum = (typeof Actions_logsScalarFieldEnum)[keyof typeof Actions_logsScalarFieldEnum]


  export const RemindersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    description: 'description',
    datetime_event: 'datetime_event',
    duration_minutes: 'duration_minutes',
    notified: 'notified',
    created_at: 'created_at'
  };

  export type RemindersScalarFieldEnum = (typeof RemindersScalarFieldEnum)[keyof typeof RemindersScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    phone_number: 'phone_number',
    name: 'name',
    age: 'age',
    mood: 'mood',
    has_seen_psychologist: 'has_seen_psychologist',
    created_at: 'created_at',
    updated_at: 'updated_at',
    plan: 'plan',
    college: 'college',
    semester: 'semester',
    gender: 'gender'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const AccountsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserPlan'
   */
  export type EnumUserPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserPlan'>
    


  /**
   * Reference to a field of type 'UserPlan[]'
   */
  export type ListEnumUserPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserPlan[]'>
    


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


  export type actions_logsWhereInput = {
    AND?: actions_logsWhereInput | actions_logsWhereInput[]
    OR?: actions_logsWhereInput[]
    NOT?: actions_logsWhereInput | actions_logsWhereInput[]
    id?: IntFilter<"actions_logs"> | number
    user_id?: IntFilter<"actions_logs"> | number
    action_type?: StringNullableFilter<"actions_logs"> | string | null
    mood_at_action?: StringNullableFilter<"actions_logs"> | string | null
    created_at?: DateTimeNullableFilter<"actions_logs"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type actions_logsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrderInput | SortOrder
    mood_at_action?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type actions_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: actions_logsWhereInput | actions_logsWhereInput[]
    OR?: actions_logsWhereInput[]
    NOT?: actions_logsWhereInput | actions_logsWhereInput[]
    user_id?: IntFilter<"actions_logs"> | number
    action_type?: StringNullableFilter<"actions_logs"> | string | null
    mood_at_action?: StringNullableFilter<"actions_logs"> | string | null
    created_at?: DateTimeNullableFilter<"actions_logs"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type actions_logsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrderInput | SortOrder
    mood_at_action?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: actions_logsCountOrderByAggregateInput
    _avg?: actions_logsAvgOrderByAggregateInput
    _max?: actions_logsMaxOrderByAggregateInput
    _min?: actions_logsMinOrderByAggregateInput
    _sum?: actions_logsSumOrderByAggregateInput
  }

  export type actions_logsScalarWhereWithAggregatesInput = {
    AND?: actions_logsScalarWhereWithAggregatesInput | actions_logsScalarWhereWithAggregatesInput[]
    OR?: actions_logsScalarWhereWithAggregatesInput[]
    NOT?: actions_logsScalarWhereWithAggregatesInput | actions_logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"actions_logs"> | number
    user_id?: IntWithAggregatesFilter<"actions_logs"> | number
    action_type?: StringNullableWithAggregatesFilter<"actions_logs"> | string | null
    mood_at_action?: StringNullableWithAggregatesFilter<"actions_logs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"actions_logs"> | Date | string | null
  }

  export type remindersWhereInput = {
    AND?: remindersWhereInput | remindersWhereInput[]
    OR?: remindersWhereInput[]
    NOT?: remindersWhereInput | remindersWhereInput[]
    id?: IntFilter<"reminders"> | number
    user_id?: IntFilter<"reminders"> | number
    title?: StringFilter<"reminders"> | string
    description?: StringNullableFilter<"reminders"> | string | null
    datetime_event?: DateTimeFilter<"reminders"> | Date | string
    duration_minutes?: IntNullableFilter<"reminders"> | number | null
    notified?: BoolNullableFilter<"reminders"> | boolean | null
    created_at?: DateTimeNullableFilter<"reminders"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type remindersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    datetime_event?: SortOrder
    duration_minutes?: SortOrderInput | SortOrder
    notified?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type remindersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: remindersWhereInput | remindersWhereInput[]
    OR?: remindersWhereInput[]
    NOT?: remindersWhereInput | remindersWhereInput[]
    user_id?: IntFilter<"reminders"> | number
    title?: StringFilter<"reminders"> | string
    description?: StringNullableFilter<"reminders"> | string | null
    datetime_event?: DateTimeFilter<"reminders"> | Date | string
    duration_minutes?: IntNullableFilter<"reminders"> | number | null
    notified?: BoolNullableFilter<"reminders"> | boolean | null
    created_at?: DateTimeNullableFilter<"reminders"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type remindersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    datetime_event?: SortOrder
    duration_minutes?: SortOrderInput | SortOrder
    notified?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: remindersCountOrderByAggregateInput
    _avg?: remindersAvgOrderByAggregateInput
    _max?: remindersMaxOrderByAggregateInput
    _min?: remindersMinOrderByAggregateInput
    _sum?: remindersSumOrderByAggregateInput
  }

  export type remindersScalarWhereWithAggregatesInput = {
    AND?: remindersScalarWhereWithAggregatesInput | remindersScalarWhereWithAggregatesInput[]
    OR?: remindersScalarWhereWithAggregatesInput[]
    NOT?: remindersScalarWhereWithAggregatesInput | remindersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"reminders"> | number
    user_id?: IntWithAggregatesFilter<"reminders"> | number
    title?: StringWithAggregatesFilter<"reminders"> | string
    description?: StringNullableWithAggregatesFilter<"reminders"> | string | null
    datetime_event?: DateTimeWithAggregatesFilter<"reminders"> | Date | string
    duration_minutes?: IntNullableWithAggregatesFilter<"reminders"> | number | null
    notified?: BoolNullableWithAggregatesFilter<"reminders"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"reminders"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    phone_number?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    age?: IntFilter<"users"> | number
    mood?: StringNullableFilter<"users"> | string | null
    has_seen_psychologist?: BoolNullableFilter<"users"> | boolean | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    plan?: EnumUserPlanNullableFilter<"users"> | $Enums.UserPlan | null
    college?: StringNullableFilter<"users"> | string | null
    semester?: IntNullableFilter<"users"> | number | null
    gender?: StringNullableFilter<"users"> | string | null
    actions_logs?: Actions_logsListRelationFilter
    reminders?: RemindersListRelationFilter
    accounts?: AccountsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    phone_number?: SortOrder
    name?: SortOrder
    age?: SortOrder
    mood?: SortOrderInput | SortOrder
    has_seen_psychologist?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    plan?: SortOrderInput | SortOrder
    college?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    actions_logs?: actions_logsOrderByRelationAggregateInput
    reminders?: remindersOrderByRelationAggregateInput
    accounts?: accountsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone_number?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    age?: IntFilter<"users"> | number
    mood?: StringNullableFilter<"users"> | string | null
    has_seen_psychologist?: BoolNullableFilter<"users"> | boolean | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    plan?: EnumUserPlanNullableFilter<"users"> | $Enums.UserPlan | null
    college?: StringNullableFilter<"users"> | string | null
    semester?: IntNullableFilter<"users"> | number | null
    gender?: StringNullableFilter<"users"> | string | null
    actions_logs?: Actions_logsListRelationFilter
    reminders?: RemindersListRelationFilter
    accounts?: AccountsListRelationFilter
  }, "id" | "phone_number">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    phone_number?: SortOrder
    name?: SortOrder
    age?: SortOrder
    mood?: SortOrderInput | SortOrder
    has_seen_psychologist?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    plan?: SortOrderInput | SortOrder
    college?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    phone_number?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    age?: IntWithAggregatesFilter<"users"> | number
    mood?: StringNullableWithAggregatesFilter<"users"> | string | null
    has_seen_psychologist?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    plan?: EnumUserPlanNullableWithAggregatesFilter<"users"> | $Enums.UserPlan | null
    college?: StringNullableWithAggregatesFilter<"users"> | string | null
    semester?: IntNullableWithAggregatesFilter<"users"> | number | null
    gender?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type accountsWhereInput = {
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    id?: IntFilter<"accounts"> | number
    email?: StringFilter<"accounts"> | string
    password?: StringFilter<"accounts"> | string
    user_id?: IntFilter<"accounts"> | number
    created_at?: DateTimeFilter<"accounts"> | Date | string
    updated_at?: DateTimeFilter<"accounts"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type accountsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type accountsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    password?: StringFilter<"accounts"> | string
    user_id?: IntFilter<"accounts"> | number
    created_at?: DateTimeFilter<"accounts"> | Date | string
    updated_at?: DateTimeFilter<"accounts"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "email">

  export type accountsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: accountsCountOrderByAggregateInput
    _avg?: accountsAvgOrderByAggregateInput
    _max?: accountsMaxOrderByAggregateInput
    _min?: accountsMinOrderByAggregateInput
    _sum?: accountsSumOrderByAggregateInput
  }

  export type accountsScalarWhereWithAggregatesInput = {
    AND?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    OR?: accountsScalarWhereWithAggregatesInput[]
    NOT?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"accounts"> | number
    email?: StringWithAggregatesFilter<"accounts"> | string
    password?: StringWithAggregatesFilter<"accounts"> | string
    user_id?: IntWithAggregatesFilter<"accounts"> | number
    created_at?: DateTimeWithAggregatesFilter<"accounts"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"accounts"> | Date | string
  }

  export type actions_logsCreateInput = {
    action_type?: string | null
    mood_at_action?: string | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutActions_logsInput
  }

  export type actions_logsUncheckedCreateInput = {
    id?: number
    user_id: number
    action_type?: string | null
    mood_at_action?: string | null
    created_at?: Date | string | null
  }

  export type actions_logsUpdateInput = {
    action_type?: NullableStringFieldUpdateOperationsInput | string | null
    mood_at_action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutActions_logsNestedInput
  }

  export type actions_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    action_type?: NullableStringFieldUpdateOperationsInput | string | null
    mood_at_action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type actions_logsCreateManyInput = {
    id?: number
    user_id: number
    action_type?: string | null
    mood_at_action?: string | null
    created_at?: Date | string | null
  }

  export type actions_logsUpdateManyMutationInput = {
    action_type?: NullableStringFieldUpdateOperationsInput | string | null
    mood_at_action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type actions_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    action_type?: NullableStringFieldUpdateOperationsInput | string | null
    mood_at_action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type remindersCreateInput = {
    title: string
    description?: string | null
    datetime_event: Date | string
    duration_minutes?: number | null
    notified?: boolean | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutRemindersInput
  }

  export type remindersUncheckedCreateInput = {
    id?: number
    user_id: number
    title: string
    description?: string | null
    datetime_event: Date | string
    duration_minutes?: number | null
    notified?: boolean | null
    created_at?: Date | string | null
  }

  export type remindersUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    datetime_event?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type remindersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    datetime_event?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type remindersCreateManyInput = {
    id?: number
    user_id: number
    title: string
    description?: string | null
    datetime_event: Date | string
    duration_minutes?: number | null
    notified?: boolean | null
    created_at?: Date | string | null
  }

  export type remindersUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    datetime_event?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type remindersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    datetime_event?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    phone_number: string
    name: string
    age: number
    mood?: string | null
    has_seen_psychologist?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    plan?: $Enums.UserPlan | null
    college?: string | null
    semester?: number | null
    gender?: string | null
    actions_logs?: actions_logsCreateNestedManyWithoutUsersInput
    reminders?: remindersCreateNestedManyWithoutUsersInput
    accounts?: accountsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    phone_number: string
    name: string
    age: number
    mood?: string | null
    has_seen_psychologist?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    plan?: $Enums.UserPlan | null
    college?: string | null
    semester?: number | null
    gender?: string | null
    actions_logs?: actions_logsUncheckedCreateNestedManyWithoutUsersInput
    reminders?: remindersUncheckedCreateNestedManyWithoutUsersInput
    accounts?: accountsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    phone_number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    has_seen_psychologist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: NullableEnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    actions_logs?: actions_logsUpdateManyWithoutUsersNestedInput
    reminders?: remindersUpdateManyWithoutUsersNestedInput
    accounts?: accountsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    has_seen_psychologist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: NullableEnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    actions_logs?: actions_logsUncheckedUpdateManyWithoutUsersNestedInput
    reminders?: remindersUncheckedUpdateManyWithoutUsersNestedInput
    accounts?: accountsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    phone_number: string
    name: string
    age: number
    mood?: string | null
    has_seen_psychologist?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    plan?: $Enums.UserPlan | null
    college?: string | null
    semester?: number | null
    gender?: string | null
  }

  export type usersUpdateManyMutationInput = {
    phone_number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    has_seen_psychologist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: NullableEnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    has_seen_psychologist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: NullableEnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accountsCreateInput = {
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutAccountsInput
  }

  export type accountsUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type accountsUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type accountsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsCreateManyInput = {
    id?: number
    email: string
    password: string
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type accountsUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type actions_logsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrder
    mood_at_action?: SortOrder
    created_at?: SortOrder
  }

  export type actions_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type actions_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrder
    mood_at_action?: SortOrder
    created_at?: SortOrder
  }

  export type actions_logsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action_type?: SortOrder
    mood_at_action?: SortOrder
    created_at?: SortOrder
  }

  export type actions_logsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
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
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type remindersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    datetime_event?: SortOrder
    duration_minutes?: SortOrder
    notified?: SortOrder
    created_at?: SortOrder
  }

  export type remindersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    duration_minutes?: SortOrder
  }

  export type remindersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    datetime_event?: SortOrder
    duration_minutes?: SortOrder
    notified?: SortOrder
    created_at?: SortOrder
  }

  export type remindersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    datetime_event?: SortOrder
    duration_minutes?: SortOrder
    notified?: SortOrder
    created_at?: SortOrder
  }

  export type remindersSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    duration_minutes?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumUserPlanNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPlan | EnumUserPlanFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserPlan[] | ListEnumUserPlanFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserPlan[] | ListEnumUserPlanFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserPlanNullableFilter<$PrismaModel> | $Enums.UserPlan | null
  }

  export type Actions_logsListRelationFilter = {
    every?: actions_logsWhereInput
    some?: actions_logsWhereInput
    none?: actions_logsWhereInput
  }

  export type RemindersListRelationFilter = {
    every?: remindersWhereInput
    some?: remindersWhereInput
    none?: remindersWhereInput
  }

  export type AccountsListRelationFilter = {
    every?: accountsWhereInput
    some?: accountsWhereInput
    none?: accountsWhereInput
  }

  export type actions_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type remindersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type accountsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
    name?: SortOrder
    age?: SortOrder
    mood?: SortOrder
    has_seen_psychologist?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    plan?: SortOrder
    college?: SortOrder
    semester?: SortOrder
    gender?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    semester?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
    name?: SortOrder
    age?: SortOrder
    mood?: SortOrder
    has_seen_psychologist?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    plan?: SortOrder
    college?: SortOrder
    semester?: SortOrder
    gender?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
    name?: SortOrder
    age?: SortOrder
    mood?: SortOrder
    has_seen_psychologist?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    plan?: SortOrder
    college?: SortOrder
    semester?: SortOrder
    gender?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    semester?: SortOrder
  }

  export type EnumUserPlanNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPlan | EnumUserPlanFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserPlan[] | ListEnumUserPlanFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserPlan[] | ListEnumUserPlanFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserPlanNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserPlan | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserPlanNullableFilter<$PrismaModel>
    _max?: NestedEnumUserPlanNullableFilter<$PrismaModel>
  }

  export type accountsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type accountsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type accountsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type accountsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type accountsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type usersCreateNestedOneWithoutActions_logsInput = {
    create?: XOR<usersCreateWithoutActions_logsInput, usersUncheckedCreateWithoutActions_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutActions_logsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutActions_logsNestedInput = {
    create?: XOR<usersCreateWithoutActions_logsInput, usersUncheckedCreateWithoutActions_logsInput>
    connectOrCreate?: usersCreateOrConnectWithoutActions_logsInput
    upsert?: usersUpsertWithoutActions_logsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutActions_logsInput, usersUpdateWithoutActions_logsInput>, usersUncheckedUpdateWithoutActions_logsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutRemindersInput = {
    create?: XOR<usersCreateWithoutRemindersInput, usersUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: usersCreateOrConnectWithoutRemindersInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type usersUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<usersCreateWithoutRemindersInput, usersUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: usersCreateOrConnectWithoutRemindersInput
    upsert?: usersUpsertWithoutRemindersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRemindersInput, usersUpdateWithoutRemindersInput>, usersUncheckedUpdateWithoutRemindersInput>
  }

  export type actions_logsCreateNestedManyWithoutUsersInput = {
    create?: XOR<actions_logsCreateWithoutUsersInput, actions_logsUncheckedCreateWithoutUsersInput> | actions_logsCreateWithoutUsersInput[] | actions_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: actions_logsCreateOrConnectWithoutUsersInput | actions_logsCreateOrConnectWithoutUsersInput[]
    createMany?: actions_logsCreateManyUsersInputEnvelope
    connect?: actions_logsWhereUniqueInput | actions_logsWhereUniqueInput[]
  }

  export type remindersCreateNestedManyWithoutUsersInput = {
    create?: XOR<remindersCreateWithoutUsersInput, remindersUncheckedCreateWithoutUsersInput> | remindersCreateWithoutUsersInput[] | remindersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: remindersCreateOrConnectWithoutUsersInput | remindersCreateOrConnectWithoutUsersInput[]
    createMany?: remindersCreateManyUsersInputEnvelope
    connect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
  }

  export type accountsCreateNestedManyWithoutUsersInput = {
    create?: XOR<accountsCreateWithoutUsersInput, accountsUncheckedCreateWithoutUsersInput> | accountsCreateWithoutUsersInput[] | accountsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutUsersInput | accountsCreateOrConnectWithoutUsersInput[]
    createMany?: accountsCreateManyUsersInputEnvelope
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
  }

  export type actions_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<actions_logsCreateWithoutUsersInput, actions_logsUncheckedCreateWithoutUsersInput> | actions_logsCreateWithoutUsersInput[] | actions_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: actions_logsCreateOrConnectWithoutUsersInput | actions_logsCreateOrConnectWithoutUsersInput[]
    createMany?: actions_logsCreateManyUsersInputEnvelope
    connect?: actions_logsWhereUniqueInput | actions_logsWhereUniqueInput[]
  }

  export type remindersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<remindersCreateWithoutUsersInput, remindersUncheckedCreateWithoutUsersInput> | remindersCreateWithoutUsersInput[] | remindersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: remindersCreateOrConnectWithoutUsersInput | remindersCreateOrConnectWithoutUsersInput[]
    createMany?: remindersCreateManyUsersInputEnvelope
    connect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
  }

  export type accountsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<accountsCreateWithoutUsersInput, accountsUncheckedCreateWithoutUsersInput> | accountsCreateWithoutUsersInput[] | accountsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutUsersInput | accountsCreateOrConnectWithoutUsersInput[]
    createMany?: accountsCreateManyUsersInputEnvelope
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
  }

  export type NullableEnumUserPlanFieldUpdateOperationsInput = {
    set?: $Enums.UserPlan | null
  }

  export type actions_logsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<actions_logsCreateWithoutUsersInput, actions_logsUncheckedCreateWithoutUsersInput> | actions_logsCreateWithoutUsersInput[] | actions_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: actions_logsCreateOrConnectWithoutUsersInput | actions_logsCreateOrConnectWithoutUsersInput[]
    upsert?: actions_logsUpsertWithWhereUniqueWithoutUsersInput | actions_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: actions_logsCreateManyUsersInputEnvelope
    set?: actions_logsWhereUniqueInput | actions_logsWhereUniqueInput[]
    disconnect?: actions_logsWhereUniqueInput | actions_logsWhereUniqueInput[]
    delete?: actions_logsWhereUniqueInput | actions_logsWhereUniqueInput[]
    connect?: actions_logsWhereUniqueInput | actions_logsWhereUniqueInput[]
    update?: actions_logsUpdateWithWhereUniqueWithoutUsersInput | actions_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: actions_logsUpdateManyWithWhereWithoutUsersInput | actions_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: actions_logsScalarWhereInput | actions_logsScalarWhereInput[]
  }

  export type remindersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<remindersCreateWithoutUsersInput, remindersUncheckedCreateWithoutUsersInput> | remindersCreateWithoutUsersInput[] | remindersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: remindersCreateOrConnectWithoutUsersInput | remindersCreateOrConnectWithoutUsersInput[]
    upsert?: remindersUpsertWithWhereUniqueWithoutUsersInput | remindersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: remindersCreateManyUsersInputEnvelope
    set?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    disconnect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    delete?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    connect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    update?: remindersUpdateWithWhereUniqueWithoutUsersInput | remindersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: remindersUpdateManyWithWhereWithoutUsersInput | remindersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: remindersScalarWhereInput | remindersScalarWhereInput[]
  }

  export type accountsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<accountsCreateWithoutUsersInput, accountsUncheckedCreateWithoutUsersInput> | accountsCreateWithoutUsersInput[] | accountsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutUsersInput | accountsCreateOrConnectWithoutUsersInput[]
    upsert?: accountsUpsertWithWhereUniqueWithoutUsersInput | accountsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: accountsCreateManyUsersInputEnvelope
    set?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    disconnect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    delete?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    update?: accountsUpdateWithWhereUniqueWithoutUsersInput | accountsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: accountsUpdateManyWithWhereWithoutUsersInput | accountsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: accountsScalarWhereInput | accountsScalarWhereInput[]
  }

  export type actions_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<actions_logsCreateWithoutUsersInput, actions_logsUncheckedCreateWithoutUsersInput> | actions_logsCreateWithoutUsersInput[] | actions_logsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: actions_logsCreateOrConnectWithoutUsersInput | actions_logsCreateOrConnectWithoutUsersInput[]
    upsert?: actions_logsUpsertWithWhereUniqueWithoutUsersInput | actions_logsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: actions_logsCreateManyUsersInputEnvelope
    set?: actions_logsWhereUniqueInput | actions_logsWhereUniqueInput[]
    disconnect?: actions_logsWhereUniqueInput | actions_logsWhereUniqueInput[]
    delete?: actions_logsWhereUniqueInput | actions_logsWhereUniqueInput[]
    connect?: actions_logsWhereUniqueInput | actions_logsWhereUniqueInput[]
    update?: actions_logsUpdateWithWhereUniqueWithoutUsersInput | actions_logsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: actions_logsUpdateManyWithWhereWithoutUsersInput | actions_logsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: actions_logsScalarWhereInput | actions_logsScalarWhereInput[]
  }

  export type remindersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<remindersCreateWithoutUsersInput, remindersUncheckedCreateWithoutUsersInput> | remindersCreateWithoutUsersInput[] | remindersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: remindersCreateOrConnectWithoutUsersInput | remindersCreateOrConnectWithoutUsersInput[]
    upsert?: remindersUpsertWithWhereUniqueWithoutUsersInput | remindersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: remindersCreateManyUsersInputEnvelope
    set?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    disconnect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    delete?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    connect?: remindersWhereUniqueInput | remindersWhereUniqueInput[]
    update?: remindersUpdateWithWhereUniqueWithoutUsersInput | remindersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: remindersUpdateManyWithWhereWithoutUsersInput | remindersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: remindersScalarWhereInput | remindersScalarWhereInput[]
  }

  export type accountsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<accountsCreateWithoutUsersInput, accountsUncheckedCreateWithoutUsersInput> | accountsCreateWithoutUsersInput[] | accountsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: accountsCreateOrConnectWithoutUsersInput | accountsCreateOrConnectWithoutUsersInput[]
    upsert?: accountsUpsertWithWhereUniqueWithoutUsersInput | accountsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: accountsCreateManyUsersInputEnvelope
    set?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    disconnect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    delete?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    connect?: accountsWhereUniqueInput | accountsWhereUniqueInput[]
    update?: accountsUpdateWithWhereUniqueWithoutUsersInput | accountsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: accountsUpdateManyWithWhereWithoutUsersInput | accountsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: accountsScalarWhereInput | accountsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutAccountsInput = {
    create?: XOR<usersCreateWithoutAccountsInput, usersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAccountsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<usersCreateWithoutAccountsInput, usersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAccountsInput
    upsert?: usersUpsertWithoutAccountsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAccountsInput, usersUpdateWithoutAccountsInput>, usersUncheckedUpdateWithoutAccountsInput>
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
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserPlanNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPlan | EnumUserPlanFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserPlan[] | ListEnumUserPlanFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserPlan[] | ListEnumUserPlanFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserPlanNullableFilter<$PrismaModel> | $Enums.UserPlan | null
  }

  export type NestedEnumUserPlanNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserPlan | EnumUserPlanFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserPlan[] | ListEnumUserPlanFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserPlan[] | ListEnumUserPlanFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserPlanNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserPlan | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserPlanNullableFilter<$PrismaModel>
    _max?: NestedEnumUserPlanNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutActions_logsInput = {
    phone_number: string
    name: string
    age: number
    mood?: string | null
    has_seen_psychologist?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    plan?: $Enums.UserPlan | null
    college?: string | null
    semester?: number | null
    gender?: string | null
    reminders?: remindersCreateNestedManyWithoutUsersInput
    accounts?: accountsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutActions_logsInput = {
    id?: number
    phone_number: string
    name: string
    age: number
    mood?: string | null
    has_seen_psychologist?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    plan?: $Enums.UserPlan | null
    college?: string | null
    semester?: number | null
    gender?: string | null
    reminders?: remindersUncheckedCreateNestedManyWithoutUsersInput
    accounts?: accountsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutActions_logsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutActions_logsInput, usersUncheckedCreateWithoutActions_logsInput>
  }

  export type usersUpsertWithoutActions_logsInput = {
    update: XOR<usersUpdateWithoutActions_logsInput, usersUncheckedUpdateWithoutActions_logsInput>
    create: XOR<usersCreateWithoutActions_logsInput, usersUncheckedCreateWithoutActions_logsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutActions_logsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutActions_logsInput, usersUncheckedUpdateWithoutActions_logsInput>
  }

  export type usersUpdateWithoutActions_logsInput = {
    phone_number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    has_seen_psychologist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: NullableEnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    reminders?: remindersUpdateManyWithoutUsersNestedInput
    accounts?: accountsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutActions_logsInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    has_seen_psychologist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: NullableEnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    reminders?: remindersUncheckedUpdateManyWithoutUsersNestedInput
    accounts?: accountsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutRemindersInput = {
    phone_number: string
    name: string
    age: number
    mood?: string | null
    has_seen_psychologist?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    plan?: $Enums.UserPlan | null
    college?: string | null
    semester?: number | null
    gender?: string | null
    actions_logs?: actions_logsCreateNestedManyWithoutUsersInput
    accounts?: accountsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRemindersInput = {
    id?: number
    phone_number: string
    name: string
    age: number
    mood?: string | null
    has_seen_psychologist?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    plan?: $Enums.UserPlan | null
    college?: string | null
    semester?: number | null
    gender?: string | null
    actions_logs?: actions_logsUncheckedCreateNestedManyWithoutUsersInput
    accounts?: accountsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRemindersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRemindersInput, usersUncheckedCreateWithoutRemindersInput>
  }

  export type usersUpsertWithoutRemindersInput = {
    update: XOR<usersUpdateWithoutRemindersInput, usersUncheckedUpdateWithoutRemindersInput>
    create: XOR<usersCreateWithoutRemindersInput, usersUncheckedCreateWithoutRemindersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRemindersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRemindersInput, usersUncheckedUpdateWithoutRemindersInput>
  }

  export type usersUpdateWithoutRemindersInput = {
    phone_number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    has_seen_psychologist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: NullableEnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    actions_logs?: actions_logsUpdateManyWithoutUsersNestedInput
    accounts?: accountsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRemindersInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    has_seen_psychologist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: NullableEnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    actions_logs?: actions_logsUncheckedUpdateManyWithoutUsersNestedInput
    accounts?: accountsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type actions_logsCreateWithoutUsersInput = {
    action_type?: string | null
    mood_at_action?: string | null
    created_at?: Date | string | null
  }

  export type actions_logsUncheckedCreateWithoutUsersInput = {
    id?: number
    action_type?: string | null
    mood_at_action?: string | null
    created_at?: Date | string | null
  }

  export type actions_logsCreateOrConnectWithoutUsersInput = {
    where: actions_logsWhereUniqueInput
    create: XOR<actions_logsCreateWithoutUsersInput, actions_logsUncheckedCreateWithoutUsersInput>
  }

  export type actions_logsCreateManyUsersInputEnvelope = {
    data: actions_logsCreateManyUsersInput | actions_logsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type remindersCreateWithoutUsersInput = {
    title: string
    description?: string | null
    datetime_event: Date | string
    duration_minutes?: number | null
    notified?: boolean | null
    created_at?: Date | string | null
  }

  export type remindersUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    description?: string | null
    datetime_event: Date | string
    duration_minutes?: number | null
    notified?: boolean | null
    created_at?: Date | string | null
  }

  export type remindersCreateOrConnectWithoutUsersInput = {
    where: remindersWhereUniqueInput
    create: XOR<remindersCreateWithoutUsersInput, remindersUncheckedCreateWithoutUsersInput>
  }

  export type remindersCreateManyUsersInputEnvelope = {
    data: remindersCreateManyUsersInput | remindersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type accountsCreateWithoutUsersInput = {
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type accountsUncheckedCreateWithoutUsersInput = {
    id?: number
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type accountsCreateOrConnectWithoutUsersInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutUsersInput, accountsUncheckedCreateWithoutUsersInput>
  }

  export type accountsCreateManyUsersInputEnvelope = {
    data: accountsCreateManyUsersInput | accountsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type actions_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: actions_logsWhereUniqueInput
    update: XOR<actions_logsUpdateWithoutUsersInput, actions_logsUncheckedUpdateWithoutUsersInput>
    create: XOR<actions_logsCreateWithoutUsersInput, actions_logsUncheckedCreateWithoutUsersInput>
  }

  export type actions_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: actions_logsWhereUniqueInput
    data: XOR<actions_logsUpdateWithoutUsersInput, actions_logsUncheckedUpdateWithoutUsersInput>
  }

  export type actions_logsUpdateManyWithWhereWithoutUsersInput = {
    where: actions_logsScalarWhereInput
    data: XOR<actions_logsUpdateManyMutationInput, actions_logsUncheckedUpdateManyWithoutUsersInput>
  }

  export type actions_logsScalarWhereInput = {
    AND?: actions_logsScalarWhereInput | actions_logsScalarWhereInput[]
    OR?: actions_logsScalarWhereInput[]
    NOT?: actions_logsScalarWhereInput | actions_logsScalarWhereInput[]
    id?: IntFilter<"actions_logs"> | number
    user_id?: IntFilter<"actions_logs"> | number
    action_type?: StringNullableFilter<"actions_logs"> | string | null
    mood_at_action?: StringNullableFilter<"actions_logs"> | string | null
    created_at?: DateTimeNullableFilter<"actions_logs"> | Date | string | null
  }

  export type remindersUpsertWithWhereUniqueWithoutUsersInput = {
    where: remindersWhereUniqueInput
    update: XOR<remindersUpdateWithoutUsersInput, remindersUncheckedUpdateWithoutUsersInput>
    create: XOR<remindersCreateWithoutUsersInput, remindersUncheckedCreateWithoutUsersInput>
  }

  export type remindersUpdateWithWhereUniqueWithoutUsersInput = {
    where: remindersWhereUniqueInput
    data: XOR<remindersUpdateWithoutUsersInput, remindersUncheckedUpdateWithoutUsersInput>
  }

  export type remindersUpdateManyWithWhereWithoutUsersInput = {
    where: remindersScalarWhereInput
    data: XOR<remindersUpdateManyMutationInput, remindersUncheckedUpdateManyWithoutUsersInput>
  }

  export type remindersScalarWhereInput = {
    AND?: remindersScalarWhereInput | remindersScalarWhereInput[]
    OR?: remindersScalarWhereInput[]
    NOT?: remindersScalarWhereInput | remindersScalarWhereInput[]
    id?: IntFilter<"reminders"> | number
    user_id?: IntFilter<"reminders"> | number
    title?: StringFilter<"reminders"> | string
    description?: StringNullableFilter<"reminders"> | string | null
    datetime_event?: DateTimeFilter<"reminders"> | Date | string
    duration_minutes?: IntNullableFilter<"reminders"> | number | null
    notified?: BoolNullableFilter<"reminders"> | boolean | null
    created_at?: DateTimeNullableFilter<"reminders"> | Date | string | null
  }

  export type accountsUpsertWithWhereUniqueWithoutUsersInput = {
    where: accountsWhereUniqueInput
    update: XOR<accountsUpdateWithoutUsersInput, accountsUncheckedUpdateWithoutUsersInput>
    create: XOR<accountsCreateWithoutUsersInput, accountsUncheckedCreateWithoutUsersInput>
  }

  export type accountsUpdateWithWhereUniqueWithoutUsersInput = {
    where: accountsWhereUniqueInput
    data: XOR<accountsUpdateWithoutUsersInput, accountsUncheckedUpdateWithoutUsersInput>
  }

  export type accountsUpdateManyWithWhereWithoutUsersInput = {
    where: accountsScalarWhereInput
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyWithoutUsersInput>
  }

  export type accountsScalarWhereInput = {
    AND?: accountsScalarWhereInput | accountsScalarWhereInput[]
    OR?: accountsScalarWhereInput[]
    NOT?: accountsScalarWhereInput | accountsScalarWhereInput[]
    id?: IntFilter<"accounts"> | number
    email?: StringFilter<"accounts"> | string
    password?: StringFilter<"accounts"> | string
    user_id?: IntFilter<"accounts"> | number
    created_at?: DateTimeFilter<"accounts"> | Date | string
    updated_at?: DateTimeFilter<"accounts"> | Date | string
  }

  export type usersCreateWithoutAccountsInput = {
    phone_number: string
    name: string
    age: number
    mood?: string | null
    has_seen_psychologist?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    plan?: $Enums.UserPlan | null
    college?: string | null
    semester?: number | null
    gender?: string | null
    actions_logs?: actions_logsCreateNestedManyWithoutUsersInput
    reminders?: remindersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAccountsInput = {
    id?: number
    phone_number: string
    name: string
    age: number
    mood?: string | null
    has_seen_psychologist?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    plan?: $Enums.UserPlan | null
    college?: string | null
    semester?: number | null
    gender?: string | null
    actions_logs?: actions_logsUncheckedCreateNestedManyWithoutUsersInput
    reminders?: remindersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAccountsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAccountsInput, usersUncheckedCreateWithoutAccountsInput>
  }

  export type usersUpsertWithoutAccountsInput = {
    update: XOR<usersUpdateWithoutAccountsInput, usersUncheckedUpdateWithoutAccountsInput>
    create: XOR<usersCreateWithoutAccountsInput, usersUncheckedCreateWithoutAccountsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAccountsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAccountsInput, usersUncheckedUpdateWithoutAccountsInput>
  }

  export type usersUpdateWithoutAccountsInput = {
    phone_number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    has_seen_psychologist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: NullableEnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    actions_logs?: actions_logsUpdateManyWithoutUsersNestedInput
    reminders?: remindersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    has_seen_psychologist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan?: NullableEnumUserPlanFieldUpdateOperationsInput | $Enums.UserPlan | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    actions_logs?: actions_logsUncheckedUpdateManyWithoutUsersNestedInput
    reminders?: remindersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type actions_logsCreateManyUsersInput = {
    id?: number
    action_type?: string | null
    mood_at_action?: string | null
    created_at?: Date | string | null
  }

  export type remindersCreateManyUsersInput = {
    id?: number
    title: string
    description?: string | null
    datetime_event: Date | string
    duration_minutes?: number | null
    notified?: boolean | null
    created_at?: Date | string | null
  }

  export type accountsCreateManyUsersInput = {
    id?: number
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type actions_logsUpdateWithoutUsersInput = {
    action_type?: NullableStringFieldUpdateOperationsInput | string | null
    mood_at_action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type actions_logsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_type?: NullableStringFieldUpdateOperationsInput | string | null
    mood_at_action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type actions_logsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_type?: NullableStringFieldUpdateOperationsInput | string | null
    mood_at_action?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type remindersUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    datetime_event?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type remindersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    datetime_event?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type remindersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    datetime_event?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_minutes?: NullableIntFieldUpdateOperationsInput | number | null
    notified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type accountsUpdateWithoutUsersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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