/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export declare class Currency {
    readonly decimals: number;
    readonly symbol?: string;
    readonly name?: string;
    /**
     * The ETHER instance of the base class `Currency`.
     */
    static readonly ETHER: Currency;
    /**
     * The NOVA instance of the base class `Currency`.
     */
    static readonly NOVA: Currency;
    /**
     * The BINANCE_COIN instance of the base class `Currency`.
     */
    static readonly BINANCE_COIN: Currency;
    /**
     * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    protected constructor(decimals: number, symbol?: string, name?: string);
}
declare const ETHER: Currency;
declare const NOVA: Currency;
declare const BINANCE_COIN: Currency;
declare const DEFAULT_CURRENCIES: Currency[];
export { ETHER, NOVA, BINANCE_COIN, DEFAULT_CURRENCIES };
