export interface CountryResponse {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    flag?:        string;
    flags:        string[];
    demonyms?:    Demonyms;
}

export interface Currencies {
    EUR?: Aed;
    RWF?: Aed;
    KYD?: Aed;
    LSL?: Aed;
    ZAR?: Aed;
    AUD?: Aed;
    TVD?: Aed;
    ALL?: Aed;
    DZD?: Aed;
    BMD?: Aed;
    MNT?: Aed;
    BRL?: Aed;
    VND?: Aed;
    NOK?: Aed;
    LKR?: Aed;
    XOF?: Aed;
    SHP?: Aed;
    NZD?: Aed;
    COP?: Aed;
    GIP?: Aed;
    MUR?: Aed;
    PEN?: Aed;
    CNY?: Aed;
    MWK?: Aed;
    MVR?: Aed;
    DKK?: Aed;
    FOK?: Aed;
    ARS?: Aed;
    USD?: Aed;
    MYR?: Aed;
    GNF?: Aed;
    BSD?: Aed;
    AFN?: Aed;
    MAD?: Aed;
    MRU?: Aed;
    JOD?: Aed;
    BWP?: Aed;
    GBP?: Aed;
    INR?: Aed;
    JPY?: Aed;
    ZWB?: Aed;
    BZD?: Aed;
    AOA?: Aed;
    PHP?: Aed;
    XAF?: Aed;
    GGP?: Aed;
    ISK?: Aed;
    LRD?: Aed;
    TMT?: Aed;
    SLL?: Aed;
    VES?: Aed;
    NPR?: Aed;
    OMR?: Aed;
    RON?: Aed;
    ERN?: Aed;
    CDF?: Aed;
    JEP?: Aed;
    LBP?: Aed;
    YER?: Aed;
    CRC?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    IQD?: Aed;
    KID?: Aed;
    CHF?: Aed;
    SDG?: BAM;
    STN?: Aed;
    XCD?: Aed;
    ANG?: Aed;
    BYN?: Aed;
    SBD?: Aed;
    MZN?: Aed;
    PYG?: Aed;
    AED?: Aed;
    CAD?: Aed;
    NAD?: Aed;
    UZS?: Aed;
    CZK?: Aed;
    GMD?: Aed;
    PKR?: Aed;
    TJS?: Aed;
    HTG?: Aed;
    BIF?: Aed;
    UAH?: Aed;
    RSD?: Aed;
    AMD?: Aed;
    THB?: Aed;
    HNL?: Aed;
    SCR?: Aed;
    VUV?: Aed;
    XPF?: Aed;
    NIO?: Aed;
    ZMW?: Aed;
    DJF?: Aed;
    CKD?: Aed;
    UYU?: Aed;
    TRY?: Aed;
    QAR?: Aed;
    UGX?: Aed;
    BHD?: Aed;
    WST?: Aed;
    KPW?: Aed;
    PAB?: Aed;
    NGN?: Aed;
    BDT?: Aed;
    MXN?: Aed;
    KMF?: Aed;
    GYD?: Aed;
    BBD?: Aed;
    SAR?: Aed;
    MKD?: Aed;
    ETB?: Aed;
    KGS?: Aed;
    GEL?: Aed;
    BTN?: Aed;
    CVE?: Aed;
    GHS?: Aed;
    JMD?: Aed;
    BGN?: Aed;
    HKD?: Aed;
    KHR?: Aed;
    KES?: Aed;
    MOP?: Aed;
    EGP?: Aed;
    ILS?: Aed;
    IDR?: Aed;
    KWD?: Aed;
    SYP?: Aed;
    BND?: Aed;
    SGD?: Aed;
    HRK?: Aed;
    MDL?: Aed;
    KZT?: Aed;
    SZL?: Aed;
    CLP?: Aed;
    BAM?: BAM;
    LYD?: Aed;
    FKP?: Aed;
    PLN?: Aed;
    PGK?: Aed;
    SOS?: Aed;
    MGA?: Aed;
    MMK?: Aed;
    TWD?: Aed;
    IRR?: Aed;
    KRW?: Aed;
    RUB?: Aed;
    SSP?: Aed;
    SEK?: Aed;
    SRD?: Aed;
    AWG?: Aed;
    FJD?: Aed;
    TZS?: Aed;
    LAK?: Aed;
    BOB?: Aed;
    DOP?: Aed;
    GTQ?: Aed;
    HUF?: Aed;
    AZN?: Aed;
    TOP?: Aed;
    TTD?: Aed;
    IMP?: Aed;
    TND?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
