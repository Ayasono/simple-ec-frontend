type Props = {
	params: {
		id: string;
	};
};

function ProductID({ params }: Props) {

	return (
		<div className='pt-20'>
			Current {`Product ID: ${params.id}`}
		</div>
	);
}

export default ProductID;
