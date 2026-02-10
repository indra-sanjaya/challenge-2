import ProductForm from '../components/ProductForm';

export default function EditProduct() {
  return (
    <>
      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="new-product-section">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="display-2">Update Product</h1>
        </div>
        <ProductForm tag={'editPage'} />
        <div className="row">
          <div className="col-12 col-md-6"></div>
        </div>
      </section>
    </>
  );
}
