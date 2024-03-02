export interface iProduct {
	name: string
	description: string
	id: number
	image_url: string
}

export interface iProducts {
	products: iProduct[]
}

export interface iCategory {
	categories: {
		id: number
		name: string
	}[]
	msg: string
}
