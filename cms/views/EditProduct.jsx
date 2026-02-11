import ProductForm from '../components/ProductForm';

export default function EditProduct() {
  return (
    <>
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-5 py-5 min-vh-100"
        id="new-product-section"
        style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
        }}
      >
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-4">
          <h1
            className="fw-bold"
            style={{
              fontSize: '2.5rem',
              background: 'linear-gradient(90deg,#059669,#10b981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Update Product
          </h1>
        </div>

        <ProductForm tag={'editPage'} />
        <div className="row">
          <div className="col-12 col-md-6"></div>
        </div>
      </section>
    </>
  );
}
