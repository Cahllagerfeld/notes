export declare type Node = {
	id: string;
	title: string;
	href: string;
};

export declare type Edge = {
	source: string;
	target: string;
};

export declare type Backlink = {
	href: string;
	title: string;
};

export declare type TagItem = {
	href: string;
	title: string;
};

export declare type SearchItem = {
	code: string;
	data?: Record<string, unknown> | undefined;
	map?: string | undefined;
	href: string;
};
