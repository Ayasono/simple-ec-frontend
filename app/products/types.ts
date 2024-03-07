export interface iProduct {
	name: string
	description: string
	id: number
	image_url: string
	category_id: number
	category_name: string
	subs_price: number
	single_price: number
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
