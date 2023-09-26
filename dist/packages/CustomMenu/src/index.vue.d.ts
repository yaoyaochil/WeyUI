declare const _sfc_main: import("vue").DefineComponent<{}, {
    select_menu_id: import("vue").Ref<number>;
    select_menu_sub_id: import("vue").Ref<number>;
    menu_type: import("vue").Ref<string>;
    menu_type_options: import("vue").Ref<{
        label: string;
        value: string;
    }[]>;
    formData: import("vue").Ref<{
        [x: string]: any;
    }>;
    rule: import("vue").Ref<{
        name: ({
            required: boolean;
            message: string;
            trigger: string;
            minLength?: undefined;
            maxLength?: undefined;
        } | {
            minLength: number;
            message: string;
            trigger: string;
            required?: undefined;
            maxLength?: undefined;
        } | {
            maxLength: number;
            message: string;
            trigger: string;
            required?: undefined;
            minLength?: undefined;
        })[];
        url: ({
            required: boolean;
            message: string;
            trigger: string;
            match?: undefined;
        } | {
            match: {
                exec: (string: string) => RegExpExecArray | null;
                test: (string: string) => boolean;
                readonly source: string;
                readonly global: boolean;
                readonly ignoreCase: boolean;
                readonly multiline: boolean;
                lastIndex: number;
                compile: (pattern: string, flags?: string | undefined) => RegExp;
                readonly flags: string;
                readonly sticky: boolean;
                readonly unicode: boolean;
                readonly dotAll: boolean;
                [Symbol.match]: (string: string) => RegExpMatchArray | null;
                [Symbol.replace]: {
                    (string: string, replaceValue: string): string;
                    (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                };
                [Symbol.search]: (string: string) => number;
                [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
            };
            message: string;
            trigger: string;
            required?: undefined;
        })[];
        appid: ({
            required: boolean;
            message: string;
            trigger: string;
            match?: undefined;
        } | {
            match: {
                exec: (string: string) => RegExpExecArray | null;
                test: (string: string) => boolean;
                readonly source: string;
                readonly global: boolean;
                readonly ignoreCase: boolean;
                readonly multiline: boolean;
                lastIndex: number;
                compile: (pattern: string, flags?: string | undefined) => RegExp;
                readonly flags: string;
                readonly sticky: boolean;
                readonly unicode: boolean;
                readonly dotAll: boolean;
                [Symbol.match]: (string: string) => RegExpMatchArray | null;
                [Symbol.replace]: {
                    (string: string, replaceValue: string): string;
                    (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                };
                [Symbol.search]: (string: string) => number;
                [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
            };
            message: string;
            trigger: string;
            required?: undefined;
        })[];
        pagepath: ({
            required: boolean;
            message: string;
            trigger: string;
            match?: undefined;
        } | {
            match: {
                exec: (string: string) => RegExpExecArray | null;
                test: (string: string) => boolean;
                readonly source: string;
                readonly global: boolean;
                readonly ignoreCase: boolean;
                readonly multiline: boolean;
                lastIndex: number;
                compile: (pattern: string, flags?: string | undefined) => RegExp;
                readonly flags: string;
                readonly sticky: boolean;
                readonly unicode: boolean;
                readonly dotAll: boolean;
                [Symbol.match]: (string: string) => RegExpMatchArray | null;
                [Symbol.replace]: {
                    (string: string, replaceValue: string): string;
                    (string: string, replacer: (substring: string, ...args: any[]) => string): string;
                };
                [Symbol.search]: (string: string) => number;
                [Symbol.split]: (string: string, limit?: number | undefined) => string[];
                [Symbol.matchAll]: (str: string) => IterableIterator<RegExpMatchArray>;
            };
            message: string;
            trigger: string;
            required?: undefined;
        })[];
        key: {
            required: boolean;
            message: string;
        }[];
    }>;
    menu_data: import("vue").Ref<{
        button: any[];
        matchrule: {
            tag_id: string;
            sex: string;
            country: string;
            province: string;
            city: string;
            language: string;
        };
    }>;
    saveMenu: () => Promise<void>;
    emits: (event: "submitData", ...args: any[]) => void;
    submitMenuData: () => Promise<void>;
    preview: () => void;
    isHaveSubMenu: () => boolean | undefined;
    addMainMenu: () => Promise<void>;
    addMSubMenu: () => Promise<void>;
    selectMenu: (item: number) => Promise<void>;
    selectSubMenu: (item: number) => Promise<void>;
    onLeftMove: () => Promise<void>;
    onDelete: () => Promise<void>;
    onDeleteSub: () => Promise<void>;
    onRightMove: () => Promise<void>;
    IconPlus: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                strokeWidth: number;
                strokeLinecap: string;
                strokeLinejoin: string;
                spin: boolean;
            }> & Omit<Readonly<{
                size?: unknown;
                strokeWidth?: unknown;
                strokeLinecap?: unknown;
                strokeLinejoin?: unknown;
                rotate?: unknown;
                spin?: unknown;
            } & {
                strokeWidth: number;
                strokeLinecap: string;
                strokeLinejoin: string;
                spin: boolean;
            } & {
                size?: string | number | undefined;
                rotate?: number | undefined;
            }> & {
                onClick?: ((ev: MouseEvent) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "strokeWidth" | "strokeLinecap" | "strokeLinejoin" | "spin">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: (event: "click", ev: MouseEvent) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<{
                size?: unknown;
                strokeWidth?: unknown;
                strokeLinecap?: unknown;
                strokeLinejoin?: unknown;
                rotate?: unknown;
                spin?: unknown;
            } & {
                strokeWidth: number;
                strokeLinecap: string;
                strokeLinejoin: string;
                spin: boolean;
            } & {
                size?: string | number | undefined;
                rotate?: number | undefined;
            }> & {
                onClick?: ((ev: MouseEvent) => any) | undefined;
            }, {
                cls: import("vue").ComputedRef<(string | {
                    [x: string]: boolean;
                })[]>;
                innerStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                onClick: (ev: MouseEvent) => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (ev: MouseEvent) => true;
            }, string, {
                strokeWidth: number;
                strokeLinecap: string;
                strokeLinejoin: string;
                spin: boolean;
            }> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            size?: unknown;
            strokeWidth?: unknown;
            strokeLinecap?: unknown;
            strokeLinejoin?: unknown;
            rotate?: unknown;
            spin?: unknown;
        } & {
            strokeWidth: number;
            strokeLinecap: string;
            strokeLinejoin: string;
            spin: boolean;
        } & {
            size?: string | number | undefined;
            rotate?: number | undefined;
        }> & {
            onClick?: ((ev: MouseEvent) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
            cls: import("vue").ComputedRef<(string | {
                [x: string]: boolean;
            })[]>;
            innerStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            onClick: (ev: MouseEvent) => void;
        }> & import("vue").ComponentCustomProperties;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<{
        size?: unknown;
        strokeWidth?: unknown;
        strokeLinecap?: unknown;
        strokeLinejoin?: unknown;
        rotate?: unknown;
        spin?: unknown;
    } & {
        strokeWidth: number;
        strokeLinecap: string;
        strokeLinejoin: string;
        spin: boolean;
    } & {
        size?: string | number | undefined;
        rotate?: number | undefined;
    }> & {
        onClick?: ((ev: MouseEvent) => any) | undefined;
    }, {
        cls: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        innerStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        onClick: (ev: MouseEvent) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (ev: MouseEvent) => true;
    }, string, {
        strokeWidth: number;
        strokeLinecap: string;
        strokeLinejoin: string;
        spin: boolean;
    }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: (app: import("vue").App<any>, options?: import("@arco-design/web-vue/es/_utils/types").ArcoIconOptions | undefined) => void;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submitData"[], "submitData", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}> & {
    onSubmitData?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
