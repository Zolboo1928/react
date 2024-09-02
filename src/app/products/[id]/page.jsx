const Page = async (props)=>{
    const {params} = props
    const {id} = params
    const response =  await fetch(`https://dummyjson.com/products/${id}`);
    const product = await response.json()

    return<>
    <div className="container">
        <div className="texts">
            <h2>{product.title}</h2>
        </div>
    </div>
</>
}
export default Page
