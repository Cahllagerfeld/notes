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

export declare type SectionItemConfig = {
	title: string;
	href: string;
	icon: string;
	alt: string;
};

export declare type Frontmatter = {
	title: string;
	tags: string[];
	created: string;
	preview: string;
	previewHtml: string;
	href: string;
};
